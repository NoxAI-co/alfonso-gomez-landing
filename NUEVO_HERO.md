# 🚀 Nuevo Hero con Scroll Expansion

## ✨ Características del nuevo Hero:

### 🎬 **Scroll Expansion Media:**
- **Efecto de expansión** al hacer scroll
- **Imagen de Bucaramanga** como fondo y contenido principal
- **Animaciones suaves** con Framer Motion
- **Responsive** para móviles y desktop
- **Interactivo** con scroll y touch

### 🎯 **Contenido personalizado:**
- **Título:** "Unidos por el cambio"
- **Subtítulo:** "Construyendo futuro"
- **Descripción:** Proyectos sociales, vivienda digna, deporte e integración
- **3 secciones principales** con iconos y descripciones
- **Botones de acción** para proyectos y contacto

### 🔧 **Tecnologías utilizadas:**
- ✅ **Framer Motion** para animaciones
- ✅ **Tailwind CSS** para estilos
- ✅ **TypeScript** para tipado
- ✅ **Next.js Image** para optimización
- ✅ **Responsive design** para todos los dispositivos

## 📁 Estructura de archivos:

```
src/components/
├── blocks/
│   ├── scroll-expansion-hero.tsx    # Componente principal
│   └── demo.tsx                     # Componentes de demostración
├── Hero.tsx                         # Hero personalizado
└── ui/                              # Componentes UI existentes
```

## 🎮 Cómo funciona:

### **1. Estado inicial:**
- Imagen pequeña en el centro
- Texto del título separado
- Fondo de Bucaramanga visible

### **2. Al hacer scroll:**
- La imagen se expande gradualmente
- El texto se mueve hacia los lados
- El contenido adicional aparece con fade-in

### **3. Estado expandido:**
- Imagen ocupa gran parte de la pantalla
- Contenido completo visible
- Transiciones suaves entre estados

## 🎨 Personalización disponible:

### **Colores:**
- **Texto principal:** `text-blue-200` (azul claro)
- **Botones:** `bg-red-600` (rojo)
- **Iconos:** Colores temáticos (rojo, azul, verde)

### **Contenido:**
- **Título:** "Unidos por el cambio"
- **Subtítulo:** "Construyendo futuro"
- **Descripción:** Texto personalizable
- **Secciones:** 3 áreas principales con iconos

### **Imágenes:**
- **Fondo:** `/img/Bucaramanga.jpeg`
- **Contenido principal:** Misma imagen de Bucaramanga

## 🚀 Comandos para desarrollo:

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## 📱 Responsive:

- **Mobile:** Optimizado para pantallas pequeñas
- **Tablet:** Adaptado para dispositivos medianos
- **Desktop:** Experiencia completa con efectos de scroll

## 🔍 Próximos pasos:

1. **Verificar** que el Hero se vea correctamente
2. **Ajustar** colores si es necesario
3. **Personalizar** contenido según necesidades
4. **Probar** en diferentes dispositivos
5. **Optimizar** imágenes si es necesario

## 💡 Notas técnicas:

- El componente usa `'use client'` para interactividad
- Las animaciones están optimizadas para performance
- El scroll está interceptado para mejor control
- Soporte completo para touch en móviles
