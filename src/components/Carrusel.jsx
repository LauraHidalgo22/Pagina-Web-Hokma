import AnimatedSection from './AnimatedSection'
import CardCarrusel from './CardCarrusel'
import CardInformativa from './CardInformativa'
import CardUnidadNegocio from './CardUnidadNegocio'
import { useAppContext } from '../context/AppContext'
import { useState } from 'react'

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
  cardProps = {},
  cardType = "carrusel", // Nuevo: tipo de card a renderizar
  customCardRenderer = null, // Nuevo: renderizador personalizado
  navigationTextColor = "text-white", // Nuevo: color del texto de navegación
  maxWidth = "max-w-1xl" // Nuevo: tamaño máximo del contenedor
}) => {
  // Estado local para carruseles independientes
  const [localCurrentSlide, setLocalCurrentSlide] = useState(0)
  const [localActiveCard, setLocalActiveCard] = useState(null)
  
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
  
  // Si se proporcionan slides personalizados, usar estado local, sino usar contexto
  const currentIndex = slides ? 
    (currentSlideIndex !== null ? currentSlideIndex : localCurrentSlide) : 
    (currentSlideIndex !== null ? currentSlideIndex : currentSlide);
    
  // Asegurar que currentIndex esté dentro del rango válido
  const safeCurrentIndex = Math.max(0, Math.min(currentIndex, slidesData.length - 1));
    
  const handlePrevSlide = slides ? 
    (onPrevSlide || (() => setLocalCurrentSlide(prev => (prev - 1 + slidesData.length) % slidesData.length))) : 
    (onPrevSlide || prevSlide);
    
  const handleNextSlide = slides ? 
    (onNextSlide || (() => setLocalCurrentSlide(prev => (prev + 1) % slidesData.length))) : 
    (onNextSlide || nextSlide);
    
  const handleSlideChange = slides ? 
    (onSlideChange || setLocalCurrentSlide) : 
    (onSlideChange || setCurrentSlide);
    
  const handleCardClick = onCardClick || handleEmployeeCardClick;
  
  const activeCardData = slides ? 
    (activeItem !== null ? activeItem : localActiveCard) : 
    (activeItem !== null ? activeItem : activeCard);
    
  const setActiveCardData = slides ? 
    (setActiveItem || setLocalActiveCard) : 
    (setActiveItem || setActiveCard);

  // Función para renderizar el tipo de card apropiado
  const renderCard = (item, index, slideIndex = 0) => {
    const key = `${slideIndex}-${index}`;
    const globalIndex = slideIndex * (slides?.[0]?.length || 4) + index;

    // Si hay un renderizador personalizado, usarlo
    if (customCardRenderer) {
      return customCardRenderer(item, globalIndex, key);
    }

    // Calcular si es la última card de toda la lista (para cards informativas)
    const totalItems = slidesData.flat().length;
    const isLastCard = globalIndex === totalItems - 1;
    const shouldSpanTwoColumns = cardType === 'informativa' && isLastCard;

    // Renderizar según el tipo de card
    switch (cardType) {
      case 'informativa':
        return (
          <div
            key={key}
            className={shouldSpanTwoColumns ? 'col-span-2' : ''}
          >
            <CardInformativa
              card={item}
              index={globalIndex}
              delay={0.1}
              {...cardProps}
            />
          </div>
        );
        
      case 'unidadNegocio':
        return (
          <CardUnidadNegocio
            key={key}
            {...item}
            {...cardProps}
          />
        );
        
      case 'carrusel':
      default:
        return (
          <CardCarrusel
            key={key}
            item={item}
            index={index}
            activeCard={activeCardData}
            handleCardClick={handleCardClick}
            buttonColor='bg-[#40BAEC]'
            {...cardProps}
            // Pasar la imagen de overlay específica del item si existe
            imageOverlay={item.imageOverlay || cardProps.imageOverlay}
          />
        );
    }
  };

  return (
    <AnimatedSection animation="fadeInRight" delay={0.3} className="w-full relative">
      {/* Container del slider */}
      <div className="overflow-hidden relative">
        {/* Flechas de navegación posicionadas en los extremos */}
        {showNavigation && (
          <>
            {/* Flecha izquierda */}
            <button 
              onClick={handlePrevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
              disabled={slidesData.length <= 1}
            >
              <svg className={`w-6 h-6 ${navigationTextColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Flecha derecha */}
            <button 
              onClick={handleNextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 shadow-lg"
              disabled={slidesData.length <= 1}
            >
              <svg className={`w-6 h-6 ${navigationTextColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${safeCurrentIndex * 100}%)` }}
        >
          {slidesData.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className={`grid ${gridCols} gap-8 ${maxWidth} mx-auto py-4 px-4`}>
                {slide.map((item, index) => 
                  renderCard(item, index, slideIndex)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contador de slides centrado */}
      {showNavigation && (
        <div className="flex justify-center mt-4">
          <div className={`text-center ${navigationTextColor}`}>
            <span className="text-sm opacity-75">
              {safeCurrentIndex + 1} de {slidesData.length}
            </span>
          </div>
        </div>
      )}

      {/* Indicadores de slides */}
      {showIndicators && (
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