import styles from './CheckLabel.module.scss'
import React, { useContext } from 'react'
import cx from 'classnames'

import Text from '../../components/Text/Text'
import { CheckboxContext } from '../CheckboxAlt/CheckboxAlt'

const CheckLabel = ({ label, className, onClick, ...restProps }) => {
  const checkContext = useContext(CheckboxContext)

  const handleClick = e => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Text
      htmlFor={`checkbox__${checkContext.name}${checkContext.id}`}
      className={cx({
        [styles.root]: true,
        [className]: className,
        [styles.disabled]: checkContext.isDisabled,
      })}
      onClick={handleClick}
      heading5
      as="label"
      {...restProps}
      onMouseOver={checkContext.onHover}
      onMouseLeave={checkContext.onLeave}>
      {label}
    </Text>
  )
}

export default CheckLabel
