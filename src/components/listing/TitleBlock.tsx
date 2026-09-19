"use client";

import { useState } from "react";
import { Star, Share, Heart } from "lucide-react";
import { ListingData } from "@/data/listing";

export function TitleBlock({ listing }: { listing: ListingData }) {
  const [saved, setSaved] = useState(false);
  const [justCopied, setJustCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    } catch {
      // Clipboard API can fail without permission; fail silently for the clone.
    }
  };

  return (
    <div className="mx-auto max-w-[1120px] px-10 pt-6">
      <h1 className="text-[26px] font-semibold leading-tight">{listing.title}</h1>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex flex-wrap items-center gap-1 text-sm">
          <Star size={13} className="fill-current" />
          <span className="font-medium">{listing.rating.toFixed(2)}</span>
          <span aria-hidden="true">·</span>
          <a href="#reviews" className="font-medium underline underline-offset-2">
            {listing.reviewCount} reviews
          </a>
          <span aria-hidden="true">·</span>
          {listing.isSuperhost && <span className="font-medium">Superhost</span>}
          <span aria-hidden="true">·</span>
          <span className="font-medium underline underline-offset-2">{listing.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium underline-offset-2 hover:bg-neutral-100 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
            aria-live="polite"
          >
            <Share size={16} />
            {justCopied ? "Link copied" : "Share"}
          </button>
          <button
            onClick={() => setSaved((s) => !s)}
            aria-pressed={saved}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium underline-offset-2 hover:bg-neutral-100 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
          >
            <Heart
              size={16}
              className={saved ? "fill-[#FF385C] stroke-[#FF385C]" : ""}
              style={{ transition: "transform 0.2s ease" }}
            />
            {saved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
