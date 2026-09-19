"use client";

import { useState } from "react";

export function Description({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="border-t border-neutral-200 py-8" aria-labelledby="description-heading">
      <h2 id="description-heading" className="sr-only">
        About this place
      </h2>
      <p className={`text-[15px] leading-relaxed ${expanded ? "" : "line-clamp-3"}`}>{text}</p>
      <button
        onClick={() => setExpanded((e) => !e)}
        className="mt-3 font-medium underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
        aria-expanded={expanded}
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </section>
  );
}
