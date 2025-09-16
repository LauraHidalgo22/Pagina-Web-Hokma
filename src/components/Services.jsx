import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import fondoSeccionDos from '../assets/fondo_seccion_dos.png'
import { useAppContext } from '../context/AppContext'
import IconoHokma from './IconoHokma'

const Services = () => {
  const { getCurrentServices, getContainerColor, isServicesAnimating } = useAppContext();
  const services = getCurrentServices();
  
  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      {/* Background with solid white color behind the image */}
      <div 
        className="absolute inset-0 z-0 bg-white"
      ></div>
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <AnimatedSection animation="fadeInUp">
            <SectionTitle className="mb-4">
              Soluciones de software a la medida
            </SectionTitle>
          </AnimatedSection>
        </div>

        {/* Layout principal: Grid de cards con patrón alternado dinámico */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr transition-opacity duration-300 ${
            isServicesAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {services.map((service, index) => {
            // Calculamos la posición en el patrón de 6 cards
            const patternPosition = index % 6;
            
            // Definimos las características según la posición en el patrón
            let colSpan = 1;
            let isLarge = false;
            
            // Patrón: [2 col] [1 col] [1 col] | [1 col] [1 col] [2 col]
            if (patternPosition === 0 || patternPosition === 5) {
              colSpan = 2;
              isLarge = true;
            }
            
            return (
              <AnimatedSection 
                key={index}
                animation="fadeInUp" 
                delay={0.2 + (index * 0.2)} 
                className={colSpan === 2 ? "md:col-span-2" : ""}
              >
                <div 
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 relative h-full transform hover:scale-[1.02] hover:z-10"
                  style={{
                    padding: isLarge ? '2rem' : '1.5rem'
                  }}
                >
                  <h3 
                    className={`font-semibold text-gray-900 ${isLarge ? 'text-xl mb-4' : 'text-lg mb-3'}`}
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className={`text-gray-600 leading-relaxed ${isLarge ? 'mb-6' : 'mb-4 text-sm'}`}
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    {service.description}
                  </p>
                  <div 
                    className={`absolute ${isLarge ? 'bottom-4 right-4' : 'bottom-3 right-3'}`}
                  >
                    <IconoHokma size={isLarge ? 42 : 32} color={getContainerColor()}/>
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

export default Services
