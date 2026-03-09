// components/WhatsAppChatInput.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// const WHATSAPP_NUMBER = "5491234567890"; // ← tu número real

export default function WhatsAppChatInput() {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // const handleSend = () => {
  //   if (!message.trim()) return;

  //   const encoded = encodeURIComponent(message.trim());
  //   window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");

  //   setMessage("");
  //   setIsOpen(false);
  // };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      // handleSend();
    }
  };

  /* Focus automático */
  useEffect(() => {
    if (!isOpen) return;
    const input = containerRef.current?.querySelector("input");
    if (input instanceof HTMLInputElement) input.focus();
  }, [isOpen]);

  /* Cierre al click afuera */
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
    >
      {/* Input flotante */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="
              flex items-center gap-2
              bg-background/95 backdrop-blur
              border border-border
              shadow-xl
              rounded-2xl
              px-4 py-2
              min-w-[260px] max-w-[360px]
            "
          >
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribí tu consulta..."
              className="
                border-0 bg-transparent
                focus-visible:ring-0 focus-visible:ring-offset-0
                text-base
                placeholder:text-muted-foreground
              "
            />

            <Button
              onClick={() => {}}
              disabled={!message.trim()}
              size="icon"
              className={cn(
                `
                h-9 w-9 rounded-full
                bg-green-500 text-white
                hover:bg-green-600
                transition-all
                `,
                !message.trim() &&
                  "opacity-50 cursor-not-allowed hover:bg-green-500",
              )}
            >
              <Send className="h-4.5 w-4.5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={cn(
          `
          h-14 w-14 rounded-full
          flex items-center justify-center
          shadow-xl
          transition-colors
          `,
          isOpen
            ? "bg-green-500 hover:bg-green-600 text-white"
            : "bg-primary hover:bg-primary/90 text-white",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? "send" : "chat"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.25 }}
          >
            {isOpen ? (
              <Send className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
