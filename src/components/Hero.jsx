import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import fondoPrincipal from '../assets/fondo_principal.jpg'
import bordeCorporativo from '../assets/borde_corporativo.png'
import CTAButton from './CTAButton'
import DondeEstamosButton from './DondeEstamosButton'
import { useAppContext } from '../context/AppContext'

const Hero = () => {
  const { currentHeroSlide, setCurrentHeroSlide, carouselSlides } = useAppContext();

  return (
    <section 
      id="inicio" 
      className="pt-20 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background image with blur - behind all elements */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${fondoPrincipal})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'blur(5px)'
        }}
      ></div>

      {/* Dark overlay for better text readability */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="text-center">
          {/* Main Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Corporate border image behind text with infinite rotation */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50"
              style={{
                zIndex: -1
              }}
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div 
                style={{
                  backgroundImage: `url(${bordeCorporativo})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '700px',
                  height: '700px'
                }}
              />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight relative z-10" style={{ fontFamily: 'Caviar Dreams' }}>
              <motion.span
                key={`title-${currentHeroSlide}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8 }}
                className="block"
              >
                {carouselSlides[currentHeroSlide].title}
              </motion.span>
              <motion.span
                key={`subtitle-${currentHeroSlide}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                {carouselSlides[currentHeroSlide].subtitle}
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            key={`description-${currentHeroSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Caviar Dreams' }}
          >
            {carouselSlides[currentHeroSlide].description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <CTAButton href="#contacto">
              Hablemos de tu proyecto
            </CTAButton>
            
            <CTAButton 
              href="#servicios"
              variant="secondary"
            >
              Descúbrenos
            </CTAButton>
          </motion.div>

          {/* Carousel Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex justify-center space-x-3"
          >
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHeroSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentHeroSlide 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* DondeEstamosButton en esquina inferior izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <DondeEstamosButton />
      </motion.div>
    </section>
  )
}

export default Hero
