"use client";

import React from "react";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";

const socialLinks = [
  { href: "#", icon: BsTwitter, label: "Twitter / X" },
  { href: "#", icon: FaFacebook, label: "Facebook" },
  { href: "#", icon: LiaLinkedin, label: "LinkedIn" },
  { href: "#", icon: BsInstagram, label: "Instagram" },
];
const contactInfo = [
  { id: "0", main: "8:00 - 9:00", sub: "Opening Hour Mon-Fri" },
  { id: "1", main: "+123 456 67890", sub: "(Call Us For Free Consultation)" },
];
interface bannerProps {
  isScrolled: boolean;
}
export const Banner: React.FC<bannerProps> = ({ isScrolled }) => {
  // Alturas en rem para mejor consistencia
  const height = isScrolled ? "3rem" : "6rem";

  return (
    <motion.header
      style={{ height: height }}
      animate={{ height: height }}
      className="sticky top-0 z-50 w-full bg-card h-24 border-b border-border px-5 md:px-6 lg:px-28"
    >
      <motion.div
        initial={false}
        animate={{
          height: isScrolled ? "3rem" : "6rem",
        }}
        transition={{
          height: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <div className="flex sm:px-6 lg:px-8 h-full">
          <div className="flex w-full flex-col h-full items-center justify-between text-yellow-900 md:flex-row md:gap-4">
            {/* Izquierda: Logo (secundario) */}
            <div
              className={`flex-1 transition-all duration-300 flex items-center w-full justify-center border-b border-border md:justify-start md:w-fit md:border-none ${isScrolled ? "h-0 flex-none" : "h-fit"} md:h-fit`}
            >
              <motion.span
                layout
                className={` font-bold tracking-wide uppercase text-amber-400  ${
                  isScrolled
                    ? "hidden md:flex sm:text-xl"
                    : " text-4xl sm:text-4xl lg:text-6xl"
                }`}
              >
                Iustus
              </motion.span>
            </div>

            {/* Centro/Derecha: Contact Info – prioridad en mobile */}
            <div className="flex flex-1 justify-evenly items-center gap-3 w-full sm:flex-row sm:justify-evenly sm:items-start  sm:gap-6 lg:gap-10 ">
              {contactInfo.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-start leading-tight text-start sm:text-left"
                >
                  <span
                    className={`font-semibold transition-all duration-300   ${
                      isScrolled
                        ? "text-lg sm:text-lg"
                        : "text-lg sm:text-2xl lg:text-3xl"
                    }`}
                  >
                    {item.main}
                  </span>
                  <span
                    className={`text-foreground/70 transition-all duration-300 ${
                      isScrolled
                        ? "text-[8px] sm:text-xs"
                        : "text-[9px] sm:text-xs"
                    }`}
                  >
                    {item.sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Redes sociales – solo desktop */}
            <div className="hidden lg:flex items-center gap-3 lg:gap-5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-900 hover:text-amber-400 transition-colors flex items-center justify-center size-8 lg:size-10"
                    aria-label={link.label}
                  >
                    <Icon size={isScrolled ? 18 : 24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};
