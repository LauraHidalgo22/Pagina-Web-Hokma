import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import Carrusel from './Carrusel'
import { useAppContext } from '../context/AppContext'

const NuestrosClientes = () => {
  const { clients, activeClientCard, handleClientCardClick } = useAppContext();
  
  // Mostrar todas las cards en una sola vista
  const clientSlides = [clients]; // Todas las cards en un solo slide

  return (
    <section className="py-10 bg-white">
      <div className="mx-auto">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="mb-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle titleClassName="text-black">
            Nuestros Clientes
          </SectionTitle>
        </AnimatedSection>

        {/* Sección con fondo azul */}
        <div style={{ backgroundColor: '#3BBEE8' }} className="p-8">
          {/* Carrusel de Clientes */}
          <div className="flex justify-center">
            <div className="w-full">
              <Carrusel
                slides={clientSlides}
                gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                showNavigation={false}
                showIndicators={false}
                onCardClick={handleClientCardClick}
                activeItem={activeClientCard}
                setActiveItem={handleClientCardClick}
                cardProps={{
                  imageAspect: "aspect-[3/2]",
                  showOverlay: true,
                  buttonColor: "bg-blue-600 hover:bg-blue-500",
                  objectFit: "object-contain",
                  showImage: false // Nueva prop para no mostrar imagen
                }}
              />
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-8 right-1/4 w-3 h-3 bg-cyan-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-50 animate-ping"></div>
        </div>
      </div>
    </section>
  )
}

export default NuestrosClientes