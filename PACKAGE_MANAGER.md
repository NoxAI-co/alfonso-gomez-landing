# Gestor de Paquetes del Proyecto

## ⚠️ IMPORTANTE: Usar NPM exclusivamente

Este proyecto está configurado para usar **npm** como gestor de paquetes. 

### ✅ Comandos permitidos:
- `npm install` - Instalar dependencias
- `npm run dev` - Ejecutar en modo desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Ejecutar en modo producción
- `npm run lint` - Ejecutar linting

### ❌ NO usar:
- `pnpm install` - Causará conflictos
- `yarn install` - Causará conflictos

### 🔧 Configuración:
- El archivo `.npmrc` asegura que se use npm
- Solo `package-lock.json` debe existir (no `pnpm-lock.yaml` ni `yarn.lock`)

### 🚨 Si accidentalmente usas otro gestor:
1. Eliminar `node_modules/`
2. Eliminar archivos de lock extraños (`pnpm-lock.yaml`, `yarn.lock`)
3. Ejecutar `npm install`

### 📝 Nota:
Este proyecto se inició con npm y cambiar a otro gestor puede causar problemas de compatibilidad y conflictos en las dependencias.
