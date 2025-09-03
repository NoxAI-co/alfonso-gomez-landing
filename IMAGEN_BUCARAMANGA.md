# 🖼️ Imagen de Bucaramanga para el Hero

## 📁 Ubicación de la imagen:
```
public/img/Bucaramanga.jpeg
```

## 🎯 Especificaciones recomendadas:

### 📐 Dimensiones:
- **Ancho mínimo:** 1920px
- **Alto mínimo:** 1080px
- **Formato:** JPG o PNG
- **Tamaño de archivo:** Menos de 2MB

### 🎨 Características de la imagen:
- **Vista panorámica** de Bucaramanga (ciudad, montañas, horizonte)
- **Colores vibrantes** pero no demasiado saturados
- **Buena iluminación** para que el texto blanco se lea bien
- **Perspectiva amplia** que cubra toda la pantalla

### 🔧 Efectos aplicados automáticamente:
- ✅ **Blur sutil** (`backdrop-blur-sm`)
- ✅ **Opacidad reducida** (`bg-black/30`)
- ✅ **Overlay oscuro** para mejor contraste del texto
- ✅ **Texto blanco** con sombras para mejor legibilidad

## 📝 Pasos para implementar:

1. **Sube tu imagen** en `public/img/bucaramanga-bg.jpg`
2. **Reinicia el servidor** si está corriendo
3. **Verifica** que se vea bien en diferentes tamaños de pantalla

## 🎨 Personalización:

Si quieres ajustar los efectos, puedes modificar estas clases en `Hero.tsx`:

- **Intensidad del blur:** Cambia `backdrop-blur-sm` por `backdrop-blur-md` o `backdrop-blur-lg`
- **Opacidad del overlay:** Cambia `bg-black/30` por `bg-black/20` (más claro) o `bg-black/40` (más oscuro)
- **Color del overlay:** Cambia `bg-black/30` por `bg-blue-900/30` para un tinte azulado

## 🚀 Ejemplo de nombres alternativos:
- `bucaramanga-hero.jpg`
- `bucaramanga-city.jpg`
- `bucaramanga-skyline.jpg`
- `bucaramanga-mountains.jpg`

**Recuerda:** Si cambias el nombre del archivo, actualiza la línea 18 en `Hero.tsx`:
```tsx
src="/img/TU_NUEVO_NOMBRE.jpeg"
```
