"use client";

import { profile } from "@/data/profile";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const AvailabilityIndicator = ({ className = "" }) => {
  const reduced = useReducedMotion();

  return (
    <div className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted ${className}`}>
      <span className="relative flex h-2 w-2">
        {!reduced && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        )}
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {profile.status}
    </div>
  );
};

export default AvailabilityIndicator;
