import { motion } from 'framer-motion'

const CTAButton = ({ 
  href = "#contacto", 
  children = "Hablemos de tu proyecto",
  variant = "primary", // primary, secondary
  className = "",
  ...props 
}) => {
  const baseClasses = "group relative px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg w-[300px] h-[70px] flex items-center justify-center"
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-300 hover:to-blue-400 hover:shadow-cyan-500/25",
    secondary: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900"
  }

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
