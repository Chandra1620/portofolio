import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Adds `reveal-in` to every `.reveal` element as it scrolls into view.
 * Tracks route pathname changes to ensure dynamic routes and newly rendered elements are observed.
 */
export function useReveal() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Immediately reveal all elements if user prefers reduced motion
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      const allEls = document.querySelectorAll<HTMLElement>(".reveal");
      allEls.forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    // Fallback if IntersectionObserver is unsupported
    if (!("IntersectionObserver" in window)) {
      const allEls = document.querySelectorAll<HTMLElement>(".reveal");
      allEls.forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const unrevealed = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal:not(.reveal-in)")
    );
    if (unrevealed.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    unrevealed.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
    };
  }, [pathname]);
}
