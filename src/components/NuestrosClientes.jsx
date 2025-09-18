import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import Carrusel from './Carrusel'
import { useAppContext } from '../context/AppContext'
import logoHokmaEnergy from '../assets/logo-hokma-energy.png'
import Separador from './Separador'

const NuestrosClientes = () => {
  const { clients, activeClientCard, handleClientCardClick, setActiveClientCard } = useAppContext();
  
  // Mostrar todos los 4 clientes en un solo slide
  const clientSlides = [clients];

  return (
    <section className="pt-10 bg-white">
      <div className="mx-auto">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="pb-5 px-4 sm:px-6 lg:px-8">
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
                showNavigation={true}
                showIndicators={true}
                navigationTextColor="text-gray-white"
                onCardClick={handleClientCardClick}
                activeItem={activeClientCard}
                setActiveItem={setActiveClientCard}
                cardProps={{
                  imageAspect: "aspect-[3/2]",
                  showOverlay: true,
                  buttonColor: "bg-[#40BAEC]",
                  objectFit: "object-contain",
                  showImage: false, // No mostrar imagen principal
                  overlayType: "image", // Mostrar imagen en el overlay
                }}
              />
            </div>
          </div>
      <Separador /> 
        </div>
      </div>
    </section>
  )
}

export default NuestrosClientes