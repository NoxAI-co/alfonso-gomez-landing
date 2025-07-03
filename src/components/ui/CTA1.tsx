import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CTA1 = () => (
  <div className="w-full py-8 lg:py-14 relative flex justify-center items-center">
    {/* Fondo con imagen y blur */}
    <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
      <img
        src="/img/cta}.jpg"
        alt="Fondo CTA"
        className="w-full h-full object-cover object-center brightness-75 blur-sm"
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
    {/* Contenido CTA */}
    <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-4 px-2 py-6 lg:py-10">
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white w-full">
          ¡Prueba nuestra plataforma hoy!
        </h3>
        <p className="text-base md:text-lg leading-relaxed tracking-tight text-white/90 w-full max-w-2xl mx-auto">
          Gestionar un negocio hoy en día es un reto. Evita complicaciones usando herramientas modernas y eficientes. Nuestro objetivo es simplificar tu gestión y ayudarte a crecer.
        </p>
      </div>
      <div className="flex flex-row gap-2 justify-center w-full">
        <Button className="gap-4 bg-white text-red-600 hover:bg-red-50 border-0" variant="outline">
          <a href="https://wa.me/573103662934" target="_blank" rel="noopener noreferrer">Contáctanos</a>
        </Button>
        <Button className="gap-4 bg-red-600 text-white hover:bg-red-700 border-0">
          <a href="https://wa.me/573103662934" target="_blank" rel="noopener noreferrer" className="text-white">¡Súmate!</a>
        </Button>
      </div>
    </div>
  </div>
); 