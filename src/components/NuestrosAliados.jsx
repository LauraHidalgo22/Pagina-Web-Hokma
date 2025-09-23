import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import Carrusel from './Carrusel'
import { useAppContext } from '../context/AppContext'
import Separador from './Separador'

const NuestrosAliados = () => {
  const { allies, activeAllyCard, handleAllyCardClick } = useAppContext();
  
  // Dividir aliados en slides de 4 cards cada uno
  const allySlides = [];
  for (let i = 0; i < allies.length; i += 4) {
    allySlides.push(allies.slice(i, i + 4));
  }

  return (
    <section className="bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <AnimatedSection animation="fadeInUp" className="text-center">
          <SectionTitle className="mb-4">
            Un ecosistema de alianzas con impacto real
          </SectionTitle>
        </AnimatedSection>

        {/* Carrusel de Aliados */}
        <div className="flex justify-center">
          <div className="w-full">
            <Carrusel
              slides={allySlides}
              gridCols="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
              showNavigation={true}
              navigationTextColor="text-gray-800"
              onCardClick={handleAllyCardClick}
              activeItem={activeAllyCard}
              setActiveItem={handleAllyCardClick}
              maxWidth="max-w-8xl"
              cardProps={{
                imageAspect: "aspect-[3/2]",
                showOverlay: true,
                buttonColor: "bg-[#40BAEC]",
                objectFit: "object-contain",
                hideDescription: true
              }}
            />
          </div>
        </div>

      </div>
      <Separador />
    </section>
  )
}

export default NuestrosAliados
