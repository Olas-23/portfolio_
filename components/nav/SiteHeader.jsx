"use client";

import Logo from "@/components/Logo";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import NavOverlay from "./NavOverlay";

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[80] px-6 xl:px-10 py-5 xl:py-6">
        <motion.div
          animate={{
            backgroundColor: scrolled ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0)",
            backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
            boxShadow: scrolled ? "0 4px 24px rgba(10,14,31,0.06)" : "0 0px 0px rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex items-center justify-between rounded-full -m-2 p-2 border border-transparent"
        >
          <Logo className="text-xl xl:text-2xl" />

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-haspopup="dialog"
            className="flex items-center gap-3 text-ink hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full px-3 py-2"
          >
            <span className="hidden xl:inline font-mono text-xs uppercase tracking-widest">
              Menu
            </span>
            <HiOutlineMenu className="text-2xl" />
          </button>
        </motion.div>
      </header>

      <NavOverlay open={open} onOpenChange={setOpen} />
    </>
  );
};

export default SiteHeader;
