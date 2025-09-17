import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import Carrusel from './Carrusel'
import { useAppContext } from '../context/AppContext'

const NuestrosClientes = () => {
  const { clients, activeClientCard, handleClientCardClick } = useAppContext();
  
  // Mostrar todas las cards en una sola vista
  const clientSlides = [clients]; // Todas las cards en un solo slide

  return (
    <section className="pt-10 bg-white">
      <div className="mx-auto">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="mb-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle titleClassName="text-black">
            Confianza que inspira
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
      </div>
    </section>
  )
}

export default NuestrosClientes