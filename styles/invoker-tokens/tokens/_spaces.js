/*
  Spaces tokens
*/

let base = 16
let rowHeight = 4

let base = '1rem'
let xxs = '0.125rem'
let xs = '0.25rem'
let s = '0.5rem'
let sm = '0.75rem'
let m = '1rem'
let ml = '1.5rem'
let l = '2rem'
let ll = '3rem'
let xl = '4rem'
let xxl = '6rem'

let huge = '7rem'

export const spaces = {
  base,
  xxs,
  xs,
  s,
  sm,
  m,
  ml,
  l,
  ll,
  xl,
  xxl,
  huge,
}

export const inset = {
  base: `${m} ${m} ${m} ${m}`,
  xxs: `${xxs} ${xxs} ${xxs} ${xxs}`,
  xs: `${xs} ${xs} ${xs} ${xs}`,
  s: `${s} ${s} ${s} ${s}`,
  sm: `${sm} ${sm} ${sm} ${sm}`,
  m: `${m} ${m} ${m} ${m}`,
  ml: `${ml} ${ml} ${ml} ${ml}`,
  l: `${l} ${l} ${l} ${l}`,
  ll: `${ll} ${ll} ${ll} ${ll}`,
  xl: `${xl} ${xl} ${xl} ${xl}`,
},

export const stack = {
  base: `0 0 ${m} 0`,
  xxs: `0 0 ${xxs} 0`,
  xs: `0 0 ${xs} 0`,
  s: `0 0 ${s} 0`,
  sm: `0 0 ${sm} 0`,
  m: `0 0 ${m} 0`,
  ml: `0 0 ${ml} 0`,
  l: `0 0 ${l} 0`,
  ll: `0 0 ${ll} 0`,
  xl: `0 0 ${xl} 0`,
  xxl: `0 0 ${xxl} 0`,
}

export const inline = {
  base: `0 ${m} 0 0`,
  xxs: `0 ${xxs} 0 0`,
  xs: `0 ${xs} 0 0`,
  s: `0 ${s} 0 0`,
  sm: `0 ${sm} 0 0`,
  m: `0 ${m} 0 0`,
  ml: `0 ${ml} 0 0`,
  l: `0 ${l} 0 0`,
  ll: `0 ${ll} 0 0`,
  xl: `0 ${xl} 0 0`,
}

export const vertical =  {
  base: `${sm} 0 ${sm} 0`,
  xs: `${xs} 0 ${xs} 0`,
  s: `${s} 0 ${s} 0`,
  sm: `${sm} 0 ${sm} 0`,
  m: `${m} 0 ${m} 0`,
  ml: `${ml} 0 ${ml} 0`,
  l: `${l} 0 ${l} 0`,
  ll: `${ll} 0 ${ll} 0`,
  xl: `${xl} 0 ${xl} 0`,
  xxl: `${xxl} 0 ${xxl} 0`,
}

export const horizontal = {
  base: `0 ${sm} 0 ${sm}`,
  xs: `0 ${xs} 0 ${xs}`,
  s: `0 ${s} 0 ${s}`,
  sm: `0 ${sm} 0 ${sm}`,
  m: `0 ${m} 0 ${m}`,
  ml: `0 ${ml} 0 ${ml}`,
  l: `0 ${l} 0 ${l}`,
  xl: `0 ${xl} 0 ${xl}`,
}

export const squish = {
  base: `${sm} ${m} ${sm} ${m}`,
  s: `${xs} ${s} ${xs} ${s}`,
  sm: `${s} ${sm} ${s} ${sm}`,
  m: `${sm} ${m} ${sm} ${m}`,
  ml: `${m} ${ml} ${m} ${ml}`,
  l: `${ml} ${l} ${ml} ${l}`,
  xl: `${l} ${xl} ${l} ${xl}`,
}

export const stretch = {
  base: `${m} ${sm} ${m} ${sm}`,
  xs: `${s} ${xs} ${s} ${xs}`,
  s: `${sm} ${s} ${sm} ${s}`,
  sm: `${m} ${sm} ${m} ${sm}`,
  m: `${ml} ${m} ${ml} ${m}`,
  ml: `${l} ${ml} ${l} ${ml}`,
  l: `${xl} ${l} ${xl} ${l}`,
}

