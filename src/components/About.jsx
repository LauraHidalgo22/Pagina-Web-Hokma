import { useState, useRef, useEffect } from 'react'
import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import CardInformativa from './CardInformativa'
import { useAppContext } from '../context/AppContext'
import Separador from './Separador'

const About = () => {
  // Estado para controlar qué card está expandida
  const [expandedCard, setExpandedCard] = useState(null)
  const aboutRef = useRef(null)
  // Colapsar todos los acordeones cuando About sale de la vista
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setExpandedCard(null);
        }
      },
      { threshold: 0.1 }
    );
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);
  
  // Usar el contexto en lugar de estados locales
  const {
    cardsAbout
  } = useAppContext()

  // Función para manejar el toggle del acordeón
  const handleCardToggle = (cardIndex) => {
    setExpandedCard(expandedCard === cardIndex ? null : cardIndex)
  }

  return (
  <section id="nosotros" className="pt-5 bg-gray-100" ref={aboutRef}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="">
          <SectionTitle className="mb-4">
            Transformamos desaf&iacute;os en oportunidades para tu Compa&ntilde;&iacute;a
          </SectionTitle>
        </AnimatedSection>

        {/* Contenedor principal con grid unificado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start auto-rows-auto">
          {cardsAbout.map((card, index) => {
            const isExpanded = expandedCard === index;
            
            return (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out ${
                  isExpanded ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
                style={{
                  gridRowEnd: isExpanded ? 'span 2' : 'auto'
                }}
              >
                <CardInformativa
                  card={card}
                  index={index}
                  delay={0.1}
                  isExpanded={isExpanded}
                  onToggle={handleCardToggle}
                />
              </div>
            );
          })}
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
