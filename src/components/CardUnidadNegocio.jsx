import IconoHokma from './IconoHokma'

const CardUnidadNegocio = ({ 
  color = "#ffffff", 
  imagen, 
  backgroundColor = "#292C3A",
  isSelected = false,
  onSelect
}) => {
  return (
    <div 
      className={`rounded-3xl px-6 py-3 shadow-2xl drop-shadow-lg transition-all duration-300 cursor-pointer ${
        isSelected 
          ? 'scale-105 shadow-3xl' 
          : 'transform hover:scale-105 hover:shadow-3xl'
      }`}
      style={{ 
        backgroundColor,
        boxShadow: isSelected 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 10px 20px -5px rgba(0, 0, 0, 0.2)' 
          : '0 20px 40px -8px rgba(0, 0, 0, 0.3), 0 8px 16px -4px rgba(0, 0, 0, 0.15)'
      }}
      onClick={onSelect}
    >
      <div className="grid py-2 grid-cols-[1fr_3fr] items-center gap-5">
        {/* Primera columna - Icono Hokma */}
        <div className="flex justify-center">
          <IconoHokma size={40} color={color} />
        </div>
        
        {/* Segunda columna - Imagen */}
        <div className="flex justify-center w-48">
          <img 
            src={imagen} 
            alt="Unidad de Negocio"
            className="w-full h-32 object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default CardUnidadNegocio
