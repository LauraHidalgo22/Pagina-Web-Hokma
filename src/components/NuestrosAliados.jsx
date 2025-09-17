import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import Carrusel from './Carrusel'
import { useAppContext } from '../context/AppContext'

const NuestrosAliados = () => {
  const { allies, activeAllyCard, handleAllyCardClick } = useAppContext();
  
  // Mostrar un aliado por slide
  const allySlides = allies.map(ally => [ally]); // Cada aliado en su propio slide

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
              gridCols="grid-cols-1"
              showNavigation={true}
              showIndicators={true}
              navigationTextColor="text-gray-800"
              onCardClick={handleAllyCardClick}
              activeItem={activeAllyCard}
              setActiveItem={handleAllyCardClick}
              maxWidth="max-w-2xl"
              cardProps={{
                imageAspect: "aspect-[3/2]",
                showOverlay: true,
                buttonColor: "bg-[#40BAEC]",
                objectFit: "object-contain"
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default NuestrosAliados
