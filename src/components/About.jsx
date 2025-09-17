import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import Carrusel from './Carrusel'
import { useAppContext } from '../context/AppContext'

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
    <section id="nosotros" className="py-20 bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="mb-16">
          <SectionTitle className="mb-4">
            Transformamos desaf&iacute;os en oportunidades para tu Compa&ntilde;&iacute;a
          </SectionTitle>
        </AnimatedSection>

        {/* Carrusel de Cards Informativas */}
        <Carrusel
          slides={slides}
          cardType="informativa"
          gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          showNavigation={slides.length > 1}
          showIndicators={slides.length > 1}
          navigationTextColor="text-black"
        />
      </div>
    </section>
  )
}

export default About
