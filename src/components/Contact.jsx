import AnimatedSection from './AnimatedSection'
import SectionTitle from './SectionTitle'
import IconoHokma from './IconoHokma'
import { useAppContext } from '../context/AppContext'
import Separador from './Separador'

const Contact = () => {
  // Usar el contexto en lugar de estados y funciones locales
  const { formData, handleChange, handleSubmit } = useAppContext()

  return (
    <>
      <section id="contacto" className='bg-white'>
        <div className="px-8 py-10" style={{ backgroundColor: '#2A2D3B' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Text */}
            <AnimatedSection
              animation="fadeInUp"
              delay={0.3}
              className="flex flex-col gap-5 lg:col-span-2"
            >
              <SectionTitle titleClassName='text-white text-center lg:text-right w-full' className='justify-end mb-5'>
                Conectemos tu idea con la Tecnolog&iacute;a
              </SectionTitle>
              <p className='text-white text-center lg:text-right w-auto'>
                En <b>HOKMA Global Group</b> contamos con un portafolio
                integral que combina soluciones tecnológicas, productos 
                innovadores y servicios especializados, diseñados para 
                apoyar a las organizaciones en sus procesos de cambio.
              </p>
              <p className='text-white text-center lg:text-right w-auto'>
                ¿Quieres conocer cómo podemos acompañarte en tu proceso 
                de transformación?
              </p>
            </AnimatedSection>
            {/* Contact Form */}
            <AnimatedSection
              animation="fadeInUp"
              delay={0.3}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-3 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800 placeholder-gray-500"
                      placeholder="Nombres *"
                      style={{ fontFamily: 'Caviar Dreams' }}
                    />
                  </div>
                  
                  <div>
                    <input
                      type="lastname"
                      id="lastname"
                      name="lastname"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800 placeholder-gray-500"
                      placeholder="Apellidos *"
                      style={{ fontFamily: 'Caviar Dreams' }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className='col-span-2'>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800 placeholder-gray-500"
                      placeholder="Correo corporativo *"
                      style={{ fontFamily: 'Caviar Dreams' }}
                    />
                  </div>
                  <div className='col-span-1'>
                    <input
                      type="text"
                      id="sufijo"
                      name="sufijo"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800 placeholder-gray-500"
                      placeholder="United States (+1) *"
                      style={{ fontFamily: 'Caviar Dreams' }}
                    />
                  </div>
                  
                  <div className='col-span-1'>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800 placeholder-gray-500"
                      placeholder="Celular *"
                      style={{ fontFamily: 'Caviar Dreams' }}
                    />
                  </div>
                </div>

                <div className='grid grid-cols-2 gap-2'>
                  <select
                    id="city"
                    name="city"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    <option value="" className="text-gray-500">Ciudad/Estado *</option>
                  </select>
                  <select
                    id="province"
                    name="province"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-white/50 focus:border-white transition-colors text-gray-800"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  >
                    <option value="" className="text-gray-500">Provincia *</option>
                  </select>
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
                    <option value="" className="text-gray-500">Seleccione el o los servicios de interés</option>
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
          </div>
      </div>
    </section>
    </>
  )
}

export default Contact