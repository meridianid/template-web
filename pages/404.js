import React from 'react'

import Text from '../components/Text/Text'

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