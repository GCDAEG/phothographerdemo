// components/FloatingWhatsAppButton.tsx
"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react"; // o el icono que uses
import Link from "next/link";

export default function FloatingWhatsAppButton() {
  const whatsappNumber = "549XXXXXXXXXX"; // ← cámbialo
  const message = "¡Hola! Quiero más información...";
  //   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  //     message
  //   )}`;
  const whatsappUrl = "#";

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 1.2, type: "spring" }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        whileHover={{
          scale: 1.15,
          boxShadow: "0 20px 40px -10px rgba(37, 211, 102, 0.4)",
          transition: { type: "spring", stiffness: 400, damping: 17 },
        }}
        whileTap={{
          scale: 0.88,
          boxShadow: "0 10px 15px -5px rgba(37, 211, 102, 0.3)",
          transition: { type: "spring", stiffness: 600, damping: 20 },
        }}
      >
        <MessageCircle className="h-8 w-8" strokeWidth={2.2} />
      </motion.a>
    </motion.div>
  );
}
