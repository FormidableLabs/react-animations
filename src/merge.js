// flow
import type { Animation, Keyframe, CSSValue } from './types';


type FrameMap = {
  [source: string]: string
};

// The default allowed delta for keyframe distance
const keyframeDistance = 10;

const defaultNormalizedFrames: FrameMap = {
  'from': 'from',
  '0%': 'from',
  'to': 'to',
  '100%': 'to',
}

/**
 * Merge lets you take two Animations and merge them together. It
 * iterates through each animation and merges each keyframe. It
 * special cases the `transform` property and uses string interop.
 * to merge the two transforms.
 *
 * This is *at your own risk* and will not work with animations
 * that are clearly opposites (fadeIn and fadeOut).
 *
 * @example
 * import { merge, tada, flip } from 'react-animations';
 * const tadaFlip = merge(tada, flip);
 */
export default function merge(
  primary: Animation,
  secondary: Animation
) : Animation {
  // A map used to track the normalized frame value in cases where
  // two animations contain frames that appear closely, but not exactly
  // at the same time (e.g., 50% and 52%)
  const normalizedFrames: FrameMap = {};

  // We merge each frame into a new object and return it
  const merged: Animation = {};

  const normalizedPrimary: Animation = normalizeFrames(
    primary,
    normalizedFrames
  );

  const normalizedSecondary: Animation = normalizeFrames(
    secondary,
    normalizedFrames
  );

  // Iterate all normalized frames
  for (let frame in normalizedFrames) {
    const primaryFrame = normalizedPrimary[frame];
    const secondaryFrame = normalizedSecondary[frame];
    // Create a new frame object if it doesn't exist.
    const target = merged[frame] || (merged[frame] = {});

    // If both aniatmions define this frame, merge them carefully
    if (primaryFrame && secondaryFrame) {
      // Walk through all properties in the primary frame
      for (let propertyName in primaryFrame) {
        // Transform is special cased, as we want to combine both
        // transforms when posssible.
        if (propertyName === 'transform') {
          // But we dont need to do anything if theres no other
          // transform to merge.
          if (secondaryFrame[propertyName]) {
            const newTransform = mergeTransforms([
              primaryFrame[propertyName],
              secondaryFrame[propertyName]
            ]);
            // We make the assumption that animations use 'transform: none'
            // to terminate the keyframe. If we're combining two animations
            // that may terminate at separte frames, its safest to just
            // ignore this.
            if (newTransform !== 'none') {
              target[propertyName] = newTransform;
            }
          } else {
            const propertyValue = getDefined(
              primaryFrame[propertyName],
              secondaryFrame[propertyName]
            );
            target[propertyName] = propertyValue;
          }
        }
        // If the property is *not* 'transform' we just write it
        else {
          // Use a typeof check so we don't ignore falsy values like 0.
          const propertyValue = getDefined(
            primaryFrame[propertyName],
            secondaryFrame[propertyName]
          );
          target[propertyName] = propertyValue;
        }
      }
      // Walk through all properties in the secondary frame.
      // We should be able to assume that any property that
      // needed to be merged has already been merged when we
      // walked the primary frame.
      for (let propertyName in secondaryFrame) {
        const propertyValue = secondaryFrame[propertyName];
        // Again, ignore 'transform: none'
        if (propertyName === 'transform' && propertyValue === 'none') {
          continue;
        }
        target[propertyName] = target[propertyName] || propertyValue;
      }
    }
    // Otherwise just pick the frame that is defined.
    else {
      const definedFrame = primaryFrame || secondaryFrame;
      const target = {};
      for (let propertyName in definedFrame) {
        const propertyValue = definedFrame[propertyName];
        // Again, ignore 'transform: none'
        if (propertyName === 'transform' && propertyValue === 'none') {
          continue;
        }
        target[propertyName] = propertyValue;
      }
      // Only define a frame if there are actual styles to apply
      if (Object.keys(target).length) {
        merged[frame] = target;
      }
    }
  };

  return merged;
}


/**
 * Takes an array of strings representing transform values and
 * merges them. Ignores duplicates and 'none'.
 * @private
 * @example
 * mergeTransforms([
 *   'translateX(10px)',
 *   'rotateX(120deg)',
 *   'translateX(10px)',
 *   'none',
 * ])
 * // -> 'translateX(10px) rotateX(120deg)'
 *
 */
function mergeTransforms(transforms: Array<string>): string {
  const filtered = transforms.filter((transform, i) =>
    transform !== 'none' && transforms.indexOf(transform) == i
  );
  return filtered.join(' ');
}

/**
 * Returns whichever value is actually defined
 * @private
 */
function getDefined(primary: CSSValue, secondary: CSSValue): CSSValue {
  return typeof primary !== 'undefined' ? primary : secondary
}

/**
 * Takes a source animation and the current cache, populating the
 * cache with the normalized keyframes and returning a copy of the
 * source animation with the normalized keyframes as well.
 *
 * It uses keyframeDistance to determine how much it should normalize
 * frames.
 * @private
 */
function normalizeFrames(source: Animation, cache: FrameMap): Animation {
  const normalized: Animation = {};
  for (let frame in source) {
    const normalizedFrame = defaultNormalizedFrames[frame] || (Math.round(
      parseFloat(frame) / keyframeDistance
    ) * keyframeDistance) + '%';
    normalized[normalizedFrame] = source[frame];
    cache[normalizedFrame] = normalizedFrame;
  }
  return normalized;
}
