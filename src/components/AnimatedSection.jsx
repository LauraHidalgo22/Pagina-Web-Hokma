import useScrollAnimation from '../hooks/useScrollAnimation'

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.1 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold })

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
