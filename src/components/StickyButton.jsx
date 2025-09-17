import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ImagenDondeEstamos from '../assets/Donde-estamos.png'
import LogoHokmaGlobalGroup from '../assets/logo-hokma-global-group-menu.png'
import Modal from './Modal'
import IconoHokma from './IconoHokma'
import { useAppContext } from '../context/AppContext'

const StickyButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { isScrolled } = useAppContext();

  const handleButtonClick = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {/* Solo mostrar cuando hay scroll con animación de entrada y salida */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            className="fixed bottom-6 right-6 z-50 group"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button 
              onClick={handleButtonClick}
              className="flex items-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden rounded-full shadow-lg cursor-pointer"
              style={{ backgroundColor: '#25D366' }}
            >
              {/* Icono WhatsApp */}
              <div className="flex items-center justify-center p-4">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
              </div>
              
              {/* Message Text (only visible on hover) */}
              <div className="max-w-0 group-hover:max-w-xs group-hover:pr-4 transition-all duration-300 ease-in-out overflow-hidden">
                <span 
                  className="text-sm font-medium whitespace-nowrap text-white"
                  style={{ fontFamily: 'Caviar Dreams' }}
                >
                  Chatea con nosotros
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal - ahora el ReactPortal está dentro del componente Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="¡Estamos en constante crecimiento!"
      >
        <div className="space-y-6">
          <div className="text-center">
            <img 
              src={ImagenDondeEstamos}
              alt="Donde encontrarnos"
              className="w-full mx-auto mb-4" 
            />
          </div>
          {/*Footer Card*/}
          <div className='px-6 w-full flex flex-row justify-between items-center bg-[#242939] rounded-lg'>
            <div className='flex flex-row items-center gap-4'>
                <IconoHokma size={40}/>
                <div className='flex flex-col'>
                  <h3 
                    className='text-2xl font-bold text-white mb-1'
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    Nuestra Huella Global
                  </h3>
                </div>
            </div>
            <div className='flex-shrink-0'>
                <img
                    src={LogoHokmaGlobalGroup}
                    alt='Logo Hokma Global Group'
                    className='w-32 h-32 object-contain'
                />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default StickyButton