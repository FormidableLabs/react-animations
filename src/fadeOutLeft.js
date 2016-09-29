// @flow
import { translate3d } from './utils';
import type { Animation } from './types';

const fadeOutLeft: Animation = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0,
    transform: translate3d('-100%', 0, 0)
  }
};

export default fadeOutLeft;
