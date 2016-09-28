// @flow
import { rotate3d } from './utils';
import type { Animation } from './types';

const rotateInDownRight: Animation = {
  from: {
    transformOrigin: 'right bottom',
    transform: rotate3d(0, 0, 1, 45),
    opacity: 0
  },
  to: {
    transformOrigin: 'right bottom',
    transform: 'none',
    opacity: 1
  }
};

export default rotateInDownRight;
