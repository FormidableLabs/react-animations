// @flow

export const cubicBezier = (a, b, c, d) =>
  `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

export const translate3d = (a, b, c ) =>
  `translate3d(${a}px, ${b}px, ${c}px)`;

export const scale3d = (a, b, c) =>
  `scale3d(${a}, ${b}, ${c})`;

export const skewX = (deg) =>
  `skewX(${deg}deg)`;

export const skewY = (deg) =>
  `skewY(${deg}deg)`;

export const skewXY = (x, y) =>
  `${skewX(x)} ${skewY(y)}`;
