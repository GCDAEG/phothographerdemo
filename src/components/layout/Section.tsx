import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  size: "screen" | "content";
};

export function Section({ id, className, children, size }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        `
        px-4 md:px-6 lg:px-28
          relative w-full
          flex
          ${size == "screen" ? "min-h-[calc(100vh-var(--navbar-height))] scroll-mt-(--navbar-height)" : "h-fit"}
        `,
        className,
      )}
    >
      {children}
    </section>
  );
}
