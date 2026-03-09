"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import { NavSection } from "@/lib/sections";
import Link from "next/link";
import { Gavel, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";
interface MobileMenuProps {
  sections: NavSection[];
  activeSection: string | null;
  scrollToSection: (id: string) => void;
  isScrolled: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  activeSection,
  sections,
  isScrolled,
}) => {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const handlerOpen = (e: boolean) => {
    setOpen(e);
  };
  return (
    <motion.div
      animate={{
        bottom: isScrolled ? 0 : "",
        top: isScrolled ? "" : "100%",
      }}
      className={cn(
        "w-full mx-auto h-12 px-5 md:px-6 lg:px-28 flex items-center justify-between md:hidden absolute z-50 ",
        isScrolled ? "" : "bg-linear-to-b from-black/20",
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
      <Sheet open={open} onOpenChange={handlerOpen}>
        <SheetTrigger
          className={`lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-accent focus:outline-none focus:ring-0 focus:ring-indigo-500 ${!isScrolled ? "text-white" : "text-foreground"}`}
          onClick={() => handlerOpen(!open)}
        >
          <FaBars className="h-6 w-6 " />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="bg-sidebar border-l border-border lg:hidden"
        >
          <div className="flex flex-col h-full ">
            {/* Header en mobile */}
            <div className="py-6 px-6 border-b w-full">
              <div key="logo" className="flex gap-3 items-center">
                <div className="border-2 aspect-square size-8 flex">
                  <Gavel
                    className="size-full text-foreground"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-2xl">LAW</p>
              </div>
            </div>

            {/* Navegación */}
            <ul className="flex flex-col gap-2 mt-6 px-6 w-full">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <SheetClose asChild>
                    <Button
                      variant={"ghost"}
                      className={`flex w-full justify-start gap-5 items-center ${activeSection === sec.id ? "bg-accent/20" : ""}`}
                      type="button"
                      onClick={() => handlerOpen(!open)}
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          lenis?.scrollTo(`#${sec.id}`, {
                            offset: -96,
                            duration: 1.2,
                          });
                          console.log("pene", lenis);
                        }}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary w-full text-start h-full",
                          activeSection === sec.id && "text-primary border-b",
                        )}
                      >
                        {sec.label}
                      </button>
                    </Button>
                  </SheetClose>
                </li>
              ))}
              <li key={"domain-guide"}>
                <SheetClose asChild>
                  {/* <button
                    onClick={() => handlerOpen(!open)}
                    className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-sidebar-foreground transition-colors hover:bg-muted"
                  >
                    <Link
                      href="/guide"
                      className="flex gap-1.5 items-center text-foreground"
                    >
                      <p>Guía de Dominios</p>
                    </Link>
                  </button> */}
                </SheetClose>
              </li>
            </ul>

            {/* Footer opcional */}
            <div className="mt-auto px-6 py-8 border-t text-sm text-gray-500">
              <p>
                © {new Date().getFullYear()} TUWEBHOY — Hecho con{" "}
                <Heart className="inline h-4 w-4 fill-red-500 text-red-500" />{" "}
                en Entre Ríos
              </p>
              <p className="text-xs">Webs simples. Claras. Que funcionan.</p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </motion.div>
  );
};

export default MobileMenu;
