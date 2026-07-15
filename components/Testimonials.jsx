"use client";

import { Badge } from "@/components/ui/badge";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { testimonials } from "@/data/testimonials";
import { FaQuoteLeft } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionReveal from "./SectionReveal";
import SwiperNavButtons from "./SwiperNavButtons";
import TiltCard from "./TiltCard";

import "swiper/css";

const Testimonials = () => {
  const reduced = useReducedMotion();

  return (
    <section className="py-16 xl:py-24">
      <div className="container mx-auto">
        <SectionReveal>
          <h2 className="display text-[36px] xl:text-[56px] text-center mb-12">
            What people <span className="text-accent">say</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative max-w-3xl mx-auto">
            <Swiper
              modules={reduced ? [] : [Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={reduced ? false : { delay: 6000, disableOnInteraction: false }}
              className="pb-4"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <TiltCard className="glass rounded-2xl p-8 xl:p-12 relative">
                    {testimonial.isPlaceholder && (
                      <Badge variant="placeholder" className="absolute top-4 right-4">
                        Sample
                      </Badge>
                    )}
                    <FaQuoteLeft className="text-accent text-3xl mb-6" />
                    <p className="text-ink/90 text-lg leading-relaxed mb-8">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold font-mono">
                        {testimonial.author
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-ink font-medium">{testimonial.author}</p>
                        <p className="text-muted text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </TiltCard>
                </SwiperSlide>
              ))}

              <SwiperNavButtons
                containerStyles="flex gap-3 justify-center mt-8"
                btnStyles="bg-surface border border-border hover:border-accent hover:text-accent text-ink w-11 h-11 rounded-full flex justify-center items-center transition-all duration-200"
              />
            </Swiper>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Testimonials;
