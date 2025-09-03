"use client";

import { Fade, Slide } from "react-awesome-reveal";
import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre nosotros", href: "#sobre-nosotros" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#cta" },
];

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto mt-0 mb-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 overflow-hidden">
        <div className="absolute top-0 h-40 w-px animate-gradient-vertical bg-gradient-to-b from-transparent via-pacto-azul to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 overflow-hidden">
        <div className="absolute h-40 w-px animate-gradient-vertical bg-gradient-to-b from-transparent via-pacto-azul to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 overflow-hidden">
        <div className="absolute mx-auto h-px w-40 animate-gradient-horizontal bg-gradient-to-r from-transparent via-pacto-azul to-transparent" />
      </div>
      <div className="px-4 py-4">
        {/* Bloque de confianza */}
        <div className="w-full flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-white border-2 border-pacto-amarillo rounded-full px-4 py-2 shadow-lg">
            <div className="flex -space-x-2">
              <Image src="/img/user1.jpg" alt="Testimonio 1" width={24} height={24} className="w-6 h-6 rounded-full border-2 border-white shadow-sm" />
              <Image src="/img/user2.jpg" alt="Testimonio 2" width={24} height={24} className="w-6 h-6 rounded-full border-2 border-white shadow-sm" />
              <Image src="/img/user3.jpg" alt="Testimonio 3" width={24} height={24} className="w-6 h-6 rounded-full border-2 border-white shadow-sm" />
            </div>
            <span className="ml-2 text-gray-700 text-sm font-bold">
              Apoyado por <span className="text-pacto-azul">120+ familias y líderes sociales</span>
            </span>
          </div>
        </div>
        <Fade cascade damping={0.1} triggerOnce>
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-black text-black md:text-4xl lg:text-7xl font-heading">
            <span className="text-black"><span className="text-pacto-verde">Más unidos</span>, más potentes: Édgar <span className="text-pacto-amarillo">‘El pote’</span>Gomez</span>
           
          
          </h1>
        </Fade>
        <Fade delay={300} triggerOnce>
          <p className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-medium text-gray-700 font-body">
          Experiencia, cercanía y compromiso al servicio de Santander y de Colombia.
          </p>
        </Fade>
        <Slide direction="up" delay={500} triggerOnce>
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              className="w-60 transform rounded-lg bg-pacto-azul px-8 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2a2d7a] shadow-lg hover:shadow-xl font-heading"
              onClick={() => {
                const anchor = document.querySelector('#proyectos-tarjetas');
                if (anchor) {
                  const y = anchor.getBoundingClientRect().top + window.pageYOffset - 260;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Conoce los proyectos
            </button>
            <button
              className="w-60 transform rounded-lg bg-pacto-amarillo px-8 py-3 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#e09a2a] shadow-lg hover:shadow-xl font-heading"
              onClick={() => window.open('https://wa.me/573103662934', '_blank')}
            >
              Contáctanos
            </button>
          </div>
        </Slide>
        <Slide direction="up" delay={700} triggerOnce>
          <div className="relative z-10 mt-20 rounded-3xl border-2 border-pacto-amarillo bg-gradient-to-br from-white to-gray-50 p-4 shadow-xl">
            <div className="w-full overflow-hidden rounded-xl border-2 border-pacto-azul/20">
              {/* Usando URL directa al video de Facebook */}
              <video
                src="https://www.youtube.com/watch?v=9E98zMcdwAs"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="aspect-[16/9] h-auto w-full object-cover"
              >
                El navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full border-b border-neutral-200 bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pacto-amarillo to-pacto-azul flex items-center justify-center">
            <span className="text-white font-black text-sm">PH</span>
          </div>
          <span className="text-xl font-black text-pacto-azul font-heading">Pacto Histórico</span>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                              <a
                href={item.href}
                className="text-base font-bold text-gray-800 hover:text-pacto-azul transition-colors font-heading"
              >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <ul className="flex flex-col items-center gap-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-base font-bold text-gray-800 hover:text-pacto-azul transition-colors font-heading"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}; 