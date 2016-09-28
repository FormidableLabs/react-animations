// @flow
import {
  compose,
  perspective,
  rotate3d
} from './utils';
import type { Animation } from './types';

const perspectiveAndRotate = compose(
  perspective,
  rotate3d
);

const flipInY: Animation = {
  from: {
    animationTimingFunction: 'ease-out',
    transform: perspectiveAndRotate('400px', [0, 1, 0, 90]),
    opacity: 0
  },
  '40%': {
    animationTimingFunction: 'ease-in',
    transform: perspectiveAndRotate('400px', [0, 1, 0, -20])
  },
  '60%': {
    transform: perspectiveAndRotate('400px', [0, 1, 0, 10])
  },
  '80%': {
    transform: perspectiveAndRotate('400px', [0, 1, 0, -5])
  },
  to: {
    transform: perspective('400px')
  }
};

export default flipInY;
