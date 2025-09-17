import AnimatedSection from './AnimatedSection'
import IconoHokma from './IconoHokma'

const CardInformativa = ({ 
  card, 
  index, 
  delay = 0.1,
  colors = ['#95C121', '#3BBEE8', '#F39323', '#8E3089', '#0097DA', '#913B8E']
}) => {
  const headerColor = colors[index % colors.length];

  return (
    <AnimatedSection animation="fadeInUp" delay={delay + (index * 0.1)}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col">
        <div 
          className="p-4 text-center h-20 flex items-center justify-center"
          style={{ backgroundColor: headerColor }}
        >
          <h3 
            className="text-white font-semibold text-lg text-center"
          >
            {card.title}
          </h3>
        </div>
        <div className="p-6 flex-grow">
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
    </AnimatedSection>
  )
}

export default CardInformativa