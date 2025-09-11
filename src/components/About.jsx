import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import ImpulsoCrecimiento from '../assets/CarruselProductos/impulso_crecimiento 1.jpg'
import DisenoExitoso from '../assets/CarruselProductos/diseño_exitoso.jpg'
import EficienciaEmpresarial from '../assets/CarruselProductos/eficiencia_empresarial.jpg'
import DecisionesEmpresariales from '../assets/CarruselProductos/decisiones_empresariales.jpg'
import InnovacionTecnologica from '../assets/CarruselProductos/innovacion_tecnológica.jpg'
import SoporteEspecializado from '../assets/CarruselProductos/soporte_especializado.jpg'
import { useState, useEffect } from 'react'

const About = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  // Array de imágenes para el carrusel
  const images = [
    { src: ImpulsoCrecimiento, alt: "Impulso al crecimiento empresarial" },
    { src: DisenoExitoso, alt: "Diseño exitoso de soluciones" },
    { src: EficienciaEmpresarial, alt: "Eficiencia empresarial" },
    { src: DecisionesEmpresariales, alt: "Decisiones empresariales inteligentes" },
    { src: InnovacionTecnologica, alt: "Innovación tecnológica" },
    { src: SoporteEspecializado, alt: "Soporte especializado" }
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Efecto para el carrusel automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1
        setActiveCardIndex(nextIndex) // Sincroniza la card activa con la imagen
        return nextIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const cards = [
    { 
      text: "Impulsamos su crecimiento real", 
      emoji: "🚀",
      color: "#292C3A",
      imageIndex: 0  // impulso_crecimiento 1.jpg
    },
    { 
      text: "Procesos diseñados para su éxito", 
      emoji: "⚡",
      color: "#292C3A",
      imageIndex: 1  // diseño_exitoso.jpg
    },
    { 
      text: "Entregas rápidas y organizadas", 
      emoji: "📈",
      color: "#292C3A",
      imageIndex: 2  // eficiencia_empresarial.jpg
    },
    { 
      text: "Decisiones rápidas y seguras", 
      emoji: "🎯",
      color: "#292C3A",
      imageIndex: 3  // decisiones_empresariales.jpg
    },
    { 
      text: "Innovación y tecnología", 
      emoji: "💡",
      color: "#292C3A",
      imageIndex: 4  // innovacion_tecnológica.jpg
    },
    { 
      text: "Soporte especializado", 
      emoji: "🤝",
      color: "#292C3A",
      imageIndex: 5  // soporte_especializado.jpg
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-100 min-h-screen">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-8px) translateX(-8px);
          }
          75% {
            transform: translateY(-20px) translateX(12px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .hover-3d:hover {
          transform: perspective(1000px) rotateX(-5deg) rotateY(5deg) scale(1.1) translateZ(30px) !important;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1) !important;
        }
        
        .animate-float:hover {
          animation-play-state: paused;
        }
        
        .card-expand {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .card-expand:hover {
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          transform: scale(1.02);
        }
        
        .card-icon {
          transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .card-expand:hover .card-emoji,
        .card-active .card-emoji {
          transform: scale(1.2) rotate(15deg);
          background-color: #DCE39E !important;
        }
        
        .card-active {
          width: calc(100% + 20px);
          height: calc(100% + 20px);
          transform: scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}} />
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="mb-16">
          <SectionTitle className="mb-4">
            ¿Por qué trabajar con nosotros?
          </SectionTitle>
        </AnimatedSection>

        {/* Contenedor principal con layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Columna izquierda - Cards minimalistas */}
          <AnimatedSection animation="fadeInLeft" className="space-y-6">
            {cards.map((card, index) => (
              <AnimatedSection 
                key={index}
                animation="fadeInUp" 
                delay={0.1 * index}
              >
                <div 
                  className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 transform card-expand cursor-pointer ${
                    activeCardIndex === index ? 'card-active' : ''
                  }`}
                  onClick={() => {
                    setCurrentImageIndex(card.imageIndex)
                    setActiveCardIndex(index)
                  }}
                >
                  <div className="flex items-center space-x-6">
                    {/* Emoji con fondo circular */}
                    <div className="flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 card-emoji"
                        style={{ backgroundColor: card.color }}
                      >
                        {card.emoji}
                      </div>
                    </div>
                    
                    {/* Texto */}
                    <p 
                      className="text-gray-700 text-base font-medium flex-1"
                      style={{ fontFamily: 'Caviar Dreams', fontSize: 'large' }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </AnimatedSection>

          {/* Columna derecha - Carrusel de imágenes */}
          <AnimatedSection animation="fadeInRight" delay={0.3} className="flex items-center justify-center">
            <div 
              className="relative z-10 perspective-1000 w-full h-full flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                
                // Calcular la inclinación hacia el mouse (valores más pequeños para suavidad)
                const rotateX = (y - centerY) / 20
                const rotateY = (x - centerX) / 20
                
                // Calcular desplazamiento hacia el mouse (valores más pequeños)
                const moveX = (x - centerX) / 30
                const moveY = (y - centerY) / 30
                
                e.currentTarget.style.transform = `
                  perspective(1000px)
                  rotateX(${-rotateX}deg) 
                  rotateY(${rotateY}deg) 
                  translateX(${moveX}px)
                  translateY(${moveY}px)
                  scale(1.02)
                  translateZ(5px)
                `
                e.currentTarget.style.transition = 'transform 0.1s ease-out'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `
                  perspective(1000px)
                  rotateX(0deg) 
                  rotateY(0deg) 
                  translateX(0px)
                  translateY(0px)
                  scale(1)
                  translateZ(0px)
                `
                e.currentTarget.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={images[currentImageIndex].src} 
                  alt={images[currentImageIndex].alt} 
                  className="w-full h-[650px] object-cover drop-shadow-2xl transition-all duration-500 ease-out cursor-pointer animate-float"
                  style={{
                    transformStyle: 'preserve-3d',
                    filter: `drop-shadow(0 ${20 + Math.sin(scrollY * 0.01) * 10}px ${40 + Math.sin(scrollY * 0.01) * 20}px rgba(0,0,0,0.3))`
                  }}
                />
                
                {/* Indicadores del carrusel */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-110' 
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      onClick={() => {
                        setCurrentImageIndex(index)
                        setActiveCardIndex(index)
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About
