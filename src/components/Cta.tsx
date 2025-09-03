import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-6 mx-auto text-white bg-red-600 px-8 py-10 lg:px-16 lg:py-14 lg:flex-nowrap rounded-3xl shadow-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-3xl font-extrabold lg:text-4xl mb-2">
            ¿Listo para ser parte del cambio?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl max-w-2xl mx-auto lg:mx-0">
            Súmate a nuestra causa y ayúdanos a construir una Colombia más solidaria, justa y llena de oportunidades para todos.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto mt-6 lg:mt-0 flex gap-4 justify-center lg:justify-end">
          <a
            href="#contacto"
            className="inline-block py-3 px-7 text-lg font-medium text-black bg-white rounded-full shadow hover:bg-gray-100 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Contáctanos
          </a>
          <a
            href="https://wa.me/"
            className="inline-block py-3 px-7 text-lg font-bold text-white bg-red-600 rounded-full shadow hover:bg-red-700 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            target="_blank" rel="noopener noreferrer"
          >
            ¡Súmate!
          </a>
        </div>
      </div>
    </Container>
  );
};
