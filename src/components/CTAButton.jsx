import { useAppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const CTAButton = ({ 
  href = "#contacto", 
  children = "Hablemos de tu proyecto",
  variant = "primary", // primary, secondary
  className = "",
  ...props 
}) => {
  const { baseClasses, variants } = useAppContext();

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{ fontFamily: 'Caviar Dreams' }}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        <span className="text-white mr-1 text-lg font-bold">
          :::
        </span>
        {children}
        <span className="text-white ml-1 text-lg font-bold">
          :::
        </span>
      </span>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-pulse"></div>
      )}
    </motion.a>
  )
}

export default CTAButton
