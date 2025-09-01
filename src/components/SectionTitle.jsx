import bordeCorporativo from '../assets/borde_corporativo.png'

const SectionTitle = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <div className={`relative flex items-start justify-start ${className}`} {...props}>
      {/* Imagen de borde corporativo detrás de la primera letra */}
      <div 
        className="absolute opacity-60 pointer-events-none"
        style={{
          backgroundImage: `url(${bordeCorporativo})`,
          backgroundSize: '134px 126px',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          width: '134px',
          height: '126px',
          zIndex: 1,
          left: '0px',
          top: '50%',
          transform: 'translateY(-50%) rotate(180deg)'
        }}
      ></div>
      
      {/* Título principal */}
      <h2 
        className="relative z-10 text-left font-bold text-gray-800"
        style={{
          fontFamily: 'Caviar Dreams, sans-serif',
          fontSize: '40pt',
          lineHeight: '1.1',
          paddingLeft: '30px'
        }}
      >
        {children}
      </h2>
    </div>
  )
}

export default SectionTitle
