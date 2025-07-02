"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-white hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-600">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Cómo puedo participar en los proyectos?",
    answer: "Puedes sumarte como voluntario, donante o beneficiario. Contáctanos a través del formulario y te guiaremos en el proceso.",
  },
  {
    question: "¿A qué comunidades apoyan?",
    answer: "Trabajamos con familias, jóvenes y adultos mayores en situación de vulnerabilidad en diferentes regiones del país.",
  },
  {
    question: "¿Cómo garantizan la transparencia?",
    answer: "Publicamos informes periódicos y testimonios reales de beneficiarios. Nuestro compromiso es la honestidad y la rendición de cuentas.",
  },
  {
    question: "¿Puedo proponer una iniciativa?",
    answer: "¡Por supuesto! Escuchamos a la comunidad. Escríbenos tu propuesta y la evaluaremos con nuestro equipo.",
  },
];
