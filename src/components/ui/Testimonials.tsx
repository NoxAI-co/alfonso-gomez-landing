import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { Fade, Slide } from "react-awesome-reveal";

const testimonials = [
  {
    text: "Gracias a su apoyo, el sector del calzado ha crecido y sigue siendo motor de empleo en Santander.",
    image: "/img/user1.jpg",
    name: "Empresario local",
    role: "Sector del calzado",
  },
  {
    text: "Édgar ha sido un aliado permanente de los adultos mayores, con iniciativas solidarias que cambian vidas.",
    image: "/img/user2.jpg",
    name: "Líder comunitaria",
    role: "Adultos mayores",
  },
  {
    text: "Siempre ha confiado en el deporte como herramienta de inclusión para nuestra juventud.",
    image: "/img/user1.jpg",
    name: "Entrenador de microfútbol",
    role: "Deporte y juventud",
  },
  {
    text: "Su compromiso con la transparencia y la ética política nos da confianza en el futuro de Santander.",
    image: "/img/user2.jpg",
    name: "Ciudadano comprometido",
    role: "Transparencia política",
  },
  {
    text: "Las iniciativas para la tercera edad han transformado la vida de muchos adultos mayores en nuestra comunidad.",
    image: "/img/user1.jpg",
    name: "Coordinador social",
    role: "Programas sociales",
  },
  {
    text: "Como joven deportista, he visto cómo el deporte une a las familias y crea oportunidades de superación.",
    image: "/img/user2.jpg",
    name: "Joven atleta",
    role: "Deporte comunitario",
  },
  {
    text: "Su gestión legislativa ha beneficiado directamente a miles de familias santandereanas.",
    image: "/img/user3.jpg",
    name: "Funcionario público",
    role: "Gestión legislativa",
  },
  {
    text: "El apoyo a los emprendedores locales ha generado empleo y desarrollo en nuestro departamento.",
    image: "/img/user2.jpg",
    name: "Emprendedor",
    role: "Desarrollo económico",
  },
  {
    text: "La cercanía con la gente y la escucha activa son cualidades que distinguen su liderazgo político.",
    image: "/img/user3.jpg",
    name: "Líder vecinal",
    role: "Liderazgo comunitario",
  },
  {
    text: "Gracias a sus iniciativas, muchos niños y jóvenes tienen acceso a actividades deportivas y culturales.",
    image: "/img/user1.jpg",
    name: "Madre de familia",
    role: "Programas juveniles",
  },
  {
    text: "Su trabajo en el Congreso ha sido fundamental para el desarrollo de políticas sociales inclusivas.",
    image: "/img/user2.jpg",
    name: "Analista político",
    role: "Políticas públicas",
  },
  {
    text: "La solidaridad y el compromiso con los más vulnerables son el sello de su gestión política.",
    image: "/img/user3.jpg",
    name: "Trabajador social",
    role: "Inclusión social",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <Fade direction="up" triggerOnce>
                                <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-black text-black text-center font-heading mb-8">
              <span className="text-pacto-morado">Más unidos</span>, más potentes
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-gray-700 text-center font-body">
              El reconocimiento más valioso es el de la comunidad, que ha sido el centro de cada una de sus acciones.
            </p>
          </div>
        </Fade>
        <Slide direction="up" delay={200} triggerOnce>
          <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Testimonials;

function Avatar(props: { name: string; title: string }) {
  return (
    <div className="flex flex-col items-start mt-8">
      <div className="text-lg font-bold text-pacto-azul font-heading">{props.name}</div>
      <div className="text-gray-600 font-body">{props.title}</div>
    </div>
  );
} 