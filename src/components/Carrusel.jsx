import AnimatedSection from './AnimatedSection'
import CardCarrusel from './CardCarrusel'
import { useAppContext } from '../context/AppContext'

const Carrusel = ({
  slides = null,
  currentSlideIndex = null,
  onPrevSlide = null,
  onNextSlide = null,
  onSlideChange = null,
  onCardClick = null,
  activeItem = null,
  setActiveItem = null,
  gridCols = "grid-cols-4",
  showNavigation = true,
  showIndicators = true,
  cardProps = {}
}) => {
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

  // Usar props personalizadas o valores por defecto del contexto
  const slidesData = slides || teamSlides;
  const currentIndex = currentSlideIndex !== null ? currentSlideIndex : currentSlide;
  const handlePrevSlide = onPrevSlide || prevSlide;
  const handleNextSlide = onNextSlide || nextSlide;
  const handleSlideChange = onSlideChange || setCurrentSlide;
  const handleCardClick = onCardClick || handleEmployeeCardClick;
  const activeCardData = activeItem !== null ? activeItem : activeCard;
  const setActiveCardData = setActiveItem || setActiveCard;

  return (
    <AnimatedSection animation="fadeInRight" delay={0.3} className="w-full relative">
      {/* Flechas de navegación */}
      {showNavigation && slidesData.length > 1 && (
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePrevSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
            disabled={slidesData.length <= 1}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="text-white text-center">
            <span className="text-sm opacity-75" style={{ fontFamily: 'Caviar Dreams' }}>
              {currentIndex + 1} de {slidesData.length}
            </span>
          </div>
          
          <button 
            onClick={handleNextSlide}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
            disabled={slidesData.length <= 1}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {/* Container del slider */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slidesData.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className={`grid ${gridCols} gap-8 max-w-1xl mx-auto py-4 px-4`}>
                {slide.map((item, index) => (
                  <CardCarrusel
                    key={item.id}
                    item={item}
                    index={index}
                    activeCard={activeCardData}
                    handleCardClick={handleCardClick}
                    {...cardProps}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores de slides */}
      {showIndicators && slidesData.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handleSlideChange(index)
                setActiveCardData(null)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </AnimatedSection>
  )
}

export default Carrusel