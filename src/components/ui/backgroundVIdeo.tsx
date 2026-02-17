// components/ui/BackgroundVideo.tsx
import { ReactNode } from "react";
import { Section } from "../layout/Section";

interface BackgroundVideoProps {
  /**
   * URL del video (puede ser local en /public o externa)
   * Ej: "/videos/hero.mp4" o "https://..."
   */
  src: string;
  /**
   * Formato alternativo (recomendado: webm)
   */
  webmSrc?: string;
  /**
   * Overlay de color/opacidad (por defecto negro semitransparente)
   */
  overlay?: "none" | "dark" | "gradient" | ReactNode;
  /**
   * Clases adicionales para el contenedor principal
   */
  className?: string;
  /**
   * Contenido que va encima del video
   */
  children: ReactNode;
  /**
   * Altura mínima del componente (por defecto full screen)
   */
  minHeight?: string;
  /**
   * Posición del video (center por defecto)
   */
  objectPosition?: string;
  /**
   * Poster image (fallback cuando el video no carga)
   */
  poster?: string;
  id?: string;
}

/**
 * Componente reutilizable de video de fondo con overlay y contenido encima
 */
export default function BackgroundVideo({
  src,
  webmSrc,
  overlay = "dark",
  className = "",
  children,
  objectPosition = "center",
  poster,
  id,
}: BackgroundVideoProps) {
  const overlayContent =
    overlay === "none" ? null : overlay === "gradient" ? (
      <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/5 to-black/90 pointer-events-none" />
    ) : overlay === "dark" ? (
      <div className="absolute inset-0 bg-black/45 pointer-events-none" />
    ) : (
      overlay
    );

  return (
    <Section
      className={`flex relative overflow-hidden ${className} `}
      id={id}
      size="screen"
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="absolute inset-0 h-full w-screen object-cover"
        style={{ objectPosition }}
      >
        {webmSrc && <source src={webmSrc} type="video/webm" />}
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>

      {/* Overlay */}
      {overlayContent}

      {/* Contenido principal (encima del video) */}
      <div className="relative flex z-10 flex-1 w-full ">{children}</div>
    </Section>
  );
}
