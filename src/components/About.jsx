import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import CardInformativa from './CardInformativa'
import { useAppContext } from '../context/AppContext'

const About = () => {
  // Usar el contexto en lugar de estados locales
  const {
    scrollY,
    currentImageIndex,
    activeCardIndex,
    images,
    cards,
    handleCardClick,
    handleIndicatorClick,
    cardsAbout
  } = useAppContext()

  return (
    <section id="nosotros" className="py-20 bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="mb-16">
          <SectionTitle className="mb-4">
            Transformamos desaf&iacute;os en oportunidades para tu Compa&ntilde;&iacute;a
          </SectionTitle>
        </AnimatedSection>

        {/* Contenedor principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {cardsAbout.map((card, index) => (
            <CardInformativa
              key={index}
              card={card}
              index={index}
              delay={0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
