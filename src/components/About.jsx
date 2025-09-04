import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import ImagenPagina from '../assets/CarruselProductos/ImagenPagina.png'
import ProductoCelular from '../assets/CarruselProductos/Producto_celular.png'
import ProductoPagina2 from '../assets/CarruselProductos/Producto_Pagina2.png'
import { useState, useEffect } from 'react'

const About = () => {
  const [scrollY, setScrollY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array de imágenes para el carrusel
  const images = [
    { src: ImagenPagina, alt: "Página web corporativa" },
    { src: ProductoCelular, alt: "Aplicación móvil" },
    { src: ProductoPagina2, alt: "Solución web empresarial" }
  ]

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Efecto para el carrusel automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const cards = [
    { 
      text: "Impulsamos su crecimiento real", 
      icon: "📈",
      iconBg: "bg-green-100"
    },
    { 
      text: "Procesos diseñados para su éxito", 
      icon: "⚙️",
      iconBg: "bg-blue-100"
    },
    { 
      text: "Entregas rápidas y organizadas", 
      icon: "🚀",
      iconBg: "bg-purple-100"
    },
    { 
      text: "Decisiones rápidas y seguras", 
      icon: "🛡️",
      iconBg: "bg-orange-100"
    },
    { 
      text: "Innovación y tecnología", 
      icon: "💡",
      iconBg: "bg-yellow-100"
    },
    { 
      text: "Soporte especializado", 
      icon: "🎯",
      iconBg: "bg-red-100"
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
        
        .card-expand:hover .card-icon {
          transform: scale(1.2) rotate(5deg);
        }
      `}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <SectionTitle className="mb-4">
            ¿Por qué trabajar con nosotros?
          </SectionTitle>
        </AnimatedSection>

        {/* Contenedor principal con layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Cards minimalistas */}
          <AnimatedSection animation="fadeInLeft" className="space-y-6">
            {cards.map((card, index) => (
              <AnimatedSection 
                key={index}
                animation="fadeInUp" 
                delay={0.1 * index}
              >
                <div 
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform border-l-4 card-expand"
                  style={{ 
                    borderLeftColor: '#92be23',
                    boxShadow: '0 4px 15px rgba(146, 190, 35, 0.1)'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    {/* Icono */}
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center card-icon ${card.iconBg}`}
                    >
                      <span className="text-2xl">{card.icon}</span>
                    </div>
                    
                    {/* Texto */}
                    <p 
                      className="text-gray-700 text-base font-medium flex-1"
                      style={{ fontFamily: 'Caviar Dreams' }}
                    >
                      {card.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </AnimatedSection>

          {/* Columna derecha - Carrusel de imágenes */}
          <AnimatedSection animation="fadeInRight" delay={0.3}>
            <div className="flex justify-center">
            <div 
              className="relative z-10 perspective-1000"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                
                // Calcular la inclinación hacia el mouse
                const rotateX = (y - centerY) / 8
                const rotateY = (x - centerX) / 8
                
                // Calcular desplazamiento hacia el mouse
                const moveX = (x - centerX) / 12
                const moveY = (y - centerY) / 12
                
                e.currentTarget.style.transform = `
                  perspective(1000px)
                  rotateX(${-rotateX}deg) 
                  rotateY(${rotateY}deg) 
                  translateX(${moveX}px)
                  translateY(${moveY}px)
                  scale(1.05)
                  translateZ(10px)
                `
                e.currentTarget.style.transition = 'none'
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
                e.currentTarget.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)'
              }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src={images[currentImageIndex].src} 
                  alt={images[currentImageIndex].alt} 
                  className="w-[520px] h-[390px] object-cover drop-shadow-2xl transition-all duration-500 ease-out cursor-pointer animate-float"
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
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
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
