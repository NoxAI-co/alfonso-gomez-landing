# 🏠 Cristancho Landing Page

Una landing page moderna y elegante para mostrar los proyectos sociales y comunitarios liderados por Jhon Cristancho. Desarrollada con Next.js, TypeScript y Tailwind CSS.

## 📸 Capturas de Pantalla

### 🎯 Sección Principal (Hero)
![Hero Section](./public/screenshots/hero-section.png)
*Mensaje inspirador principal con llamadas a la acción y video testimonial integrado*

### 🏗️ Proyectos Sociales
![Proyectos](./public/screenshots/proyectos-section.png)
*Los tres proyectos principales: Construyendo Sueños, Apoyo al Deporte e Iniciativa Social*

### 💬 Testimonios
![Testimonios](./public/screenshots/testimonios-section.png)
*Historias reales de transformación y cambio en la comunidad*

### 📱 Diseño Responsive
![Responsive Design](./public/screenshots/responsive-design.png)
*Optimizado para todos los dispositivos: móvil, tablet y desktop*

> **Nota**: Las capturas de pantalla se actualizarán próximamente. Por ahora, puedes ver el sitio en vivo ejecutando `yarn dev` y visitando `http://localhost:3000`

## 🎯 Sobre el Proyecto

Esta landing page presenta la labor social y los proyectos comunitarios de Jhon Cristancho, un joven empresario y líder social que coordina la iniciativa **RED Inicio**. El sitio web está diseñado para:

- **Mostrar proyectos sociales**: Vivienda digna, apoyo al deporte e iniciativas sociales
- **Compartir testimonios**: Historias reales de transformación y cambio
- **Conectar con la comunidad**: Facilitar el contacto y la participación
- **Inspirar acción**: Motivar a otros a sumarse a la construcción de una Colombia más justa

## ✨ Características

- 🎨 **Diseño moderno y responsivo** - Optimizado para todos los dispositivos
- ⚡ **Rendimiento optimizado** - Construido con Next.js 14 y TypeScript
- 🎭 **Animaciones fluidas** - Efectos visuales con Framer Motion y React Awesome Reveal
- 📱 **Navegación intuitiva** - Menú responsive con scroll suave
- 🎥 **Contenido multimedia** - Videos testimoniales y galería de imágenes
- 🎯 **SEO optimizado** - Meta tags y estructura semántica
- 🌙 **Tema adaptable** - Soporte para modo claro/oscuro

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion, React Awesome Reveal
- **Componentes**: Headless UI, Radix UI
- **Iconos**: Heroicons, Lucide React
- **Formularios**: React Hook Form

## 📦 Instalación y Uso

### Prerrequisitos

- Node.js 18+ 
- Yarn o npm

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/cristancho-landing.git
cd cristancho-landing
```

### 2. Instalar dependencias

```bash
yarn install
# o
npm install
```

### 3. Ejecutar en desarrollo

```bash
yarn dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### 4. Construir para producción

```bash
yarn build
# o
npm run build
```

## 📁 Estructura del Proyecto

```
cristancho-landing/
├── src/
│   ├── app/                 # App Router de Next.js 14
│   │   ├── layout.tsx      # Layout principal
│   │   ├── page.tsx        # Página principal
│   │   └── globals.css     # Estilos globales
│   ├── components/         # Componentes reutilizables
│   │   ├── ui/            # Componentes de UI
│   │   │   ├── hero-section-demo-1.tsx
│   │   │   ├── feature5.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── ...
│   │   └── ...
│   └── lib/               # Utilidades y configuraciones
├── public/                # Archivos estáticos
│   ├── img/              # Imágenes del proyecto
│   └── mp4/              # Videos testimoniales
└── ...
```

## 🎨 Componentes Principales

### Hero Section
- Mensaje principal inspirador
- Botones de llamada a la acción
- Video testimonial integrado
- Efectos de animación con scroll

### Sección "Sobre Nosotros"
- Información institucional
- Perfil de Jhon Cristancho
- Misión y valores del proyecto

### Proyectos Sociales
- **Construyendo Sueños**: Proyectos de vivienda digna
- **Apoyo al Deporte**: Iniciativas deportivas y recreativas
- **Iniciativa Social**: Programas de ayuda e inclusión

### Testimonios
- Historias reales de transformación
- Galería de testimonios con fotos
- Video testimonial destacado

## 🌐 Despliegue

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/tu-usuario/cristancho-landing)

1. Conecta tu repositorio de GitHub a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El despliegue se realizará automáticamente en cada push

### Otros proveedores

El proyecto también puede desplegarse en:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_CONTACT_PHONE=+573103662934
```

### Personalización

Para personalizar el contenido:

1. **Imágenes**: Reemplaza las imágenes en `/public/img/`
2. **Videos**: Actualiza los videos en `/public/mp4/`
3. **Contenido**: Modifica los textos en los componentes correspondientes
4. **Colores**: Ajusta la paleta de colores en `tailwind.config.ts`

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## 🎯 SEO y Performance

- ✅ Meta tags optimizados
- ✅ Open Graph tags
- ✅ Imágenes optimizadas
- ✅ Lazy loading
- ✅ Core Web Vitals optimizados
- ✅ Lighthouse score > 90

## 📸 Cómo Tomar Capturas de Pantalla

Para actualizar las capturas de pantalla del README:

### 1. Iniciar el servidor de desarrollo
```bash
yarn dev
```

### 2. Abrir el navegador
Navega a `http://localhost:3000`

### 3. Tomar capturas de pantalla
- **Hero Section**: Captura la sección principal con el mensaje y botones
- **Proyectos**: Captura las 3 tarjetas de proyectos sociales
- **Testimonios**: Captura la galería de testimonios
- **Responsive**: Captura el sitio en diferentes tamaños de pantalla

### 4. Guardar las imágenes
Guarda las capturas en `/public/screenshots/` con los nombres:
- `hero-section.png`
- `proyectos-section.png`
- `testimonios-section.png`
- `responsive-design.png`

### Herramientas recomendadas:
- **Chrome DevTools**: Para capturas responsive
- **Snipping Tool** (Windows) o **Screenshot** (Mac)
- **Figma** o **Canva**: Para crear mockups profesionales

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Jhon Cristancho**
- Coordinador de RED Inicio
- Líder social y empresario
- Comprometido con el desarrollo comunitario

## 📞 Contacto

- **WhatsApp**: [+57 310 366 2934](https://wa.me/)
- **Email**: [contacto@cristancho.com](mailto:contacto@cristancho.com)
- **Sitio Web**: [cristancho.com](https://cristancho.com)

---

⭐ Si este proyecto te ha sido útil, ¡no olvides darle una estrella!

---

[![Powered by Vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com/?utm_source=cristancho&utm_campaign=oss)




