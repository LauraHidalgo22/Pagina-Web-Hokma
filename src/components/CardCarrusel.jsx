import AnimatedSection from './AnimatedSection'
import IconoHokma from './IconoHokma'

const CardCarrusel = ({ 
  item, 
  index, 
  activeCard, 
  handleCardClick,
  imageAspect = "aspect-[3/4]",
  showOverlay = true,
  buttonColor = "bg-blue-500 hover:bg-blue-400",
  objectFit = "object-cover",
  showImage = true,
  overlayType = "text", // "text" o "image"
  imageOverlay = null, // imagen para mostrar en el overlay
  hideDescription = false
}) => {
  // Estructura de datos esperada:
  // item: { id, name, image/photo, position/subtitle, description }
  
  const displayData = {
    id: item.id,
    name: item.name,
    image: item.image || item.photo,
    subtitle: item.position || item.subtitle || '',
    description: item.description || '',
    color: item.color || '',
    // Priorizar la imagen del item, luego la prop, luego null
    overlayImage: item.imageOverlay || imageOverlay || null
  }

  return (
    <AnimatedSection 
      key={displayData.id}
      animation="fadeInUp" 
      delay={0.1 * index}
      className="group"
    >
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200 transition-all duration-300 transform hover:scale-105">
        {/* Imagen principal o contenido de texto */}
        <div className={`${imageAspect} overflow-hidden relative`}>
          {showImage ? (
            <img 
              src={displayData.image}
              alt={displayData.name}
              className={`w-full h-full ${objectFit} transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0 ${
                activeCard === displayData.id ? 'blur-sm' : ''
              }`}
            />
          ) : (
            <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-white to-gray-50 rounded-2xl transition-all duration-300 ${
              activeCard === displayData.id ? 'blur-sm' : ''
            }`}>
              <h3 
                className="text-center text-gray-800 font-bold text-4xl px-4"
                style={{ fontFamily: 'Caviar Dreams', color: displayData.color }}
              >
                {displayData.name}
              </h3>
            </div>
          )}
          
          {/* Overlay cuando está activo */}
          {activeCard === displayData.id && showOverlay && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center animate-in fade-in duration-300">
              {overlayType === "image" && displayData.overlayImage ? (
                // Mostrar imagen en el overlay
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={displayData.overlayImage}
                    alt={`${displayData.name} overlay`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ) : overlayType === "image" && !displayData.overlayImage ? (
                // Fallback cuando no hay imagen específica para el overlay tipo imagen
                <div className="text-center space-y-3">
                  <h4 
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    {displayData.name}
                  </h4>
                  <p 
                    className="text-gray-300 text-sm"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    Imagen no disponible
                  </p>
                </div>
              ) : (
                // Mostrar texto en el overlay (comportamiento original)
                <div className="text-center space-y-3">
                  <h4 
                    className="text-white font-bold text-lg"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    {displayData.name}
                  </h4>
                  {displayData.subtitle && (
                    <p 
                      className="text-blue-300 font-medium text-sm"
                      style={{ fontFamily: 'Caviar Dreams' }}
                    >
                      {displayData.subtitle}
                    </p>
                  )}
                  {displayData.description && (
                    <p 
                      className="text-gray-200 text-sm leading-relaxed"
                      style={{ fontFamily: 'Caviar Dreams' }}
                    >
                      {displayData.description}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Overlay con información básica (solo visible cuando no está activo o no hay función de click) */}
        {(activeCard !== displayData.id || !handleCardClick) && showOverlay && !hideDescription && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 pr-16">
            <h4 
              className="text-white font-bold text-sm mb-1"
              style={{ fontFamily: 'Caviar Dreams' }}
            >
              {displayData.name}
            </h4>
            {displayData.subtitle && (
              <p 
                className="text-gray-200 text-xs mb-1"
                style={{ fontFamily: 'Caviar Dreams' }}
              >
                {displayData.subtitle}
              </p>
            )}
            {/* Mostrar descripción cuando no hay función de click o cuando no está activo, excepto si hideDescription está activo */}
            {!handleCardClick && displayData.description && (
              <p 
                className="text-gray-200 text-xs leading-relaxed"
                style={{ fontFamily: 'Caviar Dreams' }}
              >
                {displayData.description}
              </p>
            )}
          </div>
        )}
        
        {/* Botón de interacción */}
        {handleCardClick && (
          <button 
            onClick={() => handleCardClick(displayData.id)}
            className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              activeCard === displayData.id 
                ? 'bg-red-500 hover:bg-red-400 rotate-45' 
                : buttonColor
            }`}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        )}

        {/* IconoHokma en la esquina inferior derecha */}
        <div className="absolute bottom-4 right-4">
          <IconoHokma size={42} color="#dfdfdf" />
        </div>
      </div>
    </AnimatedSection>
  )
}

export default CardCarrusel