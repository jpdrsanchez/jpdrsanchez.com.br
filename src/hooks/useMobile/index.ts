import useDebounce from 'hooks/useDebounce'
import { useEffect, useState } from 'react'

const useMobile = (mobileSize: number) => {
  const [isMobile, setIsMobile] = useState(false)

  const observerCallback: ResizeObserverCallback = ([entry]) => {
    const { contentRect } = entry
    if (contentRect.width <= mobileSize) setIsMobile(true)
    else setIsMobile(false)
  }

  const debouncedObserver = useDebounce(observerCallback, 300)

  useEffect(() => {
    const observer = new ResizeObserver(debouncedObserver)

    observer.observe(document.body)

    return () => {
      observer.disconnect()
    }
  }, [debouncedObserver])

  return isMobile
}

export default useMobile
