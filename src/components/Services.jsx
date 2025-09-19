import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import fondoSeccionDos from '../assets/fondo_seccion_dos.png'
import { useAppContext } from '../context/AppContext'
import IconoHokma from './IconoHokma'
import Separador from './Separador'
import CardSinContenido from './CardSinContenido'
import { style } from 'framer-motion/client'

const Services = () => {
  const { getCurrentServices, getContainerColor, isServicesAnimating } = useAppContext();
  const services = getCurrentServices();
  
  return (
    <section id="servicios" className="pb-10 relative overflow-hidden">
      {/* Background with solid white color behind the image */}
      <div 
        className="absolute inset-0 z-0 bg-white"
      ></div>
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="">
          <AnimatedSection animation="fadeInUp">
            <SectionTitle className="mb-4">
              Soluciones tecnol&oacute;gicas
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
              <CardSinContenido
                key={index}
                service={service}
                index={index}
                colSpan={colSpan}
                isLarge={isLarge}
                delay={0.2}
              />
            );
          })}
        </div>
        
        {/* Separador al final de la sección */}
        <Separador />
      </div>
    </section>
  )
}

export default Services
