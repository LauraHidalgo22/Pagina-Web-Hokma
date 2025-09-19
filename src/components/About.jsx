import { useState } from 'react'
import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import CardInformativa from './CardInformativa'
import { useAppContext } from '../context/AppContext'
import Separador from './Separador'

const About = () => {
  // Estado para controlar qué card está expandida
  const [expandedCard, setExpandedCard] = useState(null)
  
  // Usar el contexto en lugar de estados locales
  const {
    cardsAbout
  } = useAppContext()

  // Dividir las cards en grupos de 4 para el carrusel
  const cardsPerSlide = 4
  const slides = []
  
  for (let i = 0; i < cardsAbout.length; i += cardsPerSlide) {
    slides.push(cardsAbout.slice(i, i + cardsPerSlide))
  }

  // Función para manejar el toggle del acordeón
  const handleCardToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex)
  }

  return (
    <section id="nosotros" className="pt-5 pb-10 bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="">
          <SectionTitle className="mb-4">
            Transformamos desaf&iacute;os en oportunidades para tu Compa&ntilde;&iacute;a
          </SectionTitle>
        </AnimatedSection>

        {/* Contenedor principal */}
        <div className="space-y-8">
          {/* Card expandida centrada - aparece primero si existe */}
          {expandedCard !== null && (
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-2xl">
                <AnimatedSection animation="fadeInUp" delay={0.1}>
                  <CardInformativa
                    card={cardsAbout[expandedCard]}
                    index={expandedCard}
                    delay={0}
                    isExpanded={true}
                    onToggle={handleCardToggle}
                  />
                </AnimatedSection>
              </div>
            </div>
          )}
          
          {/* Grid único para todas las cards no expandidas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {cardsAbout.map((card, cardIndex) => {
              const isThisCardExpanded = expandedCard === cardIndex;
              
              // No renderizar la card expandida aquí, ya se renderiza arriba
              if (isThisCardExpanded) {
                return null;
              }
              
              return (
                <div
                  key={cardIndex}
                  className="transition-all duration-500 ease-in-out"
                >
                  <CardInformativa
                    card={card}
                    index={cardIndex}
                    delay={0.1 + (cardIndex * 0.05)}
                    isExpanded={false}
                    onToggle={handleCardToggle}
                  />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Separador al final de la sección */}
        <div className="mt-8">
          <Separador />
        </div>
      </div>
    </section>
  )
}

export default About
