const IconoHokma = ({ size = 24, color = "#ffffff" }) => {
  // Calcular el tamaño de cada punto basado en el tamaño total
  const dotSize = Math.floor(size / 6) // Dividido entre 6 para dar espacio a gaps y puntos
  
  return (
    <div 
      className="grid grid-cols-3 gap-2 inline-block"
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
