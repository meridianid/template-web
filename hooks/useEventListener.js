import { useRef, useEffect } from 'react'

const useEventListener = (type, handler, options) => {
  const handlerRef = useRef(handler)

  useEffect(() => {
    handlerRef.current = handler
  }, [handler])

  useEffect(() => {
    const listener = event => handlerRef.current(event)
    window.addEventListener(type, listener, options)
    return () => {
      window.removeEventListener(type, listener, options)
    }
  }, [type, options])
}

export { useEventListener }
