// flow
import type { Animation, Keyframe, CSSValue } from './types';

// Keyframes that bound an animation
const boundryFrmes: { [frame: string]: boolean } = {
  'from': true,
  '0%': true,
  'to': true,
  '100%': true,
}

// The default allowed delta for keyframe distance
const keyframeDistance = 10;

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
 * import { merge, tada, flip } from 'react-effects';
 * const tadaFlip = merge(tada, flip);
 */
export default function merge(primary, secondary) {
  // A map used to track the normalized frame value in cases where
  // two animations contain frames that appear closely, but not exactly
  // at the same time (e.g., 50% and 52%)
  const normalizedFrames = {
    'from': 'from',
    '0%': 'from',
    'to': 'to',
    '100%': 'to',
  };


  // If we are dealing with an animation that appears to be
  // a "boundry-specific" animation, meaning it only specifies
  // a start and end position, we want to persist the start transform
  // throughout.
  let boundryTransform = null;
  // We merge each frame into a new object and return it
  const merged = {};
  /* primary frame should control directional movement */
  const primaryFrames = Object.keys(primary);
  /* secondary frames should control orientation/size */
  const secondaryFrames = Object.keys(secondary);

  const normalizedPrimary = cacheNormalizedFrames(
    primary,
    normalizedFrames
  );

  const normalizedSecondary = cacheNormalizedFrames(
    secondary,
    normalizedFrames
  );

  // We parse a boundry transform from either the primary
  // or secondary animation, if either look to be bounded.
  // Primary animation is given precedence.
  if (secondaryFrames.length <= 2) {
    boundryTransform = parseBoundryTransform(
      normalizedSecondary
    );
  } else if (primaryFrames.length <= 2) {
    boundryTransform = parseBoundryTransform(
      primaryFrames
    );
  }

  // Iterate through all the cached, normalized animation frames.
  for (let frame in normalizedFrames) {
    const primaryFrame = normalizedPrimary[frame];
    const secondaryFrame = normalizedSecondary[frame];
    const target = merged[frame] || (merged[frame] = {});

    for (let propertyName in primaryFrame) {
      if (propertyName === 'transform' && secondaryFrame) {
        // TODO we should only apply the boundry transform when we
        // are in between boundry frames, not in them. We need to track
        // what the actual start and end frame are.
        target[propertyName] = mergeTransforms([
          primaryFrame[propertyName],
          secondaryFrame[propertyName],
          boundryTransform
        ]);
      } else {
        target[propertyName] = primaryFrame[propertyName];
      }
    }

    for (let propertyName in secondaryFrame) {
      if (!target[propertyName]) {
        target[propertyName] = secondaryFrame[propertyName];
      }
    }
  }
  return merged;
}

function mergeTransforms(transforms) {
  transforms = transforms.filter(
    transform => transform && transform !== 'none'
  )
  transforms = transforms.join(' ');
  return transforms.trim();
}


function parseBoundryTransform(animation) {
  return animation.from && animation.from.transform;
}


function cacheNormalizedFrames(source, cache) {
  const normalized = {};
  for (let frame in source) {
    const normalizedFrame = cache[frame] || (Math.round(
      parseFloat(frame) / keyframeDistance
    ) * keyframeDistance) + '%';
    normalized[normalizedFrame] = source[frame];
    cache[normalizedFrame] = normalizedFrame;
  }
  return normalized;
}
