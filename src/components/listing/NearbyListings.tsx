"use client";

import { useRef } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { NearbyListing } from "@/data/listing";

export function NearbyListings({ listings }: { listings: NearbyListing[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="border-t border-neutral-200 py-8" aria-labelledby="nearby-heading">
      <div className="mb-6 flex items-center justify-between">
        <h2 id="nearby-heading" className="text-xl font-semibold">
          More stays nearby
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll nearby stays left"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll nearby stays right"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div ref={scrollerRef} className="flex gap-4 overflow-x-auto pb-2 scroll-smooth">
        {listings.map((l) => (
          <a key={l.id} href="#" className="w-72 shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={l.photoUrl} alt="" fill sizes="288px" className="object-cover" />
            </div>
            <p className="mt-2 text-[15px] font-medium">{l.title}</p>
            <p className="text-sm text-neutral-600">
              ${l.price} night ·{" "}
              <span className="inline-flex items-center gap-1">
                <Star size={11} className="fill-current" /> {l.rating.toFixed(2)}
              </span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
