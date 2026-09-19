import Image from "next/image";
import { Search, Plus, Minus, Home, ShieldCheck, GraduationCap, MapPin, BadgeCheck } from "lucide-react";
import { ListingData } from "@/data/listing";

export function LocationSection({
  location,
  neighbourhoodBlurb,
  host,
  coHosts,
}: {
  location: string;
  neighbourhoodBlurb: string;
  host: ListingData["host"];
  coHosts: ListingData["coHosts"];
}) {
  return (
    <section id="location" className="scroll-mt-40 border-t border-neutral-200 py-8" aria-labelledby="location-heading">
      <h2 id="location-heading" className="text-xl font-semibold">
        Where you&apos;ll be
      </h2>
      <p className="mt-2 text-[15px] text-neutral-700">{location}</p>

      <div
        className="relative mt-6 aspect-[16/7] overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 via-emerald-50 to-emerald-100"
        role="img"
        aria-label={`Approximate map location in ${location}`}
      >
        <button
          aria-label="Search this area"
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
        >
          <Search size={16} />
        </button>
        <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-lg bg-white shadow">
          <button aria-label="Zoom in" className="flex h-10 w-10 items-center justify-center border-b border-neutral-200 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]">
            <Plus size={16} />
          </button>
          <button aria-label="Zoom out" className="flex h-10 w-10 items-center justify-center hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]">
            <Minus size={16} />
          </button>
        </div>
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#222222] text-white shadow-lg">
          <Home size={18} />
        </div>
      </div>
      <p className="mt-3 text-sm text-neutral-500">Exact location will be provided after booking.</p>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Neighbourhood highlights</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-neutral-700">{neighbourhoodBlurb}</p>
      </div>

      <div className="mt-10 border-t border-neutral-200 pt-8">
        <h3 className="text-lg font-semibold">Meet your host</h3>
        <div className="mt-6 flex flex-col gap-8 sm:flex-row">
          <div className="flex w-full max-w-xs items-center gap-6 rounded-2xl border border-neutral-200 p-6">
            <div className="relative h-16 w-16 shrink-0">
              <Image src={host.avatarUrl} alt="" fill sizes="64px" className="rounded-full object-cover" />
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#FF385C] shadow">
                <BadgeCheck size={16} />
              </span>
            </div>
            <div className="text-sm">
              <p className="text-lg font-semibold">{host.name}</p>
              <p className="text-neutral-500">Host</p>
            </div>
          </div>

          <dl className="grid flex-1 grid-cols-3 gap-4 text-center sm:text-left">
            <div>
              <dt className="text-lg font-semibold">{host.reviewCount.toLocaleString()}</dt>
              <dd className="text-xs text-neutral-500">Reviews</dd>
            </div>
            <div>
              <dt className="text-lg font-semibold">{host.rating.toFixed(2)}★</dt>
              <dd className="text-xs text-neutral-500">Rating</dd>
            </div>
            <div>
              <dt className="text-lg font-semibold">{host.yearsHosting}</dt>
              <dd className="text-xs text-neutral-500">Years hosting</dd>
            </div>
          </dl>
        </div>

        {coHosts.length > 0 && (
          <div className="mt-8">
            <p className="font-medium">Co-hosts</p>
            <div className="mt-3 flex flex-wrap gap-6">
              {coHosts.map((c) => (
                <div key={c.id} className="flex items-center gap-2">
                  <div className="relative h-8 w-8">
                    <Image src={c.avatarUrl} alt="" fill sizes="32px" className="rounded-full object-cover" />
                  </div>
                  <span className="text-sm">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 space-y-3 text-[15px]">
          <p className="flex items-center gap-3">
            <GraduationCap size={20} strokeWidth={1.4} /> Studied at {host.school}
          </p>
          <p className="flex items-center gap-3">
            <MapPin size={20} strokeWidth={1.4} /> Born {host.bornDecade}
          </p>
        </div>

        <p className="mt-6 text-sm text-neutral-600">
          Response rate: {host.responseRate}% · Responds {host.responseTime}
        </p>

        <button className="mt-6 rounded-lg border border-[#222222] px-6 py-3 text-sm font-medium hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]">
          Message host
        </button>

        <p className="mt-6 flex items-start gap-3 text-sm text-neutral-500">
          <ShieldCheck size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          To help protect your payment, always use the platform to send money and communicate with hosts.
        </p>
      </div>
    </section>
  );
}
