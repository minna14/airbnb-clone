"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkle, CheckCircle, KeyRound, MessageCircle, Map, Tag, Waves, Mountain,
  HeartHandshake, LucideIcon,
} from "lucide-react";
import { ListingData } from "@/data/listing";

const ICONS: Record<string, LucideIcon> = {
  Sparkle, CheckCircle, KeyRound, MessageCircle, Map, Tag, Waves, Mountain, HeartHandshake,
};

const STAR_LABELS = [5, 4, 3, 2, 1];

export function Reviews({
  rating,
  reviewCount,
  reviews,
  categories,
  tags,
  distribution,
}: {
  rating: number;
  reviewCount: number;
  reviews: ListingData["reviews"];
  categories: ListingData["reviewCategories"];
  tags: ListingData["reviewTags"];
  distribution: number[];
}) {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 4);

  return (
    <section id="reviews" className="scroll-mt-40 border-t border-neutral-200 py-8" aria-labelledby="reviews-heading">
      <h2 id="reviews-heading" className="sr-only">
        Reviews
      </h2>

      <div className="text-center">
        <p className="text-5xl font-semibold">{rating.toFixed(2)}</p>
        <p className="mt-2 text-2xl font-semibold">Guest favourite</p>
        <p className="mx-auto mt-1 max-w-md text-sm text-neutral-600">
          This home is a guest favourite based on ratings, reviews, and reliability
        </p>
        <a href="#" className="mt-2 inline-block text-sm font-medium underline underline-offset-2">
          How reviews work
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-7">
        <div className="col-span-2">
          <p className="mb-2 text-sm font-medium">Overall rating</p>
          {STAR_LABELS.map((star, i) => (
            <div key={star} className="mb-1 flex items-center gap-2 text-xs text-neutral-500">
              <span className="w-2">{star}</span>
              <div className="h-1.5 flex-1 rounded-full bg-neutral-200">
                <div
                  className="h-1.5 rounded-full bg-neutral-800"
                  style={{ width: `${distribution[i] ?? 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        {categories.map((c) => {
          const Icon = ICONS[c.icon] ?? Sparkle;
          return (
            <div key={c.label}>
              <p className="text-sm">{c.label}</p>
              <p className="mt-1 text-lg font-medium">{c.score.toFixed(1)}</p>
              <Icon size={16} strokeWidth={1.4} className="mt-1" aria-hidden="true" />
            </div>
          );
        })}
      </div>

      {tags.length > 0 && (
        <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
          {tags.map((t) => {
            const Icon = ICONS[t.icon] ?? Sparkle;
            return (
              <span
                key={t.label}
                className="flex shrink-0 items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm"
              >
                <Icon size={15} aria-hidden="true" /> {t.label} <span className="text-neutral-500">{t.count}</span>
              </span>
            );
          })}
        </div>
      )}

      <ul className="mt-10 grid grid-cols-2 gap-x-10 gap-y-8">
        {visibleReviews.map((r) => (
          <li key={r.id}>
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11">
                <Image src={r.authorAvatarUrl} alt="" fill sizes="44px" className="rounded-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium">{r.authorName}</p>
                <p className="text-xs text-neutral-500">{r.tenure}</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-neutral-500">
              {"★".repeat(r.rating)} · {r.date}
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-700">{r.text}</p>
          </li>
        ))}
      </ul>

      {reviews.length > 4 && (
        <button
          onClick={() => setShowAll((s) => !s)}
          className="mt-8 rounded-lg border border-[#222222] px-5 py-3 text-sm font-medium hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
        >
          {showAll ? "Show less" : `Show all ${reviewCount} reviews`}
        </button>
      )}
    </section>
  );
}
