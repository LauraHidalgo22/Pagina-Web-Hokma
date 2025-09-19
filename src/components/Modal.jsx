import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ isOpen, onClose, children, title = "", maxWidth = "max-w-4xl" }) => {
  // Prevenir scroll del body cuando el modal esté abierto
  useEffect(() => {
    if (isOpen) {
      // Prevenir scroll del body cuando el modal esté abierto
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // No renderizar nada si el modal no está abierto
  if (!isOpen) return null

  // Obtener el elemento modal-root
  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  // Variantes de animación para el backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  // Variantes de animación para el modal
  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: -50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: -50,
      transition: {
        duration: 0.2
      }
    }
  }

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={backdropVariants}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay/Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Modal Container */}
          <motion.div 
            className={`relative bg-white rounded-2xl shadow-2xl ${maxWidth} max-h-[90vh] w-full mx-4 overflow-hidden`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            {/* Header con botón de cierre */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {title && (
                <h2 
                  className="text-2xl font-bold text-gray-800"
                  style={{ fontFamily: 'Caviar Dreams' }}
                >
                  {title}
                </h2>
              )}
              
              {/* Botón de cierre */}
              <button
                onClick={onClose}
                className="ml-auto p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
                aria-label="Cerrar modal"
              >
                <svg 
                  className="w-6 h-6 text-gray-600 group-hover:text-gray-800 transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            
            {/* Contenido del modal */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    modalRoot
  )
}

export default Modal