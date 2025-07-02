"use client";
import React from "react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials?: {
    text: string;
    image: string;
    name: string;
    role: string;
  }[];
  duration?: number;
}) => {
  const defaultTestimonials = [
    {
      text: "Gracias a este proyecto, mi familia ahora tiene un hogar digno y seguro. Nunca imaginé que podríamos tener esta oportunidad.",
      image: "/img/user1.jpg",
      name: "Marta Rodríguez",
      role: "Beneficiaria Vivienda",
    },
    {
      text: "El apoyo al deporte ha unido a los jóvenes del barrio y nos ha dado esperanza y motivación para salir adelante.",
      image: "/img/user2.jpg",
      name: "Andrés Gómez",
      role: "Líder Juvenil",
    },
    {
      text: "Las jornadas sociales han sido un alivio para muchas familias. Se siente el compromiso y la cercanía con la comunidad.",
      image: "/img/user3.jpg",
      name: "Luz Dary Ramírez",
      role: "Madre Comunitaria",
    },
  ];
  const testimonials = props.testimonials || defaultTestimonials;

  return (
    <div className={props.className + " overflow-hidden"}>
      <div
        className="flex flex-col gap-6 pb-6 bg-background animate-testimonials-scroll"
        style={{
          animationDuration: `${props.duration || 10}s`,
        }}
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div className="text-gray-800">{text}</div>
                  <div className="flex flex-col gap-1 mt-5">
                    <div className="font-medium tracking-tight leading-5 text-black">{name}</div>
                    <div className="leading-5 text-gray-600 tracking-tight">{role}</div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </div>
    </div>
  );
}; 