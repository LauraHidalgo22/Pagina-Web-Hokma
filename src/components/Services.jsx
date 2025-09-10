import SectionTitle from './SectionTitle'
import AnimatedSection from './AnimatedSection'
import fondoSeccionDos from '../assets/fondo_seccion_dos.png'
import serviciosImage from '../assets/Servicios.png'

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
          <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
        </svg>
      ),
      title: "Desarrollo de software a la medida",
      description: "Creamos aplicaciones y plataformas personalizadas que se ajustan 100% a las necesidades de tu negocio"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
          <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
        </svg>
      ),
      title: "Integración de sistemas",
      description: "Conectamos tus sistemas y herramientas para que trabajen juntos de forma ágil y eficiente."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
          <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
        </svg>
      ),
      title: "Consultoría tecnológica",
      description: "Te asesoramos para definir la mejor estrategia digital y optimizar tus procesos con soluciones innovadoras."
    }
  ]

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

        {/* Layout principal: Imagen izquierda, Cards derecha */}
        <div className="flex gap-8 items-stretch">
          {/* Columna izquierda - Imagen (1/4 del espacio) */}
          <AnimatedSection animation="fadeInLeft" className="w-1/4 flex-shrink-0">
            <img 
              src={serviciosImage} 
              alt="Servicios Hokma Technologies" 
              className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 object-cover"
              style={{ height: '100%', minHeight: '300px' }}
            />
          </AnimatedSection>

          {/* Columna derecha - Cards (3/4 del espacio) */}
          <div className="flex-1" style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
            {/* Primera fila - 2 cards */}
            <div className="flex mb-2" style={{ gap: '10px' }}>
              {/* Primera tarjeta */}
              <AnimatedSection animation="fadeInRight" delay={0.2} className="flex-1 hover:flex-[1.5] transition-all duration-500">
                <div 
                  className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 relative h-full transform hover:scale-[1.02] hover:z-10"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Caviar Dreams' }}>
                    {services[0].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Caviar Dreams' }}>
                    {services[0].description}
                  </p>
                  {/* Botón en la esquina inferior derecha */}
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-cyan-400 hover:bg-cyan-300 rounded-full flex items-center justify-center transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </AnimatedSection>
              
              {/* Segunda tarjeta */}
              <AnimatedSection animation="fadeInRight" delay={0.4} className="flex-1 hover:flex-[1.5] transition-all duration-500">
                <div 
                  className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 relative h-full transform hover:scale-[1.02] hover:z-10"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Caviar Dreams' }}>
                    {services[1].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Caviar Dreams' }}>
                    {services[1].description}
                  </p>
                  {/* Botón en la esquina inferior derecha */}
                  <button className="absolute bottom-4 right-4 w-10 h-10 bg-cyan-400 hover:bg-cyan-300 rounded-full flex items-center justify-center transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              </AnimatedSection>
            </div>

            {/* Segunda fila - 1 card completa */}
            <AnimatedSection animation="fadeInRight" delay={0.6}>
              <div 
                className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 relative transform hover:scale-[1.02] hover:z-10"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Caviar Dreams' }}>
                  {services[2].title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'Caviar Dreams' }}>
                  {services[2].description}
                </p>
                {/* Botón en la esquina inferior derecha */}
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-cyan-400 hover:bg-cyan-300 rounded-full flex items-center justify-center transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
