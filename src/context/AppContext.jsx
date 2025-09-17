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
import SorpresaLogistica from '../assets/Sorpresa-card-logistica.png'
import SorpresaSalud from '../assets/Sorpresa-card-salud.png'
import SorpresaFinanzas from '../assets/Sorpresa-card-finanzas.png'
import SorpresaGobierno from '../assets/Sorpresa-card-gobierno.png'

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
  const [activeAllyCard, setActiveAllyCard] = useState(null)

  // Estados del componente NuestrosClientes
  const [activeClientCard, setActiveClientCard] = useState(null)

  // Estados del componente UnidadesNegocio
  const [selectedCard, setSelectedCard] = useState(0) // Por defecto selecciona el primer elemento
  
  // Estados para la animación de Services
  const [isServicesAnimating, setIsServicesAnimating] = useState(false)
  
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
      title: "Desarrollo de software a la medida y plataformas digitales",
      description: "Integramos tecnologías de la información, robótica, energía, comunicaciones y biotecnología para crear soluciones sostenibles y de impacto global."
    },
    {
      title: "El poder de la tecnología al servicio de la vida, la industria y el futuro",
      description: "Desde la biotecnología hasta la robótica, construimos un ecosistema que impacta personas, empresas y sectores estratégicos."
    },
    {
      title: "Donde la visión se convierte en soluciones reales",
      description: "Conectamos estrategia, tecnología y talento para convertir desafíos empresariales en oportunidades de crecimiento exponencial."
    },
    {
      title: "Más que empresas: un ecosistema de impacto y vanguardia",
      description: "Somos un grupo que integra ciencia, tecnología e innovación para generar valor sostenible y liderar la transformación digital y social."
    },
    {
      title: "Transformamos desafíos en oportunidades globales",
      description: "Nuestro grupo empresarial impulsa la competitividad con innovación disruptiva, ciencia aplicada y tecnología de vanguardia."
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
            id: 101,
            name: "Fedesoft",
            image: HokmaFedesoft,
            alt: "Hokma Technologies - Aliado Fedesoft",
            subtitle: "Federación Colombiana de Software y TI",
            description: "Trabajamos con la principal gremio tecnológico de Colombia para fortalecer el ecosistema de software y tecnología del país."
        },
        {
            id: 102,
            name: "Microsoft",
            image: HokmaMicrosoft,
            alt: "Hokma Technologies - Aliado Microsoft",
            subtitle: "Tecnología de clase mundial",
            description: "Partner estratégico que nos permite ofrecer soluciones empresariales con tecnología Microsoft de última generación."
        }
    ]

    // Array de clientes
    const clients = [
        {
            id: 201,
            name: "Sector Logístico",
            description: "“¿Curioso por saber a quién ayudamos ?  Llámanos y lo hablamos.”",
            color: "#36A9E1",
            imageOverlay: SorpresaLogistica
        },
        {
            id: 202,
            name: "Sector Salud",
            description: "“Sí, la innovación también salva vidas pero esa historia te la contamos en privado.”",
            color: "#95C11F",
            imageOverlay: SorpresaSalud
        },
        {
            id: 203,
            name: "Sector Financiero",
            description: "“Ya ayudamos a que los números cuadren  ¿te da intriga? Descúbrelo con nosotros.”",
            color: "#F39323",
            imageOverlay: SorpresaFinanzas
        },
        {
            id: 204,
            name: "Sector Gobierno",
            description: "“La innovación también toca las puertas del gobierno … aunque no lo publiquemos aquí.”",
            color: "#8E3089",
            imageOverlay: SorpresaGobierno
        }
    ]

    const services = [
        {
          title: "Automatización de procesos industriales y empresariales."
        },
        {
          title: "Robótica aplicada a manufactura, logística y servicios.",
        },
        {
          title: "Desarrollo de sistemas autónomos e inteligentes.",
        },
        {
          title: "Integración de IA en soluciones robóticas.",
        },
        {
          title: "Innovación en cibernética para mejorar productividad y precisión.",
        },
        {
          title: "La robótica convierte la tecnología en acción. Su impacto se multiplica al integrarse con TI para el control inteligente, con comunicaciones para la conectividad en tiempo real y con energía para operar de manera sostenible. Es el puente entre lo digital y lo físico."
        },
    ]

    const techServices = [
        {
          title: "Desarrollo de software a la medida y plataformas digitales"
        },
        {
          title: "Integración de sistemas y soluciones de software",
        },
        {
          title: "Desarrollo de arquitecturas de software y plataformas tecnológicas",
        },
        {
          title: "Transformación digital y modernización de procesos",
        },
        {
          title: "Analítica de datos e inteligencia de negocio.",
        },
        {
          title: "La TI es el corazón que conecta todo el ecosistema: " +
          "alimenta la robótica con inteligencia, potencia la biotecnología " +
          "con datos, garantiza la seguridad de las comunicaciones y optimiza " +
          "el uso de la energía. Sin esta base digital, ninguna transformación " +
          "sería posible."
        },
    ]

    const energyServices = [
        {
          title: "Soluciones de energías renovables (solar, eólica)."
        },
        {
          title: "Eficiencia energética para empresas e industrias.",
        },
        {
          title: "Proyectos de autogeneración y sostenibilidad.",
        },
        {
          title: "Implementación de tecnologías limpias y sostenibles.",
        },
        {
          title: "Consultoría y diseño de proyectos energéticos innovadores.",
        },
        {
          title: "La energía es la base que da vida a todas las demás líneas. Sin ella no hay datos, ni robótica, ni comunicaciones. Cuando se integra con TI, se vuelve inteligente; con biotecnología, se vuelve sostenible; con comunicaciones, se vuelve distribuida."
        },
    ]

    const globalCommunicationsServices = [
        {
          title: "Infraestructura de telecomunicaciones y redes seguras."
        },
        {
          title: "Gestión integral de proyectos en telecomunicaciones.",
        },
        {
          title: "Implementación de conectividad con tecnologías innovadoras.",
        },
        {
          title: "Soluciones IoT (Internet de las cosas) para empresas.",
        },
        {
          title: "Plataformas de comunicación unificada y colaborativa.",
        },
        {
          title: "Las comunicaciones son el sistema nervioso del ecosistema. Permiten que la TI, la robótica, la biotecnología y la energía se hablen entre sí. Sin conectividad no hay integración, y sin integración no hay transformación. Es la red que lo hace todo posible."
        },
    ]

    const biotechServices = [
        {
          title: "Desarrollo de bioproductos y bioprocesos sostenibles."
        },
        {
          title: "Producción de biocombustibles y biomateriales",
        },
        {
          title: "Soluciones ambientales basadas en biotecnología",
        },
        {
          title: "Aplicaciones en salud: fármacos, vacunas y bioensayos",
        },
        {
          title: "Biotecnología agrícola para cultivos más productivos",
        },
        {
          title: "La biotecnología representa el impacto humano y ambiental " +
          "del ecosistema. Al integrarse con TI, gana capacidad de análisis; con " +
          "comunicaciones, logra escalabilidad; con energía, alcanza sostenibilidad; " +
          "y con robótica, adquiere precisión. Es la línea que une la innovación."
        },
    ]

    const cardsAbout = [
      {
        title: "1. Crecimiento exponencial impulsado por tecnología",
        description: "Aceleramos la evolución de su negocio mediante soluciones digitales de última generación que generan valor sostenible y escalable."
      },
      {
        title: "2. Procesos inteligentes, diseñados para ganar",
        description: "Integramos metodologías ágiles y herramientas tecnológicas que optimizan cada operación, alineadas con los objetivos estratégicos de su organización."
      },
      {
        title: "3. Entregas ágiles y de alto impacto",
        description: "Con plataformas avanzadas y equipos especializados, garantizamos resultados rápidos, organizados y medibles, en el momento que su empresa los necesita."
      },
      {
        title: "4. Decisiones estratégicas basadas en datos",
        description: "Potenciamos su capacidad de decisión con analítica avanzada, inteligencia artificial y tableros de control que aseguran precisión y minimizan riesgos."
      },
      {
        title: "5. Innovación disruptiva como ventaja competitiva",
        description: "Le damos acceso a tecnologías emergentes que transforman procesos tradicionales en experiencias digitales únicas, adelantando a su empresa frente al mercado."
      },
      {
        title: "6. Acompañamiento experto, siempre conectado",
        description: "Más que soporte, ofrecemos un ecosistema de especialistas y soluciones digitales que garantizan continuidad, seguridad y confianza en cada etapa del camino."
      },
      {
        title: "7. Futuro asegurado con tecnología de vanguardia",
        description: "No solo resolvemos los retos inmediatos de su organización: construimos junto a usted una visión sostenible a largo plazo, apalancada en transformación digital, innovación disruptiva e inteligencia tecnológica que garantizan que su compañía lidere su sector hoy y esté preparada para los desafíos del mañana."
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

  // Efecto para el carrusel automático (movido desde About.jsx) - DESACTIVADO
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => {
  //       const nextIndex = prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //       setActiveCardIndex(nextIndex)
  //       return nextIndex
  //     })
  //   }, 5000)

  //   return () => clearInterval(interval)
  // }, [images.length])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  //   }, 5000)

  //   return () => clearInterval(interval)
  // }, [carouselSlides.length])

  // Efecto para el slider automático cada 5 segundos - DESACTIVADO porque ahora mostramos todas las cards juntas
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentAllyIndex((prevIndex) => 
  //       prevIndex === allies.length - 1 ? 0 : prevIndex + 1
  //     )
  //   }, 5000)

  //   return () => clearInterval(interval)
  // }, [allies.length])

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
  for (let i = 0; i < teamMembers.length; i += 5) {
    const slide = teamMembers.slice(i, i + 5)
    if (slide.length > 0) { // Solo agregar slides que tengan al menos un miembro
      teamSlides.push(slide)
    }
  }

  const nextSlide = () => {
    if (teamSlides.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % teamSlides.length)
      setActiveCard(null) // Reset active card when changing slide
    }
  }

  const prevSlide = () => {
    if (teamSlides.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + teamSlides.length) % teamSlides.length)
      setActiveCard(null) // Reset active card when changing slide
    }
  }

  const handleEmployeeCardClick = (memberId) => {
    setActiveCard(activeCard === memberId ? null : memberId)
  }

  // Función para manejar el click en cards de aliados
  const handleAllyCardClick = (allyId) => {
    setActiveAllyCard(activeAllyCard === allyId ? null : allyId)
  }

  // Función para manejar el click en cards de clientes
  const handleClientCardClick = (clientId) => {
    setActiveClientCard(activeClientCard === clientId ? null : clientId)
  }

  // Asegurar que currentSlide esté dentro del rango válido
  const validCurrentSlide = Math.min(currentSlide, teamSlides.length - 1)

  // Funciones del componente UnidadesNegocio
  // Función para manejar la selección de cards
  const handleCardSelect = (unidadId) => {
    // Solo animar si hay un cambio real
    if (selectedCard !== unidadId && selectedCard !== null) {
      setIsServicesAnimating(true)
      // Restaurar la animación después de un breve delay
      setTimeout(() => {
        setSelectedCard(selectedCard === unidadId ? null : unidadId)
        setIsServicesAnimating(false)
      }, 300) // 300ms para el fade out
    } else {
      setSelectedCard(selectedCard === unidadId ? null : unidadId)
    }
  }

  // Obtener el color del contenedor basado en la card seleccionada
  const getContainerColor = () => {
    if (selectedCard) {
      const selectedUnidad = unidades.find(unidad => unidad.id === selectedCard)
      return selectedUnidad ? selectedUnidad.color : '#292C3A'
    }
    return '#F3F4F6'
  }

  // Obtener los servicios según la unidad de negocio seleccionada
  const getCurrentServices = () => {
    if (selectedCard) {
      switch (selectedCard) {
        case 1: return techServices
        case 2: return services
        case 3: return energyServices
        case 4: return globalCommunicationsServices
        case 5: return biotechServices
        default: return techServices
      }
    }
    return techServices // Servicios por defecto
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
    currentSlide: validCurrentSlide,
    teamSlides,
    isMenuOpen,
    isScrolled,
    currentHeroSlide,
    carouselSlides,
    // currentAllyIndex, - REMOVIDO porque no se necesita
    allies,
    activeAllyCard,
    clients,
    activeClientCard,
    services,
    techServices,
    energyServices,
    globalCommunicationsServices,
    biotechServices,
    selectedCard,
    unidades,
    isServicesAnimating,
    cardsAbout,
    
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
    // setCurrentAllyIndex, - REMOVIDO porque no se necesita
    setActiveAllyCard,
    setActiveClientCard,
    setSelectedCard,
    setIsServicesAnimating,
    
    // Funciones
    handleCardClick,
    handleIndicatorClick,
    handleChange,
    handleSubmit,
    nextSlide,
    prevSlide,
    handleEmployeeCardClick,
    handleAllyCardClick,
    handleClientCardClick,
    smoothScrollTo,
    handleCardSelect,
    getContainerColor,
    getCurrentServices,
    
    
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
