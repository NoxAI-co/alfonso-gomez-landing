"use client";

import { Check, Pencil, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface Step {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    name: "Cuéntanos tu historia",
    icon: <span className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white text-2xl font-bold border-4 border-white shadow-lg">1</span>,
    description: "Escríbenos por WhatsApp y comparte tu historia, tus sueños y tu situación. ¡Queremos conocerte y escucharte!",
    color: "green",
  },
  {
    name: "Validamos juntos",
    icon: <span className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-white text-2xl font-bold border-4 border-white shadow-lg">2</span>,
    description: "Nuestro equipo revisa tu caso, te orienta y te acompaña en cada paso. Te mantenemos informado y te apoyamos en todo el proceso.",
    color: "yellow",
  },
  {
    name: "¡Listo, casa nueva!",
    icon: <span className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white text-2xl font-bold border-4 border-white shadow-lg">3</span>,
    description: "Si cumples los requisitos, te ayudamos a hacer realidad el sueño de tu vivienda digna. ¡Así de fácil, así de humano!",
    color: "red",
  },
];

export default function ThreeSteps() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center space-y-4 mb-12">
        <div className="text-base font-semibold text-red-600 uppercase tracking-wide">¿Cómo lograr tus sueños?</div>
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Sigue estos <span className="text-red-600">3 pasos</span> y haz parte del cambio
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Participar es fácil, humano y transformador. ¡Tú también puedes ser protagonista de una historia de impacto!
        </p>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 px-2 md:px-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.name}>
            <div className="flex flex-col items-center text-center relative z-10 w-full md:w-1/3">
              {step.icon}
              <h3 className="text-lg md:text-xl font-bold text-black mt-4 mb-2">{step.name}</h3>
              <p className="text-gray-700 mb-4 max-w-xs">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block flex-1 h-1 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 mx-2 rounded-full shadow-md" style={{ minWidth: 40 }}></div>
            )}
            {index < steps.length - 1 && (
              <div className="block md:hidden w-1 h-10 bg-gradient-to-b from-green-400 via-yellow-400 to-red-500 my-2 rounded-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button size="lg" variant="default" className="text-white" asChild>
          <a href="https://wa.me/573103662934" target="_blank" rel="noopener noreferrer" className="text-white">Súmate</a>
        </Button>
      </div>
    </div>
  );
} 