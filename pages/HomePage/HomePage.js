import styles from './HomePage.module.scss'
import React from 'react'
import cx from 'classnames'
import Text from '../../components/Text/Text'

const HomePage = ({
  className,
  ...restProps
  }) => {
  return (
    <div>
      <Text display3>Homepage</Text>
    </div>
  )
}

export default HomePage