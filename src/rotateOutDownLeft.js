// @flow
import { rotate3d } from './utils';
import type { Animation } from './types';

const rotateOutDownLeft: Animation = {
  from: {
    transformOrigin: 'left bottom',
    opacity: 1
  },
  to: {
    transformOrigin: 'left bottom',
    transform: rotate3d(0, 0, 1, 45),
    opacity: 0
  }
};

export default rotateOutDownLeft;
