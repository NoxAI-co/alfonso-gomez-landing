"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Feature5 = () => {
  return (
    <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-6xl">
            <Image
              src="/img/promocion.png"
              alt="Promoción para el Senado - Édgar 'El pote' Gómez"
              width={1200}
              height={800}
              className="w-full h-auto rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl"
              priority
              quality={95}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};