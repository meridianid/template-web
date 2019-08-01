import styles from './Container.module.scss'
import React from 'react'
import classnames from 'classnames'
import { string, bool, node } from 'prop-types'

const Container = ({
  as,
  children,
  className,
  narrow,
  bleed,
  post,
  fixLeft,
  fixRight,
  ...restProps
}) => {
  let Component = as || 'div'
  let defaultStyle = !narrow && !bleed && !post && !fixLeft && !fixRight

  return (
    <Component
      {...restProps}
      className={classnames({
        [styles.normal]: defaultStyle,
        [styles.narrow]: narrow,
        [styles.bleed]: bleed,
        [styles.post]: post,
        [styles.fixLeft]: fixLeft,
        [styles.fixRight]: fixRight,
        [className]: className,
      })}
    >
      {children}
    </Component>
  )
}

Container.propTypes = {
  as: string,
  children: node.isRequired,
  narrow: bool,
  bleed: bool,
  post: bool,
  fixLeft: bool,
  fixRight: bool,
}

export default Container
