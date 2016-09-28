// @flow
import { cubicBezier, scale3d } from './utils';
import type { Keyframe, Animation } from './types';

const timing: Keyframe = {
  animationTimingFunction: cubicBezier(
    0.215,
    0.610,
    0.355,
    1.000
  )
};

const bounceIn: Animation = {
  from: timing,
  '0%': {
    opacity: 0,
    transform: scale3d(0.3, 0.3, 0.3)
  },
  '20%': {
    ...timing,
    transform: scale3d(1.1, 1.1, 1.1)
  },
  '40%': {
    ...timing,
    transform: scale3d(0.9, 0.9, 0.9)
  },
  '60%': {
    ...timing,
    opacity: 1,
    transform: scale3d(1.03, 1.03, 1.03)
  },
  '80%': {
    ...timing,
    transform: scale3d(0.97, 0.97, 0.97)
  },
  to: {
    ...timing,
    opacity: 1,
    transform: scale3d(1, 1, 1)
  }
};

export default bounceIn;
