"use client";

import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Traps Tab/Shift+Tab focus within containerRef while `active` is true, and
 * restores focus to whatever element had focus before activation once
 * `active` becomes false again. Also moves focus into the container on
 * activation, since a screen reader / keyboard user needs to land somewhere.
 */
export function useFocusTrap(active: boolean, containerRef: React.RefObject<HTMLElement | null>) {
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;

    const container = containerRef.current;
    if (!container) return;

    const focusables = () =>
      Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));

    const first = focusables()[0];
    (first ?? container).focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    container.addEventListener("keydown", onKeyDown);
    return () => {
      container.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [active, containerRef]);
}
