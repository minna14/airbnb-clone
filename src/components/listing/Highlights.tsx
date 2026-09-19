import { Sparkles, Wind, DoorOpen, LucideIcon } from "lucide-react";
import { ListingData } from "@/data/listing";

const ICONS: Record<string, LucideIcon> = { Sparkles, Wind, DoorOpen };

export function Highlights({ highlights }: { highlights: ListingData["highlights"] }) {
  return (
    <ul className="flex flex-col gap-6 border-t border-neutral-200 py-8">
      {highlights.map((h) => {
        const Icon = ICONS[h.icon] ?? Sparkles;
        return (
          <li key={h.id} className="flex gap-4">
            <Icon size={26} strokeWidth={1.4} className="mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-medium">{h.title}</p>
              <p className="mt-0.5 text-sm text-neutral-500">{h.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
