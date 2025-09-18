import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import Carrusel from './Carrusel'
import { useAppContext } from '../context/AppContext'
import Separador from './Separador'

const EquipoTrabajo = () => {
  return (
    <section className="pt-5 relative overflow-hidden bg-white">
      {/* Título */}
      <AnimatedSection animation="fadeInUp" className="">
        <SectionTitle className="mb-4 px-4 sm:px-6 lg:px-8">
          El talento que impulsa nuestra Innovaci&oacute;n
        </SectionTitle>
      </AnimatedSection>
      <div className="px-4 py-4 sm:px-6 lg:px-8 bg-[#2A2D3B]">
        {/* Columna derecha - Grid de 5 cards del equipo con slider */}
        <Carrusel 
          maxWidth="max-w-[100rem]" 
          gridCols="grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
        />
      </div>
      <Separador />
    </section>
  )
}

export default EquipoTrabajo
