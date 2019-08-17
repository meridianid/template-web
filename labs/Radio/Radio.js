import styles from './Radio.module.scss'
import React, { useEffect, useState, useContext } from 'react'
import cx from 'classnames'
import Text from '../../components/Text/Text'
import Box from '../../layouts/Box/Box'

const RadioContext = React.createContext()
const RadioGroupContext = React.createContext()

const Radiolabel = ({ id, children, className, isDisabled, ...restProps }) => {
  const context = useContext(RadioContext)

  return (
    <Text
      htmlFor={id || context.id}
      as="label"
      className={cx({
        [styles.label]: true,
        [styles.disabledLabel]: isDisabled || context.isDisabled,
        [className]: className,
      })}
      heading5
      {...restProps}>
      {children}
    </Text>
  )
}

const Radiomark = ({
  className,
  isDisabled,
  isChecked,
  value,
  id,
  name,
  small,
  large,
  onChange,
  onClick,
  ...restProps
}) => {
  const groupContext = useContext(RadioGroupContext)
  const context = useContext(RadioContext)

  return (
    <input
      type="radio"
      id={id || context.id}
      name={name || groupContext.name}
      value={value || context.value}
      disabled={isDisabled || context.isDisabled}
      checked={isChecked || context.isChecked}
      className={cx({
        [styles.normal]: !large && !small,
        [styles.small]: small,
        [styles.large]: large,
        [styles.disabledMark]: isDisabled || context.isDisabled,
        [className]: className,
      })}
      {...restProps}
    />
  )
}

const Radio = ({ children, isDisabled, value, name, isChecked, id, className, ...restProps }) => {
  return (
    <RadioContext.Provider value={{ isDisabled, isChecked, value, id }}>
      <Box className={cx({ [className]: className })} {...restProps}>
        {children}
      </Box>
    </RadioContext.Provider>
  )
}

const RadioGroup = ({ className, id, selected, name, children, ...restProps }) => {
  return (
    <RadioGroupContext.Provider value={{ name, id }}>
      <Box className={cx({ [className]: className })} {...restProps}>
        {children}
      </Box>
    </RadioGroupContext.Provider>
  )
}

export { RadioGroup, Radio, Radiomark, Radiolabel }
