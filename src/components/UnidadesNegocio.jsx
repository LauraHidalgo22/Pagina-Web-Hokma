import SectionTitle from './SectionTitle'
import CardUnidadNegocio from './CardUnidadNegocio'
import { useAppContext } from '../context/AppContext'

const UnidadesNegocio = () => {
  const { selectedCard, setSelectedCard, unidades, handleCardSelect, getContainerColor } = useAppContext();

  return (
    <section className="w-full h-auto md:h-[300px] relative" style={{backgroundColor:"#ffffff"}}>
      {/* Contenedor padre con SectionTitle */}
      <div 
        className="w-full h-[110px] flex items-center px-7 transition-colors duration-300"
        style={{ backgroundColor: getContainerColor() }}
      >
        <SectionTitle titleClassName={getContainerColor() == '#ffffff' || getContainerColor() == '#F3F4F6' ? 'text-black' : 'text-white'}>
          Unidades de Negocio
        </SectionTitle>
      </div>

      {/* Sección de carrusel */}
      <div className="md:absolute md:left-0 md:right-0 md:pt-2 px-4 md:z-10 flex justify-center py-4 md:py-0">
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center max-w-screen-xl w-full">
          {unidades.map((unidad) => (
            <CardUnidadNegocio
              key={unidad.id}
              imagen={unidad.imagen}
              color={unidad.color}
              backgroundColor="#292C3A"
              isSelected={selectedCard === unidad.id}
              onSelect={() => handleCardSelect(unidad.id)}
            />
          ))}
        </div>
      </div>

      {/* Div inferior como margen */}
      <div 
        className="md:absolute md:bottom-0 md:left-0 md:right-0 w-full h-[70px] transition-colors duration-300"
        style={{ backgroundColor: getContainerColor() }}
      />
    </section>
  )
}

export default UnidadesNegocio
