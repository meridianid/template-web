import styles from './Text.module.scss'
import React from 'react'
import { bool, node, object, string, oneOf, oneOfType } from 'prop-types'
import classnames from 'classnames'
import withTextProps, { sizes } from '../__private/withTextProps'

import stylesPositive from './../Positive/Positive.module.scss'
import stylesCritical from './../Critical/Critical.module.scss'
import stylesHighlight from './../Highlight/Highlight.module.scss'
import stylesInfo from './../Info/Info.module.scss'
import stylesSecondary from './../Secondary/Secondary.module.scss'
import stylesWhite from './../White/White.module.scss'
import stylesWhiteSecondary from './../WhiteSecondary/WhiteSecondary.module.scss'
import stylesStrong from './../Strong/Strong.module.scss'
import stylesRegular from './../Regular/Regular.module.scss'
import stylesLight from './../Light/Light.module.scss'

export const TextNoModifier = ({
  as,
  children,
  className,
  size,

  left,
  right,
  center,
  justify,

  link,
  positive,
  critical,
  secondary,
  highlight,
  info,
  white,
  whiteSecondary,

  strong,
  regular,
  light,

  truncate,
  breakWord,
  ...restProps
}) => {
  const Component = as || 'span'
  return (
    <Component
      className={classnames({
        [styles[size]]: size,
        [styles.truncate]: truncate,
        [styles.breakWord]: breakWord,
        [styles.left]: left,
        [styles.right]: right,
        [styles.center]: center,
        [styles.justify]: justify,
        [className]: className,
      })}
      {...restProps}>
      <span
        className={classnames({
          [styles.link]: link,
          [stylesPositive.root]: positive,
          [stylesCritical.root]: critical,
          [stylesSecondary.root]: secondary,
          [stylesHighlight.root]: highlight,
          [stylesInfo.root]: info,
          [stylesWhite.root]: white,
          [stylesWhiteSecondary.root]: whiteSecondary,
          [stylesStrong.root]: strong,
          [stylesRegular.root]: regular,
          [stylesLight.root]: light,
        })}>
        {children}
      </span>
    </Component>
  )
}

TextNoModifier.displayName = 'Text'

TextNoModifier.defaultProps = {
  size: 'medium',
  truncate: false,
  breakWord: false,
  as: 'span',
}

TextNoModifier.propTypes = {
  /**
   * Additional className for Text component
   */
  className: oneOfType([string, object]),
  /** Boolean indicating whether the Text should truncate with ellipsis when overflow */
  truncate: bool,
  /** Boolean indicating whether the Text should move to new line and break word when overflow */
  breakWord: bool,
  /** Rendering the component as specific html tag */
  as: string,
  /**
   * Size of text
   * You can use it directly as a prop
   */
  size: oneOf(sizes),
  children: node.isRequired,
}

const Text = withTextProps(TextNoModifier)

export default Text
