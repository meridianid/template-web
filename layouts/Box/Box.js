import styles from './Box.module.scss'
import React from 'react'
import classnames from 'classnames'
import { oneOf, node, string } from 'prop-types'

import withDirectionProps from '../../components/__private/withDirectionProps'
import withJustifyProps from '../../components/__private/withJustifyProps'
import withAlignProps from '../../components/__private/withAlignProps'

export const BoxNoModifier = ({
  children,
  as,
  className,

  inline,

  direction,
  justify,
  align,

  ...restProps
}) => {
  let Component = as || 'div'

  return (
    <Component
      className={classnames({
        [styles.root]: !inline,
        [styles.inline]: inline,

        [styles[direction]]: direction,
        [styles[justify]]: justify,
        [styles[align]]: align,

        [className]: className,
      })}
      {...restProps}>
      {children}
    </Component>
  )
}

BoxNoModifier.displayName = 'Box'

BoxNoModifier.defaultProps = {
  direction: 'row',
  justify: 'justifyStart',
  align: 'alignStart',
}

BoxNoModifier.propTypes = {
  children: node.isRequired,
  className: string,
  /**
   * Use directly as props
   */
  direction: oneOf(['row', 'rowReverse', 'column', 'columnReverse']),
  /**
   * Use directly as props
   */
  justify: oneOf([
    'justifyStart',
    'justifyEnd',
    'justifyCenter',
    'justifyAround',
    'justifyBetween',
    'justifyEvenly',
  ]),
  /**
   * Use directly as props
   */
  align: oneOf(['alignStart', 'alignEnd', 'alignCenter', 'alignStretch', 'alignBaseline']),
}

const Box = withDirectionProps(withJustifyProps(withAlignProps(BoxNoModifier)))

export default Box
