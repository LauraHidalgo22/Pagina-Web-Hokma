import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import IconoHokma from './IconoHokma'

const CardInformativa = ({ 
  card, 
  index, 
  delay = 0.1,
  colors = ['#95C121', '#3BBEE8', '#F39323', '#8E3089', '#0097DA', '#913B8E'],
  isExpanded = false,
  onToggle = null
}) => {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const headerColor = colors[index % colors.length];
  
  // Usar estado externo si se proporciona, sino usar estado interno
  const expanded = onToggle ? isExpanded : internalExpanded
  const handleToggle = onToggle ? () => onToggle(index) : () => setInternalExpanded(!internalExpanded)

  return (
    <AnimatedSection animation="fadeInUp" delay={delay + (index * 0.1)}>
      <div className={`bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer flex flex-col w-full ${
        expanded ? 'shadow-2xl' : ''
      }`}>
        <div 
          className="p-4 text-center h-20 flex items-center justify-between cursor-pointer flex-shrink-0 rounded-xl"
          style={{ backgroundColor: headerColor }}
          onClick={handleToggle}
        >
          <div className='mr-2'>
            {card.icon}
          </div>
          <h3 
            className="text-white font-semibold text-lg text-center flex-grow"
          >
            {card.title}
          </h3>
          {/* Icono de acordeón */}
          <div className="ml-2">
            <svg 
              className={`w-6 h-6 text-white transition-transform duration-500 ease-in-out ${
                expanded ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 9l-7 7-7-7" 
              />
            </svg>
          </div>
        </div>
        
        {/* Contenido con animación de acordeón fluida */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`transform transition-all duration-300 ${
            expanded ? 'translate-y-0 scale-100' : 'translate-y-2 scale-95'
          }`}>
            <div className="p-6">
              <p 
                className="text-black text-sm leading-relaxed"
              >
                {card.description}
              </p>
            </div>
            {/* Card Footer */}
            <div className="p-4 flex justify-end items-center">
              <IconoHokma size={42} color="#dfdfdf" />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default CardInformativa