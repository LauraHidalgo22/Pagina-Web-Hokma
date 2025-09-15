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
      className={`rounded-3xl px-6 shadow-lg transition-all duration-300 cursor-pointer ${
        isSelected 
          ? 'scale-105' 
          : 'transform hover:scale-105'
      }`}
      style={{ backgroundColor }}
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
