"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar navbar al hacer scroll hacia arriba o al estar en la parte superior
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Agregar scroll suave global
  if (typeof window !== "undefined") {
    document.documentElement.style.scrollBehavior = "smooth";
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b-2 border-pacto-amarillo shadow-lg transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo y título */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pacto-amarillo to-pacto-azul flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-sm">PH</span>
          </div>
          <span className="text-xl font-black text-pacto-azul font-heading">
            Pacto Histórico
          </span>
        </div>

        {/* Menú de escritorio */}
        <ul className="hidden md:flex gap-8">
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

        {/* Botón de menú móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-800 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Overlay de fondo sólido */}
      <div 
        className={`md:hidden fixed inset-0 bg-white transition-opacity duration-300 z-40 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Menú móvil que sale desde la derecha */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Contenido del menú */}
        <div className="h-full flex flex-col">
          {/* Header del menú */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pacto-amarillo to-pacto-azul flex items-center justify-center">
                <span className="text-white font-black text-sm">PH</span>
              </div>
              <span className="text-lg font-black text-pacto-azul font-heading">
                Pacto Histórico
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Enlaces del menú */}
          <ul className="flex-1 px-4 py-6 space-y-4 bg-white">
            <li className={`transform transition-all duration-300 delay-75 bg-white ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-8'
            }`}>
              <a
                href="#inicio"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-lg text-gray-800 font-bold hover:text-pacto-azul hover:bg-gray-50 rounded-lg transition-all font-heading bg-white"
              >
                Inicio
              </a>
            </li>
            <li className={`transform transition-all duration-300 delay-100 bg-white ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-8'
            }`}>
              <a
                href="#sobre"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-lg text-gray-800 font-bold hover:text-pacto-azul hover:bg-gray-50 rounded-lg transition-all font-heading bg-white"
              >
                Sobre nosotros
              </a>
            </li>
            <li className={`transform transition-all duration-300 delay-150 bg-white ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-8'
            }`}>
              <a
                href="#proyectos"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-lg text-gray-800 font-bold hover:text-pacto-azul hover:bg-gray-50 rounded-lg transition-all font-heading bg-white"
              >
                Proyectos
              </a>
            </li>
            <li className={`transform transition-all duration-300 delay-200 bg-white ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-8'
            }`}>
              <a
                href="#testimonios"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-lg text-gray-800 font-bold hover:text-pacto-azul hover:bg-gray-50 rounded-lg transition-all font-heading bg-white"
              >
                Testimonios
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
