import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useAppContext } from '../context/AppContext';

const StickyButton = () => {
  const { isScrolled, handleWhatsAppClick } = useAppContext();
  const [showMessage, setShowMessage] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <>
      {/* Mostrar solo cuando hay scroll con animación */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {!showMessage && !showPhone ? (
              <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Botón de mensaje */}
                <button
                  className="flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setShowMessage(true)}
                  aria-label="Enviar mensaje"
                >
                  {/* Icono de mensaje */}
                  <BiMessage className='w-7 h-7 text-[#292C3A]' />
                </button>
                <div className='w-full flex justify-center items-center'>
                  <div className='border border-gray w-8'></div>
                </div>
                {/* Botón de teléfono */}
                <button
                  className="flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setShowPhone(true)}
                  aria-label="Llamar"
                >
                  {/* Icono de teléfono */}
                  <BsTelephoneOutboundFill className='w-6 h-6 text-[#292C3A]' />
                </button>
                <div className='w-full flex justify-center items-center'>
                  <div className='border border-gray w-8'></div>
                </div>
                {/* Botón de WhatsApp */}
                <button
                  className="flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-200"
                  onClick={handleWhatsAppClick}
                  aria-label="WhatsApp"
                >
                  {/* Icono WhatsApp */}
                  <FaWhatsapp className='w-7 h-7 text-[#292C3A]' />
                </button>
              </div>
            ) : (
              <AnimatePresence>
                {showMessage && (
                  <motion.div
                    key="chat-message"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden justify-center items-center w-full h-full min-h-[112px] min-w-[64px] p-4 relative"
                  >
                    {/* Botón cerrar */}
                    <button
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 p-1 rounded-full transition-colors duration-200"
                      onClick={() => setShowMessage(false)}
                      aria-label="Cerrar mensaje"
                      style={{ lineHeight: 0 }}
                    >
                      <IoMdClose />
                    </button>
                    <div className="flex items-center justify-center w-full cursor-pointer">
                      <span className="text-gray-900 text-base font-semibold mr-2" style={{ fontFamily: 'Caviar Dreams' }}>Chatea con nosotros</span>
                      <BiMessage className='w-7 h-7 text-[#292C3A]' />
                    </div>
                  </motion.div>
                )}
                {showPhone && (
                  <motion.div
                    key="phone-message"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden justify-center items-center w-full h-full min-h-[112px] min-w-[64px] p-4 relative"
                  >
                    {/* Botón cerrar */}
                    <button
                      className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 p-1 rounded-full transition-colors duration-200"
                      onClick={() => setShowPhone(false)}
                      aria-label="Cerrar mensaje"
                      style={{ lineHeight: 0 }}
                    >
                      <IoMdClose />
                    </button>
                    <div className="flex items-center justify-center w-full cursor-pointer">
                      <span className="text-gray-900 text-base font-semibold mr-2" style={{ fontFamily: 'Caviar Dreams' }}>Llámanos: +57&nbsp;601 3572954</span>
                      <BsTelephoneOutboundFill className='w-6 h-6 text-[#292C3A]' />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default StickyButton