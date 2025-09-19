import { useState } from 'react'
import ImagenDondeEstamos from '../assets/Donde-estamos.png'
import IconoDondeEstamos from '../assets/icono-donde-estamos.png'
import LogoHokmaGlobalGroup from '../assets/logo-hokma-global-group-menu.png'
import Modal from './Modal'
import IconoHokma from './IconoHokma'

const DondeEstamosButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = (e) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <img 
        src={IconoDondeEstamos}
        alt="Donde encontrarnos"
        onClick={handleButtonClick}
        className="w-32 h-32 cursor-pointer transition-transform duration-300 hover:scale-110 hover:drop-shadow-lg" 
      />

      {/* Modal - ahora el ReactPortal está dentro del componente Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
        title="¡Estamos en constante crecimiento!"
        maxWidth="max-w-[80%]"
      >
        <div className="space-y-6">
          <div className="text-center">
            <img 
              src={ImagenDondeEstamos}
              alt="Donde encontrarnos"
              className="w-full h-auto max-h-[56vh] object-contain mx-auto mb-4" 
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

export default DondeEstamosButton