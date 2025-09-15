const IconoHokma = ({ size = 24, color = "#ffffff" }) => {
  // Calcular el tamaño de cada punto basado en el tamaño total (más grandes)
  const dotSize = Math.floor(size / 4) // Dividido entre 4.5 para puntos más grandes
  
  return (
    <div 
      className="grid grid-cols-3 inline-block"
      style={{ 
        width: `${size}px`,
        height: `${size}px`
      }}
    >
      {/* Generar 9 puntos (3x3) */}
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className="rounded-full"
          style={{
            backgroundColor: color,
            width: `${dotSize}px`,
            height: `${dotSize}px`
          }}
        />
      ))}
    </div>
  )
}

export default IconoHokma
