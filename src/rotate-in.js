// @flow
import { rotate3d } from './utils';
import type { Animation } from './types';

const rotateIn: Animation = {
  from: {
    transformOrigin: 'center',
    transform: rotate3d(0, 0, 1, -200),
    opacity: 0
  },
  to: {
    transformOrigin: 'center',
    transform: 'none',
    opacity: 1
  }
};

export default rotateIn;
