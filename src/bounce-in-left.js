// @flow
import { cubicBezier, translate3d } from './utils';
import type { Keyframe, Animation } from './types';

const timing: Keyframe = {
  animationTimingFunction: cubicBezier(
    0.215,
    0.610,
    0.355,
    1.000
  )
};

const bounceInLeft: Animation = {
  from: timing,
  '0%': {
    opacity: 0,
    transform: translate3d('-3000px', 0, 0)
  },
  '60%': {
    ...timing,
    opacity: 1,
    transform: translate3d('25px', 0, 0)
  },
  '75%': {
    ...timing,
    transform: translate3d('-10px', 0, 0)
  },
  '90%': {
    ...timing,
    transform: translate3d('5px', 0, 0)
  },
  to: {
    ...timing,
    transform: 'none'
  }
};

export default bounceInLeft;
