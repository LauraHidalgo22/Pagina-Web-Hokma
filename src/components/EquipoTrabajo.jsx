import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import IconoHokma from './IconoHokma'
import { useAppContext } from '../context/AppContext'

const EquipoTrabajo = () => {
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
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Título */}
      <AnimatedSection animation="fadeInUp" className="mb-16">
        <SectionTitle className="mb-4">
          El talento que impulsa nuestra Innovaci&oacute;n
        </SectionTitle>
      </AnimatedSection>
      <div className="px-4 py-4 sm:px-6 lg:px-8 bg-[#2A2D3B]">
        {/* Columna derecha - Grid de 4 cards del equipo con slider */}
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
                        <AnimatedSection 
                          key={member.id}
                          animation="fadeInUp" 
                          delay={0.1 * index}
                          className="group"
                        >
                          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200 transition-all duration-300 transform hover:scale-105">
                            {/* Foto del empleado */}
                            <div className="aspect-[3/4] overflow-hidden relative">
                              <img 
                                src={member.photo}
                                alt={member.name}
                                className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0 ${
                                  activeCard === member.id ? 'blur-sm' : ''
                                }`}
                              />
                              
                              {/* Overlay de texto cuando está activo */}
                              {activeCard === member.id && (
                                <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 animate-in fade-in duration-300">
                                  <div className="text-center space-y-3">
                                    <h4 
                                      className="text-white font-bold text-lg"
                                      style={{ fontFamily: 'Caviar Dreams' }}
                                    >
                                      {member.name}
                                    </h4>
                                    <p 
                                      className="text-blue-300 font-medium text-sm"
                                      style={{ fontFamily: 'Caviar Dreams' }}
                                    >
                                      {member.position}
                                    </p>
                                    <p 
                                      className="text-gray-200 text-sm leading-relaxed"
                                      style={{ fontFamily: 'Caviar Dreams' }}
                                    >
                                      {member.description}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            {/* Overlay con información (solo visible cuando no está activo) */}
                            {activeCard !== member.id && (
                              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                                <h4 
                                  className="text-white font-bold text-sm mb-1"
                                  style={{ fontFamily: 'Caviar Dreams' }}
                                >
                                  {member.name}
                                </h4>
                                <p 
                                  className="text-gray-200 text-xs"
                                  style={{ fontFamily: 'Caviar Dreams' }}
                                >
                                  {member.position}
                                </p>
                              </div>
                            )}
                            
                            {/* Icono de plus azul */}
                            <button 
                              onClick={() => handleEmployeeCardClick(member.id)}
                              className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                                activeCard === member.id 
                                  ? 'bg-red-500 hover:bg-red-400 rotate-45' 
                                  : 'bg-blue-500 hover:bg-blue-400'
                              }`}
                            >
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                              </svg>
                            </button>

                            {/* IconoHokma en la esquina inferior derecha */}
                            <div className="absolute bottom-4 right-4">
                              <IconoHokma size={42} color="#dfdfdf" />
                            </div>
                          </div>
                        </AnimatedSection>
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
      </div>
    </section>
  )
}

export default EquipoTrabajo
