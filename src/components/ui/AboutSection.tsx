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
            className="max-w-4xl mx-auto"
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
               <span className="text-pacto-morado">La historia de Édgar &lsquo;El pote&rsquo; Gómez</span>
             </h2>
             <p className="text-xl text-gray-600 font-body mb-8">
               Con una trayectoria de más de 30 años en el servicio público, Édgar Alfonso Gómez Román es un referente de experiencia y compromiso en Santander y en Colombia. Su historia está marcada por la cercanía con la comunidad, el impulso al deporte y la gestión legislativa responsable.
             </p>
            </motion.div>

            {/* Contenido de la biografía en formato CV */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Header del CV con imagen */}
              <motion.div
                className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Imagen de Edgar */}
                <div className="flex-shrink-0">
                  <Image
                    src="/img/edgar.jpg"
                    alt="Édgar Alfonso Gómez Román"
                    width={200}
                    height={200}
                    className="rounded-2xl object-cover shadow-lg border-4 border-pacto-azul/20"
                  />
                </div>
                
                {/* Información personal */}
                <div className="text-center lg:text-left flex-1">
                  <h3 className="text-3xl font-black text-gray-900 mb-3 font-heading">
                    Édgar Alfonso Gómez Román
                  </h3>
                  <p className="text-xl text-pacto-azul font-semibold mb-2">
                    &ldquo;El Pote&rdquo;
                  </p>
                  <p className="text-lg text-gray-600 mb-4">
                    <strong>Fecha de nacimiento:</strong> 3 de octubre de 1953
                  </p>
                  <p className="text-lg text-gray-600 mb-4">
                    <strong>Lugar:</strong> Bogotá, pero criado en Bucaramanga
                  </p>
                  <p className="text-lg text-gray-600">
                    <strong>Profesión:</strong> Abogado - Universidad Santo Tomás de Bucaramanga
                  </p>
                </div>
              </motion.div>

              {/* Experiencia Profesional */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-black text-pacto-azul mb-4 font-heading border-b-2 border-pacto-azul pb-2">
                  Experiencia Profesional
                </h4>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-pacto-azul pl-6 py-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h5 className="text-xl font-bold text-gray-900">Senador de la República</h5>
                      <span className="text-pacto-azul font-semibold text-lg">2022 - Actualidad</span>
                    </div>
                    <p className="text-gray-700">Liderando iniciativas legislativas para el desarrollo de Santander y Colombia</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-verde pl-6 py-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h5 className="text-xl font-bold text-gray-900">Presidente Cámara de Representantes</h5>
                      <span className="text-pacto-verde font-semibold text-lg">2009 - 2010</span>
                    </div>
                    <p className="text-gray-700">Firmó la Ley 1357 que fortaleció la seguridad jurídica de miles de acreedores</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-morado pl-6 py-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h5 className="text-xl font-bold text-gray-900">Representante a la Cámara</h5>
                      <span className="text-pacto-morado font-semibold text-lg">2003-2006, 2006-2010, 2014-2018, 2018-2022</span>
                    </div>
                    <p className="text-gray-700">Múltiples periodos consolidando su papel como líder clave de Santander</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-amarillo pl-6 py-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h5 className="text-xl font-bold text-gray-900">Senador de la República</h5>
                      <span className="text-pacto-amarillo font-semibold text-lg">2010 - 2014</span>
                    </div>
                    <p className="text-gray-700">Representando a Santander en el Senado de la República</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-azul pl-6 py-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h5 className="text-xl font-bold text-gray-900">Concejal de Bucaramanga</h5>
                      <span className="text-pacto-azul font-semibold text-lg">1992-1994, 1995-1997</span>
                    </div>
                    <p className="text-gray-700">Consolidándose como un político cercano a la gente</p>
                  </div>
                  
                  <div className="border-l-4 border-pacto-verde pl-6 py-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-2">
                      <h5 className="text-xl font-bold text-gray-900">Director Coldeportes Santander</h5>
                      <span className="text-pacto-verde font-semibold text-lg">1990 - 1992</span>
                    </div>
                    <p className="text-gray-700">Impulsando programas que fortalecieron la práctica deportiva en la región</p>
                  </div>
                </div>
              </motion.div>

              {/* Gestiones Legislativas Destacadas */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-black text-pacto-verde mb-4 font-heading border-b-2 border-pacto-verde pb-2">
                  Gestiones Legislativas Destacadas
                </h4>
                
                <div className="space-y-4">
                  <div className="bg-pacto-verde/5 p-4 rounded-lg border-l-4 border-pacto-verde">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Comisión Cuarta de la Cámara (2019)</h5>
                    <p className="text-gray-700">Presidió durante el estudio del Plan Nacional de Desarrollo 2018-2022, liderando debates presupuestales fundamentales</p>
                  </div>
                  
                  <div className="bg-pacto-azul/5 p-4 rounded-lg border-l-4 border-pacto-azul">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Ley 1357 (2009)</h5>
                    <p className="text-gray-700">Como Presidente de la Cámara, firmó esta ley que fortaleció la seguridad jurídica de miles de acreedores</p>
                  </div>
                </div>
              </motion.div>

              {/* Compromiso Comunitario y Deporte */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-2xl font-black text-pacto-morado mb-4 font-heading border-b-2 border-pacto-morado pb-2">
                  Compromiso Comunitario y Deporte
                </h4>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-pacto-morado/5 p-4 rounded-lg">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Aliado Comunitario</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Fuerte aliado del gremio del calzado</li>
                      <li>• Impulsor de grupos de ayuda a la tercera edad</li>
                      <li>• Referente de liderazgo solidario</li>
                    </ul>
                  </div>
                  
                  <div className="bg-pacto-amarillo/5 p-4 rounded-lg">
                    <h5 className="font-bold text-lg text-gray-900 mb-2">Deporte como Vocación</h5>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Presidente de la Liga Santandereana de Tenis</li>
                      <li>• Fundador de la Liga de Microfútbol de Salón</li>
                      <li>• Miembro de la Junta Directiva del Club Unión</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Resumen de Trayectoria */}
              <motion.div
                className="bg-gradient-to-r from-pacto-azul/10 to-pacto-morado/10 p-6 rounded-xl border border-pacto-azul/20"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-heading">Resumen de Trayectoria</h4>
                <p className="text-gray-700 leading-relaxed">
                  Con más de <strong>30 años en el servicio público</strong>, Édgar Alfonso Gómez Román ha consolidado su papel como un líder clave de Santander y Colombia. 
                  Su historia está marcada por la cercanía con la comunidad, el impulso al deporte como herramienta de inclusión social, 
                  y una gestión legislativa responsable que ha beneficiado a miles de colombianos.
                </p>
              </motion.div>
            </motion.div>

            {/* Cita final */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-pacto-azul/10 to-pacto-morado/10 rounded-2xl p-8 border border-pacto-azul/20">
                <p className="text-2xl font-bold text-gray-900 leading-relaxed font-heading mb-4">
                  &#8220;El deporte y la política son herramientas de inclusión y progreso social. 
                  Mi compromiso de más de 30 años es seguir trabajando por Santander y Colombia, 
                  llevando la voz de la gente al Congreso.&#8221;
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