"use client";

import SectionReveal from "@/components/SectionReveal";
import TiltCard from "@/components/TiltCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectSpotlight = ({ project, index = 0, reverse = false, variant = "full", priority = false }) => {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [28, -28]);

  const isCompact = variant === "compact";

  return (
    <SectionReveal
      as="div"
      scale={0.98}
      className="border-t border-border py-16 xl:py-24 first:border-t-0 first:pt-0"
    >
      <div
        ref={sectionRef}
        className={`flex flex-col gap-10 xl:gap-16 xl:items-center ${
          reverse ? "xl:flex-row-reverse" : "xl:flex-row"
        }`}
      >
        {/* text half — DOM-first regardless of visual reverse, so tab order follows reading order */}
        <div className="w-full xl:w-[38%] flex flex-col gap-5">
          <span className="font-mono text-sm text-accent">{project.num}</span>
          <h3 className={isCompact ? "font-display text-[26px] xl:text-[32px] leading-[1.1] font-semibold text-ink" : "display text-ink text-[36px] xl:text-[52px] leading-[1.05]"}>
            {project.title}
          </h3>
          <p className="text-muted leading-relaxed">{project.tagline || project.description}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="accent">{project.role}</Badge>
            {project.stack.map((item) => (
              <Badge key={item.name}>{item.name}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 pt-2">
            <Link href={`/work/${project.slug}`}>
              <Button variant="outline" className="flex items-center gap-2">
                Case study
                <BsArrowUpRight />
              </Button>
            </Link>
            <Link
              href={project.live}
              target="_blank"
              className="text-muted hover:text-accent transition-colors duration-200 font-mono text-sm inline-flex items-center gap-1"
            >
              View live
              <BsArrowUpRight className="text-xs" />
            </Link>
          </div>
        </div>

        {/* image half */}
        <Link href={`/work/${project.slug}`} className="w-full xl:w-[62%] block group">
          <TiltCard className="relative w-full aspect-[4/3] xl:aspect-[16/10] rounded-2xl overflow-hidden border border-border">
            <motion.div style={{ y: parallaxY }} className="absolute inset-0 -m-6">
              <Image
                src={project.image}
                alt={`${project.title} cover image`}
                fill
                priority={priority}
                className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out-expo"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-6">
              <span className="text-white font-medium flex items-center gap-2">
                View case study
                <BsArrowUpRight />
              </span>
            </div>
          </TiltCard>
        </Link>
      </div>
    </SectionReveal>
  );
};

export default ProjectSpotlight;
