"use client";

import { useState } from "react";
import { Star, Tag, Flag } from "lucide-react";
import { ListingData } from "@/data/listing";

const NIGHTS = 5; // fixed sample stay length for the clone's price breakdown

export function BookingCard({ listing }: { listing: ListingData }) {
  const [guests, setGuests] = useState(2);
  const [guestPickerOpen, setGuestPickerOpen] = useState(false);
  const subtotal = listing.pricePerNight * NIGHTS;

  return (
    <aside className="sticky top-44 w-[380px] shrink-0 self-start">
      {listing.discountPercent > 0 && (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-neutral-200 p-4">
          <Tag size={20} className="shrink-0 text-green-700" aria-hidden="true" />
          <p className="flex-1 text-sm">
            Get {listing.discountPercent}% off your next stay.{" "}
            <a href="#" className="underline underline-offset-2">
              Terms apply
            </a>
          </p>
          <button className="rounded-lg border border-[#222222] px-4 py-2 text-sm font-medium hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]">
            Claim
          </button>
        </div>
      )}

      <div className="rounded-2xl border border-neutral-200 p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <p className="text-lg">
          <span className="font-semibold">
            {listing.currencySymbol}
            {subtotal.toLocaleString()}
          </span>{" "}
          <span className="text-neutral-500">for {NIGHTS} nights</span>
        </p>
        <p className="mt-1 flex items-center gap-1 text-sm">
          <Star size={12} className="fill-current" /> {listing.rating.toFixed(2)} · {listing.reviewCount} reviews
        </p>

        <div className="mt-4 grid grid-cols-2 overflow-hidden rounded-lg border border-neutral-300">
          <div className="border-r border-b border-neutral-300 p-3">
            <span className="block text-[10px] font-semibold uppercase tracking-wide">Check-in</span>
            <span className="text-sm">10/18/2026</span>
          </div>
          <div className="border-b border-neutral-300 p-3">
            <span className="block text-[10px] font-semibold uppercase tracking-wide">Checkout</span>
            <span className="text-sm">10/23/2026</span>
          </div>
          <div className="relative col-span-2">
            <button
              onClick={() => setGuestPickerOpen((o) => !o)}
              aria-expanded={guestPickerOpen}
              aria-label="Number of guests"
              className="flex w-full items-center justify-between p-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#222222]"
            >
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-wide">Guests</span>
                <span className="text-sm">
                  {guests} guest{guests !== 1 ? "s" : ""}
                </span>
              </span>
              <span aria-hidden="true">{guestPickerOpen ? "▲" : "▼"}</span>
            </button>

            {guestPickerOpen && (
              <div className="absolute left-0 right-0 top-full z-10 mt-1 flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-4 shadow-lg">
                <span className="text-sm">Guests</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    aria-label="Decrease guest count"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-400 disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
                    disabled={guests <= 1}
                  >
                    −
                  </button>
                  <span className="w-4 text-center text-sm">{guests}</span>
                  <button
                    onClick={() => setGuests((g) => Math.min(listing.guestCount, g + 1))}
                    aria-label="Increase guest count"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-400 disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
                    disabled={guests >= listing.guestCount}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="mt-4 rounded-lg bg-neutral-100 py-2 text-center text-sm font-medium">
          Free cancellation before <span className="font-semibold">17 October</span>
        </p>

        <button className="mt-4 w-full rounded-lg bg-[#FF385C] py-3 text-base font-semibold text-white transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]">
          Reserve
        </button>

        <p className="mt-4 text-center text-sm text-neutral-500">You won&apos;t be charged yet</p>
      </div>

      <a
        href="#"
        className="mt-4 flex items-center gap-2 text-sm font-medium underline underline-offset-2 hover:text-neutral-600"
      >
        <Flag size={14} aria-hidden="true" /> Report this listing
      </a>
    </aside>
  );
}
