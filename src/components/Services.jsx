import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import fondoSeccionDos from '../assets/fondo_seccion_dos.png'
import { useAppContext } from '../context/AppContext'
import IconoHokma from './IconoHokma'
import Separador from './Separador'
import CardSinContenido from './CardSinContenido'
import CarruselServices from './CarruselServices'
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

        {/* Layout principal: Carrusel de services */}
        <div 
          className={`transition-opacity duration-300 ${
            isServicesAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <CarruselServices services={services} />
        </div>
        
        {/* Separador al final de la sección */}
        <Separador />
      </div>
    </section>
  )
}

export default Services
