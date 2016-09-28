// @flow
import { translate3d } from './utils';
import type { Animation } from './types';

const slideOutUp: Animation = {
  from: {
    transform: translate3d(0, 0, 0)
  },
  to: {
    visibility: 'hidden',
    transform: translate3d(0, '-100%', 0)
  }
};

export default slideOutUp;
