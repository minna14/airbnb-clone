import { Sparkles } from "lucide-react";
import { ListingData } from "@/data/listing";

export function QuickFacts({ listing }: { listing: ListingData }) {
  return (
    <div className="pt-2">
      <h2 className="text-2xl font-semibold">
        {listing.propertyType} in {listing.location.split(",")[0]}
      </h2>
      <p className="mt-1 text-[15px] text-neutral-700">
        {listing.guestCount} guests · {listing.bedroomCount} bedroom{listing.bedroomCount !== 1 ? "s" : ""} ·{" "}
        {listing.bedCount} bed{listing.bedCount !== 1 ? "s" : ""} · {listing.bathroomCount} bathroom
        {listing.bathroomCount !== 1 ? "s" : ""}
      </p>

      {listing.isGuestFavourite && (
        <div className="mt-6 flex items-center gap-6 rounded-2xl border border-neutral-200 p-5">
          <Sparkles size={28} strokeWidth={1.3} aria-hidden="true" />
          <div className="flex-1">
            <p className="font-semibold">Guest favourite</p>
            <p className="text-sm text-neutral-600">
              One of the most loved homes on the platform, according to guests
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">{listing.rating.toFixed(2)}</p>
            <p aria-hidden="true" className="text-xs">
              {"★".repeat(5)}
            </p>
          </div>
          <div className="h-8 w-px bg-neutral-200" aria-hidden="true" />
          <div className="text-center">
            <p className="text-lg font-semibold">{listing.reviewCount}</p>
            <p className="text-xs text-neutral-600">Reviews</p>
          </div>
        </div>
      )}
    </div>
  );
}
