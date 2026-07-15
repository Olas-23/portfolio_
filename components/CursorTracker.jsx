"use client";

import { useFinePointer } from "@/hooks/useFinePointer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useEffect, useRef } from "react";

const CursorTracker = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const reduced = useReducedMotion();
  const isFine = useFinePointer();
  const active = isFine && !reduced;

  useEffect(() => {
    if (!active) return;

    document.body.classList.add("cursor-tracked");

    const glow = glowRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    const handleMove = (event) => {
      const { clientX: x, clientY: y } = event;
      glow.style.setProperty("--x", `${x}px`);
      glow.style.setProperty("--y", `${y}px`);
      glow.style.opacity = "1";
      dot.style.setProperty("--x", `${x}px`);
      dot.style.setProperty("--y", `${y}px`);
      ring.style.setProperty("--x", `${x}px`);
      ring.style.setProperty("--y", `${y}px`);
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const handleLeave = () => {
      glow.style.opacity = "0";
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    // ring grows over interactive elements so the target reads as clickable
    const handleOver = (event) => {
      const interactive = event.target.closest?.(
        "a, button, [role=button], select, label"
      );
      ring.style.setProperty("--ring-scale", interactive ? "1.6" : "1");
      ring.style.borderColor = interactive ? "rgba(0,71,255,0.7)" : "rgba(0,71,255,0.45)";
    };

    const handleDown = () => ring.style.setProperty("--ring-scale", "0.8");
    const handleUp = () => ring.style.setProperty("--ring-scale", "1");

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    document.addEventListener("mouseleave", handleLeave);
    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointerup", handleUp);

    return () => {
      document.body.classList.remove("cursor-tracked");
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointerup", handleUp);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      {/* soft ambient glow, follows exactly */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[110] opacity-0 transition-opacity duration-500 hidden xl:block"
        style={{
          background:
            "radial-gradient(480px circle at var(--x, 50%) var(--y, 50%), rgba(0,71,255,0.06), transparent 40%)",
        }}
      />
      {/* precise tracking dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[111] w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_0_2px_rgba(255,255,255,0.9)] opacity-0 hidden xl:block"
        style={{ transform: "translate(var(--x, -100px), var(--y, -100px)) translate(-50%, -50%)" }}
      />
      {/* trailing ring — CSS transition gives it a slight lag behind the dot */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[111] w-8 h-8 rounded-full border border-accent/45 shadow-[0_0_0_1px_rgba(255,255,255,0.5),inset_0_0_0_1px_rgba(255,255,255,0.5)] opacity-0 transition-transform duration-200 ease-out hidden xl:block"
        style={{
          transform:
            "translate(var(--x, -100px), var(--y, -100px)) translate(-50%, -50%) scale(var(--ring-scale, 1))",
        }}
      />
    </>
  );
};

export default CursorTracker;
