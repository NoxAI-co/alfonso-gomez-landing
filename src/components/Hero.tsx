'use client';

import { useState, useEffect, memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
         <div className="relative min-h-[80vh] w-screen overflow-hidden hero-fullscreen pt-20 md:pt-24">
       {/* Fondo de Bucaramanga - Completo sin márgenes */}
       <div className="absolute inset-0 z-0 w-full h-full">
                 <Image
           src="/img/Bucaramanga.jpeg"
           alt="Bucaramanga de fondo"
           fill
           className="object-cover"
           priority
           quality={85}
           sizes="100vw"
         />
                 {/* Overlay con blur y opacidad para contraste */}
         <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

                    {/* Contenido principal - Layout de dos columnas */}
       <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-4 pt-16 sm:pt-20 md:pt-24 lg:pt-8">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
         >
                     {/* Columna izquierda - Texto */}
           <div className="text-left">
             {/* Título principal */}
                            <motion.h1
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-relaxed max-w-none"
                            >
                 <div className="mb-4">Más unidos, más potentes:</div>
                 <div className="text-pacto-amarillo">Édgar &apos;El pote&apos; Gómez</div>
                 <div className="text-xl md:text-2xl lg:text-3xl font-bold mt-6 text-white bg-pacto-morado px-4 py-2 rounded-lg inline-block border-2 border-pacto-amarillo shadow-lg">Senado</div>
               </motion.h1>

             {/* Subtítulo */}
             <motion.h2
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="text-xl md:text-2xl lg:text-3xl text-white mb-8 font-bold"
             >
               Experiencia, cercanía y compromiso al servicio de Santander y de Colombia.
             </motion.h2>

             {/* Texto descriptivo */}
             <motion.p
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
             >
               Un liderazgo que une la vocación social con la gestión legislativa, en sintonía con el proyecto de cambio del Pacto Histórico.
                          </motion.p>
           </div>

           {/* Columna derecha - Video y Botones CTA */}
           <div className="flex flex-col items-center">
             {/* Contenedor del video */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="relative w-full mb-8"
             >
               {/* Imagen promocional */}
               <div className="w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                 <Image
                   src="/img/promocion.png"
                   alt="Promoción para el Senado - Édgar 'El pote' Gómez"
                   width={800}
                   height={600}
                   className="w-full h-auto object-contain"
                   priority
                   quality={95}
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                 />
               </div>
             </motion.div>

             {/* Botones CTA */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1 }}
               className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16 lg:mb-8"
             >
               <a
                 href="#sobre-nosotros"
                 className="px-8 py-4 text-lg font-semibold text-white bg-pacto-azul hover:bg-pacto-morado rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
               >
                 Conoce su trayectoria
              </a>
              <a
                href="#cta"
                 className="px-8 py-4 text-lg font-semibold text-pacto-amarillo border-2 border-pacto-amarillo hover:bg-pacto-amarillo hover:text-white hover:border-pacto-amarillo rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
               >
                 Súmate al cambio
              </a>
             </motion.div>
            </div>
         </motion.div>
          </div>
        </div>
   );
 };

export default Hero;
