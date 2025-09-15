import { useState } from 'react'
import SectionTitle from './SectionTitle'
import CardUnidadNegocio from './CardUnidadNegocio'
import logoHokmaLight from '../assets/logo-hokma-light-menu.png'
import logoHokmaGlobal from '../assets/logo-hokma-global-group-menu.png'

const UnidadesNegocio = () => {
  // Estado para manejar la card seleccionada
  const [selectedCard, setSelectedCard] = useState(null)

  // Lista de imágenes para el carrusel
  const unidades = [
    {
      id: 1,
      imagen: logoHokmaLight,
      alt: "Hokma Technologies",
      color: "#ffffff"
    },
    {
      id: 2,
      imagen: logoHokmaGlobal,
      alt: "Hokma Robotics",
      color: "#ff9900"
    },
    {
      id: 3,
      imagen: logoHokmaGlobal,
      alt: "Hokma Energy",
      color: "#A6C139"
    },
    {
      id: 4,
      imagen: logoHokmaGlobal,
      alt: "Hokma Global Communications",
      color: "#0097DA"
    },
    {
      id: 5,
      imagen: logoHokmaGlobal,
      alt: "Hokma BioTech",
      color: "#913B8E"
    }
  ]

  // Función para manejar la selección de cards
  const handleCardSelect = (unidadId) => {
    setSelectedCard(selectedCard === unidadId ? null : unidadId)
  }

  // Obtener el color del contenedor basado en la card seleccionada
  const getContainerColor = () => {
    if (selectedCard) {
      const selectedUnidad = unidades.find(unidad => unidad.id === selectedCard)
      return selectedUnidad ? selectedUnidad.color : '#292C3A'
    }
    return '#F3F4F6'
  }

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
