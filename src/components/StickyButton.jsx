import IconoDondeEstamos from '../assets/icono-donde-estamos.png'

const StickyButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <a 
        href="https://wa.me/573001234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden rounded-full shadow-lg"
        style={{ backgroundColor: '#36A9E1' }}
      >
        {/* Icono Donde Estamos */}
        <div className="">
          <img 
            src={IconoDondeEstamos}
            alt="Donde encontrarnos"
            className="w-20 h-20" 
          />
        </div>
        
        {/* Message Text (only visible on hover) */}
        <div className="max-w-0 group-hover:max-w-xs group-hover:pr-4 transition-all duration-300 ease-in-out overflow-hidden">
          <span 
            className="text-sm font-medium whitespace-nowrap text-white"
            style={{ fontFamily: 'Caviar Dreams' }}
          >
            ¡Estamos en constante crecimiento!
          </span>
        </div>
      </a>
    </div>
  )
}

export default StickyButton