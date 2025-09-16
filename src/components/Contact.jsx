import AnimatedSection from './AnimatedSection'
import { useAppContext } from '../context/AppContext'

const Contact = () => {
  // Usar el contexto en lugar de estados y funciones locales
  const { formData, handleChange, handleSubmit } = useAppContext()

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4" style={{ fontFamily: 'Caviar Dreams' }}>
            Conversemos sobre tu proyecto
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto" style={{ fontFamily: 'Caviar Dreams' }}>
            Estamos listos para escuchar tus ideas y convertirlas en realidad. 
            Contáctanos para una consulta gratuita.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <AnimatedSection animation="fadeInLeft" className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-6" style={{ fontFamily: 'Caviar Dreams' }}>
                  Información de Contacto
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-primary-600 mt-1">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-900" style={{ fontFamily: 'Caviar Dreams' }}>Ubicación</h4>
                      <p className="text-secondary-600" style={{ fontFamily: 'Caviar Dreams' }}>Bogotá, Colombia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-primary-600 mt-1">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-900" style={{ fontFamily: 'Caviar Dreams' }}>Email</h4>
                      <p className="text-secondary-600" style={{ fontFamily: 'Caviar Dreams' }}>contacto@hokmatech.co</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-primary-600 mt-1">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary-900" style={{ fontFamily: 'Caviar Dreams' }}>Teléfono</h4>
                      <p className="text-secondary-600" style={{ fontFamily: 'Caviar Dreams' }}>+57 (1) 234-5678</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-secondary-900 mb-4" style={{ fontFamily: 'Caviar Dreams' }}>Horarios de Atención</h4>
                <div className="text-secondary-600 space-y-1" style={{ fontFamily: 'Caviar Dreams' }}>
                  <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                  <p>Sábados: 9:00 AM - 2:00 PM</p>
                  <p>Domingos: Cerrado</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fadeInRight" delay={0.3} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2" style={{ fontFamily: 'Caviar Dreams' }}>
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2" style={{ fontFamily: 'Caviar Dreams' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2" style={{ fontFamily: 'Caviar Dreams' }}>
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Nombre de tu empresa"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2" style={{ fontFamily: 'Caviar Dreams' }}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="+57 300 123 4567"
                    style={{ fontFamily: 'Caviar Dreams' }}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2" style={{ fontFamily: 'Caviar Dreams' }}>
                  Servicio de interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  style={{ fontFamily: 'Caviar Dreams' }}
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="desarrollo-web">Desarrollo Web</option>
                  <option value="aplicaciones-moviles">Aplicaciones Móviles</option>
                  <option value="automatizacion">Automatización</option>
                  <option value="consultoria">Consultoría Digital</option>
                  <option value="analytics">Analytics & BI</option>
                  <option value="ciberseguridad">Ciberseguridad</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2" style={{ fontFamily: 'Caviar Dreams' }}>
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                  style={{ fontFamily: 'Caviar Dreams' }}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary-700 transition-colors shadow-lg"
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
  )
}

export default Contact
