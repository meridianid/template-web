import styles from './Text.module.scss'
import React from 'react'
import { bool, node, object, string, oneOf, oneOfType } from 'prop-types'
import classnames from 'classnames'
import withTextProps, { sizes } from '../__private/withTextProps'

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
  light,
  lightSecondary,

  strong,
  regular,
  thin,

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
          [styles.positive]: positive,
          [styles.critical]: critical,
          [styles.secondary]: secondary,
          [styles.highlight]: highlight,
          [styles.info]: info,
          [styles.link]: link,
          [styles.strong]: strong,
          [styles.regular]: regular,
          [styles.thin]: thin,
          [styles.light]: light,
          [styles.lightSecondary]: lightSecondary,
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
