"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

type DateKey = string; // "YYYY-MM-DD"
const toKey = (year: number, month: number, day: number): DateKey =>
  `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

function getMonthGrid(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = Array(firstDay).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  return cells;
}

function MonthGrid({
  year,
  month,
  checkIn,
  checkOut,
  onSelect,
}: {
  year: number;
  month: number;
  checkIn: DateKey | null;
  checkOut: DateKey | null;
  onSelect: (key: DateKey) => void;
}) {
  const cells = getMonthGrid(year, month);
  return (
    <div className="flex-1">
      <p className="mb-4 text-center font-semibold">
        {MONTH_NAMES[month]} {year}
      </p>
      <div className="grid grid-cols-7 gap-y-2 text-center text-xs text-neutral-500">
        {WEEKDAYS.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-y-1 text-center text-sm">
        {cells.map((day, i) => {
          if (!day) return <span key={i} />;
          const key = toKey(year, month, day);
          const isEndpoint = key === checkIn || key === checkOut;
          const inRange = checkIn && checkOut && key > checkIn && key < checkOut;
          return (
            <button
              key={i}
              onClick={() => onSelect(key)}
              aria-pressed={isEndpoint}
              className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222] ${
                isEndpoint
                  ? "bg-[#222222] text-white"
                  : inRange
                  ? "bg-neutral-100"
                  : "hover:border hover:border-[#222222]"
              }`}
              aria-label={`${MONTH_NAMES[month]} ${day}, ${year}${isEndpoint ? ", selected" : ""}`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function AvailabilityCalendar({ nights, location }: { nights: number; location: string }) {
  const now = new Date();
  const [cursor, setCursor] = useState({ year: now.getFullYear(), month: now.getMonth() });
  const [checkIn, setCheckIn] = useState<DateKey | null>(null);
  const [checkOut, setCheckOut] = useState<DateKey | null>(null);

  const goPrev = () =>
    setCursor((c) => (c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 }));
  const goNext = () =>
    setCursor((c) => (c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 }));

  const handleSelect = (key: DateKey) => {
    if (!checkIn || (checkIn && checkOut)) {
      // Start a fresh selection
      setCheckIn(key);
      setCheckOut(null);
    } else if (key > checkIn) {
      setCheckOut(key);
    } else {
      // Picked an earlier date than check-in — restart from here
      setCheckIn(key);
      setCheckOut(null);
    }
  };

  const secondMonth = cursor.month === 11 ? 0 : cursor.month + 1;
  const secondYear = cursor.month === 11 ? cursor.year + 1 : cursor.year;

  const computedNights =
    checkIn && checkOut
      ? Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))
      : nights;

  return (
    <section className="border-t border-neutral-200 py-8" aria-labelledby="calendar-heading">
      <h2 id="calendar-heading" className="text-xl font-semibold">
        {computedNights} night{computedNights !== 1 ? "s" : ""} in {location.split(",")[0]}
      </h2>
      <p className="mt-1 text-sm text-neutral-600" aria-live="polite">
        {checkIn && checkOut
          ? `Selected: ${checkIn} to ${checkOut}`
          : checkIn
          ? `Check-in ${checkIn} — now pick a checkout date`
          : "Select a check-in date"}
      </p>

      <div className="relative mt-6">
        <button
          onClick={goPrev}
          aria-label="Previous month"
          className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={goNext}
          aria-label="Next month"
          className="absolute right-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222222]"
        >
          <ChevronRight size={16} />
        </button>

        <div className="flex gap-16 px-14">
          <MonthGrid year={cursor.year} month={cursor.month} checkIn={checkIn} checkOut={checkOut} onSelect={handleSelect} />
          <MonthGrid year={secondYear} month={secondMonth} checkIn={checkIn} checkOut={checkOut} onSelect={handleSelect} />
        </div>

        {(checkIn || checkOut) && (
          <button
            onClick={() => {
              setCheckIn(null);
              setCheckOut(null);
            }}
            className="mx-auto mt-6 block text-sm font-medium underline underline-offset-2"
          >
            Clear dates
          </button>
        )}
      </div>
    </section>
  );
}
