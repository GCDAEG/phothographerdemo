// components/cta/CTAButton.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

// Props comunes para ambas variantes
interface CTAButtonBaseProps {
  ctaRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
  buttonClassName?: string;
  href?: string; // por si quieres cambiar el link en algún caso
}

// Variante 1: Hero (con título grande)
export function HeroCTAButton({
  ctaRef,
  className = "",
  buttonClassName = "",
  href = "https://wa.me/549...?", // ← completa con tu número real
}: CTAButtonBaseProps & { href?: string }) {
  return (
    <section
      className={`flex flex-col items-center justify-center w-fit space-y-4 md:space-y- ${className}`}
    >
      {/* <div className="flex w-full justify-center">
        <h2 className="text-4xl sm:text-2xl md:text-2xl font-bold text-accent text-center leading-tight">
          Tu web lista hoy
        </h2>
      </div> */}

      <div ref={ctaRef} className="flex w-full justify-center">
        <CtaButtonContent href={href} className={buttonClassName} />
      </div>
    </section>
  );
}

// Variante 2: Botón simple (reutilizable en cualquier sección)
export function SimpleCTAButton({
  ctaRef,
  className = "",
  buttonClassName = "",
  href = "https://wa.me/549...?", // ← mismo por defecto
}: CTAButtonBaseProps & { href?: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`
        group relative
        inline-flex items-center gap-2.5
        bg-linear-to-bl from-blue-500 to-blue-700 text-white
        px-5 py-2 rounded-xl
        font-medium text-lg
        shadow-md hover:shadow-xl
        transition-shadow duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        ${className}
      `}
      whileHover={{
        y: -3,
        boxShadow: "0 12px 28px -8px rgba(37, 211, 102, 0.28)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 28,
        },
      }}
      whileTap={{
        y: 1,
        boxShadow: "0 4px 12px -4px rgba(37, 211, 102, 0.2)",
        transition: { duration: 0.14 },
      }}
    >
      <BsWhatsapp className="text-xl md:text-2xl" />
      Contactar por WhatsApp
    </motion.a>
  );
}

// Componente interno reutilizable (el botón en sí)
function CtaButtonContent({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`
        group relative
        inline-flex items-center gap-2.5 text-white
        
        px-7 py-4 rounded-xl rounded-bl-none
        font-bold text-lg
        shadow-md hover:shadow-xl
        transition-shadow duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        bg-linear-to-bl from-blue-500 to-blue-700
        ${className}
      `}
      whileHover={{
        y: -3,
        boxShadow: "0 12px 28px -8px rgba(37, 211, 102, 0.28)",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 28,
        },
      }}
      whileTap={{
        y: 1,
        boxShadow: "0 4px 12px -4px rgba(37, 211, 102, 0.2)",
        transition: { duration: 0.14 },
      }}
    >
      <BsWhatsapp className="text-xl md:text-2xl" />
      Contactar
    </motion.a>
  );
}
