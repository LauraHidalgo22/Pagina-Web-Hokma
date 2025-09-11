import { } from 'react'

const SectionTitle = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <div className={`relative flex items-start justify-start ${className}`} {...props}>
      {/* Título principal */}
      <h2 
        className="relative z-10 text-left font-bold text-gray-800"
        style={{
          fontFamily: 'Caviar Dreams, sans-serif',
          fontSize: '40pt',
          lineHeight: '1.1'
        }}
      >
        {children}
      </h2>
    </div>
  )
}

export default SectionTitle
