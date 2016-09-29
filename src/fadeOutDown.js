// @flow
import { translate3d } from './utils';
import type { Animation } from './types';

const fadeOutDown: Animation = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0,
    transform: translate3d(0, '100%', 0)
  }
};

export default fadeOutDown;
