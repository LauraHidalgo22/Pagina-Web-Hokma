import SectionTitle from './SectionTitle'
import CardUnidadNegocio from './CardUnidadNegocio'
import { useAppContext } from '../context/AppContext'
import Separador from './Separador'

const UnidadesNegocio = () => {
  const { selectedCard, setSelectedCard, unidades, handleCardSelect, getContainerColor } = useAppContext();

  return (
    <section id='unidades-negocio' className="w-full h-auto bg-white">
      {/* Contenedor padre con SectionTitle */}
      <div 
        className="w-full h-[170px] md:h-[80px] flex items-center px-7 transition-colors duration-300 bg-white"
        style={{ backgroundColor: getContainerColor() }}
      >
        <SectionTitle titleClassName={`${getContainerColor() == '#ffffff' || getContainerColor() == '#F3F4F6' ? 'text-black' : 'text-white'}`}>
          Unidades de Negocio
        </SectionTitle>
      </div>

      {/* Sección de carrusel - ahora fuera del fondo blanco */}
      <div className="flex justify-center md:justify-start items-center w-full h-[200px]" style={{background: 'transparent'}}>
        <div className="w-full h-full flex items-center justify-center md:justify-start px-4 md:px-8 lg:px-16 overflow-x-auto overflow-y-hidden min-h-[250px]">
          <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-start items-center w-max transition-all duration-500 py-4">
            {unidades.map((unidad, index) => {
              const isSelected = selectedCard === unidad.id;
              const selectedIndex = unidades.findIndex(u => u.id === selectedCard);
              // Calcular el desplazamiento hacia la card seleccionada
              let transformStyle = '';
              if (selectedCard && !isSelected) {
                const direction = index < selectedIndex ? 1 : -1;
                const distance = Math.abs(index - selectedCard);
                const displacement = Math.min(distance * 15, 30);
                const isMobile = window.innerWidth < 768;
                if (isMobile) {
                  transformStyle = `translateY(${direction * displacement}px)`;
                } else {
                  transformStyle = `translateX(${direction * displacement}px)`;
                }
              }
              return (
                <div
                  key={unidad.id}
                  className="transition-all duration-500 ease-in-out flex-shrink-0"
                  style={{
                    transform: `${transformStyle} ${isSelected ? 'scale(1.2)' : 'scale(1)'}`
                  }}
                >
                  <CardUnidadNegocio
                    imagen={unidad.imagen}
                    color={unidad.color}
                    backgroundColor="#292C3A"
                    isSelected={isSelected}
                    onSelect={() => handleCardSelect(unidad.id)}
                  />
                </div>
              );
            })}
            {/* Espaciador invisible para margen derecho */}
            <div className="flex-shrink-0" style={{ width: '5.5rem', minWidth: '4.5rem' }} aria-hidden="true"></div>
          </div>
        </div>
      </div>

      {/* Div inferior como margen */}
      <div 
        className="w-full h-[70px] transition-colors duration-300 bg-white"
        style={{ backgroundColor: getContainerColor() }}
      >
        <Separador />
      </div>
    </section>
    
  )
}

export default UnidadesNegocio
