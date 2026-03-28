"use client";
import React, { useState } from "react";
import { Section } from "../Section";
import Image from "next/image";
import { SimpleCTAButton } from "@/components/ui/CTAButton";
import { ChevronDown, X } from "lucide-react";

interface RoomsSectionProps {}

interface Room {
  id: number;
  src: string;
  number: string;
  suffix: string;
  title: string;
  description: string;
  people: number;
  fullDescription?: string;
  amenities?: string[];
  size?: string;
  bedType?: string;
  images?: string[]; // ← Nuevo: soporte para múltiples imágenes
}

const RoomsSection: React.FC<RoomsSectionProps> = ({}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rooms: Room[] = [
    {
      id: 0,
      src: "/habitaciondoble.png",
      number: "12.500",
      suffix: "$",
      title: "Habitación doble",
      description:
        "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
      people: 2,
      fullDescription:
        "Habitación cómoda y luminosa con excelente vista al río. Ideal para parejas que buscan tranquilidad y confort.",
      amenities: [
        "Cama Queen Size",
        "Baño privado con ducha caliente",
        "Aire acondicionado",
        "Wi-Fi gratis",
        "Vista al río",
        "TV Smart",
      ],
      size: "28 m²",
      bedType: "Queen Size",
      images: [
        "/habitaciondoble.png",
        "/habitaciondoble2.jpg",
        "/habitaciondoble3.jpg",
      ], // Puedes agregar más
    },
    {
      id: 1,
      src: "/habitacionfamiliar.png",
      number: "24.500",
      suffix: "$",
      title: "Habitación familiar",
      description:
        "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
      people: 5,
      fullDescription:
        "Espaciosa y perfecta para familias. Cuenta con zona de estar y capacidad para hasta 5 personas.",
      amenities: [
        "Cama Queen + Literas",
        "Baño privado",
        "Aire acondicionado",
        "Wi-Fi",
        "Vista al río",
        "Zona de estar",
      ],
      size: "45 m²",
      bedType: "Queen + Literas",
      images: ["/habitacionfamiliar.png", "/habitacionfamiliar2.jpg"],
    },
    {
      id: 2,
      src: "/habitacionmatrimonial.png",
      number: "10.500",
      suffix: "$",
      title: "Habitación matrimonial",
      description:
        "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
      people: 2,
      fullDescription:
        "Romántica y acogedora, ideal para parejas o luna de miel.",
      amenities: [
        "Cama Queen Size",
        "Baño en suite",
        "Aire acondicionado",
        "Wi-Fi",
        "Vista al río",
      ],
      size: "25 m²",
      bedType: "Queen Size",
      images: ["/habitacionmatrimonial.png"],
    },
    {
      id: 3,
      src: "/habitaciondoble.png",
      number: "11.000",
      suffix: "$",
      title: "Habitación doble",
      description:
        "Cama queen size, baño privado con ducha caliente, vista al río, aire acondicionado y Wi-Fi.",
      people: 2,
      fullDescription:
        "Habitación económica pero muy cómoda, ideal para amigos o viajeros.",
      amenities: [
        "2 Camas individuales",
        "Baño privado",
        "Aire acondicionado",
        "Wi-Fi gratis",
      ],
      size: "22 m²",
      bedType: "2 Singles",
      images: ["/habitaciondoble.png", "/habitaciondoble-extra.jpg"],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Funciones para el modal de imagen
  const openImageModal = (room: Room, index: number = 0) => {
    if (room.images && room.images.length > 0) {
      setSelectedImage(room.images[index]);
      setCurrentImageIndex(index);
    } else {
      setSelectedImage(room.src);
      setCurrentImageIndex(0);
    }
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const nextImage = (room: Room) => {
    if (!room.images || room.images.length <= 1) return;
    const nextIndex = (currentImageIndex + 1) % room.images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(room.images[nextIndex]);
  };

  const prevImage = (room: Room) => {
    if (!room.images || room.images.length <= 1) return;
    const prevIndex =
      (currentImageIndex - 1 + room.images.length) % room.images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(room.images[prevIndex]);
  };

  return (
    <Section height="content" id="rooms" className="bg-background">
      <div className="w-full text-center items-center flex flex-col gap-12">
        <div className="flex flex-col w-full items-center justify-center text-center gap-5">
          <h2>Nuestras habitaciones</h2>
          <p className="text-lg text-[--muted-foreground]">
            Cabañas y habitaciones cómodas con vista al río, ideales para
            descansar en familia o pareja.
          </p>
        </div>

        {/* CONTENEDOR MASONRY */}
        <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {rooms.map((room) => {
            const isExpanded = expandedId === room.id;
            const hasMultipleImages = (room.images?.length ?? 0) > 1;

            return (
              <div
                key={room.id}
                className="break-inside-avoid flex flex-col gap-4 rounded-md bg-card shadow-md overflow-hidden"
              >
                {/* Imagen - Ahora es clickeable */}
                <div
                  className="relative w-full h-auto cursor-pointer group"
                  onClick={() => openImageModal(room)}
                >
                  <Image
                    src={room.src}
                    alt={room.title}
                    className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    width={500}
                    height={300}
                  />
                  {hasMultipleImages && (
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
                      +{room.images!.length - 1} fotos
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="flex flex-col gap-4 px-3 pb-5 justify-evenly">
                  <h3 className="text-start font-semibold tracking-tight">
                    {room.title}
                  </h3>

                  <p className="text-start leading-4 text-neutral-dark">
                    {room.description}
                  </p>

                  <div className="flex w-full justify-between items-end">
                    <div className="flex items-end">
                      <p className="text-2xl text-secondary font-semibold">
                        {room.suffix}
                        {room.number}
                      </p>
                      <span className="text-text-secondary ml-1">/noche</span>
                    </div>
                    <span className="text-text-secondary">
                      {room.people} personas
                    </span>
                  </div>

                  {/* Botón Ver más */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(room.id);
                    }}
                    className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {isExpanded ? "Ver menos" : "Ver más detalles"}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Sección expandible */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-border space-y-4 text-sm">
                      {room.fullDescription && (
                        <p className="leading-relaxed text-neutral-dark">
                          {room.fullDescription}
                        </p>
                      )}

                      {room.size && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tamaño:</span>
                          <span className="font-medium">{room.size}</span>
                        </div>
                      )}

                      {room.bedType && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Tipo de cama:
                          </span>
                          <span className="font-medium">{room.bedType}</span>
                        </div>
                      )}

                      {room.amenities && room.amenities.length > 0 && (
                        <div>
                          <p className="font-medium mb-2">Amenities:</p>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground text-start w-fit">
                            {room.amenities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="pt-3">
                        <SimpleCTAButton />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal para ver imagen grande */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            {/* Botón cerrar */}
            <button
              onClick={closeImageModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>

            {/* Imagen grande */}
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Habitación ampliada"
                className="max-h-[85vh] w-auto mx-auto rounded-lg"
                width={1200}
                height={800}
                priority
              />
            </div>

            {/* Controles de navegación si hay varias imágenes */}
            {rooms.find((r) => r.images?.includes(selectedImage))?.images
              ?.length! > 1 && (
              <>
                <button
                  onClick={() => {
                    const room = rooms.find((r) =>
                      r.images?.some((img) => img === selectedImage),
                    );
                    if (room) prevImage(room);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={() => {
                    const room = rooms.find((r) =>
                      r.images?.some((img) => img === selectedImage),
                    );
                    if (room) nextImage(room);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </Section>
  );
};

export default RoomsSection;
