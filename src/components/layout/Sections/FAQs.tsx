"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { StaggerContainer } from "../../motion/StraggerContainer";
import { FadeIn } from "../../motion/FadeIn";

import { Section } from "@/components/layout/Section";
import { base, title } from "@/app/page";

const FAQS = ({}) => {
  return (
    <Section size="content" id="faq">
      <StaggerContainer
        className={`min-h-5xl w-full flex flex-col justify-center text-center space-y-12 py-24 ${base}  px-4 md:px-6 lg:px-28`}
      >
        <FadeIn>
          <h3
            className={`text-3xl md:text-4xl font-extrabold font-poppins  ${title}`}
          >
            ¿Tenes dudas?
          </h3>
        </FadeIn>
        {/* Cards de ejemplo - reemplaza con tu contenido */}
        <FadeIn delay={0.2} className={`flex justify-center ${base}`}>
          <div className="w-full max-w-3xl text-foreground/70">
            <Accordion type="single" collapsible className="w-full text-start ">
              <AccordionItem value="item-1" className="border-b-accent ">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Cómo compro el dominio de mi web?
                </AccordionTrigger>
                <AccordionContent className=" md:text-lg pl-2">
                  El dominio es el nombre de tu página (por ejemplo:
                  tunegocio.com). Podés comprarlo fácilmente siguiendo nuestra
                  guía paso a paso. 👉 Ver guía para comprar dominio y hosting
                  (link a tu guía) Si necesitás ayuda, te acompañamos durante el
                  proceso.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b-accent ">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Cuánto tarda en estar lista mi web?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  En la mayoría de los casos, tu web está lista entre 2 y 5
                  días. El tiempo depende del contenido y de los ajustes que
                  quieras hacer, pero siempre priorizamos una entrega rápida.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b-accent ">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Qué incluye el servicio?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  El servicio incluye: Diseño web claro y profesional Armado
                  completo de la página Adaptación a celulares y tablets Botón
                  de contacto por WhatsApp Publicación online y funcionamiento
                  correcto Te entregamos una web lista para usar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-b-accent ">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Qué necesito para empezar?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  Muy poco: Nombre de tu negocio Un número de WhatsApp de
                  contacto Una idea general de lo que querés mostrar Si no tenés
                  textos, imágenes o logo, te ayudamos a resolverlo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-b-accent ">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Puedo pedir cambios?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  Sí. Podés pedir ajustes de textos, colores o secciones antes
                  de la entrega final, para que la web quede como esperás.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7" className="border-b-accent ">
                <AccordionTrigger className={`md:text-xl pl-2 ${title}`}>
                  ¿Tengo que pagar mantenimiento mensual?
                </AccordionTrigger>
                <AccordionContent className="pl-2 md:text-lg">
                  No. El desarrollo es un pago único. El dominio y el hosting se
                  pagan de forma anual y quedan a tu nombre, sin costos ocultos
                  ni suscripciones obligatorias.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeIn>
      </StaggerContainer>
    </Section>
  );
};

export default FAQS;
