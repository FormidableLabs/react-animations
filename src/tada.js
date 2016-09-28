// @flow
import { compose, scale3d, rotate3d } from './utils';
import type { Keyframe, Animation } from './types';

const scaleAndRotate = compose(scale3d, rotate3d);

const noScale: Keyframe = {
  transform: scale3d(1, 1, 1)
};

const scaleDownNegativeAngle: Keyframe = {
  transform: scaleAndRotate(
    [0.9, 0.9, 0.9],
    [0, 0, 1, -3]
  )
};

const scaleUpPositiveAngle: Keyframe = {
  transform: scaleAndRotate(
    [1.1, 1.1, 1.1],
    [0, 0, 1, 3]
  )
};

const scaleUpNegativeAngle: Keyframe = {
  transform: scaleAndRotate(
    [1.1, 1.1, 1.1],
    [0, 0, 1, -3]
  )
};

const tada: Animation = {
  from: noScale,
  '10%': scaleDownNegativeAngle,
  '20%': scaleDownNegativeAngle,
  '30%': scaleUpPositiveAngle,
  '40%': scaleUpNegativeAngle,
  '50%': scaleUpPositiveAngle,
  '60%': scaleUpNegativeAngle,
  '70%': scaleUpPositiveAngle,
  '80%': scaleUpNegativeAngle,
  '90%': scaleUpPositiveAngle,
  to: noScale
};

export default tada;
