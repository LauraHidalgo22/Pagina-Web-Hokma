import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import fondoSeccionDos from '../assets/fondo_seccion_dos.png'
import { useAppContext } from '../context/AppContext'

const Services = () => {
  const { services } = useAppContext();
  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      {/* Background with solid white color behind the image */}
      <div 
        className="absolute inset-0 z-0 bg-white"
      ></div>
      
      {/* Background image - behind all elements */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${fondoSeccionDos})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }}
      ></div>
      
      <div className="mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <AnimatedSection animation="fadeInUp">
            <SectionTitle className="mb-4">
              Soluciones de software a la medida
            </SectionTitle>
          </AnimatedSection>
        </div>

        {/* Layout principal: Grid de cards con patrón alternado dinámico */}
        <div className="grid grid-cols-4 gap-4 auto-rows-fr">
          {services.map((service, index) => {
            // Calculamos la posición en el patrón de 6 cards
            const patternPosition = index % 6;
            
            // Definimos las características según la posición en el patrón
            let colSpan = 1;
            let isLarge = false;
            
            // Patrón: [2 col] [1 col] [1 col] | [1 col] [1 col] [2 col]
            if (patternPosition === 0 || patternPosition === 5) {
              colSpan = 2;
              isLarge = true;
            }
            
            return (
              <AnimatedSection 
                key={index}
                animation="fadeInUp" 
                delay={0.2 + (index * 0.2)} 
                className={colSpan === 2 ? "col-span-2" : ""}
              >
                <div 
                  className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 relative h-full transform hover:scale-[1.02] hover:z-10"
                  style={{
                    padding: isLarge ? '2rem' : '1.5rem'
                  }}
                >
                  <h3 
                    className={`font-semibold text-gray-900 ${isLarge ? 'text-xl mb-4' : 'text-lg mb-3'}`}
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    {service.title}
                  </h3>
                  <button 
                    className={`absolute ${isLarge ? 'bottom-4 right-4 w-10 h-10' : 'bottom-3 right-3 w-8 h-8'} bg-cyan-400 hover:bg-cyan-300 rounded-full flex items-center justify-center transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0`}
                  >
                    <svg 
                      className={`${isLarge ? 'w-5 h-5' : 'w-4 h-4'} text-white`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
