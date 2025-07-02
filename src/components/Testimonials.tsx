import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
              "Gracias a la entrega de viviendas, mi familia ahora tiene un hogar digno y seguro. Este proyecto nos devolvió la esperanza."
            </p>
            <Avatar
              image={userOneImg}
              name="Marta Rodríguez"
              title="Beneficiaria de Vivienda"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
              "El apoyo al deporte ha unido a los jóvenes del barrio y nos ha dado motivación para salir adelante. ¡Gracias por creer en nosotros!"
            </p>
            <Avatar
              image={userTwoImg}
              name="Andrés Gómez"
              title="Líder Juvenil"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14">
            <p className="text-2xl leading-normal ">
              "Las jornadas sociales han sido un alivio para muchas familias. Se siente el compromiso y la cercanía con la comunidad."
            </p>
            <Avatar
              image={userThreeImg}
              name="Luz Dary Ramírez"
              title="Madre Comunitaria"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      {/* <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div> */}
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-red-700 bg-red-100 rounded-md ring-red-100 ring-4">
        {props.children}
      </mark>{" "}
    </>
  );
}
