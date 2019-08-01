import styles from './Section.module.scss'
import React from 'react'
import cx from 'classnames'
import { string, node } from 'prop-types'

const Section = ({
  children,
  as,
  smallPhone,
  phone,
  tablet,
  tabletLandscape,
  desktop,
  desktopWide,
  className,
  ...restProps
}) => {
  // React.useLayoutEffect(() => {
  //   if(typeof window !== 'undefined') {
  //     console.log('WIDTH', window.innerWidth)
  //   }
  // }, [])

  let Component = as || 'section'
  return (
    <Component
      className={cx({
        [styles.root]: true,
        [styles[smallPhone]]: smallPhone,
        [styles[phone]]: phone,
        [styles[tablet]]: tablet,
        [styles[tabletLandscape]]: tabletLandscape,
        [styles[desktop]]: desktop,
        [styles[desktopWide]]: desktopWide,
        [className]: className,
      })}
      {...restProps}
    >
      {children}
    </Component>
  )
}

Section.propTypes = {
  as: string,
  children: node.isRequired,
}

export default Section
