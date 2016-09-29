// @flow
import { translate3d, cubicBezier } from './utils';
import type { Animation, Keyframe } from './types';

const base: Keyframe = {
  animationTimingFunction: cubicBezier(
    0.2125,
    0.610,
    0.355,
    1.000
  ),
  transform: translate3d(0, 0, 0)
};

const bounce: Animation = {
  '0%': base,
  '20%': base,
  '40%': {
    animationTimingFunction: cubicBezier(
      0.755,
      0.050,
      0.855,
      0.060
    ),
    transform: translate3d(0, '-30px', 0)
  },
  '43%': {
    animationTimingFunction: cubicBezier(
      0.755,
      0.050,
      0.855,
      0.060
    ),
    transform: translate3d(0, '-30px', 0)
  },
  '53%': base,
  '70%': {
    animationTimingFunction: cubicBezier(
      0.755,
      0.050,
      0.855,
      0.060
    ),
    transform: translate3d(0, '-50px', 0)
  },
  '80%': base,
  '90%': {
    transform: translate3d(0, '-4px', 0)
  },
  '100%': base
};

export default bounce;
