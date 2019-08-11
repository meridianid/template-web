import styles from './Column.module.scss'
import React from 'react'
import cx from 'classnames'

const Column = ({
  as,
  smallPhone = '100%',
  phone = '100%',
  tablet,
  tabletLandscape,
  desktop,
  desktopWide,
  children,
  className,
  ...restProps
}) => {
  let Component = as || 'div'
  let ref = React.createRef()
  React.useEffect(() => {
    if (ref.current) {
      if (smallPhone) {
        typeof smallPhone === 'number'
          ? ref.current.style.setProperty('--column-amount-smallPhone', `${(smallPhone * 100) / 12}%`)
          : ref.current.style.setProperty('--column-amount-smallPhone', smallPhone)
      }
      if (phone) {
        typeof phone === 'number'
          ? ref.current.style.setProperty('--column-amount-phone', `${(phone * 100) / 12}%`)
          : ref.current.style.setProperty('--column-amount-phone', phone)
      }
      if (tablet) {
        typeof tablet === 'number'
          ? ref.current.style.setProperty('--column-amount-tablet', `${(tablet * 100) / 12}%`)
          : ref.current.style.setProperty('--column-amount-tablet', tablet)
      }
      if (tabletLandscape) {
        typeof tabletLandscape === 'number'
          ? ref.current.style.setProperty(
              '--column-amount-tabletLandscape',
              `${(tabletLandscape * 100) / 12}%`
            )
          : ref.current.style.setProperty('--column-amount-tabletLandscape', tabletLandscape)
      }
      if (desktop) {
        typeof desktop === 'number'
          ? ref.current.style.setProperty('--column-amount-desktop', `${(desktop * 100) / 12}%`)
          : ref.current.style.setProperty('--column-amount-desktop', desktop)
      }
      if (desktopWide) {
        typeof desktopWide === 'number'
          ? ref.current.style.setProperty('--column-amount-desktopWide', `${(desktopWide * 100) / 12}%`)
          : ref.current.style.setProperty('--column-amount-desktopWide', desktopWide)
      }
    }
  }, [ref, smallPhone, phone, tablet, tabletLandscape, desktop, desktopWide])
  return (
    <Component
      ref={ref}
      className={cx({
        [styles.smallPhone]: true,
        [styles.phone]: phone,
        [styles.tablet]: tablet,
        [styles.tabletLandscape]: tabletLandscape,
        [styles.desktop]: desktop,
        [styles.desktopWide]: desktopWide,
      })}
      {...restProps}>
      {children}
    </Component>
  )
}

export default Column
