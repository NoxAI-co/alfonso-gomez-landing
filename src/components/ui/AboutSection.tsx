"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Componente memoizado para imágenes optimizadas
const OptimizedImage = memo(({ src, alt, width, height, className, sizes, quality = 90, priority = false }: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  sizes: string;
  quality?: number;
  priority?: boolean;
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    className={className}
    loading={priority ? "eager" : "lazy"}
    quality={quality}
    sizes={sizes}
    priority={priority}
  />
));

OptimizedImage.displayName = 'OptimizedImage';

export const AboutSection = () => {
  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      rotate: -10
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: -3,
      transition: {
        duration: 0.8
      }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      x: 100 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const profileVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  };

  const biographyVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <>
      <section className="w-full py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Columna izquierda - Imagen de Édgar integrada */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              variants={cardVariants}
            >
              <div className="relative">
                {/* Imagen de Édgar con efectos integrados */}
                <motion.div 
                  className="relative max-w-xs sm:max-w-sm md:max-w-md w-full"
                  style={{ willChange: 'transform' }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <OptimizedImage
                    src="/img/edgar_oficial.jpg"
                    alt="Edgar Alfonso Gómez Román"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-lg sm:shadow-xl md:shadow-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Columna derecha - Lo que nos mueve */}
            <motion.div 
              className="space-y-6"
              variants={contentVariants}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 font-heading">
                  Lo que nos <span className="text-pacto-morado">mueve</span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-3 sm:mb-4 font-heading">
                La fuerza de la experiencia al servicio de la gente
                </h2>
              </motion.div>

              <motion.div 
                className="space-y-4 text-gray-700"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="text-lg leading-relaxed font-body"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  &ldquo;Édgar &lsquo;El pote&rsquo; Gómez ha dedicado su vida a servir a Santander y a Colombia. Desde sus inicios en Bucaramanga como Director de Coldeportes y concejal, 
                  hasta su rol como Presidente de la Cámara de Representantes y Senador de la República, 
                  ha demostrado que el liderazgo político debe estar acompañado de cercanía, escucha activa y resultados concretos.
                </motion.p>
                
                <motion.p 
                  className="text-lg leading-relaxed font-body"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Su proyecto político se basa en cuatro principios: justicia social, equidad, desarrollo económico regional y fortalecimiento comunitario.&rdquo;
                </motion.p>
              </motion.div>

              {/* Cita destacada */}
              <motion.div 
                className="border-l-4 border-pacto-verde bg-gradient-to-r from-pacto-verde/5 to-transparent pl-6 py-4 rounded-r-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg font-bold text-gray-900 leading-relaxed font-heading">
                  &#8220;Cuando soñamos en grande y trabajamos juntos, logramos construir una Colombia más justa para todos.&#8221;
                </p>
              </motion.div>

              {/* Enlace */}
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="#proyectos" 
                  className="inline-flex items-center text-pacto-azul font-black hover:text-pacto-morado transition-colors font-heading"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  Conoce nuestros proyectos
                  <motion.svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nueva sección de Biografía */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            {/* Título de la sección */}
            <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-2 sm:mb-3 md:mb-4 font-heading px-2">
                <span className="text-pacto-morado">¿Quién es Edgar el Pote Gómez?</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-body mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
                Un líder con una amplia trayectoria en el servicio público, que ha impulsado importantes desarrollos en beneficio de Santander y Colombia. Los programas sociales, el deporte y la comunidad han sido testigos de sus actuaciones como congresista. Emprendedor de proyectos empresariales en la industria del calzado, promotor del complejo comercial San Francisco Leather Shop. Además que su transparencia y rectitud lo han identificado como referente del ejercicio público.
              </p>
            </div>

            {/* Contenido de la biografía en formato CV */}
            <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl border border-gray-100 mx-2 sm:mx-0">
              {/* Header del CV con imagen y datos personales */}
              <div className="text-center mb-8 sm:mb-10">
                {/* Imagen de Edgar centrada */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Image
                      src="/img/edgar_oficial.jpg"
                      alt="Édgar Alfonso Gómez Román"
                      width={200}
                      height={200}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover object-top shadow-xl border-4 border-pacto-azul/30"
                      loading="lazy"
                      quality={85}
                      sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pacto-morado rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs sm:text-sm md:text-base">PH</span>
                    </div>
                  </div>
                </div>
                
                {/* Información personal */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2 font-heading">
                  Édgar Alfonso Gómez Román
                </h3>
                <p className="text-lg sm:text-xl md:text-2xl text-pacto-azul font-semibold mb-4">
                  &ldquo;El Pote&rdquo;
                </p>
                
              </div>

              {/* Timeline de experiencia profesional */}
              <div className="relative">
                {/* Línea de tiempo vertical - MOVIDA HACIA LA IZQUIERDA */}
                <div className="absolute left-2 sm:left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pacto-azul via-pacto-verde via-pacto-amarillo to-pacto-morado z-0"></div>
                
                {/* Experiencias - ORDEN CRONOLÓGICO CORRECTO */}
                <div className="space-y-6 sm:space-y-8">
                  {/* 1. Empresario y consultor político - MÁS RECIENTE */}
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pacto-azul rounded-full flex items-center justify-center shadow-lg z-10 relative mt-6 sm:mt-8 md:mt-10">
                      <span className="text-white font-bold text-xs sm:text-sm md:text-base">2025</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-pacto-azul/5 to-pacto-azul/10 p-4 sm:p-5 rounded-xl border-l-4 border-pacto-azul">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Empresario y consultor político</h4>
                      <p className="text-sm sm:text-base text-gray-700 mb-2">Manejando el progreso desde lo privado…</p>
                      <span className="inline-block bg-pacto-azul text-white px-2 py-1 rounded text-xs font-semibold">Actualidad</span>
                    </div>
                  </div>

                  {/* 2. Representante a la Cámara 2014-2022 */}
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pacto-verde rounded-full flex items-center justify-center shadow-lg z-10 relative mt-6 sm:mt-8 md:mt-10">
                      <span className="text-white font-bold text-xs sm:text-sm md:text-base">2014</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-pacto-verde/5 to-pacto-verde/10 p-4 sm:p-5 rounded-xl border-l-4 border-pacto-verde">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Representante a la Cámara</h4>
                      <p className="text-sm sm:text-base text-gray-700 mb-2">Consolidando su papel como líder clave de Santander</p>
                      <span className="inline-block bg-pacto-verde text-white px-2 py-1 rounded text-xs font-semibold">2014-2022</span>
                    </div>
                  </div>

                  {/* 3. Senador 2010-2014 */}
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pacto-amarillo rounded-full flex items-center justify-center shadow-lg z-10 relative mt-6 sm:mt-8 md:mt-10">
                      <span className="text-white font-bold text-xs sm:text-sm md:text-base">2010</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-pacto-amarillo/5 to-pacto-amarillo/10 p-4 sm:p-5 rounded-xl border-l-4 border-pacto-amarillo">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Senador de la República</h4>
                      <p className="text-sm sm:text-base text-gray-700 mb-2">Periodo legislativo en el Senado de Colombia</p>
                      <span className="inline-block bg-pacto-amarillo text-white px-2 py-1 rounded text-xs font-semibold">2010-2014</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logros destacados en grid */}
              <div className="mt-8 sm:mt-10">
                <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-4 sm:mb-6 text-center font-heading">
                  Logros y Gestiones Destacadas
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Comisión Cuarta */}
                  <div className="bg-gradient-to-br from-pacto-verde/10 to-pacto-verde/20 p-4 sm:p-5 rounded-xl border border-pacto-verde/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-pacto-verde rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">📊</span>
                      </div>
                      <h5 className="font-bold text-base sm:text-lg text-gray-900">Comisión Cuarta (2019)</h5>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Presidió durante el estudio del Plan Nacional de Desarrollo 2018-2022</p>
                  </div>

                  {/* Ley 1357 */}
                  <div className="bg-gradient-to-br from-pacto-azul/10 to-pacto-azul/20 p-4 sm:p-5 rounded-xl border border-pacto-azul/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-pacto-azul rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">⚖️</span>
                      </div>
                      <h5 className="font-bold text-base sm:text-lg text-gray-900">Ley 1357 (2009)</h5>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Firmó ley que fortaleció la seguridad jurídica de acreedores</p>
                  </div>
                </div>
              </div>

              {/* Compromiso comunitario y deporte */}
              <div className="mt-8 sm:mt-10">
                <h4 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-4 sm:mb-6 text-center font-heading">
                  Compromiso Comunitario y Deporte
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Aliado Comunitario */}
                  <div className="bg-gradient-to-br from-pacto-morado/10 to-pacto-morado/20 p-4 sm:p-5 rounded-xl border border-pacto-morado/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-pacto-morado rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">🤝</span>
                      </div>
                      <h5 className="font-bold text-base sm:text-lg text-gray-900">Aliado Comunitario</h5>
                    </div>
                    <ul className="text-sm sm:text-base text-gray-700 space-y-1">
                      <li>• Fuerte aliado del gremio del calzado</li>
                      <li>• Impulsor de grupos de ayuda a la tercera edad</li>
                      <li>• Referente de liderazgo solidario</li>
                    </ul>
                  </div>
                  
                  {/* Deporte como Vocación */}
                  <div className="bg-gradient-to-br from-pacto-amarillo/10 to-pacto-amarillo/20 p-4 sm:p-5 rounded-xl border border-pacto-amarillo/30">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-pacto-amarillo rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">⚽</span>
                      </div>
                      <h5 className="font-bold text-base sm:text-lg text-gray-900">Deporte como Vocación</h5>
                    </div>
                    <ul className="text-sm sm:text-base text-gray-700 space-y-1">
                      <li>• Presidente de la Liga Santandereana de Tenis</li>
                      <li>• Fundador de la Liga de Microfútbol de Salón</li>
                      <li>• Miembro de la Junta Directiva del Club Unión</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cita final destacada */}
              <div className="mt-8 sm:mt-10 text-center">
                <div className="bg-gradient-to-r from-pacto-azul/10 via-pacto-morado/10 to-pacto-verde/10 rounded-2xl p-6 sm:p-8 border-2 border-pacto-azul/20">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 leading-relaxed font-heading mb-4">
                    &ldquo;Mi compromiso es seguir trabajando por Santander y Colombia, llevando la voz de la gente al Congreso y transformando las necesidades en soluciones concretas.&rdquo;
                  </p>
                  <p className="text-base sm:text-lg text-pacto-azul font-semibold font-heading">
                    - Édgar Alfonso Gómez Román &ldquo;El Pote&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección de Propuestas */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto">
            {/* Layout de dos columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
              
              {/* Columna izquierda - Información de Propuestas */}
              <div>
                {/* Título de la sección */}
                <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-2 sm:mb-3 md:mb-4 font-heading px-2">
                    <span className="text-pacto-morado">Propuestas</span> que transforman vidas
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-body mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 max-w-3xl">
                    La visión de Édgar &lsquo;El pote&rsquo; Gómez está orientada a resolver las necesidades reales de la gente. Estas son sus principales banderas:
                  </p>
                </div>

                {/* Timeline horizontal de propuestas */}
                <div className="relative">
                  {/* Línea de tiempo horizontal */}
                  <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pacto-azul via-pacto-verde via-pacto-morado to-pacto-amarillo transform -translate-y-1/2"></div>
                  
                  {/* Propuestas en timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Deporte y Juventud */}
                    <div className="relative group">
                      {/* Nodo del timeline */}
                      <div className="relative z-10 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                        <Image
                          src="/img/deporteIcon.png"
                          alt="Icono de Deporte y Juventud"
                          width={80}
                          height={80}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                        />
                      </div>
                      
                      {/* Contenido */}
                      <div className="text-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3 font-heading">
                          Deporte y Juventud
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-2">
                          Impulsar programas de formación deportiva, ligas comunitarias y recursos para jóvenes.
                        </p>
                      </div>
                      
                      {/* Línea conectora en móvil/tablet */}
                      <div className="lg:hidden absolute top-10 sm:top-12 left-1/2 w-0.5 h-16 sm:h-20 bg-gradient-to-b from-pacto-azul to-transparent transform -translate-x-1/2"></div>
                    </div>

                    {/* Economía Local */}
                    <div className="relative group">
                      {/* Nodo del timeline */}
                      <div className="relative z-10 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                        <Image
                          src="/img/economiaIcon.png"
                          alt="Icono de Economía Local"
                          width={80}
                          height={80}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                        />
                      </div>
                      
                      {/* Contenido */}
                      <div className="text-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3 font-heading">
                          Economía Local
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-2">
                          Fortalecer la industria del calzado y apoyar a emprendedores santandereanos.
                        </p>
                      </div>
                      
                      {/* Línea conectora en móvil/tablet */}
                      <div className="lg:hidden absolute top-10 sm:top-12 left-1/2 w-0.5 h-16 sm:h-20 bg-gradient-to-b from-pacto-verde to-transparent transform -translate-x-1/2"></div>
                    </div>

                    {/* Protección Social */}
                    <div className="relative group">
                      {/* Nodo del timeline */}
                      <div className="relative z-10 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                        <Image
                          src="/img/proteccionIcon.png"
                          alt="Icono de Protección Social"
                          width={80}
                          height={80}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                        />
                      </div>
                      
                      {/* Contenido */}
                      <div className="text-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3 font-heading">
                          Protección Social
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-2">
                          Ampliar programas para la tercera edad y poblaciones vulnerables.
                        </p>
                      </div>
                      
                      {/* Línea conectora en móvil/tablet */}
                      <div className="lg:hidden absolute top-10 sm:top-12 left-1/2 w-0.5 h-16 sm:h-20 bg-gradient-to-b from-pacto-morado to-transparent transform -translate-x-1/2"></div>
                    </div>

                    {/* Gestión Legislativa */}
                    <div className="relative group">
                      {/* Nodo del timeline */}
                      <div className="relative z-10 mx-auto flex items-center justify-center mb-4 sm:mb-6">
                        <Image
                          src="/img/gestionIcon.png"
                          alt="Icono de Gestión Legislativa"
                          width={80}
                          height={80}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                        />
                      </div>
                      
                      {/* Contenido */}
                      <div className="text-center">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3 font-heading">
                          Gestión Legislativa
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed px-2">
                          Promover leyes que fortalezcan la equidad, la justicia social y el desarrollo regional.
                        </p>
                      </div>
                      
                      {/* Línea conectora en móvil/tablet */}
                      <div className="lg:hidden absolute top-10 sm:top-12 left-1/2 w-0.5 h-16 sm:h-20 bg-gradient-to-b from-pacto-amarillo to-transparent transform -translate-x-1/2"></div>
                    </div>
                  </div>
                </div>

                {/* CTA adicional */}
                <div className="text-center mt-8 sm:mt-12 md:mt-16">
                  <div className="bg-gradient-to-r from-pacto-azul/10 via-pacto-verde/10 to-pacto-morado/10 rounded-2xl p-6 sm:p-8 border-2 border-pacto-azul/20">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-relaxed font-heading mb-4">
                      &ldquo;Estas propuestas no son solo palabras, son compromisos concretos para transformar la realidad de Santander y Colombia.&rdquo;
                    </p>
                    <p className="text-sm sm:text-base text-pacto-azul font-semibold font-heading">
                      - Édgar Alfonso Gómez Román &ldquo;El Pote&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Imagen de Édgar2 */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-40">
                  {/* Imagen de Égar2 */}
                  <motion.div 
                    className="relative max-w-xs sm:max-w-sm md:max-w-md w-full"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image
                      src="/img/edgar2.jpg"
                      alt="Edgar Alfonso Gómez Román - Propuestas"
                      width={400}
                      height={500}
                      className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-lg sm:shadow-xl md:shadow-2xl"
                      loading="lazy"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  
                  {/* Texto debajo de la imagen */}
                  <div className="text-center mt-4 sm:mt-6">
                    <p className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 font-heading">
                      Abanderados del cambio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección de Valores y Principios */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto">
            {/* Layout de dos columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
              
              {/* Columna izquierda - Imagen */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative mt-8 sm:mt-12 md:mt-16 lg:mt-40">
                  {/* Imagen de Édgar */}
                  <motion.div 
                    className="relative max-w-xs sm:max-w-sm md:max-w-md w-full"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Image
                      src="/img/edgar3.jpg"
                      alt="Edgar Alfonso Gómez Román - Valores"
                      width={400}
                      height={500}
                      className="w-full h-auto rounded-xl sm:rounded-2xl object-cover shadow-lg sm:shadow-xl md:shadow-2xl"
                      loading="lazy"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Columna derecha - Información de Valores */}
              <div>
                {/* Título de la sección */}
                <div className="mb-6 sm:mb-8 md:mb-12 lg:mb-16">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-2 sm:mb-3 md:mb-4 font-heading px-2">
                    Un <span className="text-pacto-morado">liderazgo</span> con valores claros
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-body mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4 max-w-3xl">
                    Los principios que guían la acción política de Édgar Alfonso Gómez Román
                  </p>
                </div>

                {/* Diseño de Infografía con Métricas para valores */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  {/* Valor 1: Cercanía */}
                  <div className="text-center group">
                    
                    {/* Icono profesional */}
                    <div className="flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/img/cercaniaIcon.png"
                        alt="Icono de Cercanía"
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                      />
                    </div>
                    
                    {/* Título y descripción */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3 font-heading">
                      Cercanía
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
                      Siempre en contacto directo con la gente.
                    </p>
                    
                    {/* Barra de progreso */}
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-pacto-azul h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  {/* Valor 2: Experiencia */}
                  <div className="text-center group">
                    
                    {/* Icono profesional */}
                    <div className="flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/img/experienciaIcon.png"
                        alt="Icono de Experiencia"
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                      />
                    </div>
                    
                    {/* Título y descripción */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3 font-heading">
                      Experiencia
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
                      Más de 20 años de gestión en el Congreso.
                    </p>
                    
                    {/* Barra de progreso */}
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-pacto-verde h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  {/* Valor 3: Compromiso Social */}
                  <div className="text-center group">
                    
                    {/* Icono profesional */}
                    <div className="flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/img/compromisoIcon.png"
                        alt="Icono de Compromiso Social"
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                      />
                    </div>
                    
                    {/* Título y descripción */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3 font-heading">
                      Compromiso Social
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
                      Defensa de los sectores más vulnerables.
                    </p>
                    
                    {/* Barra de progreso */}
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-pacto-morado h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>

                  {/* Valor 4: Transparencia */}
                  <div className="text-center group">
                    
                    {/* Icono profesional */}
                    <div className="flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src="/img/transparenciaIcon.png"
                        alt="Icono de Transparencia"
                        width={80}
                        height={80}
                        className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                      />
                    </div>
                    
                    {/* Título y descripción */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2 sm:mb-3 font-heading">
                      Transparencia
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
                      Política con ética y responsabilidad.
                    </p>
                    
                    {/* Barra de progreso */}
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-pacto-amarillo h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>

                {/* CTA de valores */}
                <div className="text-center mt-8 sm:mt-12 md:mt-16">
                  <div className="bg-gradient-to-r from-pacto-azul/10 via-pacto-verde/10 via-pacto-morado/10 to-pacto-amarillo/10 rounded-2xl p-6 sm:p-8 border-2 border-pacto-azul/20">
                    <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-relaxed font-heading mb-4">
                      &ldquo;Estos valores no son solo palabras, son el compromiso diario que mantengo con Santander y Colombia.&rdquo;
                    </p>
                    <p className="text-sm sm:text-base text-pacto-azul font-semibold font-heading">
                      - Édgar Alfonso Gómez Román &ldquo;El Pote&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}; 