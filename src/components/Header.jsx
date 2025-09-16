import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import logoHokma from '../assets/logo-hokma-global-group-menu.png'
import IconoHokma from './IconoHokma'
import CTAButton from './CTAButton'
import Idioma from './Idioma'
import { useAppContext } from '../context/AppContext'

const Header = () => {
  const { 
    isMenuOpen,
    setIsMenuOpen,
    isScrolled,
    setIsScrolled,
    smoothScrollTo
   } = useAppContext();

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      {/* Gradient background for scrolled state - left to right transition */}
      {isScrolled && (
        <>
          <div className="absolute inset-0 bg-white"></div>
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #292C3A 0%, #292C3A 8%, rgba(41, 44, 58, 0.6) 15%, rgba(41, 44, 58, 0.2) 22%, transparent 30%)'
            }}
          ></div>
        </>
      )}
      {/* Animated background pattern - solo visible cuando no está scrolleado */}
      {!isScrolled && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
        </div>
      )}
      
      <nav className={`px-4 sm:px-6 lg:px-8 relative flex justify-between items-center flex-direction-column transition-all duration-500 ${
        isScrolled ? 'h-18' : 'h-40'
      }`}>
        {/* Componente Idioma - Solo visible cuando no hay scroll */}
        {!isScrolled && (
          <motion.div 
            className="absolute top-4 right-4 z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Idioma />
          </motion.div>
        )}

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
              className={`w-auto transition-all duration-500 ${
                isScrolled 
                  ? 'h-[80px]'
                  : 'h-[200px] filter brightness-110 mt-9'
              }`}
            />
          </motion.div>

          

          {/* Desktop Navigation - Glassmorphism Menu */}
          <div className="">
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
                  {!isScrolled ? <IconoHokma /> : <IconoHokma color='#292C3A'/>}
                  <a href="#inicio" onClick={(e) => smoothScrollTo(e, '#inicio')} className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-blue-600' 
                      : 'text-white hover:text-cyan-300'
                  }`} style={{ fontFamily: 'Caviar Dreams' }}>
                    Home
                  </a>
                  <a href="#servicios" onClick={(e) => smoothScrollTo(e, '#servicios')} className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-blue-600' 
                      : 'text-white hover:text-cyan-300'
                  }`} style={{ fontFamily: 'Caviar Dreams' }}>
                    Ecosistema y Servicios
                  </a>
                  <a href="#nosotros" onClick={(e) => smoothScrollTo(e, '#nosotros')} className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-blue-600' 
                      : 'text-white hover:text-cyan-300'
                  }`} style={{ fontFamily: 'Caviar Dreams' }}>
                    Insights
                  </a>
                  <a href="#contacto" onClick={(e) => smoothScrollTo(e, '#contacto')} className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-blue-600' 
                      : 'text-white hover:text-cyan-300'
                  }`} style={{ fontFamily: 'Caviar Dreams' }}>
                    Conversemos
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          

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
              <a href="#inicio" onClick={(e) => smoothScrollTo(e, '#inicio')} className={`block px-3 py-2 text-base font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-300'
              }`} style={{ fontFamily: 'Caviar Dreams' }}>
                Home
              </a>
              <a href="#servicios" onClick={(e) => smoothScrollTo(e, '#servicios')} className={`block px-3 py-2 text-base font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-300'
              }`} style={{ fontFamily: 'Caviar Dreams' }}>
                Ecosistema y Servicios
              </a>
              <a href="#nosotros" onClick={(e) => smoothScrollTo(e, '#nosotros')} className={`block px-3 py-2 text-base font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-300'
              }`} style={{ fontFamily: 'Caviar Dreams' }}>
                Insights
              </a>
              <a href="#contacto" onClick={(e) => smoothScrollTo(e, '#contacto')} className={`block px-3 py-2 text-base font-medium transition-colors ${
                isScrolled 
                  ? 'text-gray-800 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-300'
              }`} style={{ fontFamily: 'Caviar Dreams' }}>
                Conversemos
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
