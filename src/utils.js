// @flow
import type { CSSValue } from './types';


export const compose = (...funcs: Array<Function>) => {
  return (...styleArgs) => {
    const result = funcs.reduce(
      (acc, func, i) => `${acc} ${func(...styleArgs[i])}`,
      ''
    );
    return result.trim();
  }
}


export const cubicBezier = (
  a: number,
  b: number,
  c: number,
  d: number
): string => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

export const translate3d = (
  a: CSSValue,
  b: CSSValue,
  c: CSSValue
): string => `translate3d(${a}, ${b}, ${c})`

export const scale3d = (
  a: number,
  b: number,
  c: number
): string => `scale3d(${a}, ${b}, ${c})`;

export const skewX = (
  deg: number
): string => `skewX(${deg}deg)`;

export const skewY = (
  deg: number
): string => `skewY(${deg}deg)`;

export const skewXY = (
  x: number,
  y: number
): string => `${skewX(x)} ${skewY(y)}`;

export const rotate3d = (
  a: number,
  b: number,
  c: number,
  d: number
): string => `rotate3d(${a}, ${b}, ${c}, ${d}deg)`
