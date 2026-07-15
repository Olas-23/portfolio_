"use client";

import { navLinks } from "@/data/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { HiOutlineX } from "react-icons/hi";
import AvailabilityIndicator from "../AvailabilityIndicator";
import Socials from "../Socials";

const NavOverlay = ({ open, onOpenChange }) => {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[90] bg-primary/95 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[100] flex flex-col justify-between p-6 xl:p-16 overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Links to every page on this site
                </Dialog.Description>

                <div className="flex justify-end">
                  <Dialog.Close
                    aria-label="Close menu"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-ink hover:border-accent hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <HiOutlineX className="text-2xl" />
                  </Dialog.Close>
                </div>

                <nav className="flex flex-col gap-1 xl:gap-2 my-auto py-10">
                  {navLinks.map((link, index) => {
                    const isActive = link.path === pathname;
                    return (
                      <motion.div
                        key={link.path}
                        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: reduced ? 0 : 0.04 * index,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <Dialog.Close asChild>
                          <Link
                            href={link.path}
                            className={`group flex items-baseline gap-4 xl:gap-8 py-2 ${
                              isActive ? "text-accent" : "text-ink"
                            }`}
                          >
                            <span className="font-mono text-sm text-muted">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="display text-[13vw] xl:text-[76px] capitalize group-hover:text-accent transition-colors duration-200">
                              {link.name}
                            </span>
                          </Link>
                        </Dialog.Close>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
                  <AvailabilityIndicator />
                  <Socials
                    containerStyles="flex gap-4"
                    iconStyles="w-10 h-10 border border-border rounded-full flex justify-center items-center text-muted hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
                  />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default NavOverlay;
