import HeroSectionOne from "@/components/ui/hero-section-demo-1";
import { Feature5 } from "@/components/ui/feature5";
import Testimonials from "@/components/ui/Testimonials";
import { CTA1 } from "@/components/ui/CTA1";
import CreativePricingDemo from "@/components/ui/CreativePricing";
import { AboutSection } from "@/components/ui/AboutSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center">
      {/* Hero */}
      <section id="hero" className="w-full">
        <HeroSectionOne />
      </section>

      {/* Sobre nosotros */}
      <section id="sobre-nosotros" className="w-full">
        <AboutSection />
      </section>

      {/* Tres pasos */}
      <section className="w-full py-16">
        <CreativePricingDemo />
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
