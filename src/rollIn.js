// @flow
import { compose, translate3d, rotate3d } from './utils';
import type { Animation } from './types';

const translateAndRotate = compose(translate3d, rotate3d);

const rollIn: Animation = {
  from: {
    opacity: 0,
    transform: translateAndRotate(
      ['-100%', 0, 0],
      [0, 0, 1, -120]
    )
  },
  to: {
    opacity: 1,
    transform: 'none'
  }
};

export default rollIn;
