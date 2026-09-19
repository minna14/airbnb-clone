"use client";

import Image from "next/image";
import { Grid3x3 } from "lucide-react";
import { Photo } from "@/data/listing";

interface Props {
  photos: Photo[];
  onOpenTour: () => void;
  onOpenLightbox: (index: number) => void;
}

export function HeroGallery({ photos, onOpenTour, onOpenLightbox }: Props) {
  const main = photos[0];
  const rest = photos.slice(1, 5);

  return (
    <div className="mx-auto mt-4 max-w-[1120px] px-10">
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl">
        <button
          onClick={() => onOpenLightbox(0)}
          className="group relative col-span-2 row-span-2 aspect-[4/3.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#222222]"
          aria-label={`View photo 1 of ${photos.length}: ${main.alt}`}
        >
          <Image
            src={main.url}
            alt={main.alt}
            fill
            priority
            sizes="(max-width: 1120px) 100vw, 560px"
            className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:brightness-95"
          />
        </button>

        {rest.map((photo, i) => (
          <button
            key={photo.id}
            onClick={() => onOpenLightbox(i + 1)}
            className={`group relative aspect-[4/3.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#222222] ${
              i === 1 ? "" : ""
            }`}
            aria-label={`View photo ${i + 2} of ${photos.length}: ${photo.alt}`}
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              sizes="280px"
              className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:brightness-95"
            />
          </button>
        ))}

        <button
          onClick={onOpenTour}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg border border-[#222222] bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
        >
          <Grid3x3 size={15} />
          Show all {photos.length} photos
        </button>
      </div>
    </div>
  );
}
