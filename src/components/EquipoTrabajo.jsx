import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import Carrusel from './Carrusel'
import { useAppContext } from '../context/AppContext'

const EquipoTrabajo = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Título */}
      <AnimatedSection animation="fadeInUp" className="mb-16">
        <SectionTitle className="mb-4 px-4 sm:px-6 lg:px-8">
          El talento que impulsa nuestra Innovaci&oacute;n
        </SectionTitle>
      </AnimatedSection>
      <div className="px-4 py-4 sm:px-6 lg:px-8 bg-[#2A2D3B]">
        {/* Columna derecha - Grid de 4 cards del equipo con slider */}
        <Carrusel />
      </div>
    </section>
  )
}

export default EquipoTrabajo
