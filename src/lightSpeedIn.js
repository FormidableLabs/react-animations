// @flow
import { compose, translate3d, skewX } from './utils';
import type { Keyframe, Animation } from './types';


const translateAndSkew = compose(
  translate3d,
  skewX
);

const easeIn: Keyframe = {
  animationTimingFunction: 'ease-out'
};

const lightSpeedIn: Animation = {
  from: {
    ...easeIn,
    opacity: 0,
    transform: translateAndSkew(
      ['100%', 0, 0],
      -30
    )
  },
  '60%': {
    ...easeIn,
    opacity: 1,
    transform: skewX(20)
  },
  '80%': {
    ...easeIn,
    opacity: 1,
    transform: skewX(-5)
  },
  to: {
    ...easeIn,
    transform: 'none',
    opacity: 1
  }
};

export default lightSpeedIn;
