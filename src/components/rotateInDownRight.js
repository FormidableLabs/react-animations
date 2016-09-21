import { rotate3d } from '../utils';

const rotateInDownRight = {
  from: {
    transformOrigin: 'right bottom',
    transform: rotate3d(0, 0, 1, 45),
    opacity: 0,
  },
  to: {
    transformOrigin: 'right bottom',
    transform: 'none',
    opacity: 1,
  },
};

export default rotateInDownRight;
