import { NavSection } from "@/lib/sections";
import { cn } from "@/lib/utils";
import { Gavel } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { useLenis } from "lenis/react";

interface DesktopMenuProps {
  sections: NavSection[];
  activeSection: string | null;
  isScrolled: boolean;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({
  sections,
  activeSection,
  isScrolled,
}) => {
  const lenis = useLenis();
  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  return (
    <motion.div
      animate={{
        bottom: isScrolled ? 0 : "",
        top: isScrolled ? "" : "100%",
      }}
      className={cn(
        "w-full mx-auto h-12 px-5 md:px-6 lg:px-28 hidden items-center justify-between md:flex absolute z-50 ",
        !isScrolled && "bg-linear-to-b from-black/20",
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        className={`font-bold text-lg flex items-center gap-2 ${isScrolled ? "text-foreground" : "text-white"}`}
      >
        <div className="border-2 aspect-square size-8 flex">
          <Gavel className={`size-full `} strokeWidth={2} />
        </div>
        <p className="text-2xl">LAW</p>
      </Link>

      {/* Links */}
      <ul className="hidden md:flex gap-6">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                lenis?.scrollTo(`#${s.id}`, {
                  offset: -96,
                  duration: 1.2,
                });
              }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "" : "text-white",
                activeSection === s.id && "text-primary border-b",
              )}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default DesktopMenu;
