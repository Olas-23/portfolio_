"use client";

import { navLinks } from "@/data/navigation";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { FiArrowUp } from "react-icons/fi";
import Logo from "./Logo";
import SectionReveal from "./SectionReveal";
import Socials from "./Socials";

const Footer = () => {
  const reduced = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <SectionReveal as="footer" className="border-t border-border">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <Logo className="text-2xl" />

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="capitalize hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <Socials
          containerStyles="flex gap-4"
          iconStyles="w-9 h-9 border border-border rounded-full flex justify-center items-center text-muted text-base hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
        />
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>&copy; Olas {new Date().getFullYear()}. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full px-2 py-1"
          >
            Back to top
            <FiArrowUp className="text-base" />
          </button>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Footer;
