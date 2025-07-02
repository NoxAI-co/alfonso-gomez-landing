import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { Fade, Slide } from "react-awesome-reveal";

const testimonials = [
  {
    text: "Gracias a la entrega de viviendas, mi familia ahora tiene un hogar digno y seguro. Este proyecto nos devolvió la esperanza.",
    image: "/img/user1.jpg",
    name: "Marta Rodríguez",
    role: "Madre cabeza de hogar",
  },
  {
    text: "El apoyo al deporte ha unido a los jóvenes del barrio y nos ha dado motivación para salir adelante. ¡Gracias por creer en nosotros!",
    image: "/img/user2.jpg",
    name: "Andrés Gómez",
    role: "Joven deportista",
  },
  {
    text: "Las jornadas sociales han sido un alivio para muchas familias. Se siente el compromiso y la cercanía con la comunidad.",
    image: "/img/user1.jpg",
    name: "Luz Dary Ramírez",
    role: "Madre comunitaria",
  },
  {
    text: "Participar en los programas de integración me permitió conocer personas maravillosas y sentirme parte de una gran familia.",
    image: "/img/user2.jpg",
    name: "Carlos Restrepo",
    role: "Padre de familia",
  },
  {
    text: "Gracias a las actividades deportivas, los niños y jóvenes del barrio tienen nuevas oportunidades y sueños por cumplir.",
    image: "/img/user1.jpg",
    name: "Paola Martínez",
    role: "Madre de familia",
  },
  {
    text: "El acompañamiento y la ayuda recibida han sido fundamentales para salir adelante en momentos difíciles.",
    image: "/img/user2.jpg",
    name: "Jorge Herrera",
    role: "Padre cabeza de hogar",
  },
  {
    text: "Ver cómo se transforma la vida de tantas familias me motiva a seguir apoyando estos proyectos.",
    image: "/img/user3.jpg",
    name: "Diana Torres",
    role: "Voluntaria social",
  },
  {
    text: "La transparencia y el compromiso del equipo nos da confianza y esperanza en un mejor futuro.",
    image: "/img/user2.jpg",
    name: "Luis Fernando Pérez",
    role: "Padre de familia",
  },
  {
    text: "Ser parte de esta comunidad es un orgullo. Aquí todos sumamos y juntos logramos grandes cosas.",
    image: "/img/user3.jpg",
    name: "Gloria Mendoza",
    role: "Líder comunitaria",
  },
  {
    text: "Como adulto mayor, agradezco el acompañamiento y el cariño recibido. Me siento valorado y escuchado.",
    image: "/img/user2.jpg",
    name: "José Antonio Ruiz",
    role: "Adulto mayor beneficiario",
  },
  {
    text: "Las actividades para niños han sido una bendición. Mis hijos están felices y aprenden valores cada día.",
    image: "/img/user1.jpg",
    name: "Sandra Castaño",
    role: "Madre de familia",
  },
  {
    text: "Como estudiante, participar en los talleres me ha motivado a superarme y a soñar en grande.",
    image: "/img/user2.jpg",
    name: "Juan Pablo Morales",
    role: "Estudiante beneficiario",
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
            <div className="flex justify-center">
              <div className="border py-1 px-4 rounded-lg text-red-700 border-red-200 bg-red-50">Testimonios</div>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
              Historias que inspiran y transforman
            </h2>
            <p className="text-center mt-5 opacity-75 text-gray-700">
              Conoce las voces de quienes han sido parte de nuestros proyectos sociales y comunitarios. Sus testimonios reflejan el impacto real de trabajar juntos por una Colombia más solidaria.
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
      <div className="text-lg font-medium">{props.name}</div>
      <div className="text-gray-600">{props.title}</div>
    </div>
  );
} 