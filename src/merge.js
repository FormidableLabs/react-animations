// flow
import type { Animation, Keyframe, CSSValue } from './types';

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
export default function merge(a: Animation, b: Animation): Animation {
  const merged: Animation = {};
  // Copy all values from a
  for (let frame in a) {
    const sourceFrame: Keyframe = a[frame];
    const targetFrame: Keyframe = b[frame];
    const target: Keyframe = merged[frame] || (merged[frame] = {});
    for (let cssValue: string in sourceFrame) {
      if (cssValue === 'transform' && targetFrame && targetFrame[cssValue]) {
        target[cssValue] = `${sourceFrame[cssValue]} ${targetFrame[cssValue]}`
      } else {
        target[cssValue] = sourceFrame[cssValue]
      }
    }
  }
  // Copy all values from b
  for (let frame in b) {
    const sourceFrame: Keyframe = b[frame];
    const target: Keyframe = merged[frame] || (merged[frame] = {});
    for (let cssValue in sourceFrame) {
      target[cssValue] = target[cssValue] || sourceFrame[cssValue];
    };
  }
  return merged;
}
