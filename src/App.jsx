import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import EquipoTrabajo from './components/EquipoTrabajo'
import NuestrosAliados from './components/NuestrosAliados'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'
import UnidadesNegocio from './components/UnidadesNegocio'
import NuestrosClientes from './components/NuestrosClientes'
import StickyButton from './components/StickyButton'
import { CustomProvider } from './context/AppContext'
import DondeEstamosButton from './components/DondeEstamosButton'

function App() {
  return (
    <CustomProvider>
      <div className="relative min-h-screen">
      <Background />
      <Header />
      <Hero />
      <UnidadesNegocio />
      <Services />
      <About />
      <EquipoTrabajo />
      <NuestrosAliados />
      <Contact />
      <NuestrosClientes />
      <Footer />
      
      {/* Sticky Button Component */}
      <StickyButton />
    </div>
    </CustomProvider>
  )
}

export default App
