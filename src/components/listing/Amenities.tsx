"use client";

import { useState } from "react";
import {
  Waves, Wifi, ChefHat, Car, Laptop, Bath, PawPrint, Camera, AlertTriangle, LucideIcon,
} from "lucide-react";
import { ListingData } from "@/data/listing";

const ICONS: Record<string, LucideIcon> = {
  Waves, Wifi, ChefHat, Car, Laptop, Bath, PawPrint, Camera, AlertTriangle,
};

export function Amenities({ amenities }: { amenities: ListingData["amenities"] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? amenities : amenities.slice(0, 6);

  return (
    <section id="amenities" aria-labelledby="amenities-heading" className="scroll-mt-40 border-t border-neutral-200 py-8">
      <h2 id="amenities-heading" className="text-xl font-semibold">
        What this place offers
      </h2>
      <ul className="mt-6 grid grid-cols-2 gap-y-4">
        {visible.map((a) => {
          const Icon = ICONS[a.icon] ?? Wifi;
          return (
            <li key={a.id} className="flex items-center gap-4">
              <Icon size={22} strokeWidth={1.4} aria-hidden="true" className={a.available ? "" : "text-neutral-400"} />
              <span className={`text-[15px] ${a.available ? "" : "text-neutral-400 line-through"}`}>
                {a.label}
              </span>
            </li>
          );
        })}
      </ul>
      {amenities.length > 6 && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-6 rounded-lg border border-[#222222] px-5 py-3 text-sm font-medium hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : `Show all ${amenities.length} amenities`}
        </button>
      )}
    </section>
  );
}
