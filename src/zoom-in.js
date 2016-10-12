// @flow
import { scale3d } from './utils';
import type { Animation } from './types';

const zoomIn: Animation = {
  from: {
    opacity: 0,
    transform: scale3d(0.3, 0.3, 0.3)
  },
  '50%': {
    opacity: 1
  }
};

export default zoomIn;
