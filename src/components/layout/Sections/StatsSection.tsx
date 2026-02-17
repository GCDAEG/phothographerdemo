import { title, titleH2 } from "@/app/page";
import React from "react";
import { Section } from "../Section";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsSectionProps {}
const stats = [
  {
    id: "0",
    stat: "2000+",
    title: "Casos atendidos",
    description: "con dedicación absoluta",
  },
  {
    id: "1",
    stat: "96.5%",
    title: "Tasa de éxito",
    description: "resultados favorables",
  },
  {
    id: "2",
    stat: "$25M+",
    title: "Recuperados",
    description: "para nuestros clientes",
  },
];
const StatsSection: React.FC<StatsSectionProps> = ({}) => {
  return (
    // Ejemplo de componente StatsSection.tsx
    <Section size="content" id="stats" className="bg-background py-16">
      <div className=" w-full text-center items-center flex flex-col">
        <div className=" flex flex-col w-full items-center justify-center text-start md:text-center gap-5">
          <h2
            className={`text-5xl md:text-4xl lg:text-5xl font-extrabold text-[--foreground] ${titleH2} text-primary-foreground text-balance`}
          >
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg text-[--muted-foreground] text-balance ">
            Experiencia comprobada. Éxito constante. Compromiso total.
          </p>
        </div>
        <Separator className="my-5 bg-black" />
        <div
          className={`py-12 shadow-md bg-linear-to-br from-primary to-primary/70 w-full flex justify-center items-center rounded-md`}
        >
          <div
            className={`flex flex-col md:flex-row gap-12 md:justify-evenly md:w-full ${titleH2} `}
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col justify-start items-start text-start "
              >
                <div className="text-7xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground text-start">
                  {stat.stat}
                </div>
                <div className="flex flex-col ">
                  <p className="text-md md:text-xl font-medium text-primary-foreground text-start">
                    {stat.title}
                  </p>
                  <p className="text-[--muted-foreground]">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-[--muted-foreground] mt-12 italic">
          *Cifras ilustrativas para ejemplo de diseño
        </p>
      </div>
    </Section>
  );
};

export default StatsSection;
