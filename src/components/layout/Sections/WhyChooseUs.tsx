import { base, title, titleH2 } from "@/app/page";
import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Gavel, HeartHandshake, Building2 } from "lucide-react"; // ← importamos los iconos

const benefits = [
  {
    id: "0",
    title: "Defensa Penal Estratégica",
    description:
      "Protegemos sus derechos con una defensa sólida y personalizada, enfocada en obtener los mejores resultados en procesos complejos.",
    icon: Gavel,
  },
  {
    id: "1",
    title: "Asesoría en Derecho Familiar",
    description:
      "Acompañamiento empático y experto en divorcios, custodias y sucesiones, priorizando siempre el bienestar de su familia.",
    icon: HeartHandshake,
  },
  {
    id: "2",
    title: "Soluciones Corporativas",
    description:
      "Blindamos su negocio mediante contratos robustos y consultoría legal preventiva para asegurar el crecimiento de su empresa.",
    icon: Building2,
  },
];

const WhyChooseUs = () => {
  return (
    <Section id="about" size="content" className="py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-start md:text-center mb-12 md:mb-16">
          <h2
            className={`
              text-5xl sm:text-4xl md:text-5xl 
              font-bold tracking-tight 
              text-gray-900
              text-balance
              ${titleH2}
            `}
          >
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="text-center hover:shadow-lg transition-shadow max-w-5xl"
            >
              <CardContent className="pt-6 max-w-5xl">
                {/* Reemplazamos el círculo azul por un círculo con ícono */}
                <div
                  className="
                  mx-auto mb-6 
                  w-20 h-20 sm:w-24 sm:h-24 
                  rounded-full 
                  bg-accent/30
                  flex items-center justify-center 
                  border border-accent/40
                  shadow-sm
                "
                >
                  <benefit.icon
                    className="
                    w-10 h-10 sm:w-12 sm:h-12 
                    text-primary dark:text-blue-400
                  "
                  />
                </div>

                <h3
                  className={`text-2xl md:text-2xl font-semibold mb-3 ${title} text-balance`}
                >
                  {benefit.title}
                </h3>
                <p className={`text-foreground/80 ${base} leading-relaxed`}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
