import AnimatedSection from './AnimatedSection'
import IconoHokma from './IconoHokma'

const CardCarrusel = ({ member, index, activeCard, handleEmployeeCardClick }) => {
  return (
    <AnimatedSection 
      key={member.id}
      animation="fadeInUp" 
      delay={0.1 * index}
      className="group"
    >
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border border-gray-200 transition-all duration-300 transform hover:scale-105">
        {/* Foto del empleado */}
        <div className="aspect-[3/4] overflow-hidden relative">
          <img 
            src={member.photo}
            alt={member.name}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0 ${
              activeCard === member.id ? 'blur-sm' : ''
            }`}
          />
          
          {/* Overlay de texto cuando está activo */}
          {activeCard === member.id && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 animate-in fade-in duration-300">
              <div className="text-center space-y-3">
                <h4 
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: 'Caviar Dreams' }}
                >
                  {member.name}
                </h4>
                <p 
                  className="text-blue-300 font-medium text-sm"
                  style={{ fontFamily: 'Caviar Dreams' }}
                >
                  {member.position}
                </p>
                <p 
                  className="text-gray-200 text-sm leading-relaxed"
                  style={{ fontFamily: 'Caviar Dreams' }}
                >
                  {member.description}
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Overlay con información (solo visible cuando no está activo) */}
        {activeCard !== member.id && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
            <h4 
              className="text-white font-bold text-sm mb-1"
              style={{ fontFamily: 'Caviar Dreams' }}
            >
              {member.name}
            </h4>
            <p 
              className="text-gray-200 text-xs"
              style={{ fontFamily: 'Caviar Dreams' }}
            >
              {member.position}
            </p>
          </div>
        )}
        
        {/* Icono de plus azul */}
        <button 
          onClick={() => handleEmployeeCardClick(member.id)}
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            activeCard === member.id 
              ? 'bg-red-500 hover:bg-red-400 rotate-45' 
              : 'bg-blue-500 hover:bg-blue-400'
          }`}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>

        {/* IconoHokma en la esquina inferior derecha */}
        <div className="absolute bottom-4 right-4">
          <IconoHokma size={42} color="#dfdfdf" />
        </div>
      </div>
    </AnimatedSection>
  )
}

export default CardCarrusel