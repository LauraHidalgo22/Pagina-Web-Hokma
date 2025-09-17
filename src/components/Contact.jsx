import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import IconoHokma from './IconoHokma'
import { useAppContext } from '../context/AppContext'

const Contact = () => {
  // Usar el contexto en lugar de estados y funciones locales
  const { formData, handleChange, handleSubmit } = useAppContext()

  return (
    <>
      <section id="contacto" className='bg-white'>
              {/* Título */}
        <AnimatedSection animation="fadeInUp" className="mb-16">
          <SectionTitle className="mb-4 px-4 sm:px-6 lg:px-8">
            Conectemos tu idea con la tecnolog&iacute;a
          </SectionTitle>
        </AnimatedSection>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ backgroundColor: '#A6C138' }}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          {/* Icono Hokma Superior */}
          <AnimatedSection animation="fadeInLeft" className="flex justify-center">
            <IconoHokma size={200} />
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fadeInUp" delay={0.3} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800 placeholder-gray-500"
                    placeholder="Nombre completo *"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800 placeholder-gray-500"
                    placeholder="Email *"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800 placeholder-gray-500"
                    placeholder="Empresa"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800 placeholder-gray-500"
                    placeholder="Teléfono"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  />
                </div>
              </div>

              <div>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800"
                  style={{ fontFamily: 'Caviar Dreams' }}
                >
                  <option value="" className="text-gray-500">Servicio de interés</option>
                  <option value="desarrollo-web" className="text-gray-800">Desarrollo Web</option>
                  <option value="aplicaciones-moviles" className="text-gray-800">Aplicaciones Móviles</option>
                  <option value="automatizacion" className="text-gray-800">Automatización</option>
                  <option value="consultoria" className="text-gray-800">Consultoría Digital</option>
                  <option value="analytics" className="text-gray-800">Analytics & BI</option>
                  <option value="ciberseguridad" className="text-gray-800">Ciberseguridad</option>
                </select>
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors resize-none text-gray-800 placeholder-gray-500"
                  placeholder="Mensaje *"
                  style={{ fontFamily: 'Caviar Dreams' }}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-[#A6C138] transition-colors"
                  style={{ fontFamily: 'Caviar Dreams' }}
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </AnimatedSection>

          {/* Icono Hokma Inferior */}
          <AnimatedSection animation="fadeInRight" delay={0.6} className="flex justify-center">
            <IconoHokma size={200} />
          </AnimatedSection>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
