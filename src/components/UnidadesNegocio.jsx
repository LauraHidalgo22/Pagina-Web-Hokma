import SectionTitle from './SectionTitle'
import CardUnidadNegocio from './CardUnidadNegocio'
import { useAppContext } from '../context/AppContext'
import Separador from './Separador'

const UnidadesNegocio = () => {
  const { selectedCard, setSelectedCard, unidades, handleCardSelect, getContainerColor } = useAppContext();

  return (
    <section className="w-full h-auto md:h-[250px] relative" style={{backgroundColor:"#ffffff"}}>
      {/* Contenedor padre con SectionTitle */}
      <div 
        className="w-full h-[170px] md:h-[80px] flex items-center px-7 transition-colors duration-300"
        style={{ backgroundColor: getContainerColor() }}
      >
        <h5 className={`${getContainerColor() == '#ffffff' || getContainerColor() == '#F3F4F6' ? 'text-black' : 'text-white'} text-3xl font-bold mb-12`}>
          Unidades de Negocio
        </h5>
      </div>

      {/* Sección de carrusel - Posicionada en el centro */}
      <div className="relative md:absolute left-0 right-0 top-1/2 bottom-5 transform md:-translate-y-12 z-20 flex justify-center items-center mt-10 md:my-5 w-full">
        <div className="w-full overflow-x-auto overflow-y-hidden h-auto min-h-[200px] md:min-h-[250px] flex items-center justify-start lg:justify-center">
          <div className="flex flex-col md:flex-row gap-5 justify-start md:justify-center items-center w-full md:min-w-max lg:min-w-0 px-2 md:px-4 transition-all duration-500 py-4 ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0">
            {unidades.map((unidad, index) => {
              const isSelected = selectedCard === unidad.id;
              const selectedIndex = unidades.findIndex(u => u.id === selectedCard);
              
              // Calcular el desplazamiento hacia la card seleccionada
              let transformStyle = '';
              if (selectedCard && !isSelected) {
                const direction = index < selectedIndex ? 1 : -1; // 1 = hacia abajo/derecha, -1 = hacia arriba/izquierda
                const distance = Math.abs(index - selectedIndex);
                const displacement = Math.min(distance * 15, 30); // Máximo 30px de desplazamiento
                
                // En pantallas pequeñas usa translateY, en pantallas medianas y grandes usa translateX
                const isMobile = window.innerWidth < 768; // md breakpoint es 768px
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
                    transform: `${transformStyle} ${isSelected ? 'scale(1.2)' : 'scale(1)'}`,
                    zIndex: isSelected ? 20 : 10
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
          </div>
        </div>
      </div>

      {/* Div inferior como margen */}
      <div 
        className="md:absolute md:bottom-0 md:left-0 md:right-0 w-full h-[70px] transition-colors duration-300 flex items-end justify-center"
        style={{ backgroundColor: getContainerColor() }}
      >
        {/* Separador dentro del div inferior */}
        <Separador />
      </div>
    </section>
    
  )
}

export default UnidadesNegocio
