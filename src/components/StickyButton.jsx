import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
              <div className="flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden divide-y divide-gray-200">
                {/* Botón de mensaje */}
                <button
                  className="flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setShowMessage(true)}
                  aria-label="Enviar mensaje"
                >
                  {/* Icono de mensaje */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#292C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </button>
                {/* Botón de teléfono */}
                <button
                  className="flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setShowPhone(true)}
                  aria-label="Llamar"
                >
                  {/* Icono de teléfono */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#292C3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                </button>
                {/* Botón de WhatsApp */}
                <button
                  className="flex items-center justify-center p-4 hover:bg-gray-100 transition-colors duration-200"
                  onClick={handleWhatsAppClick}
                  aria-label="WhatsApp"
                >
                  {/* Icono WhatsApp */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#292C3A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                  </svg>
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