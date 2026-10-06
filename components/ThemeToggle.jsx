"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

const ThemeToggle = ({ className = "" }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-border bg-surface transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${className}`}
    >
      <span
        className={`flex h-6 w-6 items-center justify-center rounded-full bg-accent text-white shadow-sm transition-transform duration-200 ease-out-expo ${
          isDark ? "translate-x-[29px]" : "translate-x-[3px]"
        }`}
      >
        {isDark ? <HiMoon className="text-sm" /> : <HiSun className="text-sm" />}
      </span>
    </button>
  );
};

export default ThemeToggle;
