import styles from './NotFound.module.scss';
import React from 'react';
import cx from 'classnames';

const NotFound = ({
  className,
  ...restProps
  }) => {
  return (
    <div>
      <Text display3>404 Pages Not Found</Text>
    </div>
  )
}

export default NotFound