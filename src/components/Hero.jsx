import { motion } from 'framer-motion'
import fondoPrincipal from '../assets/fondo_principal.jpg'
import bordeCorporativo from '../assets/borde_corporativo.png'
import CTAButton from './CTAButton'

const Hero = () => {
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

      
      {/* Animated particles */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

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
                backgroundImage: `url(${bordeCorporativo})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                scale: 4.5,
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
            ></motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight relative z-10" style={{ fontFamily: 'Caviar Dreams' }}>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                Los cambios te confrontan
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
              >
                La tecnología los transforma
              </motion.span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Caviar Dreams' }}
          >
            Transformamos ideas en soluciones tecnológicas innovadoras. 
            En Hokma Technologies, cada desafío es una oportunidad para crear el futuro.
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

       

          {/* Geometric elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 border border-cyan-400/30 rounded-lg transform rotate-45 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
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
    </section>
  )
}

export default Hero
