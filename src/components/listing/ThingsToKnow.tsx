import { CalendarX, KeyRound, ShieldAlert } from "lucide-react";

export function ThingsToKnow({
  cancellationPolicy,
  houseRules,
  safetyNotes,
}: {
  cancellationPolicy: string;
  houseRules: string[];
  safetyNotes: string[];
}) {
  const columns = [
    { icon: CalendarX, title: "Cancellation policy", items: [cancellationPolicy] },
    { icon: KeyRound, title: "House rules", items: houseRules },
    { icon: ShieldAlert, title: "Safety & property", items: safetyNotes },
  ];

  return (
    <section className="border-t border-neutral-200 py-8" aria-labelledby="things-to-know-heading">
      <h2 id="things-to-know-heading" className="text-xl font-semibold">
        Things to know
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
        {columns.map((col) => (
          <div key={col.title}>
            <col.icon size={22} strokeWidth={1.4} aria-hidden="true" />
            <p className="mt-3 font-medium">{col.title}</p>
            <div className="mt-2 space-y-1 text-sm text-neutral-700">
              {col.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
            <a href="#" className="mt-2 inline-block text-sm font-medium underline underline-offset-2">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
