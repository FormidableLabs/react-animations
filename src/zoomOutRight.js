// @flow
import {
  compose,
  scale3d,
  scale,
  translate3d
} from './utils';
import type { Animation } from './types';

const scale3dAndTranslate = compose(scale3d, translate3d);
const scaleAndTranslate = compose(scale, translate3d);

const zoomOutRight: Animation = {
  '40%': {
    opacity: 1,
    transform: scale3dAndTranslate(
      [0.475, 0.475, 0.475],
      ['-42px', 0, 0]
    )
  },
  to: {
    opacity: 0,
    transform: scaleAndTranslate(
      0.1,
      ['2000px', 0, 0]
    ),
    transformOrigin: 'right center'
  }
};

export default zoomOutRight;
