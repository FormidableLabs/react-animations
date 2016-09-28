// @flow
import { translate3d } from './utils';
import type { Animation } from './types';

const slideInLeft: Animation = {
  from: {
    transform: translate3d('-100%', 0, 0),
    visibility: 'visible'
  },
  to: {
    transform: translate3d(0, 0, 0)
  }
};

export default slideInLeft;
