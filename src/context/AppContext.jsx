import React, { createContext, useContext, useState, useEffect } from 'react'
import ImpulsoCrecimiento from '../assets/CarruselProductos/impulso_crecimiento 1.jpg'
import DisenoExitoso from '../assets/CarruselProductos/diseño_exitoso.jpg'
import EficienciaEmpresarial from '../assets/CarruselProductos/eficiencia_empresarial.jpg'
import DecisionesEmpresariales from '../assets/CarruselProductos/decisiones_empresariales.jpg'
import InnovacionTecnologica from '../assets/CarruselProductos/innovacion_tecnológica.jpg'
import SoporteEspecializado from '../assets/CarruselProductos/soporte_especializado.jpg'
import EmpleadaImg from '../assets/empleada.jpg'
import HokmaFedesoft from '../assets/hokma_fedesoft.png'
import HokmaMicrosoft from '../assets/hokma_microsoft.png'
import logoHokmaLight from '../assets/logo-hokma-technologies.png'
import logoHokmaRobotics from '../assets/logo-hokma-robotics.png'
import logoHokmaEnergy from '../assets/logo-hokma-energy.png'
import logoHokmaGlobalComunications from '../assets/logo-hokma-global-communications.png'
import logoHokmaBiotech from '../assets/logo-hokma-biotech.png'

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

  // Estados del componente EquipoTrabajo
  const [activeCard, setActiveCard] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Estados del componente Header
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Estados del componente Hero
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)

  // Estados del componente NuestrosAliados
  const [currentAllyIndex, setCurrentAllyIndex] = useState(0)

  // Estados del componente UnidadesNegocio
  const [selectedCard, setSelectedCard] = useState(null)
  
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

  // Array de miembros del equipo
  const teamMembers = [
    {
      id: 1,
      name: "Valeria Rojas Sanchez",
      position: "Desarrollador FullStack",
      photo: EmpleadaImg,
      description: "Especialista en desarrollo web con experiencia en React, Node.js y bases de datos. Apasionada por crear soluciones innovadoras y interfaces de usuario intuitivas."
    },
    {
      id: 2,
      name: "Alfonso Vasquez Sepulveda", 
      position: "Gerente General",
      photo: EmpleadaImg,
      description: "Líder estratégico con más de 10 años de experiencia en gestión empresarial y desarrollo de negocios tecnológicos. Enfocado en la excelencia operacional."
    },
    {
      id: 3,
      name: "Paulo Cesar De La Cruz",
      position: "CEO",
      photo: EmpleadaImg,
      description: "Visionario tecnológico y emprendedor con amplia experiencia en la industria del software. Especializado en transformación digital y estrategia empresarial."
    },
    {
      id: 4,
      name: "Laura Valentina Hidalgo",
      position: "Desarrollador FullStack", 
      photo: EmpleadaImg,
      description: "Desarrolladora versátil con expertise en tecnologías frontend y backend. Comprometida con la calidad del código y las mejores prácticas de desarrollo."
    },
    {
      id: 5,
      name: "Carlos Eduardo Martinez",
      position: "Analista de Sistemas",
      photo: EmpleadaImg,
      description: "Experto en análisis y diseño de sistemas empresariales. Especializado en optimización de procesos y arquitectura de software escalable."
    },
    {
      id: 6,
      name: "Maria Fernanda Lopez",
      position: "UX/UI Designer",
      photo: EmpleadaImg,
      description: "Diseñadora creativa con enfoque en experiencia de usuario. Apasionada por crear interfaces intuitivas y visualmente atractivas que mejoren la interacción."
    },
    {
      id: 7,
      name: "Andrés Felipe Torres",
      position: "DevOps Engineer",
      photo: EmpleadaImg,
      description: "Ingeniero especializado en infraestructura y automatización. Experto en deployment continuo, containerización y optimización de sistemas en la nube."
    },
    {
      id: 8,
      name: "Isabella Rodriguez Castro",
      position: "Product Manager",
      photo: EmpleadaImg,
      description: "Gestora de productos con visión estratégica. Enfocada en el desarrollo de soluciones que generen valor real para los usuarios y el negocio."
    }
  ]

  const carouselSlides = [
    {
      title: "Los cambios te confrontan",
      subtitle: "La tecnología los transforma",
      description: "Transformamos ideas en soluciones tecnológicas innovadoras. En Hokma Technologies, cada desafío es una oportunidad para crear el futuro."
    },
    {
      title: "Tu visión empresarial",
      subtitle: "Nuestra innovación tecnológica",
      description: "Potenciamos tu negocio con herramientas digitales avanzadas. Convierte tus objetivos estratégicos en realidades tecnológicas medibles."
    },
    {
      title: "Desafíos complejos",
      subtitle: "Soluciones inteligentes",
      description: "Analizamos, diseñamos e implementamos sistemas que optimizan procesos. La complejidad de hoy es la eficiencia de mañana."
    },
    {
      title: "El futuro de tu negocio",
      subtitle: "Comienza con decisiones digitales",
      description: "Adelántate a las tendencias del mercado con tecnología de vanguardia. Tu competitividad depende de las decisiones que tomes hoy."
    },
    {
      title: "Transformación digital",
      subtitle: "Resultados exponenciales",
      description: "Impulsa el crecimiento sostenible de tu empresa. Conectamos estrategia, tecnología y resultados para maximizar tu ROI."
    }
  ]

  // clases base del CTAButton
  const baseClasses = "group relative px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg w-[300px] h-[70px] flex items-center justify-center"
  
  // clases variantes del base del CTAButton
  const variants = {
    primary: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-300 hover:to-blue-400 hover:shadow-cyan-500/25",
    secondary: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900"
  }

  // Array de aliados
    const allies = [
        {
            id: 1,
            name: "Fedesoft",
            image: HokmaFedesoft,
            alt: "Hokma Technologies - Aliado Fedesoft"
        },
        {
            id: 2,
            name: "Microsoft",
            image: HokmaMicrosoft,
            alt: "Hokma Technologies - Aliado Microsoft"
        }
    ]

    const services = [
        {
        icon: (
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
            <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
            </svg>
        ),
        title: "Desarrollo de software a la medida",
        description: "Creamos aplicaciones y plataformas personalizadas que se ajustan 100% a las necesidades de tu negocio"
        },
        {
        icon: (
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
            <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
            </svg>
        ),
        title: "Integración de sistemas",
        description: "Conectamos tus sistemas y herramientas para que trabajen juntos de forma ágil y eficiente."
        },
        {
        icon: (
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
            <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
            </svg>
        ),
        title: "Consultoría tecnológica",
        description: "Te asesoramos para definir la mejor estrategia digital y optimizar tus procesos con soluciones innovadoras."
        }
    ]

    // Lista de imágenes para el carrusel
    const unidades = [
        {
            id: 1,
            imagen: logoHokmaLight,
            alt: "Hokma Technologies",
            color: "#ffffff"
        },
        {
            id: 2,
            imagen: logoHokmaRobotics,
            alt: "Hokma Robotics",
            color: "#ff9900"
        },
        {
            id: 3,
            imagen: logoHokmaEnergy,
            alt: "Hokma Energy",
            color: "#A6C139"
        },
        {
            id: 4,
            imagen: logoHokmaGlobalComunications,
            alt: "Hokma Global Communications",
            color: "#0097DA"
        },
        {
            id: 5,
            imagen: logoHokmaBiotech,
            alt: "Hokma BioTech",
            color: "#913B8E"
        }
    ]

  // Efecto para manejar el scroll (movido desde About.jsx)
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detectar el scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [carouselSlides.length])

  // Efecto para el slider automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAllyIndex((prevIndex) => 
        prevIndex === allies.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [allies.length])

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

  // Funciones del componente EquipoTrabajo
  const teamSlides = []
  for (let i = 0; i < teamMembers.length; i += 4) {
    teamSlides.push(teamMembers.slice(i, i + 4))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamSlides.length)
    setActiveCard(null) // Reset active card when changing slide
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamSlides.length) % teamSlides.length)
    setActiveCard(null) // Reset active card when changing slide
  }

  const handleEmployeeCardClick = (memberId) => {
    setActiveCard(activeCard === memberId ? null : memberId)
  }

  // Funciones del componente UnidadesNegocio
  // Función para manejar la selección de cards
  const handleCardSelect = (unidadId) => {
    setSelectedCard(selectedCard === unidadId ? null : unidadId)
  }

  // Obtener el color del contenedor basado en la card seleccionada
  const getContainerColor = () => {
    if (selectedCard) {
      const selectedUnidad = unidades.find(unidad => unidad.id === selectedCard)
      return selectedUnidad ? selectedUnidad.color : '#292C3A'
    }
    return '#F3F4F6'
  }

  // Funciones del componente Header
  // Función para scroll suave a las secciones
  const smoothScrollTo = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.querySelector(targetId)
    
    if (targetElement) {
      const headerHeight = isScrolled ? 72 : 160 // altura del header
      const targetPosition = targetElement.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
      
      // Cerrar menú móvil después del click
      setIsMenuOpen(false)
    }
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
    baseClasses,
    variants,
    activeCard,
    currentSlide,
    teamSlides,
    isMenuOpen,
    isScrolled,
    currentHeroSlide,
    carouselSlides,
    currentAllyIndex,
    allies,
    services,
    selectedCard,
    unidades,
    
    // Setters
    setScrollY,
    setCurrentImageIndex,
    setActiveCardIndex,
    setFormData,
    setActiveCard,
    setCurrentSlide,
    setIsMenuOpen,
    setIsScrolled,
    setCurrentHeroSlide,
    setCurrentAllyIndex,
    setSelectedCard,
    
    // Funciones
    handleCardClick,
    handleIndicatorClick,
    handleChange,
    handleSubmit,
    nextSlide,
    prevSlide,
    handleEmployeeCardClick,
    smoothScrollTo,
    handleCardSelect,
    getContainerColor,
    
    
    // Funciones de animación
    setElementVisible,
    setElementHidden,
    isElementVisible,
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
