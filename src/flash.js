// @flow
import type { Keyframe, Animation } from './types';

const visible: Keyframe = {
  opacity: 1
};

const invisible: Keyframe = {
  opacity: 0
};

const flash: Animation = {
  from: visible,
  '25%': invisible,
  '50%': visible,
  '75%': invisible,
  to: visible
};

export default flash;
