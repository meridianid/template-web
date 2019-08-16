import styles from './CheckboxAlt.module.scss'
import React, { useContext } from 'react'
import cx from 'classnames'
import Text from '../../components/Text/Text'
import Box from '../../layouts/Box/Box'
import { string, bool, node } from 'prop-types'

const CheckboxContext = React.createContext()

const Checklabel = ({ children, id, className, error, ...restProps }) => {
  let context = useContext(CheckboxContext)
  return (
    <Text
      as="label"
      heading5
      htmlFor={context.id || id}
      className={cx({
        [styles.label]: true,
        [styles.error]: context.error || error,
        [className]: className,
      })}
      {...restProps}>
      {children}
    </Text>
  )
}

const Checkmark = ({
  id,
  name,
  checked,
  disabled,
  small,
  large,
  className,
  value,
  onChange,
  error,
  ...restProps
}) => {
  let context = useContext(CheckboxContext)
  return (
    <input
      id={context.id || id}
      name={context.name || name}
      type="checkbox"
      className={cx({
        [styles.input]: true,
        [styles.normal]: !small && !large,
        [styles.small]: small,
        [styles.large]: large,
        [styles.error]: context.error || error,
      })}
      value={context.value || value}
      checked={context.checked || checked}
      disabled={context.disabled || disabled}
      onChange={context.onChange || onChange}
      {...restProps}
    />
  )
}

const Checkbox = ({
  className,
  name,
  value,
  checked,
  onChange,
  error,
  disabled,
  id,
  children,
  ...restProps
}) => {
  return (
    <CheckboxContext.Provider
      value={{
        id,
        name,
        value,
        error,
        disabled,
        checked,
        onChange,
      }}>
      <Box
        role="group"
        className={cx({
          [className]: className,
        })}
        disabled={disabled}
        {...restProps}>
        {children}
      </Box>
    </CheckboxContext.Provider>
  )
}

Checkbox.displayName = 'Checkbox'

Checkbox.propTypes = {
  id: string.isRequired,
  value: string.isRequired,
  error: bool,
  disabled: bool,
  checked: bool,
}

Checkmark.displayName = 'Checkmark'

Checkmark.propTypes = {
  small: bool,
  large: bool,
}

Checklabel.displayName = 'Checklabel'

Checklabel.propTypes = {
  children: node.isRequired,
}

export { CheckboxContext, Checkbox, Checkmark, Checklabel }
