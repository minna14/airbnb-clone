"use client";

import { useState } from "react";
import { Header } from "@/components/listing/Header";
import { TitleBlock } from "@/components/listing/TitleBlock";
import { HeroGallery } from "@/components/listing/HeroGallery";
import { StickySubNav } from "@/components/listing/StickySubNav";
import { QuickFacts } from "@/components/listing/QuickFacts";
import { HostCard } from "@/components/listing/HostCard";
import { Highlights } from "@/components/listing/Highlights";
import { Description } from "@/components/listing/Description";
import { WhereYoullSleep } from "@/components/listing/WhereYoullSleep";
import { Amenities } from "@/components/listing/Amenities";
import { AvailabilityCalendar } from "@/components/listing/AvailabilityCalendar";
import { Reviews } from "@/components/listing/Reviews";
import { LocationSection } from "@/components/listing/LocationSection";
import { ThingsToKnow } from "@/components/listing/ThingsToKnow";
import { NearbyListings } from "@/components/listing/NearbyListings";
import { BookingCard } from "@/components/listing/BookingCard";
import { PhotoTour } from "@/components/overlays/PhotoTour";
import { Lightbox } from "@/components/overlays/Lightbox";
import { listing } from "@/data/listing";

export default function Home() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="flex-1">
      <Header />

      <main>
        <TitleBlock listing={listing} />
        <div id="photos" className="scroll-mt-40">
          <HeroGallery
            photos={listing.photos}
            onOpenTour={() => setTourOpen(true)}
            onOpenLightbox={(i) => setLightboxIndex(i)}
          />
        </div>

        <StickySubNav listing={listing} />

        <div className="mx-auto flex max-w-[1120px] gap-16 px-10 py-8">
          <div className="flex-1">
            <QuickFacts listing={listing} />
            <HostCard host={listing.host} />
            <Highlights highlights={listing.highlights} />
            <Description text={listing.description} />
            <WhereYoullSleep sleepAreas={listing.sleepAreas} />
            <Amenities amenities={listing.amenities} />
            <AvailabilityCalendar nights={5} location={listing.location} />
            <Reviews
              rating={listing.rating}
              reviewCount={listing.reviewCount}
              reviews={listing.reviews}
              categories={listing.reviewCategories}
              tags={listing.reviewTags}
              distribution={listing.ratingDistribution}
            />
            <LocationSection
              location={listing.location}
              neighbourhoodBlurb={listing.neighbourhoodBlurb}
              host={listing.host}
              coHosts={listing.coHosts}
            />
            <ThingsToKnow
              cancellationPolicy={listing.cancellationPolicy}
              houseRules={listing.houseRules}
              safetyNotes={listing.safetyNotes}
            />
            <NearbyListings listings={listing.nearbyListings} />
          </div>
          <BookingCard listing={listing} />
        </div>
      </main>

      {tourOpen && (
        <PhotoTour
          photos={listing.photos}
          onClose={() => setTourOpen(false)}
          onOpenLightbox={(i) => {
            setTourOpen(false);
            setLightboxIndex(i);
          }}
        />
      )}

      {lightboxIndex !== null && (
        <Lightbox
          photos={listing.photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(i) => setLightboxIndex(i)}
        />
      )}
    </div>
  );
}
