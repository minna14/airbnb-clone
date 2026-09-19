"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/data/listing";
import { useFocusTrap } from "@/lib/useFocusTrap";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface Props {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ photos, index, onClose, onNavigate }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useFocusTrap(true, containerRef);
  useBodyScrollLock(true);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % photos.length);
  }, [index, photos.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onNavigate]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, goNext, goPrev]);

  const photo = photos[index];

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}`}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex flex-col bg-black/95 outline-none"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <button
          onClick={onClose}
          aria-label="Close photo viewer"
          className="flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          <X size={22} />
        </button>
        <span className="text-sm font-medium text-white" aria-live="polite">
          {index + 1} / {photos.length}
        </span>
      </div>

      {/* Main image area */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-6">
        <button
          onClick={goPrev}
          aria-label="Previous photo"
          className="absolute left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#222222] shadow-md hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40"
          style={{ transition: reducedMotion ? "none" : "transform 0.15s ease" }}
        >
          <ChevronLeft size={22} />
        </button>

        <div className="relative h-full w-full max-w-5xl">
          <Image
            key={photo.id}
            src={photo.url}
            alt={photo.alt}
            fill
            sizes="90vw"
            className="object-contain"
            style={{
              animation: reducedMotion ? "none" : "lightbox-fade-in 0.18s ease",
            }}
            priority
          />
        </div>

        <button
          onClick={goNext}
          aria-label="Next photo"
          className="absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#222222] shadow-md hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:opacity-40"
          style={{ transition: reducedMotion ? "none" : "transform 0.15s ease" }}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Caption */}
      <p className="px-6 pb-6 text-center text-sm text-white/70">{photo.alt}</p>

      <style jsx global>{`
        @keyframes lightbox-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
