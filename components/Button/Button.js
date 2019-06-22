import styles from './Button.module.scss'
import React from 'react'
import classnames from 'classnames'
import { bool, node, object, string, oneOf, oneOfType } from 'prop-types'

import withTypeProps from '../__private/withTypeProps'
import withSizeProps from '../__private/withSizeProps'

const Button = ({
  as,
  type,
  size,
  icon,
  stretch,
  onClick,
  className,
  disabled,
  children,
  ...restProps
}) => {

  const handleClick = e => {
    e.preventDefault()
    if (onClick) {
      onClick(e)
    }
  }

  let Component = as === 'link' ? 'a' : 'button'
  let componentType = as === 'link' ? null : as

  return (
    <Component
      type={componentType}
      onClick={handleClick}
      disabled={disabled}
      className={classnames({
        [styles.root]: true,
        [styles[type]]: type,
        [styles[size]]: size,
        [styles.disabled]: disabled,
        [styles.stretch]: stretch,
        [className]: className
      })}
      {...restProps}
    >
      <span className={styles.children}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </span>
    </Component>
  )
}

Button.displayName = 'Button'

Button.defaultProps = {
  disabled: false,
  as: 'button',
  type: 'normal',
  size: 'regular',
}

Button.propTypes = {
  className: oneOfType([string, object]),
  as: oneOf(['button', 'submit', 'link']),
  disabled: bool,
  type: string,
  size: string,
  children: node.isRequired
}

export default withSizeProps(withTypeProps(Button))
