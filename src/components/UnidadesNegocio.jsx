import SectionTitle from './SectionTitle'
import CardUnidadNegocio from './CardUnidadNegocio'
import logoHokmaLight from '../assets/logo-hokma-light-menu.png'
import logoHokmaGlobal from '../assets/logo-hokma-global-group-menu.png'

const UnidadesNegocio = () => {
  // Lista de imágenes para el carrusel
  const unidades = [
    {
      id: 1,
      imagen: logoHokmaLight,
      alt: "Hokma Light",
      color: "#ffffff"
    },
    {
      id: 2,
      imagen: logoHokmaGlobal,
      alt: "Hokma Global Group",
      color: "#00d4ff"
    }
  ]

  return (
    <section className="w-full bg-gray-100 h-[400px] relative">
      {/* Contenedor padre con SectionTitle */}
      <div 
        className="w-full h-[110px] flex items-center px-7"
        style={{ backgroundColor: '#292C3A' }}
      >
        <SectionTitle titleClassName="text-white">
          Unidades de Negocio
        </SectionTitle>
      </div>

      {/* Sección de carrusel */}
      <div className="absolute left-0 right-0 pt-2 px-4 z-10 flex justify-center">
        <div className="flex gap-5 justify-center items-center max-w-screen-xl w-full">
          {unidades.map((unidad) => (
            <CardUnidadNegocio
              key={unidad.id}
              imagen={unidad.imagen}
              color={unidad.color}
              backgroundColor="#292C3A"
            />
          ))}
        </div>
      </div>

      {/* Div inferior como margen */}
      <div 
        className="absolute bottom-0 left-0 right-0 w-full h-[70px]"
        style={{ backgroundColor: '#292C3A' }}
      />
    </section>
  )
}

export default UnidadesNegocio
