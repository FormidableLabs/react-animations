// @flow
export type Keyframe = {
  [property: string]: string | number,
}

export type Animation = {
  [keyframe: string]: Keyframe,
}
