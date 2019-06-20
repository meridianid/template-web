import styles from './Footer.module.scss';
import React from 'react';
import cx from 'classnames';
import Container from '../../layouts/Container/Container';
import { Wordmark } from '../Brand/Brand';
import Text from '../Text/Text';

const Footer = ({
  className,
  ...restProps
  }) => {
  return (
    <Container>
      <footer className={cx(styles.root, className)} {...restProps}>
        <Wordmark />
        <div className={styles.contacts}>
          <Text medium component="p"><strong>#dowhatyoulove</strong></Text>
        </div>
      </footer>
    </Container>
  )
}

export default Footer
