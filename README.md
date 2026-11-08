# Despliegue de Aplicación Next.js en AWS Amplify

Proyecto desarrollado como parte de la actividad práctica de despliegue en la nube, llevando una aplicación desarrollada con Next.js desde un entorno local a producción en AWS.

## Enlace a la Aplicación en Producción

- **URL Pública:** https://main.d3l89w6w8khv0i.amplifyapp.com

## Repositorio del Proyecto

- **GitHub:** https://github.com/lio5000/nextjs-aws-app

---

## Instrucciones de Ejecución Local

Si deseas ejecutar este proyecto de forma local en tu máquina:

### Requisitos previos

- Node.js (versión 18.x o superior)
- npm, yarn o pnpm

### Pasos para ejecutar

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/lio5000/nextjs-aws-app.git
   cd nextjs-aws-app
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   Copia el archivo `.env.example` y renómbralo a `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

4. **Compilar para verificación (opcional):**

   ```bash
   npm run build
   ```

5. **Iniciar servidor de desarrollo:**

   ```bash
   npm run dev
   ```

   Abre http://localhost:3000 en tu navegador.
