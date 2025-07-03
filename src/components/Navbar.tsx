"use client";
import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    "Product",
    "Features",
    "Pricing",
    "Company",
    "Blog",
  ];

  // Agregar scroll suave global
  if (typeof window !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-2">
        <div className="flex items-center gap-2">
          {/* Logo institucional */}
          <Image src="/img/logo.svg" alt="Logo Cristancho" width={48} height={48} className="h-12 w-auto" />
        </div>
        <ul className="flex gap-6">
          <li><a href="#inicio" className="text-gray-800 font-medium hover:text-red-700 transition-colors">Inicio</a></li>
          <li><a href="#sobre" className="text-gray-800 font-medium hover:text-red-700 transition-colors">Sobre nosotros</a></li>
          <li><a href="#proyectos" className="text-gray-800 font-medium hover:text-red-700 transition-colors">Proyectos</a></li>
          <li><a href="#testimonios" className="text-gray-800 font-medium hover:text-red-700 transition-colors">Testimonios</a></li>
        </ul>
      </div>
    </nav>
  );
}

