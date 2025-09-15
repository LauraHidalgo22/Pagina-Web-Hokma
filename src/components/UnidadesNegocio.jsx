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
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center max-w-screen-xl w-full transition-all duration-500">
          {unidades.map((unidad, index) => {
            const isSelected = selectedCard === unidad.id;
            const selectedIndex = unidades.findIndex(u => u.id === selectedCard);
            
            // Calcular el desplazamiento hacia la card seleccionada
            let transformStyle = '';
            if (selectedCard && !isSelected) {
              const direction = index < selectedIndex ? 1 : -1; // 1 = hacia la derecha, -1 = hacia la izquierda
              const distance = Math.abs(index - selectedIndex);
              const displacement = Math.min(distance * 15, 30); // Máximo 30px de desplazamiento
              transformStyle = `translateX(${direction * displacement}px)`;
            }
            
            return (
              <div
                key={unidad.id}
                className="transition-all duration-500 ease-in-out"
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

      {/* Div inferior como margen */}
      <div 
        className="md:absolute md:bottom-0 md:left-0 md:right-0 w-full h-[70px] transition-colors duration-300"
        style={{ backgroundColor: getContainerColor() }}
      />
    </section>
  )
}

export default UnidadesNegocio
