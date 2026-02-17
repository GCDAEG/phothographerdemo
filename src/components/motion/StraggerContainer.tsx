// components/StaggerContainer.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // ← este valor lo puedes sobreescribir
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function StaggerContainer({
  children,
  className,
  staggerChildren = 0.12,
}: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={className}
      // sobreescribimos el stagger
      custom={staggerChildren}
      transition={{ staggerChildren }}
    >
      {children}
    </motion.div>
  );
}

// Uso en cada hijo:
{
  /* <motion.div variants={itemVariants}>Card 1</motion.div>
<motion.div variants={itemVariants}>Card 2</motion.div> */
}
