import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import Carrusel from './Carrusel'
import { useAppContext } from '../context/AppContext'

const NuestrosAliados = () => {
  const { allies, activeAllyCard, handleAllyCardClick } = useAppContext();
  
  // Mostrar todas las cards en una sola vista
  const allySlides = [allies]; // Todas las cards en un solo slide

  return (
    <section className="pb-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <SectionTitle className="mb-4">
            Nuestros Aliados
          </SectionTitle>
        </AnimatedSection>

        {/* Carrusel de Aliados */}
        <div className="flex justify-center">
          <div className="w-full">
            <Carrusel
              slides={allySlides}
              gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              showNavigation={false}
              showIndicators={false}
              onCardClick={handleAllyCardClick}
              activeItem={activeAllyCard}
              setActiveItem={handleAllyCardClick}
              cardProps={{
                imageAspect: "aspect-[3/2]",
                showOverlay: true,
                buttonColor: "bg-[#40BAEC]",
                objectFit: "object-contain"
              }}
            />
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="relative mt-16">
          <div className="absolute top-0 left-1/4 w-2 h-2 bg-green-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute top-8 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-0 left-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-50 animate-ping"></div>
        </div>
      </div>
    </section>
  )
}

export default NuestrosAliados
