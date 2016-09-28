// @flow
import { skewXY } from './utils';
import type { Keyframe, Animation } from './types';

const noSkew: Keyframe = {
  transform: 'none'
};

const jello: Animation = {
  from: noSkew,
  '11.1%': noSkew,
  '22.2%': {
    transform: skewXY(-12.5, -12.5)
  },
  '33.3': {
    transform: skewXY(6.25, 6.25)
  },
  '44.4': {
    transform: skewXY(-3.125, -3.125)
  },
  '55.5': {
    transform: skewXY(1.5625, 1.5625)
  },
  '66.6': {
    transform: skewXY(-0.78125, -0.78125)
  },
  '77.7': {
    transform: skewXY(0.390625, 0.390625)
  },
  '88.8': {
    transform: skewXY(-0.1953125, -0.1953125)
  },
  to: noSkew
};

export default jello;
