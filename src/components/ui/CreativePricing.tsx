"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import phone from "../../../public/img/phone.png";
import house from "../../../public/img/house.png";
import lens from "../../../public/img/lens.png";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    description: string;
    popular?: boolean;
}

function CreativePricing({
    tag = "Simple Pricing",
    title = <>
        Make Short Videos That Pop
    </>,
    description = "Edit, enhance, and go viral in minutes",
    tiers,
}: {
    tag?: string;
    title?: React.ReactNode;
    description?: string;
    tiers: PricingTier[];
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="flex gap-4 flex-col items-center mb-16">
                {/* Badge eliminado */}
                <div className="flex gap-2 flex-col items-center text-center">
                    <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-extrabold text-black dark:text-white text-center">
                        {title}
                    </h2>
                    <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-zinc-600 dark:text-zinc-400 text-center">
                        {description}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "bg-white dark:bg-zinc-900",
                            "border border-gray-200 dark:border-gray-700",
                            "rounded-xl",
                            "shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50",
                            "transition-all duration-300",
                            "hover:shadow-xl hover:shadow-gray-300/60 dark:hover:shadow-gray-900/60",
                            "p-6",
                            index === 0 && "rotate-[-1deg]",
                            index === 1 && "rotate-[1deg]",
                            index === 2 && "rotate-[-2deg]"
                        )}
                    >
                        {tier.popular && (
                            <div
                                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white 
                                px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                            >
                                Cumple tu sueño
                            </div>
                        )}

                        {/* Centered icon */}
                        <div className="flex justify-center mb-6">
                            {tier.icon}
                        </div>

                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                                {tier.name}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                {tier.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const sampleTiers: PricingTier[] = [
    {
        name: "Cuéntanos tu historia",
        icon: <Image src={phone} width={36} height={36} alt="Phone icon" className="w-12 h-12" />,
        description: "Escríbenos por WhatsApp y comparte tu historia, tus sueños y tu situación. ¡Queremos conocerte y escucharte!",
    },
    {
        name: "Validamos juntos",
        icon: <Image src={lens} width={36} height={36} alt="Lens icon" className="w-12 h-12" />,
        description: "Nuestro equipo revisa tu caso, te orienta y te acompaña en cada paso. Te mantenemos informado y te apoyamos en todo el proceso.",
        popular: true,
    },
    {
        name: "¡Listo, casa nueva!",
        icon: <Image src={house} width={36} height={36} alt="House icon" className="w-12 h-12" />,
        description: "Si cumples los requisitos, te ayudamos a hacer realidad el sueño de tu vivienda digna. ¡Así de fácil, así de humano!",
    },
];

function CreativePricingDemo() {
    return (
        <CreativePricing 
            tag="¿Cómo lograr tus sueños?"
            title={<><span>Sigue estos </span><span className="text-red-600">3 pasos</span><span> y haz parte del cambio</span></>}
            description="Participar es fácil, humano y transformador. ¡Tú también puedes ser protagonista de una historia de impacto!"
            tiers={sampleTiers} 
        />
    );
}

export default CreativePricingDemo; 