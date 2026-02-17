import Image from "next/image";
import { cn } from "@/lib/utils";

type ResponsiveImageProps = {
  src: string;
  alt: string;

  /** Tamaño del contenedor */
  className?: string;

  /** Cómo se ajusta la imagen */
  fit?: "contain" | "cover";

  /** Prioridad (para hero) */
  priority?: boolean;
};

export function ResponsiveImage({
  src,
  alt,
  className,
  fit = "contain",
  priority = false,
}: ResponsiveImageProps) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn(
          "object-center",
          fit === "contain" ? "object-contain" : "object-cover",
        )}
      />
    </div>
  );
}
