import AnimatedSection from './AnimatedSection'
import IconoHokma from './IconoHokma'
import { useAppContext } from '../context/AppContext'

const Contact = () => {
  // Usar el contexto en lugar de estados y funciones locales
  const { formData, handleChange, handleSubmit } = useAppContext()

  return (
    <section id="contacto" style={{ backgroundColor: '#A6C138' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection animation="fadeInUp" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Caviar Dreams' }}>
            Conectemos tu idea con la tecnolog&iacute;a
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Icono Hokma Superior */}
          <AnimatedSection animation="fadeInLeft" className="flex justify-center">
            <IconoHokma size={500} />
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fadeInUp" delay={0.3} className="lg:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
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

          {/* Icono Hokma Inferior */}
          <AnimatedSection animation="fadeInRight" delay={0.6} className="flex justify-center">
            <IconoHokma size={500} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Contact
