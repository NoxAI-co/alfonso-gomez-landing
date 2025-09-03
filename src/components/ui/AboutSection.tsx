"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Columna izquierda - Apple Card Style */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              variants={cardVariants}
            >
              <div className="relative">
                {/* Fondo del mockup estilo Apple */}
                <motion.div 
                  className="bg-gradient-to-br from-pacto-amarillo/20 to-pacto-azul/20 rounded-3xl p-8 shadow-2xl max-w-md w-full transform -rotate-3 border-2 border-pacto-amarillo/30"
                  whileHover={{ 
                    rotate: 0, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-pacto-azul/10">
                    {/* Botones del navegador */}
                    <motion.div 
                      className="flex items-center gap-3 mb-6"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <motion.div 
                        className="w-3 h-3 bg-pacto-rojo rounded-full"
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      ></motion.div>
                      <motion.div 
                        className="w-3 h-3 bg-pacto-amarillo rounded-full"
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      ></motion.div>
                      <motion.div 
                        className="w-3 h-3 bg-pacto-verde rounded-full"
                        whileHover={{ scale: 1.3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      ></motion.div>
                    </motion.div>
                                                      
                    {/* Perfil de Jhon */}
                    <motion.div 
                      className="flex flex-col items-center text-center"
                      variants={profileVariants}
                    >
                      <motion.div 
                        className="mb-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Image
                          src="/img/edgar.jpg"
                          alt="Edgar Alfonso Gómez Román"
                          width={80}
                          height={80}
                          className="rounded-full object-cover border-4 border-gray-100"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                      >
                        <h4 className="font-black text-sm mb-2 font-heading">
                          Conóceme: <span className="text-pacto-azul">Édgar Alfonso Gómez Román</span>
                        </h4>
                        <p className="text-xs text-gray-600 leading-relaxed">
                        Un líder santandereano con una trayectoria impecable al servicio de la gente. 

                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
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
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-heading">
                  Lo que nos <span className="text-pacto-morado">mueve</span>
                </h1>
                <br />
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 font-heading  ">
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
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl mx-auto">
            {/* Título de la sección */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 font-heading px-2">
                <span className="text-pacto-morado">La historia de Édgar &lsquo;El pote&rsquo; Gómez</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-body mb-6 sm:mb-8 px-4">
                Con una trayectoria de más de 30 años en el servicio público, Édgar Alfonso Gómez Román es un referente de experiencia y compromiso en Santander y en Colombia. Su historia está marcada por la cercanía con la comunidad, el impulso al deporte y la gestión legislativa responsable.
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
                      src="/img/edgar.jpg"
                      alt="Édgar Alfonso Gómez Román"
                      width={200}
                      height={200}
                      className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover shadow-xl border-4 border-pacto-azul/30"
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
                
                {/* Datos personales en badges */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
                  <span className="bg-pacto-azul/10 text-pacto-azul px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-pacto-azul/20">
                    🎂 3 de octubre de 1953
                  </span>
                  <span className="bg-pacto-verde/10 text-pacto-verde px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-pacto-verde/20">
                    🏠 Bogotá, criado en Bucaramanga
                  </span>
                  <span className="bg-pacto-morado/10 text-pacto-morado px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-pacto-morado/20">
                    ⚖️ Abogado - Universidad Santo Tomás
                  </span>
                </div>
              </div>

              {/* Timeline de experiencia profesional */}
              <div className="relative">
                {/* Línea de tiempo vertical */}
                <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pacto-azul via-pacto-verde to-pacto-morado"></div>
                
                {/* Experiencias */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Senador Actual */}
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pacto-azul rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-xs sm:text-sm md:text-base">2022</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-pacto-azul/5 to-pacto-azul/10 p-4 sm:p-5 rounded-xl border-l-4 border-pacto-azul">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Senador de la República</h4>
                      <p className="text-sm sm:text-base text-gray-700 mb-2">Liderando iniciativas legislativas para el desarrollo de Santander y Colombia</p>
                      <span className="inline-block bg-pacto-azul text-white px-2 py-1 rounded text-xs font-semibold">Actualidad</span>
                    </div>
                  </div>

                  {/* Presidencia Cámara */}
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pacto-verde rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-xs sm:text-sm md:text-base">2009</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-pacto-verde/5 to-pacto-verde/10 p-4 sm:p-5 rounded-xl border-l-4 border-pacto-verde">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Presidente Cámara de Representantes</h4>
                      <p className="text-sm sm:text-base text-gray-700 mb-2">Firmó la Ley 1357 que fortaleció la seguridad jurídica de miles de acreedores</p>
                      <span className="inline-block bg-pacto-verde text-white px-2 py-1 rounded text-xs font-semibold">2009-2010</span>
                    </div>
                  </div>

                  {/* Representante a la Cámara */}
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pacto-morado rounded-full flex items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-xs sm:text-sm md:text-base">2003</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-pacto-morado/5 to-pacto-morado/10 p-4 sm:p-5 rounded-xl border-l-4 border-pacto-morado">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Representante a la Cámara</h4>
                      <p className="text-sm sm:text-base text-gray-700 mb-2">Múltiples periodos consolidando su papel como líder clave de Santander</p>
                      <span className="inline-block bg-pacto-morado text-white px-2 py-1 rounded text-xs font-semibold">2003-2010, 2014-2022</span>
                    </div>
                  </div>

                  {/* Senador 2010-2014 */}
                  <div className="relative flex items-start gap-4 sm:gap-6">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-pacto-amarillo rounded-full flex items-center justify-center shadow-lg z-10">
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
                    - Édgar Alfonso Gómez Román
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección de Propuestas */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto">
            {/* Título de la sección */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 font-heading px-2">
                <span className="text-pacto-morado">Propuestas</span> que transforman vidas
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-body mb-6 sm:mb-8 px-4 max-w-3xl mx-auto">
                La visión de Édgar &lsquo;El pote&rsquo; Gómez está orientada a resolver las necesidades reales de la gente. Estas son sus principales banderas:
              </p>
            </div>

            {/* Timeline horizontal de propuestas */}
            <div className="relative">
              {/* Línea de tiempo horizontal */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-pacto-azul via-pacto-verde via-pacto-morado to-pacto-amarillo transform -translate-y-1/2"></div>
              
              {/* Propuestas en timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                              {/* Deporte y Juventud */}
                <div className="relative group">
                  {/* Nodo del timeline */}
                  <div className="relative z-10 mx-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-pacto-azul to-pacto-azul/80 rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 sm:mb-6">
                    <span className="text-white text-2xl sm:text-3xl md:text-4xl">⚽</span>
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
                  <div className="relative z-10 mx-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-pacto-verde to-pacto-verde/80 rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 sm:mb-6">
                    <span className="text-white text-2xl sm:text-3xl md:text-4xl">👞</span>
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
                  <div className="relative z-10 mx-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-pacto-morado to-pacto-morado/80 rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 sm:mb-6">
                    <span className="text-white text-2xl sm:text-3xl md:text-4xl">🤝</span>
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
                  <div className="relative z-10 mx-auto w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-pacto-amarillo to-pacto-amarillo/80 rounded-full flex items-center justify-center shadow-xl border-4 border-white mb-4 sm:mb-6">
                    <span className="text-white text-2xl sm:text-3xl md:text-4xl">⚖️</span>
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
                  - Édgar Alfonso Gómez Román
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección de Valores y Principios */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl mx-auto">
            {/* Título de la sección */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 font-heading px-2">
                Un <span className="text-pacto-morado">liderazgo</span> con valores claros
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-body mb-6 sm:mb-8 px-4 max-w-3xl mx-auto">
                Los principios que guían la acción política de Édgar Alfonso Gómez Román
              </p>
            </div>

            {/* Diseño de Infografía con Métricas para valores */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
              {/* Valor 1: Cercanía */}
              <div className="text-center group">
                {/* Métrica principal */}
                <div className="relative mb-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-pacto-azul mb-2">100%</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">Presencia Comunitaria</div>
                </div>
                
                {/* Icono profesional */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-pacto-azul to-pacto-azul/80 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
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
                {/* Métrica principal */}
                <div className="relative mb-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-pacto-verde mb-2">20+</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">Años de Experiencia</div>
                </div>
                
                {/* Icono profesional */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-pacto-verde to-pacto-verde/80 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
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
                  <div className="bg-pacto-verde h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>

              {/* Valor 3: Compromiso Social */}
              <div className="text-center group">
                {/* Métrica principal */}
                <div className="relative mb-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-pacto-morado mb-2">∞</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">Compromiso Infinito</div>
                </div>
                
                {/* Icono profesional */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-pacto-morado to-pacto-morado/80 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
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
                {/* Métrica principal */}
                <div className="relative mb-6">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-pacto-amarillo mb-2">100%</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">Transparencia Total</div>
                </div>
                
                {/* Icono profesional */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-pacto-amarillo to-pacto-amarillo/80 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl border-2 border-white group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
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
                  - Édgar Alfonso Gómez Román
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}; 