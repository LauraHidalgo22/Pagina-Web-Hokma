import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logoHokma from '../assets/logo-hokma-light-menu.png'
import CTAButton from './CTAButton'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar el scroll para cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      {/* Animated background pattern - solo visible cuando no está scrolleado */}
      {!isScrolled && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        </div>
      )}
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={logoHokma} 
              alt="Hokma Technologies" 
              className={`h-16 w-auto transition-all duration-500 ${
                isScrolled 
                  ? '' 
                  : 'filter brightness-110'
              }`}
            />
          </motion.div>

          {/* Desktop Navigation - Glassmorphism Menu */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={`backdrop-blur-md rounded-full px-8 py-3 border transition-all duration-500 ${
              isScrolled 
                ? 'bg-gray-100/80 border-gray-300/30' 
                : 'bg-white/10 border-white/20'
            }`}>
              <div className="flex items-center space-x-8">
                <a href="#inicio" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-blue-600' 
                    : 'text-white hover:text-cyan-300'
                }`} style={{ fontFamily: 'Caviar Dreams' }}>
                  Inicio
                </a>
                <a href="#servicios" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-blue-600' 
                    : 'text-white hover:text-cyan-300'
                }`} style={{ fontFamily: 'Caviar Dreams' }}>
                  Servicios
                </a>
                <a href="#nosotros" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-blue-600' 
                    : 'text-white hover:text-cyan-300'
                }`} style={{ fontFamily: 'Caviar Dreams' }}>
                  Acerca
                </a>
                <a href="#blog" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-blue-600' 
                    : 'text-white hover:text-cyan-300'
                }`} style={{ fontFamily: 'Caviar Dreams' }}>
                  Blog
                </a>
                <a href="#contacto" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-blue-600' 
                    : 'text-white hover:text-cyan-300'
                }`} style={{ fontFamily: 'Caviar Dreams' }}>
                  Contáctanos
                </a>
              </div>
            </div>
          </motion.div>

          {/* CTA Button - Neon Style - Solo visible cuando hay scroll */}
          {isScrolled && (
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CTAButton 
                href="#contacto"
                style={{ transform: 'scale(0.75)' }}
                whileHover={{}}
                whileTap={{}}
              >
                Hablemos de tu proyecto
              </CTAButton>
            </motion.div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none p-2 transition-all duration-500 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600 focus:text-blue-600' 
                  : 'text-white hover:text-cyan-300 focus:text-cyan-300'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-md rounded-lg mt-4 border transition-all duration-500 ${
              isScrolled 
                ? 'bg-gray-100/90 border-gray-300/30' 
                : 'bg-white/10 border-white/20'
            }`}>
              <a href="#inicio" className={`block px-3 py-2 text-base font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-300'
              }`} style={{ fontFamily: 'Caviar Dreams' }}>
                Inicio
              </a>
              <a href="#servicios" className={`block px-3 py-2 text-base font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-300'
              }`} style={{ fontFamily: 'Caviar Dreams' }}>
                Servicios
              </a>
              <a href="#nosotros" className={`block px-3 py-2 text-base font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-300'
              }`} style={{ fontFamily: 'Caviar Dreams' }}>
                Acerca
              </a>
              <a href="#blog" className={`block px-3 py-2 text-base font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-300'
              }`} style={{ fontFamily: 'Caviar Dreams' }}>
                Blog
              </a>
              <a href="#contacto" className={`block px-3 py-2 text-base font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-300'
              }`} style={{ fontFamily: 'Caviar Dreams' }}>
                Contáctanos
              </a>
              {/* CTA Button - Solo visible cuando hay scroll en móvil */}
              {isScrolled && (
                <div className="mt-2">
                  <CTAButton 
                    href="#contacto"
                    className="w-full"
                    style={{ transform: 'scale(0.75)' }}
                    whileHover={{}}
                    whileTap={{}}
                  >
                    Hablemos de tu proyecto
                  </CTAButton>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}

export default Header
