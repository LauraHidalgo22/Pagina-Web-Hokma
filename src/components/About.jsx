import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import IconoHokma from './IconoHokma'
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
          {cardsAbout.map((card, index) => {
            // Array de colores para los encabezados
            const colors = ['#95C121', '#3BBEE8', '#F39323', '#8E3089', '#0097DA', '#913B8E'];
            const headerColor = colors[index % colors.length];
            
            return (
              <AnimatedSection key={index} animation="fadeInUp" delay={0.1 + (index * 0.1)}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
                  <div 
                    className="p-4 text-center h-20"
                    style={{ backgroundColor: headerColor }}
                  >
                    <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Caviar Dreams' }}>
                      {card.title}
                    </h3>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Caviar Dreams' }}>
                      {card.description}
                    </p>
                  </div>
                  {/* Card Footer */}
                  <div className="p-4 flex justify-end items-center">
                    <IconoHokma size={42} color="#dfdfdf" />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default About
