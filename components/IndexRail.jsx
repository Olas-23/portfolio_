"use client";

import { useEffect, useState } from "react";

// Sticky, IntersectionObserver-driven section index. `sections` is
// [{ id, label }]; each id must match a rendered element's id in the page.
const IndexRail = ({ sections }) => {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Section index"
      className="hidden xl:flex flex-col gap-3 sticky top-32 h-fit"
    >
      {sections.map(({ id, label }) => {
        const isActive = id === activeId;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-3 text-sm transition-colors duration-200 ${
              isActive ? "text-accent" : "text-muted hover:text-ink"
            }`}
          >
            <span
              className={`h-px transition-all duration-200 ${
                isActive ? "w-8 bg-accent" : "w-4 bg-border"
              }`}
            />
            {label}
          </a>
        );
      })}
    </nav>
  );
};

export default IndexRail;
