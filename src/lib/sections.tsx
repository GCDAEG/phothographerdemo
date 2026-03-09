export type NavSection = {
  id: string;
  label: string;
  href?: string;
};

export const sections: NavSection[] = [
  { id: "hero", label: "Inicio" },
  { id: "stats", label: "Stats" },
  {
    id: "practice",
    label: "Áreas de Práctica",
  },
  {
    id: "about",
    label: "Resultados",
  },
  { id: "faq", label: "Preguntas" },
];
