import React, { useState, useEffect, useRef } from 'react'
import { isClient } from './../utils/isClient'

const DRAF = callback => setTimeout(callback, 35)

export const useSize = (element, { width = Infinity, height = Infinity } = {}) => {
  if (!isClient) {
    return [typeof element === 'function' ? element({ width, height }) : element, { width, height }]
  }

  const [state, setState] = useState({ width, height })

  if (typeof element === 'function') {
    element = element(state)
  }

  const style = element.props.style || {}
  const ref = useRef(null)
  let window = null
  const setSize = () => {
    const iframe = ref.current
    const size = iframe
      ? {
          width: iframe.offsetWidth,
          height: iframe.offsetHeight,
        }
      : { width, height }

    setState(size)
  }
  const onWindow = windowToListenOn => {
    windowToListenOn.addEventListener('resize', setSize)
    DRAF(setSize)
  }

  useEffect(() => {
    const iframe = ref.current

    if (!iframe) {
      // iframe will be undefined if component is already unmounted
      return
    }

    if (iframe.contentWindow) {
      window = iframe.contentWindow
      onWindow(window)
    } else {
      const onLoad = () => {
        iframe.removeEventListener('load', onLoad)
        window = iframe.contentWindow
        onWindow(window)
      }

      iframe.addEventListener('load', onLoad)
    }

    return () => {
      if (window) {
        window.removeEventListener('resize', setSize)
      }
    }
  }, [])

  style.position = 'relative'

  const sized = React.cloneElement(
    element,
    { style },
    ...[
      React.createElement('iframe', {
        ref,
        style: {
          background: 'transparent',
          border: 'none',
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
          zIndex: -1,
        },
      }),
      ...React.Children.toArray(element.props.children),
    ]
  )

  return [sized, state]
}
