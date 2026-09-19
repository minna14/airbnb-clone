import Image from "next/image";
import { SleepArea } from "@/data/listing";

export function WhereYoullSleep({ sleepAreas }: { sleepAreas: SleepArea[] }) {
  return (
    <section className="border-t border-neutral-200 py-8" aria-labelledby="sleep-heading">
      <h2 id="sleep-heading" className="text-xl font-semibold">
        Where you&apos;ll sleep
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {sleepAreas.map((area) => (
          <figure key={area.id}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src={area.photoUrl} alt="" fill sizes="360px" className="object-cover" />
            </div>
            <figcaption className="mt-2 text-[15px] font-medium">{area.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
