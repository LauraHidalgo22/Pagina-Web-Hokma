import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import CardInformativa from './CardInformativa'
import { useAppContext } from '../context/AppContext'
import Separador from './Separador'

const About = () => {
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
        <div className="space-y-6">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex}>
              {/* Fila de cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                {slide.map((card, cardIndex) => {
                  const globalIndex = slideIndex * cardsPerSlide + cardIndex;
                  const isLastCard = globalIndex === cardsAbout.length - 1;
                  const shouldSpanTwoColumns = isLastCard && cardsAbout.length % 4 !== 0;
                  
                  return (
                    <div
                      key={globalIndex}
                      className={shouldSpanTwoColumns ? 'md:col-span-2 lg:col-span-2' : ''}
                    >
                      <CardInformativa
                        card={card}
                        index={globalIndex}
                        delay={0.1}
                      />
                    </div>
                  );
                })}
              </div>
              
              {/* Separador después de cada fila */}
              <div className="mt-8">
                <Separador />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
