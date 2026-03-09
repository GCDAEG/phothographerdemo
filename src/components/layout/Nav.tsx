"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
//icons
import { Gavel } from "lucide-react";
import DesktopMenu from "./Nav/DesktopMenu";
import MobileMenu from "./Nav/MobileMenu";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";
import { Banner } from "./Nav/banner";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { sections } from "@/lib/sections";

export function Navbar() {
  const ref = useRef<HTMLElement>(null);
  const { y } = useWindowScroll();
  const [isScrolled, setisScrolled] = useState<boolean>(false);

  /* ---------------------------------------------
     Sección activa (limpio)
  --------------------------------------------- */
  const activeSection = useScrollSpy(sections.map((s) => s.id));

  useEffect(() => {
    setisScrolled(y >= 70);
  }, [y]);

  return (
    <motion.nav
      layout
      ref={ref}
      className={cn(
        "sticky top-0 z-50 w-full transition-all bg-card h-24 ",
        isScrolled ? "shadow-sm" : "",
      )}
    >
      <Banner isScrolled={isScrolled} />
      <DesktopMenu
        sections={sections}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />
      <MobileMenu
        sections={sections}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />
    </motion.nav>
  );
}
