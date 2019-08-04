import styles from './Text.module.scss'
import React from 'react'
import { bool, node, object, string, oneOf, oneOfType } from 'prop-types'

import classnames from 'classnames'

import stylesPositive from '../Positive/Positive.module.scss'
import stylesCritical from '../Critical/Critical.module.scss'
import stylesSecondary from '../Secondary/Secondary.module.scss'
import stylesHighlight from '../Highlight/Highlight.module.scss'
import stylesInfo from '../Info/Info.module.scss'

import stylesStrong from '../Strong/Strong.module.scss'
import stylesRegular from '../Regular/Regular.module.scss'
import stylesLight from '../Light/Light.module.scss'

import withTextProps, { sizes } from '../__private/withTextProps'

export const NoModifierText = ({
  left,
  right,
  center,
  as,
  bullet,
  children,
  className,
  size,
  raw,
  link,
  positive,
  critical,
  secondary,
  highlight,
  info,
  strong,
  regular,
  light,
  dark,
  baseline,
  truncate,
  breakWord,
  ...restProps
}) => {
  const Component = as || (bullet ? 'li' : 'span')
  return (
    <Component
      {...restProps}
      className={classnames({
        [styles.root]: true,
        [styles[size]]: size,
        [styles.raw]: raw,
        [styles.bullet]: bullet,
        [styles.baseline]: baseline,
        [styles.link]: link,
        [styles.left]: left,
        [styles.right]: right,
        [styles.center]: center,
        [styles.truncate]: truncate,
        [styles.breakWord]: breakWord,
        [className]: className,
      })}
    >
      <span
        className={classnames({
          [stylesPositive.root]: positive,
          [stylesCritical.root]: critical,
          [stylesSecondary.root]: secondary,
          [stylesHighlight.root]: highlight,
          [stylesInfo.root]: info,
          [stylesStrong.root]: strong,
          [stylesRegular.root]: regular,
          [stylesLight.root]: light,
        })}
      >
        {children}
      </span>
    </Component>
  )
}

NoModifierText.displayName = 'Text'

NoModifierText.defaultProps = {
  baseline: true,
  bullet: false,
  size: 'medium',
  truncate: false,
  breakWord: false,
  as: 'span',
}

NoModifierText.propTypes = {
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

const Text = withTextProps(NoModifierText)

export default Text
