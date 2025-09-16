import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
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
    handleIndicatorClick
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
          {/* Card 1 */}
          <AnimatedSection animation="fadeInUp" delay={0.1}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-[#95C121] p-4 text-center">
                <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Caviar Dreams' }}>
                  Innovación
                </h3>
              </div>
              <div className="p-6">
                <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Caviar Dreams' }}>
                  Desarrollamos soluciones tecnológicas innovadoras que transforman la manera en que las empresas operan y se conectan con sus clientes.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 2 */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-[#3BBEE8] p-4 text-center">
                <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Caviar Dreams' }}>
                  Experiencia
                </h3>
              </div>
              <div className="p-6">
                <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Caviar Dreams' }}>
                  Más de una década de experiencia en el desarrollo de software empresarial y soluciones digitales personalizadas para diversos sectores.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 3 */}
          <AnimatedSection animation="fadeInUp" delay={0.3}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-[#F39323] p-4 text-center">
                <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Caviar Dreams' }}>
                  Calidad
                </h3>
              </div>
              <div className="p-6">
                <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Caviar Dreams' }}>
                  Nos comprometemos con los más altos estándares de calidad en cada proyecto, garantizando soluciones robustas y escalables.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Card 4 */}
          <AnimatedSection animation="fadeInUp" delay={0.4}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-105 cursor-pointer">
              <div className="bg-[#8E3089] p-4 text-center">
                <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Caviar Dreams' }}>
                  Soporte
                </h3>
              </div>
              <div className="p-6">
                <p className="text-black text-sm leading-relaxed" style={{ fontFamily: 'Caviar Dreams' }}>
                  Brindamos soporte continuo y mantenimiento especializado para asegurar el óptimo funcionamiento de todas nuestras soluciones.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default About
