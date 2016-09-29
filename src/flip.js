// @flow
import {
  compose,
  perspective,
  rotate3d,
  translate3d,
  scale3d
} from './utils';
import type { Animation } from './types';

const perspectiveAndRotate = compose(
  perspective,
  rotate3d
);

const perspectiveAndScale = compose(
  perspective,
  scale3d
);

const perspectiveTranslateRotate = compose(
  perspective,
  translate3d,
  rotate3d
);

const flip: Animation = {
  from: {
    animationTimingFunction: 'ease-out',
    transform: perspectiveAndRotate('400px', [0, 1, 0, -360])
  },
  '40%': {
    animationTimingFunction: 'ease-out',
    transform: perspectiveTranslateRotate(
      '400px',
      [0, 0, '150px'],
      [0, 1, 0, -190]
    )
  },
  '50%': {
    animationTimingFunction: 'ease-in',
    transform: perspectiveTranslateRotate(
      '400px',
      [0, 0, '150px'],
      [0, 1, 0, -170]
    )
  },
  '80%': {
    animationTimingFunction: 'ease-in',
    transform: perspectiveAndScale(
      '400px',
      [0.95, 0.95, 0.95]
    )
  },
  to: {
    animationTimingFunction: 'ease-in',
    transform: perspective('400px')
  }
};

export default flip;
