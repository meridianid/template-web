import styles from './Text.module.scss'
import React from 'react'
import { bool, node, object, string, oneOf, oneOfType } from 'prop-types'
import classnames from 'classnames'
import withTextProps, { sizes } from '../__private/withTextProps'
import withTextModifierProps, { modifiers } from '../__private/withTextModifierProps'

import stylesStrong from './../Strong/Strong.module.scss'
import stylesRegular from './../Regular/Regular.module.scss'
import stylesLight from './../Light/Light.module.scss'

import { root as stylesSecondary } from './../Secondary/Secondary.module.scss'
import { root as stylesPositive } from './../Positive/Positive.module.scss'
import { root as stylesCritical } from './../Critical/Critical.module.scss'
import { root as stylesHighlight } from './../Highlight/Highlight.module.scss'
import { root as stylesInfo } from './../Info/Info.module.scss'
import { root as stylesWhite } from './../White/White.module.scss'
import { root as stylesWhiteSecondary } from './../WhiteSecondary/WhiteSecondary.module.scss'

const textStyleModifier = {
  link: styles.link,
  secondary: stylesSecondary,
  positive: stylesPositive,
  critical: stylesCritical,
  highlight: stylesHighlight,
  info: stylesInfo,
  white: stylesWhite,
  whiteSecondary: stylesWhiteSecondary,
}

export const TextNoModifier = ({
  as,
  children,
  className,
  size,
  modifier,

  align,

  strong,
  regular,
  light,

  truncate,
  breakWord,
  ...restProps
}) => {
  console.log('Text', [size])
  const Component = as || 'span'
  return (
    <Component
      className={classnames({
        [styles[size]]: size,
        [styles.truncate]: truncate,
        [styles.breakWord]: breakWord,
        [styles[align]]: align,
        [className]: className,
      })}
      {...restProps}>
      <span
        className={classnames({
          [textStyleModifier[modifier]]: modifier,
          [stylesLight.root]: light,
          [stylesStrong.root]: strong,
          [stylesRegular.root]: regular,
        })}>
        {children}
      </span>
    </Component>
  )
}

TextNoModifier.displayName = 'Text'

TextNoModifier.defaultProps = {
  as: 'span',
  size: 'medium',
  align: 'left',
  modifier: false,
  truncate: false,
  breakWord: false,
  regular: false,
  light: false,
  strong: false,
}

TextNoModifier.propTypes = {
  /** Rendering the component as specific html tag */
  as: string,
  /**
   * Additional className for Text component
   */
  className: oneOfType([string, object]),
  /** Boolean indicating whether the Text should truncate with ellipsis when overflow */
  truncate: bool,
  /** Boolean indicating whether the Text should move to new line and break word when overflow */
  breakWord: bool,
  /**
   * Alignment of text
   */
  align: oneOf(['left', 'right', 'center', 'justify']),
  /**
   * Size of text
   * You can use it directly as a prop
   */
  size: oneOf(sizes),
  /**
   * Modifiers of text styles
   * You can use it directly as a prop
   */
  modifier: oneOf(modifiers),

  /**
   * Apply designated strong font-weight to text
   */
  strong: bool,
  /**
   * Apply designated regular font-weight to text
   */
  regular: bool,
  /**
   * Apply designated light font-weight to text
   */
  light: bool,
  children: node.isRequired,
}

const Text = withTextProps(withTextModifierProps(TextNoModifier))

export default Text
