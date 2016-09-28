// @flow
import { translate3d } from './utils';
import type { Animation } from './types';

const slideOutRight: Animation = {
  from: {
    transform: translate3d(0, 0, 0)
  },
  to: {
    visibility: 'hidden',
    transform: translate3d('100%', 0, 0)
  }
};

export default slideOutRight;
