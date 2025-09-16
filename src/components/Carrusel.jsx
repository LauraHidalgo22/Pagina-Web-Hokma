import AnimatedSection from './AnimatedSection'
import CardCarrusel from './CardCarrusel'
import { useAppContext } from '../context/AppContext'

const Carrusel = () => {
  const { 
    activeCard, 
    setActiveCard, 
    currentSlide, 
    setCurrentSlide, 
    teamSlides, 
    nextSlide, 
    prevSlide, 
    handleEmployeeCardClick 
  } = useAppContext();

  return (
    <AnimatedSection animation="fadeInRight" delay={0.3} className="w-full relative">
      {/* Flechas de navegación */}
      <div className="flex justify-between items-center">
        <button 
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
          disabled={teamSlides.length <= 1}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="text-white text-center">
          <span className="text-sm opacity-75" style={{ fontFamily: 'Caviar Dreams' }}>
            {currentSlide + 1} de {teamSlides.length}
          </span>
        </div>
        
        <button 
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
          disabled={teamSlides.length <= 1}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Container del slider */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {teamSlides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-4 gap-8 max-w-1xl mx-auto py-4 px-4">
                {slide.map((member, index) => (
                  <CardCarrusel
                    key={member.id}
                    member={member}
                    index={index}
                    activeCard={activeCard}
                    handleEmployeeCardClick={handleEmployeeCardClick}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de slides */}
      <div className="flex justify-center mt-6 space-x-2">
        {teamSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setActiveCard(null)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </AnimatedSection>
  )
}

export default Carrusel