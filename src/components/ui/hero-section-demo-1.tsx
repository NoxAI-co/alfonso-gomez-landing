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
        <div className="absolute top-0 h-40 w-px animate-gradient-vertical bg-gradient-to-b from-transparent via-red-600 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 overflow-hidden">
        <div className="absolute h-40 w-px animate-gradient-vertical bg-gradient-to-b from-transparent via-red-600 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 overflow-hidden">
        <div className="absolute mx-auto h-px w-40 animate-gradient-horizontal bg-gradient-to-r from-transparent via-red-600 to-transparent" />
      </div>
      <div className="px-4 py-4">
        {/* Bloque de confianza */}
        <div className="w-full flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
            <div className="flex -space-x-2">
              <Image src="/img/user1.jpg" alt="Testimonio 1" width={24} height={24} className="w-6 h-6 rounded-full border border-white shadow-sm" />
              <Image src="/img/user2.jpg" alt="Testimonio 2" width={24} height={24} className="w-6 h-6 rounded-full border border-white shadow-sm" />
              <Image src="/img/user3.jpg" alt="Testimonio 3" width={24} height={24} className="w-6 h-6 rounded-full border border-white shadow-sm" />
            </div>
            <span className="ml-2 text-gray-700 text-xs font-medium">
              Apoyado por <span className="font-bold text-red-700">120+ familias y líderes sociales</span>
            </span>
          </div>
        </div>
        <Fade cascade damping={0.1} triggerOnce>
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-black md:text-4xl lg:text-7xl">
            <span className="text-black">Unidos por el </span><span className="text-red-600">cambio</span><span className="text-black">, construyendo </span><span className="text-red-600">futuro</span>
          </h1>
        </Fade>
        <Fade delay={300} triggerOnce>
          <p className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600">
            Trabajamos juntos para transformar vidas a través de proyectos sociales, vivienda digna, deporte e integración. Súmate y sé parte de una Colombia más justa y solidaria.
          </p>
        </Fade>
        <Slide direction="up" delay={500} triggerOnce>
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800"
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
              className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100"
              onClick={() => window.open('https://wa.me/573103662934', '_blank')}
            >
              Contáctanos
            </button>
          </div>
        </Slide>
        <Slide direction="up" delay={700} triggerOnce>
          <div className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md">
            <div className="w-full overflow-hidden rounded-xl border border-gray-300">
              {/* Usando URL directa al video de Facebook */}
              <video
                src="https://scontent.feoh1-1.fna.fbcdn.net/o1/v/t2/f2/m69/AQMVrqJ67l1HjY8xHQ6HAavIDfnzuQS2Owepu0SLc13dCgitdCU-Mcx4HotpnFbvZUY7_XsUweK1YKAEiJ1P1LFS.mp4?strext=1&_nc_cat=104&_nc_oc=AdlX3jdz7yif2Xh_ykpUhLCEVhVpnhFK5Mgegw1JbXyqVGj6b5nbgWiVpaYDGytKfQI&_nc_sid=8bf8fe&_nc_ht=scontent.feoh1-1.fna.fbcdn.net&_nc_ohc=ygkZ7MVEAykQ7kNvwH9TArk&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNjQwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6MTk1NjUwMjc1NTE3NzQzOCwidmlfdXNlY2FzZV9pZCI6MTAxMjIsImR1cmF0aW9uX3MiOjEyNywidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&_nc_zt=28&_nc_rml=0&oh=00_AfO27lHI8pNQNIzLVr0Vsuf0Ct-6Am89liUXsK6ocLVYvQ&oe=686CACE2"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="aspect-[16/9] h-auto w-full object-cover"
              >
                Tu navegador no soporta la reproducción de video.
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
        <div className="flex-shrink-0 flex items-center gap-2">
          <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
          <span className="text-lg font-bold">Mi Landing</span>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors"
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
                  className="text-base font-medium text-gray-800 hover:text-blue-600 transition-colors"
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