// @flow
import type { CSSValue } from './types';

/**
 * Composes a variable number of CSS helper functions.
 * Returns a function that accepts all the original arguments
 * of the functions it composed. If the original function
 * accepted multiple arguments, they must be passed as
 * an array.
 * @example
 * const translateXandRotateY = compose(translateX, rotateY);
 * const cssValue = translateXandRotateY('-5px', '30deg');
 */
export const compose = (...funcs: Array<Function>) => {
  return (...styleArgs: Array<CSSValue | Array<CSSValue>>) => {
    const result = funcs.reduce((acc, func, i) => {
      const arg = styleArgs[i];
      return `${acc} ${Array.isArray(arg) ? func(...arg) : func(arg)}`;
    }, '');
    return result.trim();
  };
};


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
): string => `translate3d(${a}, ${b}, ${c})`;

export const translateX = (
  a: CSSValue
): string => `translateX(${a})`;

export const scale3d = (
  a: number,
  b: number,
  c: number
): string => `scale3d(${a}, ${b}, ${c})`;

export const scale = (
  a: number
) => `scale(${a})`;

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

export const rotateY = (
  a: CSSValue
) => `rotateY(${a})`;

export const rotate3d = (
  a: number,
  b: number,
  c: number,
  d: number
): string => `rotate3d(${a}, ${b}, ${c}, ${d}deg)`;

export const perspective = (
  a: CSSValue
): string => `perspective(${a})`;
