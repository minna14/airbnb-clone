"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Photo } from "@/data/listing";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";

interface Props {
  photos: Photo[];
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
}

export function PhotoTour({ photos, onClose, onOpenLightbox }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  useFocusTrap(true, containerRef);
  useBodyScrollLock(true);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="All photos"
      tabIndex={-1}
      className="fixed inset-0 z-50 overflow-y-auto bg-white outline-none"
    >
      <div className="sticky top-0 z-10 flex items-center border-b border-neutral-200 bg-white px-6 py-4">
        <button
          onClick={onClose}
          aria-label="Close photo tour and return to listing"
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
        >
          <X size={20} />
        </button>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-8">
        <div className="flex flex-col gap-2">
          {photos.map((photo, i) => (
            <button
              key={photo.id}
              onClick={() => onOpenLightbox(i)}
              className="relative aspect-[3/2] w-full overflow-hidden rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
              aria-label={`Open photo ${i + 1} of ${photos.length} in full view: ${photo.alt}`}
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                fill
                sizes="768px"
                className="object-cover transition duration-200 hover:brightness-95"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
