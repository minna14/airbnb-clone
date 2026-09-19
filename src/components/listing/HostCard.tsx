import Image from "next/image";
import { Award } from "lucide-react";
import { ListingData } from "@/data/listing";

export function HostCard({ host }: { host: ListingData["host"] }) {
  return (
    <section className="flex items-center gap-6 border-t border-neutral-200 py-8">
      <div className="relative h-14 w-14 shrink-0">
        <Image src={host.avatarUrl} alt="" fill sizes="56px" className="rounded-full object-cover" />
        {host.isSuperhost && (
          <span
            className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow"
            aria-hidden="true"
          >
            <Award size={12} className="text-[#222222]" />
          </span>
        )}
      </div>
      <div>
        <p className="font-semibold">Hosted by {host.name}</p>
        <p className="text-sm text-neutral-500">
          {host.isSuperhost ? "Superhost · " : ""}
          {host.yearsHosting} years hosting
        </p>
      </div>
    </section>
  );
}
