import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
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
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="4" x2="16" y2="16" />
                        <line x1="16" y1="4" x2="4" y2="16" />
                      </svg>
                    </button>
                    <div className="flex items-center justify-center w-full cursor-pointer">
                      <span className="text-gray-900 text-base font-semibold mr-2" style={{ fontFamily: 'Caviar Dreams' }}>Chatea con nosotros</span>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#292C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
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
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="4" x2="16" y2="16" />
                        <line x1="16" y1="4" x2="4" y2="16" />
                      </svg>
                    </button>
                    <div className="flex items-center justify-center w-full cursor-pointer">
                      <span className="text-gray-900 text-base font-semibold mr-2" style={{ fontFamily: 'Caviar Dreams' }}>Llámanos: +57&nbsp;601 3572954</span>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#292C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" />
                      </svg>
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