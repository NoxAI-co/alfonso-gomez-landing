import HeroSectionOne from "@/components/ui/hero-section-demo-1";
import { Feature5 } from "@/components/ui/feature5";
import Testimonials from "@/components/ui/Testimonials";
import { CTA1 } from "@/components/ui/CTA1";
import ThreeSteps from "@/components/ui/ThreeSteps";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Bloque de confianza */}
      <div className="w-full flex justify-center mt-4 mb-1">
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
          <div className="flex -space-x-2">
            <img src="/img/user1.jpg" alt="Testimonio 1" className="w-6 h-6 rounded-full border border-white shadow-sm" />
            <img src="/img/user2.jpg" alt="Testimonio 2" className="w-6 h-6 rounded-full border border-white shadow-sm" />
            <img src="/img/user3.jpg" alt="Testimonio 3" className="w-6 h-6 rounded-full border border-white shadow-sm" />
          </div>
          <span className="ml-2 text-gray-700 text-xs font-medium">
            Apoyado por <span className="font-bold text-red-700">120+ familias y líderes sociales</span>
          </span>
        </div>
      </div>

      {/* Hero */}
      <section id="hero" className="w-full">
        <HeroSectionOne />
      </section>

      {/* Sobre nosotros */}
      <section id="sobre-nosotros" className="w-full py-2 flex flex-col items-center justify-center bg-white">
        {/* Primero el bloque institucional */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 text-black text-center">
            Sobre <span className="text-red-600">nosotros</span>
          </h2>
          <p className="text-lg text-gray-700 text-center">
            Somos un equipo comprometido con el bienestar y el desarrollo social de nuestra comunidad. Nuestra misión es transformar vidas a través de proyectos de vivienda, deporte e inclusión, promoviendo valores de solidaridad, honestidad y trabajo en equipo. Creemos en una Colombia donde todos tengan oportunidades y vivan con dignidad.
          </p>
        </div>
        {/* Luego el bloque tipo 'Conóceme' */}
        <div className="max-w-5xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8">
          {/* Foto real */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src="/img/Cristancho.jpg" alt="Jhon Cristancho" className="rounded-2xl w-72 h-72 object-cover shadow-md" />
          </div>
          {/* Texto */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold mb-2 text-black text-center">
              <span className="text-black">Conóceme:</span> <span className="text-red-600">Jhon Cristancho</span>
            </h3>
            <p className="text-gray-700 mb-2 text-center">Soy un joven empresario y líder social. Coordino la iniciativa RED Inicio, desde donde impulsamos proyectos que transforman vidas.</p>
            <p className="text-gray-700 mb-2 text-center">Creo que los grandes cambios comienzan con pequeñas acciones colectivas.</p>
            <p className="font-semibold text-gray-900 text-center">
              Mi propósito es demostrar que sí se puede: cuando soñamos en grande y trabajamos juntos, logramos cambiar realidades y construir una Colombia más justa para todos.
            </p>
          </div>
        </div>
      </section>

      {/* Tres pasos */}
      <section className="w-full">
        <ThreeSteps />
      </section>

      {/* Proyectos */}
      <div id="proyectos" className="w-full">
        <Feature5 />
      </div>

      {/* Testimonios */}
      <section id="testimonios" className="w-full">
        <Testimonials />
      </section>

      {/* CTA */}
      <section id="cta" className="w-full mt-0 pt-0 pb-10">
        <CTA1 />
      </section>
    </main>
  );
}
