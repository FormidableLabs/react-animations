// @flow
import { translate3d } from './utils';
import type { Animation } from './types';

const fadeInLeft: Animation = {
  from: {
    opacity: 0,
    transform: translate3d('-100%', 0, 0)
  },
  to: {
    opacity: 1,
    transform: 'none'
  }
};

export default fadeInLeft;
