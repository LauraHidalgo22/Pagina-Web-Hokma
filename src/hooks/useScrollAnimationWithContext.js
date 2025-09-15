import { useEffect, useRef } from 'react'
import { useAppContext } from '../context/AppContext'

export const useScrollAnimationWithContext = (elementId, options = {}) => {
  const { isElementVisible, setElementVisible, setElementHidden } = useAppContext()
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setElementVisible(elementId)
          // Una vez visible, podemos dejar de observar
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setElementHidden(elementId)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [elementId, options.threshold, options.rootMargin, options.once, setElementVisible, setElementHidden])

  return [ref, isElementVisible(elementId)]
}

export default useScrollAnimationWithContext
