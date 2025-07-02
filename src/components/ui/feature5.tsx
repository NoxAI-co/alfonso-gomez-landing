import { Badge } from "@/components/ui/badge";

export const Feature5 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-center">
          <div>
            <Badge className="bg-primary text-white">Proyectos</Badge>
          </div>
          <div className="flex gap-2 flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-extrabold text-black text-center">
              ¡Conoce nuestras <span className="text-red-600">iniciativas</span>!
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-black text-center">
              Estos son los proyectos sociales y comunitarios que lidera Cristancho para transformar vidas.
            </p>
          </div>
        </div>
        {/* Punto de anclaje para scroll exacto */}
        <div id="proyectos-tarjetas"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm transition-transform hover:scale-105">
            <div className="relative rounded-md aspect-video mb-4 flex items-center justify-center overflow-hidden bg-gray-100">
              <img src="/img/construyendo-sueños.png" alt="Construyendo sueños" className="object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-white/70 via-white/30 to-transparent"></div>
            </div>
            <h3 className="text-2xl tracking-tight font-extrabold text-black text-center">Construyendo <span className="text-red-600">sueños</span></h3>
            <p className="text-gray-700 text-base text-center">
              Entregamos viviendas dignas a familias que más lo necesitan, construyendo esperanza y mejorando la calidad de vida en nuestra comunidad.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm transition-transform hover:scale-105">
            <div className="relative rounded-md aspect-video mb-4 flex items-center justify-center overflow-hidden bg-gray-100">
              <img src="/img/deporte.png" alt="Apoyo al deporte" className="object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-white/70 via-white/30 to-transparent"></div>
            </div>
            <h3 className="text-2xl tracking-tight font-extrabold text-black text-center">Apoyo al <span className="text-red-600">deporte</span></h3>
            <p className="text-gray-700 text-base text-center">
              Impulsamos el deporte y la recreación con torneos, eventos y jornadas de integración, promoviendo valores y bienestar para todos.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-white border-2 border-gray-200 rounded-xl p-8 shadow-sm transition-transform hover:scale-105">
            <div className="relative rounded-md aspect-video mb-4 flex items-center justify-center overflow-hidden bg-gray-100">
              <img src="/img/iniciativa-social.png" alt="Iniciativa social" className="object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-white/70 via-white/30 to-transparent"></div>
            </div>
            <h3 className="text-2xl tracking-tight font-extrabold text-black text-center">Iniciativa <span className="text-red-600">social</span></h3>
            <p className="text-gray-700 text-base text-center">
              Desarrollamos programas de ayuda, inclusión y acompañamiento, generando oportunidades y fortaleciendo el tejido social de nuestra región.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
); 