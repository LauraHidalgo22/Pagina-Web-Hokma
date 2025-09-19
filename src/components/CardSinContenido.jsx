import AnimatedSection from './AnimatedSection'
import IconoHokma from './IconoHokma'
import { useAppContext } from '../context/AppContext'

const CardSinContenido = ({ 
  service, 
  index, 
  colSpan = 1, 
  isLarge = false, 
  delay = 0.2 
}) => {
  const { getContainerColor } = useAppContext()
  
  return (
    <AnimatedSection 
      animation="fadeInUp" 
      delay={delay + (index * 0.2)} 
      className={colSpan === 2 ? "md:col-span-2" : ""}
    >
      <div 
        className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border border-gray-200 hover:border-gray-300 transition-all duration-500 relative h-full transform hover:scale-[1.02] hover:z-10 flex items-center justify-start"
        style={{
          padding: isLarge ? '1rem' : '0.5rem'
        }}
      >
        <h3 
          className={`font-semibold text-xl text-left ${isLarge ? 'mb-4' : 'mb-3'}`}
          style={{ 
            color: getContainerColor() != '#F3F4F6' ? 
              getContainerColor() != "#ffffff" ? 
                getContainerColor() : "#000000" : "#000000" 
          }}
        >
          {service.title}
        </h3>
        <div 
          className={`absolute ${isLarge ? 'bottom-4 right-4' : 'bottom-3 right-3'}`}
        >
          <IconoHokma size={isLarge ? 42 : 32} color="#dfdfdf" />
        </div>
      </div>
    </AnimatedSection>
  )
}

export default CardSinContenido