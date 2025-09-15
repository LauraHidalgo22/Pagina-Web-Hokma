import { useRef, useEffect } from 'react'
import useScrollAnimationWithContext from '../hooks/useScrollAnimationWithContext'

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  elementId // Nuevo prop para ID único, si no se proporciona se genera automáticamente
}) => {
  const idRef = useRef(elementId || `animated-section-${Math.random().toString(36).substr(2, 9)}`)
  const [ref, isVisible] = useScrollAnimationWithContext(idRef.current, { threshold })

  const animations = {
    fadeInUp: {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0'
    },
    fadeInLeft: {
      initial: 'opacity-0 -translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    fadeInRight: {
      initial: 'opacity-0 translate-x-8',
      animate: 'opacity-100 translate-x-0'
    },
    fadeIn: {
      initial: 'opacity-0',
      animate: 'opacity-100'
    },
    scaleIn: {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100'
    }
  }

  const selectedAnimation = animations[animation] || animations.fadeInUp

  return (
    <div
      ref={ref}
      className={`transform transition-all ease-out ${
        isVisible ? selectedAnimation.animate : selectedAnimation.initial
      } ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
