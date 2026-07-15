"use client";

import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SectionReveal = ({
  children,
  className,
  delay = 0,
  y = 16,
  blur = false,
  scale,
  once = true,
  amount = 0.2,
  as: Wrapper = "div",
  ...rest
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount, once });
  const reduced = useReducedMotion();

  const hidden = reduced
    ? { opacity: 0 }
    : {
        opacity: 0,
        y,
        ...(blur ? { filter: "blur(4px)" } : {}),
        ...(scale ? { scale } : {}),
      };
  const visible = reduced
    ? { opacity: 1 }
    : {
        opacity: 1,
        y: 0,
        ...(blur ? { filter: "blur(0px)" } : {}),
        ...(scale ? { scale: 1 } : {}),
      };

  return (
    <Wrapper ref={ref} className={className} {...rest}>
      <motion.div
        initial={hidden}
        animate={isInView ? visible : hidden}
        transition={{ duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </Wrapper>
  );
};

export default SectionReveal;
