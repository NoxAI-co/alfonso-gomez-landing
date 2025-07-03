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
          <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <img src="/img/construyendo-sueños.jpg" alt="Construyendo sueños" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Construyendo sueños</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Entregamos viviendas dignas a familias que más lo necesitan, construyendo esperanza y mejorando la calidad de vida en nuestra comunidad.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <img src="/img/deporte.jpg" alt="Apoyo al deporte" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Apoyo al deporte</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Impulsamos el deporte y la recreación con torneos, eventos y jornadas de integración, promoviendo valores y bienestar para todos.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-video overflow-hidden">
              <img src="/img/iniciativa-social.jpg" alt="Iniciativa social" className="object-cover w-full h-full" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Iniciativa social</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Desarrollamos programas de ayuda, inclusión y acompañamiento, generando oportunidades y fortaleciendo el tejido social de nuestra región.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
); 