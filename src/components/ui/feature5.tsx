"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

export const Feature5 = () => {
  // Variantes de animación minimalistas
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const fadeUpVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="flex gap-4 flex-col items-center"
            variants={fadeUpVariants}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-primary text-white">Proyectos</Badge>
            </motion.div>
            <div className="flex gap-2 flex-col items-center text-center">
              <motion.h2 
                className="text-3xl md:text-5xl tracking-tighter max-w-xl font-extrabold text-black text-center"
                variants={fadeUpVariants}
              >
                ¡Conoce nuestras <span className="text-red-600">iniciativas</span>!
              </motion.h2>
              <motion.p 
                className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-black text-center"
                variants={fadeUpVariants}
              >
                Estos son los proyectos sociales y comunitarios que lidera Cristancho para transformar vidas.
              </motion.p>
            </div>
          </motion.div>
          
          {/* Punto de anclaje para scroll exacto */}
          <div id="proyectos-tarjetas"></div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {[
              {
                img: "/img/construyendo-sueños.jpg",
                alt: "Construyendo sueños",
                title: "Construyendo sueños",
                description: "Entregamos viviendas dignas a familias que más lo necesitan, construyendo esperanza y mejorando la calidad de vida en nuestra comunidad."
              },
              {
                img: "/img/deporte.jpg",
                alt: "Apoyo al deporte",
                title: "Apoyo al deporte",
                description: "Impulsamos el deporte y la recreación con torneos, eventos y jornadas de integración, promoviendo valores y bienestar para todos."
              },
              {
                img: "/img/iniciativa-social.jpg",
                alt: "Iniciativa social",
                title: "Iniciativa social",
                description: "Desarrollamos programas de ayuda, inclusión y acompañamiento, generando oportunidades y fortaleciendo el tejido social de nuestra región."
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="relative aspect-video overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image src={project.img} alt={project.alt} fill className="object-cover" />
                </motion.div>
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}; 