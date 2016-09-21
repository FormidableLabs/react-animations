import { rotate3d } from '../utils';

const rotateInUpLeft = {
  from: {
    transformOrigin: 'left bottom',
    transform: rotate3d(0, 0, 1, 45),
    opacity: 0,
  },
  to: {
    transformOrigin: 'left bottom',
    transform: 'none',
    opacity: 1,
  },
};

export default rotateInUpLeft;
