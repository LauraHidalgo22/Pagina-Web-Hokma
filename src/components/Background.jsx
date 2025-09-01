import { motion } from 'framer-motion'
import bordeCorporativo from '../assets/borde_corporativo.png'

const Background = () => {
  return (
    <div className="absolute inset-0 w-full min-h-screen z-[-1] overflow-hidden">
      {/* Gradiente principal personalizado */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, #020024 0%, #090979 50%, #00d4ff 100%)'
        }}
      />
      
      {/* Patrón tecnológico de fondo */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3Cpath d='M10 10h40v1H10zM10 30h40v1H10zM10 50h40v1H10zM10 10v40h1V10zM30 10v40h1V10zM50 10v40h1V10z' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Efectos de luz adicionales */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/15 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/10 rounded-full blur-xl"></div>
      
      {/* Borde corporativo animado */}
      <motion.div
        className="absolute top-10 right-10 opacity-30"
        animate={{ 
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <img 
          src={bordeCorporativo} 
          alt="Borde Corporativo" 
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain filter brightness-75"
        />
      </motion.div>
      
      {/* Borde corporativo adicional en esquina inferior izquierda */}
      <motion.div
        className="absolute bottom-10 left-10 opacity-20"
        animate={{ 
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <img 
          src={bordeCorporativo} 
          alt="Borde Corporativo" 
          className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain filter brightness-50"
        />
      </motion.div>
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Overlay sutil para mejorar contraste del texto */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  )
}

export default Background
