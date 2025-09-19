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
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col w-full">
        <div 
          className="p-4 text-center h-20 flex items-center justify-center cursor-pointer flex-shrink-0"
          style={{ backgroundColor: headerColor }}
          onClick={handleToggle}
        >
          <h3 
            className="text-white font-semibold text-lg text-center"
          >
            {card.title}
          </h3>
        </div>
        
        {/* Contenido con animación de acordeón */}
        <div 
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-6">
            <p 
              className="text-black text-sm leading-relaxed"
            >
              {card.description}
            </p>
          </div>
          {/* Card Footer dentro del contenido expandido */}
          <div className="p-4 flex justify-end items-center">
            <IconoHokma size={42} color="#dfdfdf" />
          </div>
        </div>
      
      </div>
    </AnimatedSection>
  )
}

export default CardInformativa