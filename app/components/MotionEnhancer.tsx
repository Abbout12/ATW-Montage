"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.add("motion-ready");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7%" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
