// @flow
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
  '100%': 'to'
};

/**
 * Takes an array of strings representing transform values and
 * merges them. Ignores duplicates and 'none'.
 * @param {Array} transforms Array<string>
 * @returns {String} merged
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
const mergeTransforms = function (transforms: Array<CSSValue>): string {
  const filtered = transforms.filter((transform, i) =>
    transform !== 'none' && transforms.indexOf(transform) === i
  );
  return filtered.join(' ');
};

/**
 * Returns whichever value is actually defined
 * @param {String|Number} primary CSSValue
 * @param {String|Number} secondary CSSValue
 * @returns {String|Number} defined CSSValue
 * @private
 */
const getDefined = function getDefined(
  primary: CSSValue,
  secondary: CSSValue
): CSSValue {
  return typeof primary !== 'undefined' ? primary : secondary;
};

/**
 * Takes a source animation and the current cache, populating the
 * cache with the normalized keyframes and returning a copy of the
 * source animation with the normalized keyframes as well.
 *
 * It uses keyframeDistance to determine how much it should normalize
 * frames.
 * @param {Object} source Animation
 * @param {Object} cache FrameMap
 * @returns {Object} Animation
 * @private
 */
const normalizeFrames = function normalizeFrames(
  source: Animation,
  cache: FrameMap
): Animation {
  const normalized: Animation = {};
  for (const frame in source) {
    const normalizedFrame = defaultNormalizedFrames[frame] || `${Math.round(
      parseFloat(frame) / keyframeDistance
    ) * keyframeDistance }%`;
    normalized[normalizedFrame] = source[frame];
    cache[normalizedFrame] = normalizedFrame;
  }
  return normalized;
};

const mergeFrames = function mergeFrames(
  primaryFrame: Keyframe,
  secondaryFrame: Keyframe,
  target: Keyframe,
) {
  // Walk through all properties in the primary frame
  for (const propertyName in primaryFrame) {
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
    } else {
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
  for (const propertyName in secondaryFrame) {
    const propertyValue = secondaryFrame[propertyName];
    // Again, ignore 'transform: none'
    if (propertyName === 'transform' && propertyValue === 'none') {
      continue;
    }
    target[propertyName] = target[propertyName] || propertyValue;
  }
};

const populateDefinedFrame = function populateDefinedFrame(
  primaryFrame: Keyframe,
  secondaryFrame: Keyframe,
): null | Keyframe {
  const definedFrame = primaryFrame || secondaryFrame;
  const target = {};
  for (const propertyName in definedFrame) {
    const propertyValue = definedFrame[propertyName];
    // Again, ignore 'transform: none'
    if (propertyName === 'transform' && propertyValue === 'none') {
      continue;
    }
    target[propertyName] = propertyValue;
  }
  // Only define a frame if there are actual styles to apply
  if (Object.keys(target).length) {
    return target;
  }
  return null;
};


/**
 * Merge lets you take two Animations and merge them together. It
 * iterates through each animation and merges each keyframe. It
 * special cases the `transform` property and uses string interop.
 * to merge the two transforms.
 *
 * This is *at your own risk* and will not work with animations
 * that are clearly opposites (fadeIn and fadeOut).
 *
 * @param {Object} primary Animation
 * @param {Object} secondary Animation
 * @returns {Object} merged Animation
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
  for (const frame in normalizedFrames) {
    const primaryFrame = normalizedPrimary[frame];
    const secondaryFrame = normalizedSecondary[frame];
    // Create a new frame object if it doesn't exist.
    const target = merged[frame] || (merged[frame] = {});

    // If both aniatmions define this frame, merge them carefully
    if (primaryFrame && secondaryFrame) {
      mergeFrames(primaryFrame, secondaryFrame, target);
    } else {
      // Otherwise find the defined frime and populate all properties\
      // except for "transform" when the value is none.
      const keyframe = populateDefinedFrame(
        primaryFrame,
        secondaryFrame
      );
      if (keyframe) {
        merged[frame] = keyframe;
      }
    }
  }
  return merged;
}
