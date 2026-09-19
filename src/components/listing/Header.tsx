"use client";

import Link from "next/link";
import { Menu, Home, Search, Globe } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-10">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 text-[#FF385C]" aria-label="Homepage">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <path
              d="M16 3c1.2 0 2.2.6 2.9 1.7 2.6 4.1 8.6 13.9 8.6 18.1 0 4-3.2 6.9-7.1 6.9-2.1 0-4-.9-5.3-2.4-.4-.4-.7-.4-1.1 0-1.3 1.5-3.2 2.4-5.3 2.4-3.9 0-7.1-2.9-7.1-6.9 0-4.2 6-14 8.6-18.1C13.8 3.6 14.8 3 16 3z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xl font-bold tracking-tight">airbnb</span>
        </Link>

        {/* Search pill */}
        <button
          className="flex items-center gap-3 rounded-full border border-neutral-200 py-2 pl-2 pr-2 shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
          aria-label="Search destinations, dates, and guests"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100">
            <Home size={16} />
          </span>
          <span className="text-sm font-medium">Anywhere</span>
          <span className="h-4 w-px bg-neutral-300" aria-hidden="true" />
          <span className="text-sm font-medium">Anytime</span>
          <span className="h-4 w-px bg-neutral-300" aria-hidden="true" />
          <span className="text-sm text-neutral-500 pr-1">Add guests</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] text-white">
            <Search size={15} strokeWidth={2.5} />
          </span>
        </button>

        {/* Right nav */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden rounded-full px-4 py-3 text-sm font-medium hover:bg-neutral-100 sm:block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
          >
            Become a host
          </a>
          <button
            aria-label="Choose a language and region"
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
          >
            <Globe size={18} />
          </button>
          <button
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
