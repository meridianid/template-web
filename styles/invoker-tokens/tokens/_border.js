import { brand, dark } from './_colors'

/*
  Border tokens
*/
export const style = {
  solid: {
    $1: `1px solid`,
    $2: `2px solid`,
    $3: `3px solid`,
  },
  dashed: {
    $1: `1px dashed`,
    $2: `2px dashed`,
    $3: `3px dashed`,
  },
}

export const color = {
  base: dark.alpha.$20,
  primary: brand.primary.$200,
  secondary: $brand.secondary.$200,
}

export const border = {
  solid: {
    base: {
      $1: `${style.solid.$1} ${color.base}`,
      $2: `${style.solid.$2} ${color.base}`,
      $3: `${style.solid.$3} ${color.base}`,
    },
    primary: {
      $1: `${style.solid.$1} ${color.primary}`,
      $2: `${style.solid.$2} ${color.primary}`,
      $3: `${style.solid.$3} ${color.primary}`,
    },
    secondary: {
      $1: `${style.solid.$1} ${color.secondary}`,
      $2: `${style.solid.$2} ${color.secondary}`,
      $3: `${style.solid.$3} ${color.secondary}`,
    },
  },
  dashed: {
    base: {
      $1: `${style.dashed.$1} ${color.base}`,
      $2: `${style.dashed.$2} ${color.base}`,
      $3: `${style.dashed.$3} ${color.base}`,
    },
    primary: {
      $1: `${style.dashed.$1} ${color.primary}`,
      $2: `${style.dashed.$2} ${color.primary}`,
      $3: `${style.dashed.$3} ${color.primary}`,
    },
    secondary: {
      $1: `${style.dashed.$1} ${color.secondary}`,
      $2: `${style.dashed.$2} ${color.secondary}`,
      $3: `${style.dashed.$3} ${color.secondary}`,
    },
  },
}
