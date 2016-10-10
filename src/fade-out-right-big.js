// @flow
import { translate3d } from './utils';
import type { Animation } from './types';

const fadeOutRightBig: Animation = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0,
    transform: translate3d('2000px', 0, 0)
  }
};

export default fadeOutRightBig;
