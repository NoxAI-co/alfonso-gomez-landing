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

  return (
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
                        src="/img/Cristancho.jpg"
                        alt="Jhon Cristancho"
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
                        Conóceme: <span className="text-pacto-azul">Jhon Cristancho</span>
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Líder social y empresario comprometido con el cambio positivo en nuestras comunidades.
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
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-heading">
                Lo que nos <span className="text-pacto-morado">mueve</span>
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
                Somos un equipo comprometido con el bienestar y el desarrollo social de nuestra 
                comunidad. Nuestra misión es transformar vidas a través de proyectos de vivienda 
                digna, deporte e inclusión social.
              </motion.p>
              
              <motion.p 
                className="text-lg leading-relaxed font-body"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Coordinamos la iniciativa RED Inicio, una plataforma desde donde impulsamos proyectos 
                que no solo transforman vidas individuales, sino que fortalecen el tejido social de 
                nuestras comunidades.
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
  );
}; 