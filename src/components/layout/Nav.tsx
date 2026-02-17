"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { FaBars, FaFacebook } from "react-icons/fa";
import { HomeIcon, PhoneIcon, ScaleIcon, BriefcaseIcon } from "lucide-react";
import { BsInstagram, BsTwitter, BsQuestion } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaUserGroup } from "react-icons/fa6";
import { base, title, titleH2 } from "@/app/page";
import { Separator } from "../ui/separator";

const sections = [
  { id: "hero", label: "Inicio", icon: <HomeIcon className="h-5 w-5" /> },
  { id: "stats", label: "Stats", icon: <ScaleIcon className="h-5 w-5" /> },
  {
    id: "practice",
    label: "Áreas de Práctica",
    icon: <FaUserGroup className="h-5 w-5" />,
  },
  {
    id: "about",
    label: "Resultados",
    icon: <BriefcaseIcon className="h-5 w-5" />,
  },
  { id: "faq", label: "Preguntas", icon: <BsQuestion className="h-5 w-5" /> },
  { id: "contact", label: "Contacto", icon: <PhoneIcon className="h-5 w-5" /> },
];

const socialLinks = [
  { href: "https://twitter.com", icon: "BsTwitter", label: "Twitter / X" },
  { href: "https://facebook.com", icon: "FaFacebook", label: "Facebook" },
  { href: "https://linkedin.com", icon: "LiaLinkedin", label: "LinkedIn" },
  { href: "https://instagram.com", icon: "BsInstagram", label: "Instagram" },
] as const;

const NAVBAR_HEIGHT = 56;
const SCROLL_THRESHOLD = 100; // píxeles de scroll para activar el modo "scrolled"

export function SectionNavbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Scroll suave restando altura del navbar
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Actualizar altura del navbar en resize
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${height}px`,
        );
        console.log("Altura actualizada:", height); // ← para debuggear
      }
    };

    // Ejecutar inmediatamente al montar
    updateNavbarHeight();

    // Observar cambios en el tamaño del navbar (cuando banner entra/sale)
    const resizeObserver = new ResizeObserver(updateNavbarHeight);
    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    // También escuchar scroll (por si hay algún cambio sutil)
    window.addEventListener("scroll", updateNavbarHeight);

    // Y resize de ventana (ya lo tenías)
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", updateNavbarHeight);
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  // Detectar sección activa con IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.6, 0.9] },
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Detectar scroll > threshold (con throttle suave)
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Verificar al montar (por si ya está scrolleado)
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      ref={ref}
      animate={{
        boxShadow: isScrolled ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
      }}
      className={`top-0 left-0 z-60 min-w-full sticky ${title} h-fit border-b border-border bg-card`}
    >
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-card text-yellow-900 font-bold border-b border-gray-300"
          >
            <div className="flex md:flex-row items-center py-2 text-center md:text-start lg:h-20 justify-between text-sm font-medium gap-3 md:gap-0">
              {/* Nombre + Opening Hours + Teléfono */}
              <div className="flex justify-evenly w-full md:items-center md:gap-6 lg:gap-8">
                <span className="text-amber-400 font-bold text-3xl lg:text-4xl tracking-wide uppercase hidden md:block">
                  Iustus
                </span>

                <div className="flex flex-col whitespace-nowrap">
                  <span className="text-lg md:text-xl lg:text-2xl">
                    8:00 - 9:00
                  </span>
                  <span className="text-[10px] md:text-xs text-foreground/60">
                    Opening Hour Mon-Fri
                  </span>
                </div>

                <a
                  href="tel:+12345667890"
                  className="flex hover:text-amber-400 transition-colors flex-col items-center md:items-start"
                >
                  <span className="text-lg md:text-xl lg:text-2xl">
                    +123 456 67890
                  </span>
                  <span className="text-[10px] md:text-xs text-foreground/60">
                    (Call Us For Free Consultation)
                  </span>
                </a>
              </div>

              {/* Iconos de redes (desktop) */}
              <div className="hidden md:flex gap-3 lg:gap-4">
                {socialLinks.map((link) => {
                  const Icon =
                    link.icon === "BsTwitter"
                      ? BsTwitter
                      : link.icon === "FaFacebook"
                        ? FaFacebook
                        : link.icon === "LiaLinkedin"
                          ? LiaLinkedin
                          : BsInstagram;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-400 transition-colors flex items-center justify-center size-8 lg:size-9"
                      aria-label={link.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar principal */}
      <motion.div
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="px-4 sm:px-6 lg:px-36 flex justify-between items-center h-14"
      >
        {/* Menú desktop */}
        <ul className="hidden md:flex gap-2 lg:gap-4 w-full justify-center lg:justify-start items-center h-full relative text-foreground">
          {sections.map((sec) => (
            <li
              key={sec.id}
              className={cn(
                "relative h-full w-fit flex items-center justify-center px-3 hover:text-accent",
                activeSection === sec.id ? "text-primary" : "text-foreground",
              )}
            >
              <button
                onClick={() => scrollToSection(sec.id)}
                className={cn("text-base lg:text-lg font-medium", title)}
              >
                {sec.label}
              </button>

              {activeSection === sec.id && (
                <motion.span
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary border-b-4 border-primary rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring">
            <FaBars className="size-8 text-primary" />
          </SheetTrigger>

          {/* Usamos AnimatePresence para manejar la salida suave */}
          <AnimatePresence>
            {/* SheetContent se envuelve en motion.div */}
            <SheetContent
              side="right"
              className="z-70 md:hidden bg-card text-foreground flex flex-col pt-10 overflow-hidden"
            >
              <motion.div
                // Variantes de animación
                initial={{ x: "100%", opacity: 0, scale: 0.98 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: "100%", opacity: 0, scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.4,
                }}
                className="h-full flex flex-col"
              >
                {/* Lista de secciones con stagger children */}
                <motion.ul
                  className="flex flex-col gap-2 px-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08, // cada item aparece con 80ms de delay
                      },
                    },
                  }}
                >
                  {sections.map((sec) => (
                    <motion.li
                      key={sec.id}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <SheetClose asChild>
                        <button
                          onClick={() => scrollToSection(sec.id)}
                          className={cn(
                            "w-full flex items-center gap-3 rounded-md py-3 text-base transition-colors hover:bg-muted",
                            activeSection === sec.id &&
                              "text-accent font-semibold",
                          )}
                        >
                          <span className={`text-lg ${title}`}>{sec.icon}</span>
                          <span className={`text-lg ${title}`}>
                            {sec.label}
                          </span>
                        </button>
                      </SheetClose>
                    </motion.li>
                  ))}
                </motion.ul>

                <Separator className="my-6" />

                {/* Sección inferior con stagger también */}
                <motion.div
                  className="flex flex-col items-start w-full px-6 justify-evenly mb-12 min-h-52"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                >
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="text-amber-400 font-bold text-3xl lg:text-4xl tracking-wide uppercase"
                  >
                    Iustus
                  </motion.span>

                  <motion.div
                    className="flex flex-col items-start gap-2"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <div className="flex flex-col whitespace-nowrap">
                      <span className="text-lg md:text-xl lg:text-2xl">
                        8:00 - 9:00
                      </span>
                      <span className="text-[10px] md:text-xs text-foreground/60">
                        Opening Hour Mon-Fri
                      </span>
                    </div>

                    <a
                      href="tel:+12345667890"
                      className="flex hover:text-amber-400 transition-colors flex-col items-center md:items-start"
                    >
                      <span className="text-lg md:text-xl lg:text-2xl">
                        +123 456 67890
                      </span>
                      <span className="text-[10px] md:text-xs text-foreground/60">
                        (Call Us For Free Consultation)
                      </span>
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </SheetContent>
          </AnimatePresence>
        </Sheet>

        {/* Iconos redes en mobile (solo cuando está scrolleado o siempre, según prefieras) */}
        <div
          className={cn(
            "flex gap-4 md:hidden",
            (!isScrolled && "lg:hidden") || "lg:flex",
          )}
        >
          {socialLinks.map((link) => {
            const Icon =
              link.icon === "BsTwitter"
                ? BsTwitter
                : link.icon === "FaFacebook"
                  ? FaFacebook
                  : link.icon === "LiaLinkedin"
                    ? LiaLinkedin
                    : BsInstagram;

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center justify-center size-8 text-yellow-900"
                aria-label={link.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
