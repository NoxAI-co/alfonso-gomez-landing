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
      <section className="w-full py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={biographyVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {/* Título de la sección */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-heading">
                <span className="text-pacto-morado">La historia de</span> Édgar &lsquo;El pote&rsquo; Gómez
              </h2>
              <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
                Con una trayectoria de más de 30 años en el servicio público, Édgar Alfonso Gómez Román es un referente de experiencia y compromiso en Santander y en Colombia. Su historia está marcada por la cercanía con la comunidad, el impulso al deporte y la gestión legislativa responsable.
              </p>
            </motion.div>

            {/* Contenido de la biografía */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Datos personales y formación */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pacto-azul/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pacto-azul" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">Datos Personales y Formación</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pacto-azul pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Nacimiento e Identidad</h4>
                    <p className="text-pacto-azul font-semibold">3 de octubre de 1953</p>
                    <p className="text-gray-600 text-sm mt-2">Nació en Bogotá pero creció en Bucaramanga, donde cimentó su identidad santandereana</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-verde pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Formación Académica</h4>
                    <p className="text-pacto-verde font-semibold">Universidad Santo Tomás de Bucaramanga</p>
                    <p className="text-gray-600 text-sm mt-2">Abogado que unió la visión jurídica con la sensibilidad social</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-amarillo pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Trayectoria</h4>
                    <p className="text-pacto-amarillo font-semibold">Más de 30 años</p>
                    <p className="text-gray-600 text-sm mt-2">De experiencia en el servicio público y compromiso con la comunidad</p>
                  </div>
                </div>
              </motion.div>

              {/* Primeros pasos en lo público */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pacto-verde/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pacto-verde" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">Primeros Pasos en lo Público</h3>
                  <p className="text-pacto-verde font-semibold">1990 - 1997</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pacto-verde pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Director de Coldeportes Santander</h4>
                    <p className="text-pacto-verde font-semibold">1990 - 1992</p>
                    <p className="text-gray-600 text-sm mt-2">Impulsando programas que fortalecieron la práctica deportiva en la región</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-azul pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Concejal de Bucaramanga</h4>
                    <p className="text-pacto-azul font-semibold">1992 - 1994 y 1995 - 1997</p>
                    <p className="text-gray-600 text-sm mt-2">Se consolidó como un político cercano a la gente</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Ascenso legislativo y presidencia */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Ascenso legislativo */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pacto-morado/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pacto-morado" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">Ascenso Legislativo</h3>
                  <p className="text-pacto-morado font-semibold">2002 - 2022</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pacto-morado pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Representante a la Cámara</h4>
                    <p className="text-pacto-morado font-semibold">2003-2006, 2006-2010, 2014-2018, 2018-2022</p>
                    <p className="text-gray-600 text-sm mt-2">Múltiples periodos consolidando su liderazgo</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-azul pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Senador de la República</h4>
                    <p className="text-pacto-azul font-semibold">2010 - 2014</p>
                    <p className="text-gray-600 text-sm mt-2">Más de 20 años en el Congreso como líder clave de Santander</p>
                  </div>
                </div>
              </motion.div>

              {/* Presidencia de la Cámara */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pacto-amarillo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pacto-amarillo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">Presidencia de la Cámara</h3>
                  <p className="text-pacto-amarillo font-semibold">2009 - 2010</p>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pacto-amarillo pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Asunción del Cargo</h4>
                    <p className="text-pacto-amarillo font-semibold">20 de julio de 2009</p>
                    <p className="text-gray-600 text-sm mt-2">Garantizando la participación de todos los movimientos políticos</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-verde pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Ley 1357</h4>
                    <p className="text-pacto-verde font-semibold">Logro Legislativo</p>
                    <p className="text-gray-600 text-sm mt-2">Firmó la ley que fortaleció la seguridad jurídica de miles de acreedores</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Gestiones legislativas y compromiso comunitario */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Gestiones legislativas destacadas */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pacto-azul/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pacto-azul" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">Gestiones Legislativas Destacadas</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pacto-azul pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Comisión Cuarta de la Cámara</h4>
                    <p className="text-pacto-azul font-semibold">2019</p>
                    <p className="text-gray-600 text-sm mt-2">Presidió durante el estudio del Plan Nacional de Desarrollo 2018-2022</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-verde pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Debates Presupuestales</h4>
                    <p className="text-pacto-verde font-semibold">Liderazgo Clave</p>
                    <p className="text-gray-600 text-sm mt-2">Dirigiendo debates presupuestales fundamentales para el país</p>
                  </div>
                </div>
              </motion.div>

              {/* Compromiso comunitario */}
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pacto-verde/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pacto-verde" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">Compromiso Comunitario</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-pacto-verde pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Gremio del Calzado</h4>
                    <p className="text-pacto-verde font-semibold">Fuerte Aliado</p>
                    <p className="text-gray-600 text-sm mt-2">Apoyando el desarrollo económico de la región</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-amarillo pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Tercera Edad</h4>
                    <p className="text-pacto-amarillo font-semibold">Grupos de Ayuda</p>
                    <p className="text-gray-600 text-sm mt-2">Impulsor de programas de apoyo a adultos mayores</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-morado pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Liderazgo Solidario</h4>
                    <p className="text-pacto-morado font-semibold">Referente</p>
                    <p className="text-gray-600 text-sm mt-2">Ejemplo de compromiso con la comunidad</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Deporte como vocación permanente */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pacto-amarillo/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-pacto-amarillo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">Deporte como Vocación Permanente</h3>
                  <p className="text-pacto-amarillo font-semibold">Herramienta de Inclusión y Progreso Social</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border-l-4 border-pacto-amarillo pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Liga Santandereana de Tenis</h4>
                    <p className="text-pacto-amarillo font-semibold">Presidente</p>
                    <p className="text-gray-600 text-sm mt-2">Promoviendo el tenis como deporte de excelencia</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-verde pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Liga de Microfútbol de Salón</h4>
                    <p className="text-pacto-verde font-semibold">Fundador</p>
                    <p className="text-gray-600 text-sm mt-2">Creando espacios deportivos para la comunidad</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-azul pl-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">Club Unión</h4>
                    <p className="text-pacto-azul font-semibold">Junta Directiva</p>
                    <p className="text-gray-600 text-sm mt-2">Contribuyendo al desarrollo deportivo institucional</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Cita final */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-pacto-azul/10 to-pacto-morado/10 rounded-2xl p-8 border border-pacto-azul/20">
                <p className="text-2xl font-bold text-gray-900 leading-relaxed font-heading mb-4">
                  &ldquo;Mi compromiso es seguir trabajando por Santander y Colombia, 
                  llevando la voz de la gente al Congreso y transformando 
                  las necesidades en soluciones concretas.&rdquo;
                </p>
                <p className="text-lg text-pacto-azul font-semibold font-heading">
                  - Édgar Alfonso Gómez Román
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}; 