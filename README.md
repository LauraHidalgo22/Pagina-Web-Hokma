# Hokma Technologies Colombia - Landing Page

Una landing page moderna y profesional para Hokma Technologies Colombia, desarrollada con React y TailwindCSS.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con estilo corporativo
- **Responsive**: Totalmente adaptable a dispositivos móviles y desktop
- **Optimizado**: Desarrollado con Vite para máxima velocidad
- **Componentes Modulares**: Arquitectura de componentes reutilizable
- **TailwindCSS**: Estilos modernos y personalizables

## 🛠️ Tecnologías Utilizadas

- React 18
- Vite
- TailwindCSS
- PostCSS
- ESLint

## 📋 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección hero principal
│   ├── Services.jsx    # Servicios ofrecidos
│   ├── About.jsx       # Información de la empresa
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── App.jsx             # Componente principal
├── main.jsx           # Punto de entrada
└── index.css          # Estilos globales
```

## 🏃‍♂️ Ejecutar el Proyecto

### Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd PaginaWebHokma
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la construcción de producción
- `npm run lint` - Ejecuta el linter ESLint

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`:

- **Primary**: Azul corporativo (#3b82f6)
- **Secondary**: Gris elegante (#64748b)

### Componentes

Cada sección es un componente independiente que puedes personalizar:

- **Header**: Navegación y logo
- **Hero**: Sección principal con call-to-action
- **Services**: Grid de servicios con iconos
- **About**: Información de la empresa
- **Contact**: Formulario de contacto funcional
- **Footer**: Enlaces y redes sociales

## 📱 Secciones de la Landing Page

1. **Hero Section**: Presentación principal con estadísticas
2. **Servicios**: 6 servicios principales con descripciones
3. **Sobre Nosotros**: Historia y valores de la empresa
4. **Contacto**: Formulario completo con validación
5. **Footer**: Enlaces rápidos y redes sociales

## 🚀 Despliegue

### Construcción para Producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

### Opciones de Despliegue

- **Vercel**: `vercel --prod`
- **Netlify**: Conecta el repositorio
- **GitHub Pages**: Configura el workflow de GitHub Actions

## 📞 Información de Contacto

- **Email**: contacto@hokmatech.co
- **Teléfono**: +57 (1) 234-5678
- **Ubicación**: Bogotá, Colombia

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE](LICENSE) para más detalles.

---

Desarrollado con ❤️ por Hokma Technologies Colombia
