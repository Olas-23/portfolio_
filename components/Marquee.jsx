"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";

const Marquee = ({ items, className = "" }) => {
  const reduced = useReducedMotion();
  // Duplicated once so the 0%->-50% CSS loop is seamless.
  const loopItems = [...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
      aria-hidden="true"
    >
      <div
        className={`flex w-max gap-16 whitespace-nowrap ${reduced ? "" : "animate-marquee"}`}
      >
        {loopItems.map((item, index) => (
          <span
            key={index}
            className="font-mono text-sm uppercase tracking-widest text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
