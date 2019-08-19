/*
  Colors tokens
*/

/**
 * Brand SEA
 */
const sea = {
  $100: `#37A4A0`,
  $200: `#008380`,
  $300: `#00514F`,
  $10: `rgba(0, 131, 128, .1)`,
  $20: `rgba(0, 131, 128, .2)`,
  $30: `rgba(0, 131, 128, .3)`,
  $40: `rgba(0, 131, 128, .4)`,
  $50: `rgba(0, 131, 128, .5)`,
  $60: `rgba(0, 131, 128, .6)`,
  $70: `rgba(0, 131, 128, .7)`,
  $80: `rgba(0, 131, 128, .8)`,
  $90: `rgba(0, 131, 128, .9)`,
}

/**
 * Brand JEANS
 */
const jeans = {
  $300: `#182385`,
  $200: `#3F46AD`,
  $100: `#5773C2`,
  $90: ` rgba(63, 70, 173, .9)`,
  $80: ` rgba(63, 70, 173, .8)`,
  $70: ` rgba(63, 70, 173, .7)`,
  $60: ` rgba(63, 70, 173, .6)`,
  $50: ` rgba(63, 70, 173, .5)`,
  $40: ` rgba(63, 70, 173, .4)`,
  $30: ` rgba(63, 70, 173, .3)`,
  $20: ` rgba(63, 70, 173, .2)`,
  $10: ` rgba(63, 70, 173, .1)`,
}

/**
 * Brand SCARLET
 */
const scarlet = {
  $300: `#9A202C`,
  $200: `#D43242`,
  $100: `#FD5C63`,
  $90: `rgba(237, 0, 1, .9)`,
  $80: `rgba(237, 0, 1, .8)`,
  $70: `rgba(237, 0, 1, .7)`,
  $60: `rgba(237, 0, 1, .6)`,
  $50: `rgba(237, 0, 1, .5)`,
  $40: `rgba(237, 0, 1, .4)`,
  $30: `rgba(237, 0, 1, .3)`,
  $20: `rgba(237, 0, 1, .2)`,
  $10: `rgba(237, 0, 1, .1)`,
}

/**
 * Brand SAGE
 */
const sage = {
  $100: `#56A472`,
  $200: `#2C864C`,
  $300: `#1B512E`,
  $90: `rgba(44, 134, 76, .9)`,
  $80: `rgba(44, 134, 76, .8)`,
  $70: `rgba(44, 134, 76, .7)`,
  $60: `rgba(44, 134, 76, .6)`,
  $50: `rgba(44, 134, 76, .5)`,
  $40: `rgba(44, 134, 76, .4)`,
  $30: `rgba(44, 134, 76, .3)`,
  $20: `rgba(44, 134, 76, .2)`,
  $10: `rgba(44, 134, 76, .1)`,
}

/**
 * Brand PLUM
 */
const plum = {
  $100: `#A18DAD`,
  $200: `#866D96`,
  $300: `#51425B`,
  $10: `rgba(134, 109, 150, .1)`,
  $20: `rgba(134, 109, 150, .2)`,
  $30: `rgba(134, 109, 150, .3)`,
  $40: `rgba(134, 109, 150, .4)`,
  $50: `rgba(134, 109, 150, .5)`,
  $60: `rgba(134, 109, 150, .6)`,
  $70: `rgba(134, 109, 150, .7)`,
  $80: `rgba(134, 109, 150, .8)`,
  $90: `rgba(134, 109, 150, .9)`,
}

/**
 * Brand SKY
 */
const sky = {
  $100: `#4A9BDA`,
  $200: `#267ABC`,
  $300: `#184C75`,
  $10: `rgba(38, 122, 188, .1)`,
  $20: `rgba(38, 122, 188, .2)`,
  $30: `rgba(38, 122, 188, .3)`,
  $40: `rgba(38, 122, 188, .4)`,
  $50: `rgba(38, 122, 188, .5)`,
  $60: `rgba(38, 122, 188, .6)`,
  $70: `rgba(38, 122, 188, .7)`,
  $80: `rgba(38, 122, 188, .8)`,
  $90: `rgba(38, 122, 188, .9)`,
}

// Dark
export const dark = {
  hex: {
    $90: `#0F0F0F`, // Heading
    $80: `#292929`, // Heading and Body text in text-heavy page such as blog post
    $70: `#484848`, // Body text
    $60: `#767676`, // Caption and subtitle
    $50: `#8F8F8F`,

    $40: `#CCCCCC`,
    $30: `#E0E0E0`,
    $20: `#EBEBEB`,
    $10: `#F5F5F5`,
  },

  alpha: {
    $90: `rgba(0,0,0,.94)`,
    $80: `rgba(0,0,0,.84)`,
    $70: `rgba(0,0,0,.72)`,
    $60: `rgba(0,0,0,.54)`,
    $50: `rgba(0,0,0,.44)`,
    $40: `rgba(0,0,0,.20)`,
    $30: `rgba(0,0,0,.12)`,
    $20: `rgba(0,0,0,.08)`,
    $10: `rgba(0,0,0,.04)`,
  },
}

export const light = {
  alpha: {
    $100: `rgba(255,255,255,1)`,
    $90: `rgba(255,255,255,.84)`,
    $80: `rgba(255,255,255,.71)`,
    $70: `rgba(255,255,255,.54)`,
    $60: `rgba(255,255,255,.40)`,
    $50: `rgba(255,255,255,.20)`,
    $40: `rgba(255,255,255,.16)`,
    $30: `rgba(255,255,255,.10)`,
    $20: `rgba(255,255,255,.06)`,
    $10: `rgba(255,255,255,.02)`,
  },
  hex: {
    $100: `#ffffff`,
    $90: `#dcdcdc`,
    $80: `#c0c0c0`,
    $70: `#9c9c9c`,
  },
}

// Background Colors
// Only use this colors for background

// Main Brand Colors
export const brand = {
  primary: sea,
  secondary: scarlet,
}

/**
 * Tone colors
 */
export const tone = {
  danger: {
    $100: `#FF603F`, // Use for Danger Background or Large text
    $200: `#E42700`, // Default for small text
    $300: `#940D00`, // Hover, active, focus and tap
  },
  warning: {
    $100: `#FFE380`,
    $200: `#FFAB00`,
    $300: `#FF8B00`,
  },
  success: {
    $100: `#57D9A3`, // Use for success background
    $200: `#00875A`, // Default for small text
    $300: `#006644`, // Hover, active, focus and tap
  },
}

/**
 * Background colors
 * Use only for background purpose
 */
export const backgroundColor = {
  primaryWhite: `#FFFFFF`,

  rose: {
    $100: `#FCE7DD`,
    $200: `#E3CDD1`,
    $300: `#D8BAC0`,
  },
  scarlet: {
    $100: `#FFEAEE`,
    $200: `#FFC4CF`,
    $300: `#FFA2B3`,
  },
  sage: {
    $100: `#E8F3EC`,
    $200: `#CAD8B4`,
    $300: `#B7CA9A`,
  },
  sea: {
    $100: `#D7EFEE`,
    $200: `#A9DCD7`,
    $300: `#92D3CC`,
  },
  plum: {
    $100: `#DFD8E3`,
    $200: `#D4D0E3`,
    $300: `#BEB8D5`,
  },
  sky: {
    $100: `#E2EFF9`,
    $200: `#B7D7F0`,
    $300: `#91C2E8`,
  },
  sand: {
    $100: `#F6F1E4`,
    $200: `#E0D0B7`,
    $300: `#D8C4A5`,
  },
  dust: {
    $100: `#F7F7F5`,
    $200: `#F0F0EE`,
    $300: `#B7B7AD`,
  },
  verdant: {
    $100: `#E4FDEB`,
    $200: `#D9FCE3`,
    $300: `#A9EEBC`,
  },
  banana: {
    $100: `#FFFDDD`,
    $200: `#FFFBBB`,
    $300: `#FFFE95`,
  },
}
