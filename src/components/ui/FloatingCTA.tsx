// components/FloatingCTA.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";

export function FloatingCTA({
  targetRef,
}: {
  targetRef: RefObject<HTMLDivElement | null>;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, [targetRef]);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="https://wa.me/549..." // ← completa tu número
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="
            fixed bottom-6 right-6 z-50
            flex items-center hover:gap-2
            bg-[#25D366] text-white
            pl-4 pr-5 py-3 rounded-full
            shadow-lg hover:shadow-xl
            transition-shadow duration-300
            group
          "
          // Entrada inicial cuando aparece
          initial={{ opacity: 0, scale: 0.7, y: 40 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0], // ← levitación suave continua
          }}
          exit={{ opacity: 0, scale: 0.7, y: 40 }}
          transition={{
            // Para la levitación continua
            y: {
              duration: 3.2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            // Para la aparición/salida
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
            delay: 0.1,
          }}
          // Hover y Tap
          whileHover={{
            scale: 1.14,
            y: -12, // más arriba al pasar el mouse
            boxShadow: "0 20px 40px -10px rgba(37, 211, 102, 0.45)",
            transition: { type: "spring", stiffness: 400, damping: 15 },
          }}
          whileTap={{
            scale: 0.92,
            y: 0,
            boxShadow: "0 10px 20px -5px rgba(37, 211, 102, 0.3)",
            transition: { type: "spring", stiffness: 600, damping: 18 },
          }}
        >
          <BsWhatsapp className="text-2xl" />

          <span
            className="
              max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium
              transition-all duration-400 ease-out
              group-hover:max-w-27.5 group-focus-within:max-w-27.5
            "
          >
            WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
