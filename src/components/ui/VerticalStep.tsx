// components/VerticalStep.tsx (alternativa)
export function VerticalStep({
  number,
  title,
  text,
}: {
  number: number;
  title: string;
  text: string;
}) {
  return (
    <div className="relative pl-12 pb-12 last:pb-0">
      {/* Línea conectora */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border -z-10" />

      {/* Círculo número */}
      <div
        className="
        absolute left-0 top-1.5
        w-10 h-10 rounded-full bg-primary text-primary-foreground
        flex items-center justify-center font-bold text-lg
        border-4 border-background shadow-sm
      "
      >
        {number}
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
