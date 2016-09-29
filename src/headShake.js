// @flow
import { compose, translateX, rotateY } from './utils';
import type { Animation, Keyframe } from './types';

const translateAndRotate = compose(translateX, rotateY);

const noShake: Keyframe = {
  transform: translateX(0)
};

const headShake: Animation = {
  '0%': noShake,
  '6.5%': {
    transform: translateAndRotate('-6px', '-9deg')
  },
  '18.5%': {
    transform: translateAndRotate('5px', '7deg')
  },
  '31.5%': {
    transform: translateAndRotate('-3px', '-5deg')
  },
  '43.5%': {
    transform: translateAndRotate('2px', '3deg')
  },
  '50%': noShake
};

export default headShake;
