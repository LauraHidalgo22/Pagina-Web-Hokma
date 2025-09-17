import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ isOpen, onClose, children, title = "", maxWidth = "max-w-4xl" }) => {
  // Cerrar modal al presionar Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevenir scroll del body cuando el modal esté abierto
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // No renderizar nada si el modal no está abierto
  if (!isOpen) return null

  // Obtener el elemento modal-root
  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay/Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className={`relative bg-white rounded-2xl shadow-2xl ${maxWidth} max-h-[90vh] w-full mx-4 overflow-hidden animate-in zoom-in duration-300`}>
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
      </div>
    </div>,
    modalRoot
  )
}

export default Modal