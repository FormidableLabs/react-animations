// @flow
import { rotate3d, translate3d } from './utils';
import type { Animation, Keyframe } from './types';

const hingeUp: Keyframe = {
  transform: rotate3d(0, 0, 1, 80),
  transformOrigin: 'top left',
  animationTimingFunction: 'ease-in-out'
};

const hingeDown: Keyframe = {
  transform: rotate3d(0, 0, 1, 60),
  transformOrigin: 'top left',
  animationTimingFunction: 'ease-in-out',
  opacity: 1
};

const hinge: Animation = {
  '0%': {
    transformOrigin: 'top left',
    animationTimingFunction: 'ease-in-out'
  },
  '20%': hingeUp,
  '40%': hingeDown,
  '60%': hingeUp,
  '80%': hingeDown,
  to: {
    transform: translate3d(0, '700px', 0),
    opacity: 0
  }
};

export default hinge;
