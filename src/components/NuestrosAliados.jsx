import { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import { useAppContext } from '../context/AppContext'

const NuestrosAliados = () => {
  const { currentAllyIndex, setCurrentAllyIndex, allies } = useAppContext();

  return (
    <section className="py-20 bg-white">
      <style dangerouslySetInnerHTML={{__html: `
        .ally-slider {
          transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
        }
        
        .ally-slider:hover {
          transform: scale(1.05);
        }
        
        @keyframes fadeSlide {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        
        .fade-slide {
          animation: fadeSlide 0.8s ease-out;
        }
      `}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <SectionTitle className="mb-4">
            Nuestros Aliados
          </SectionTitle>
          <p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Caviar Dreams' }}
          >
            Trabajamos con los mejores partners tecnológicos para ofrecerte soluciones de clase mundial
          </p>
        </AnimatedSection>

        {/* Slider de Aliados */}
        <AnimatedSection animation="scaleIn" delay={0.3}>
          <div className="flex justify-center items-center">
          <div className="relative max-w-lg w-full">
            <div className="ally-slider fade-slide">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-xl border border-gray-200">
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Logo del aliado */}
                  <div className="w-49 h-33 flex items-center justify-center">
                    <img 
                      src={allies[currentAllyIndex].image}
                      alt={allies[currentAllyIndex].alt}
                      className="max-w-full max-h-full object-contain drop-shadow-lg"
                      key={currentAllyIndex} // Force re-render for animation
                    />
                  </div>
                  
                  {/* Nombre del aliado */}
                  <h3 
                    className="text-2xl font-bold text-gray-800"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    {allies[currentAllyIndex].name}
                  </h3>
                  
                  {/* Descripción */}
                  <p 
                    className="text-gray-600 text-base"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    {allies[currentAllyIndex].name === 'Fedesoft' 
                      ? 'Federación Colombiana de la Industria del Software y TI'
                      : 'Tecnología de clase mundial para soluciones empresariales'
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Indicadores del slider */}
            <div className="flex justify-center mt-8 space-x-3">
              {allies.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentAllyIndex 
                      ? 'scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={{
                    backgroundColor: index === currentAllyIndex ? '#92be23' : undefined
                  }}
                  onClick={() => setCurrentAllyIndex(index)}
                />
              ))}
            </div>
          </div>
          </div>
        </AnimatedSection>

        {/* Elementos decorativos */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-8 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-50 animate-ping"></div>
        </div>
      </div>
    </section>
  )
}

export default NuestrosAliados
