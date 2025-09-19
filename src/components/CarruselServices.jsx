import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import CardSinContenido from './CardSinContenido'

const CarruselServices = ({ services = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Dividir los servicios en slides de 6 cards cada uno (patrón de 2+1+1 | 1+1+2)
  const cardsPerSlide = 6
  const slides = []
  
  for (let i = 0; i < services.length; i += cardsPerSlide) {
    slides.push(services.slice(i, i + cardsPerSlide))
  }
  
  // Funciones de navegación
  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)
  }
  
  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
  }
  
  // Si no hay suficientes servicios para hacer slides, mostrar todos
  if (slides.length <= 1) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
        {services.map((service, index) => {
          // Calculamos la posición en el patrón de 6 cards
          const patternPosition = index % 6
          
          // Definimos las características según la posición en el patrón
          let colSpan = 1
          let isLarge = false
          
          // Patrón: [2 col] [1 col] [1 col] | [1 col] [1 col] [2 col]
          if (patternPosition === 0 || patternPosition === 5) {
            colSpan = 2
            isLarge = true
          }
          
          return (
            <CardSinContenido
              key={index}
              service={service}
              index={index}
              colSpan={colSpan}
              isLarge={isLarge}
              delay={0.2}
            />
          )
        })}
      </div>
    )
  }
  
  return (
    <AnimatedSection animation="fadeInUp" delay={0.3} className="w-full relative">
      {/* Container del slider */}
      <div className="overflow-hidden relative">
        {/* Flecha izquierda */}
        <button 
          onClick={handlePrevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
          disabled={slides.length <= 1}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {/* Flecha derecha */}
        <button 
          onClick={handleNextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
          disabled={slides.length <= 1}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slides container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr px-20">
                {slide.map((service, index) => {
                  // Calculamos la posición en el patrón de 6 cards
                  const patternPosition = index % 6
                  
                  // Definimos las características según la posición en el patrón
                  let colSpan = 1
                  let isLarge = false
                  
                  // Patrón: [2 col] [1 col] [1 col] | [1 col] [1 col] [2 col]
                  if (patternPosition === 0 || patternPosition === 5) {
                    colSpan = 2
                    isLarge = true
                  }
                  
                  return (
                    <CardSinContenido
                      key={`${slideIndex}-${index}`}
                      service={service}
                      index={slideIndex * cardsPerSlide + index}
                      colSpan={colSpan}
                      isLarge={isLarge}
                      delay={0.2}
                    />
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default CarruselServices