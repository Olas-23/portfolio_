"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion } from "framer-motion";

const blobs = [
  {
    className: "top-[-10%] left-[-10%] w-[45vw] h-[45vw] bg-accent/10",
    animate: { x: [0, 40, 0], y: [0, 30, 0] },
    duration: 24,
  },
  {
    className: "top-[20%] right-[-15%] w-[38vw] h-[38vw] bg-accent/[0.06]",
    animate: { x: [0, -30, 0], y: [0, 40, 0] },
    duration: 28,
  },
  {
    className: "bottom-[-15%] left-[15%] w-[40vw] h-[40vw] bg-accent/[0.07]",
    animate: { x: [0, 25, 0], y: [0, -25, 0] },
    duration: 32,
  },
];

const AmbientBackground = () => {
  const reduced = useReducedMotion();

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[-1] overflow-hidden bg-primary"
    >
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[120px] ${blob.className}`}
          animate={reduced ? undefined : blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="2"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
};

export default AmbientBackground;
