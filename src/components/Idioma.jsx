import IconoHokma from './IconoHokma'

const Idioma = () => {
  return (
    <div className="flex items-center gap-1 text-white">
      <IconoHokma size={12} color="#ffffff" />
      <b className="transition-transform duration-200 hover:scale-110 cursor-pointer">ES</b>
      <b>|</b>
      <b className="transition-transform duration-200 hover:scale-110 cursor-pointer">US</b>
      <IconoHokma size={12} color="#ffffff" />
    </div>
  )
}

export default Idioma