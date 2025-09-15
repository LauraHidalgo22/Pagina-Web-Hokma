import React, { createContext, useContext, useState, useEffect } from 'react'
import ImpulsoCrecimiento from '../assets/CarruselProductos/impulso_crecimiento 1.jpg'
import DisenoExitoso from '../assets/CarruselProductos/diseño_exitoso.jpg'
import EficienciaEmpresarial from '../assets/CarruselProductos/eficiencia_empresarial.jpg'
import DecisionesEmpresariales from '../assets/CarruselProductos/decisiones_empresariales.jpg'
import InnovacionTecnologica from '../assets/CarruselProductos/innovacion_tecnológica.jpg'
import SoporteEspecializado from '../assets/CarruselProductos/soporte_especializado.jpg'

// Crear el contexto
const AppContext = createContext()

// Hook personalizado para usar el contexto
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext debe ser usado dentro de un CustomProvider')
  }
  return context
}

// Provider personalizado
export const CustomProvider = ({ children }) => {
  // Estados del componente About
  const [scrollY, setScrollY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  
  // Estados para las animaciones
  const [visibleElements, setVisibleElements] = useState(new Set())
  
  // Estados del componente Contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  
  // Función para manejar la visibilidad de elementos animados
  const setElementVisible = (elementId) => {
    setVisibleElements(prev => new Set([...prev, elementId]))
  }
  
  const setElementHidden = (elementId) => {
    setVisibleElements(prev => {
      const newSet = new Set([...prev])
      newSet.delete(elementId)
      return newSet
    })
  }
  
  const isElementVisible = (elementId) => {
    return visibleElements.has(elementId)
  }

  // Array de imágenes para el carrusel (movido desde About.jsx)
  const images = [
    { src: ImpulsoCrecimiento, alt: "Impulso al crecimiento empresarial" },
    { src: DisenoExitoso, alt: "Diseño exitoso de soluciones" },
    { src: EficienciaEmpresarial, alt: "Eficiencia empresarial" },
    { src: DecisionesEmpresariales, alt: "Decisiones empresariales inteligentes" },
    { src: InnovacionTecnologica, alt: "Innovación tecnológica" },
    { src: SoporteEspecializado, alt: "Soporte especializado" }
  ]

  // Cards data (movido desde About.jsx)
  const cards = [
    { 
      text: "Impulsamos su crecimiento real", 
      emoji: "🚀",
      color: "#292C3A",
      imageIndex: 0
    },
    { 
      text: "Procesos diseñados para su éxito", 
      emoji: "⚡",
      color: "#292C3A",
      imageIndex: 1
    },
    { 
      text: "Entregas rápidas y organizadas", 
      emoji: "📈",
      color: "#292C3A",
      imageIndex: 2
    },
    { 
      text: "Decisiones rápidas y seguras", 
      emoji: "🎯",
      color: "#292C3A",
      imageIndex: 3
    },
    { 
      text: "Innovación y tecnología", 
      emoji: "💡",
      color: "#292C3A",
      imageIndex: 4
    },
    { 
      text: "Soporte especializado", 
      emoji: "🤝",
      color: "#292C3A",
      imageIndex: 5
    }
  ]

  // Efecto para manejar el scroll (movido desde About.jsx)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Efecto para el carrusel automático (movido desde About.jsx)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1
        setActiveCardIndex(nextIndex)
        return nextIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  // Funciones auxiliares
  const handleCardClick = (imageIndex, cardIndex) => {
    setCurrentImageIndex(imageIndex)
    setActiveCardIndex(cardIndex)
  }

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index)
    setActiveCardIndex(index)
  }

  // Funciones del componente Contact
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí se manejaría el envío del formulario
    console.log('Form submitted:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    // Limpiar el formulario después del envío
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  // Valores que se pasarán al contexto
  const contextValue = {
    // Estados
    scrollY,
    currentImageIndex,
    activeCardIndex,
    images,
    cards,
    visibleElements,
    formData,
    
    // Setters
    setScrollY,
    setCurrentImageIndex,
    setActiveCardIndex,
    setFormData,
    
    // Funciones
    handleCardClick,
    handleIndicatorClick,
    handleChange,
    handleSubmit,
    
    // Funciones de animación
    setElementVisible,
    setElementHidden,
    isElementVisible
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
