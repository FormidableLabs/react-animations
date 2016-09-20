// @flow

export type CSSValue = string | number

export type Keyframe = {
  [property: string]: CSSValue,
}

export type Animation = {
  [keyframe: string]: Keyframe,
}
