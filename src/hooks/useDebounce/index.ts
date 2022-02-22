import { useRef } from 'react'

const useDebounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  const timeout = useRef<number>()

  return (...args: T) => {
    window.clearTimeout(timeout.current)
    timeout.current = window.setTimeout(() => {
      callback(...args)
    }, delay)
  }
}

export default useDebounce
