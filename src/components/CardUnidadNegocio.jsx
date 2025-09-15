import IconoHokma from './IconoHokma'

const CardUnidadNegocio = ({ 
  color = "#ffffff", 
  imagen, 
  backgroundColor = "#292C3A" 
}) => {
  return (
    <div 
      className="rounded-3xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
      style={{ backgroundColor }}
    >
      <div className="grid grid-cols-2 gap-6 items-center">
        {/* Primera columna - Icono Hokma */}
        <div className="flex justify-center">
          <IconoHokma size={60} color={color} />
        </div>
        
        {/* Segunda columna - Imagen */}
        <div className="flex justify-center">
          <img 
            src={imagen} 
            alt="Unidad de Negocio"
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default CardUnidadNegocio
