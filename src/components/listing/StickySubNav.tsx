"use client";

import { Star } from "lucide-react";
import { ListingData } from "@/data/listing";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

export function StickySubNav({ listing }: { listing: ListingData }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-20 z-20 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-10 py-4">
        <nav aria-label="Listing sections" className="flex gap-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className="border-b-2 border-[#222222] pb-1 text-sm font-medium text-[#222222] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <p className="text-sm">
            <span className="font-semibold">
              {listing.currencySymbol}
              {listing.pricePerNight * 5}
            </span>{" "}
            <span className="text-neutral-600">for 5 nights</span>
          </p>
          <span className="flex items-center gap-1 text-sm">
            <Star size={12} className="fill-current" />
            {listing.rating.toFixed(2)} · {listing.reviewCount} reviews
          </span>
          <button className="rounded-lg bg-[#FF385C] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
