// components/FadeIn.tsx
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }} // carga un poco antes
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // easing muy popular en 2025-2026
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
