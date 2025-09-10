import { useState, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'
import FondoEquipoTrabajo from '../assets/fondo_equipo_trabajo.png'
import BordeCorporativo from '../assets/borde_corporativo.png'
import EmpleadaImg from '../assets/empleada.jpg'

const EquipoTrabajo = () => {
  const [activeCard, setActiveCard] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Array de miembros del equipo
  const teamMembers = [
    {
      id: 1,
      name: "Valeria Rojas Sanchez",
      position: "Desarrollador FullStack",
      photo: EmpleadaImg,
      description: "Especialista en desarrollo web con experiencia en React, Node.js y bases de datos. Apasionada por crear soluciones innovadoras y interfaces de usuario intuitivas."
    },
    {
      id: 2,
      name: "Alfonso Vasquez Sepulveda", 
      position: "Gerente General",
      photo: EmpleadaImg,
      description: "Líder estratégico con más de 10 años de experiencia en gestión empresarial y desarrollo de negocios tecnológicos. Enfocado en la excelencia operacional."
    },
    {
      id: 3,
      name: "Paulo Cesar De La Cruz",
      position: "CEO",
      photo: EmpleadaImg,
      description: "Visionario tecnológico y emprendedor con amplia experiencia en la industria del software. Especializado en transformación digital y estrategia empresarial."
    },
    {
      id: 4,
      name: "Laura Valentina Hidalgo",
      position: "Desarrollador FullStack", 
      photo: EmpleadaImg,
      description: "Desarrolladora versátil con expertise en tecnologías frontend y backend. Comprometida con la calidad del código y las mejores prácticas de desarrollo."
    },
    {
      id: 5,
      name: "Carlos Eduardo Martinez",
      position: "Analista de Sistemas",
      photo: EmpleadaImg,
      description: "Experto en análisis y diseño de sistemas empresariales. Especializado en optimización de procesos y arquitectura de software escalable."
    },
    {
      id: 6,
      name: "Maria Fernanda Lopez",
      position: "UX/UI Designer",
      photo: EmpleadaImg,
      description: "Diseñadora creativa con enfoque en experiencia de usuario. Apasionada por crear interfaces intuitivas y visualmente atractivas que mejoren la interacción."
    },
    {
      id: 7,
      name: "Andrés Felipe Torres",
      position: "DevOps Engineer",
      photo: EmpleadaImg,
      description: "Ingeniero especializado en infraestructura y automatización. Experto en deployment continuo, containerización y optimización de sistemas en la nube."
    },
    {
      id: 8,
      name: "Isabella Rodriguez Castro",
      position: "Product Manager",
      photo: EmpleadaImg,
      description: "Gestora de productos con visión estratégica. Enfocada en el desarrollo de soluciones que generen valor real para los usuarios y el negocio."
    }
  ]

  // Dividir empleados en grupos de 4
  const teamSlides = []
  for (let i = 0; i < teamMembers.length; i += 4) {
    teamSlides.push(teamMembers.slice(i, i + 4))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamSlides.length)
    setActiveCard(null) // Reset active card when changing slide
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamSlides.length) % teamSlides.length)
    setActiveCard(null) // Reset active card when changing slide
  }

  const handleCardClick = (memberId) => {
    setActiveCard(activeCard === memberId ? null : memberId)
  }

  return (
    <section className="py-20 relative overflow-hidden min-h-screen">
      {/* Background image - behind all elements */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${FondoEquipoTrabajo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Dark overlay for better content readability */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      <div className="px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Columna izquierda - Logo corporativo y slogan */}
          <AnimatedSection animation="fadeInLeft" className="flex flex-col items-center justify-center text-center space-y-8">
            {/* Logo corporativo con animación de rotación */}
            <div className="relative">
              <img 
                src={BordeCorporativo}
                alt="Hokma Technologies - Borde Corporativo"
                className="w-64 h-64 object-contain animate-spin"
                style={{
                  animation: 'spin 20s linear infinite',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))'
                }}
              />
            </div>
            
            {/* Slogan y texto */}
            <div className="space-y-6">
              <h2 
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: 'Caviar Dreams' }}
              >
                Las personas detrás de nuestro éxito
              </h2>
              
              <p 
                className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto leading-relaxed"
                style={{ fontFamily: 'Caviar Dreams' }}
              >
                En Hokma Technologies desarrollamos software que transforma ideas en soluciones reales. 
                Sabemos que el corazón de nuestra empresa son nuestros trabajadores: su talento, dedicación 
                y creatividad son la clave de cada proyecto. Valoramos a nuestro equipo, invertimos en su 
                crecimiento y fomentamos un ambiente de colaboración donde cada persona puede aportar lo mejor de sí. 
                Porque cuando nuestros trabajadores crecen, nuestra empresa también crece.
              </p>
            </div>
          </AnimatedSection>

          {/* Columna derecha - Grid de 4 cards del equipo con slider */}
          <AnimatedSection animation="fadeInRight" delay={0.3} className="w-full relative">
            {/* Flechas de navegación */}
            <div className="flex justify-between items-center mb-6">
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
                    <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
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
                              onClick={() => handleCardClick(member.id)}
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
      </div>
    </section>
  )
}

export default EquipoTrabajo
