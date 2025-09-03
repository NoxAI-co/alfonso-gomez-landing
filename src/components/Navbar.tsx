"use client";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  // Agregar scroll suave global
  if (typeof window !== "undefined") {
    document.documentElement.style.scrollBehavior = "smooth";
  }

  return (
    <nav className="w-full bg-white border-b-2 border-pacto-amarillo shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          {/* Logo Pacto Histórico */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pacto-amarillo to-pacto-azul flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-sm">PH</span>
          </div>
          <span className="text-xl font-black text-pacto-azul font-heading">
            Pacto Histórico
          </span>
        </div>
        <ul className="flex gap-8">
          <li>
            <a
              href="#inicio"
              className="text-gray-800 font-bold hover:text-pacto-azul transition-colors font-heading"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#sobre"
              className="text-gray-800 font-bold hover:text-pacto-azul transition-colors font-heading"
            >
              Sobre nosotros
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="text-gray-800 font-bold hover:text-pacto-azul transition-colors font-heading"
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#testimonios"
              className="text-gray-800 font-bold hover:text-pacto-azul transition-colors font-heading"
            >
              Testimonios
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
