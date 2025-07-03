"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { text: "Inicio", href: "#hero" },
  { text: "Sobre nosotros", href: "#sobre-nosotros" },
  { text: "Proyectos", href: "#proyectos" },
  { text: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn("sticky top-0 z-50 bg-white border-b border-gray-200 w-full")}> 
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo institucional */}
        <a href="#hero" className="flex items-center gap-5 select-none" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <Image src="/img/logo.svg" alt="Logo Cristancho" width={140} height={140} className="w-36 h-36" />
        </a>
        {/* Navegación desktop */}
        <ul className="hidden md:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-base font-semibold text-gray-800 hover:text-red-700 transition-colors scroll-smooth"
                onClick={e => {
                  e.preventDefault();
                  if (item.href === '#hero') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                  }
                  const el = document.querySelector(item.href);
                  if (el) {
                    let yOffset = -80;
                    if (item.href === '#proyectos') {
                      const anchor = document.querySelector('#proyectos-tarjetas');
                      if (anchor) {
                        const y = anchor.getBoundingClientRect().top + window.pageYOffset - 260;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                        return;
                      }
                    } else if (item.href === '#cta') {
                      yOffset = -120;
                    }
                    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
          {/* Botón institucional destacado */}
          <li>
            <Button variant="default" size="sm" className="ml-2 text-white" asChild>
              <a href="https://wa.me/573103662934" target="_blank" rel="noopener noreferrer" className="text-white">¡Súmate!</a>
            </Button>
          </li>
        </ul>
        {/* Menú móvil */}
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <Menu className="w-7 h-7" stroke="#222" />
        </Button>
      </nav>
      {/* Menú móvil tipo Sheet */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black/30 z-50" onClick={() => setOpen(false)}>
          <nav
            className="absolute right-0 top-0 w-64 h-full bg-white shadow-lg flex flex-col gap-6 p-8 animate-slide-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="self-end mb-4 p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Cerrar menú"
            >
              <Menu className="w-7 h-7" stroke="#222" />
            </button>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-semibold text-gray-800 hover:text-red-700 transition-colors scroll-smooth py-2"
                onClick={e => {
                  e.preventDefault();
                  setOpen(false);
                  setTimeout(() => {
                    const el = document.querySelector(item.href);
                    if (el) {
                      let yOffset = -80;
                      if (item.href === '#proyectos' || item.href === '#cta') {
                        yOffset = -120;
                      }
                      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                {item.text}
              </a>
            ))}
            <Button variant="default" size="sm" className="mt-4 text-white" asChild>
              <a href="https://wa.me/573103662934" target="_blank" rel="noopener noreferrer" className="text-white">¡Súmate!</a>
            </Button>
          </nav>
        </div>
      )}
      <style jsx global>{`
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in {
          animation: slide-in 0.25s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
} 