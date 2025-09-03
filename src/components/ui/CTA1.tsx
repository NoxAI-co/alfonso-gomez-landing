import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const CTA1 = () => (
  <div className="w-full py-8 lg:py-14 relative flex justify-center items-center">
    {/* Fondo con imagen y blur */}
    <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
      <Image
        src="/img/cta}.jpg"
        alt="Fondo CTA"
        fill
        className="object-cover object-center brightness-75 blur-sm"
      />
      <div className="absolute inset-0 bg-black/70" />
    </div>
    {/* Contenido CTA */}
    <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-4 px-2 py-6 lg:py-10">
      <div className="flex flex-col gap-1 w-full">
        <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white w-full font-heading">
          ¡Únete al cambio hoy!
        </h3>
        <p className="text-base md:text-lg leading-relaxed tracking-tight text-white/90 w-full max-w-2xl mx-auto font-body">
          Juntos podemos construir una Colombia más justa y solidaria. Tu participación es clave para transformar vidas y fortalecer nuestras comunidades. ¡Sé parte de esta gran familia!
        </p>
      </div>
      <div className="flex flex-row gap-2 justify-center w-full">
        <Button className="gap-4 bg-pacto-amarillo text-black hover:bg-[#e09a2a] border-0 font-bold font-heading" variant="outline">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">Contáctanos</a>
        </Button>
        <Button className="gap-4 bg-pacto-azul text-white hover:bg-[#2a2d7a] border-0 font-bold font-heading">
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white">¡Súmate!</a>
        </Button>
      </div>
    </div>
  </div>
); 