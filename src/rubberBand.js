// @flow
import { scale3d } from './utils';
import type { Animation, Keyframe } from './types';

const noRubberBanding: Keyframe = {
  transform: scale3d(1, 1, 1)
};

const rubberBand: Animation = {
  from: noRubberBanding,
  '30%': {
    transform: scale3d(1.25, 0.75, 1)
  },
  '40%': {
    transform: scale3d(0.75, 1.25, 1)
  },
  '50%': {
    transform: scale3d(1.15, 0.85, 1)
  },
  '65%': {
    transform: scale3d(0.95, 1.05, 1)
  },
  '75%': {
    transform: scale3d(1.05, 0.95, 1)
  },
  to: noRubberBanding
};

export default rubberBand;
