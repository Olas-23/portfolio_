"use client";
import CountUp from "react-countup";
import SectionReveal from "./SectionReveal";

const stats = [
  {
    num: 4,
    text: "Years of design experience",
  },
  {
    num: 12,
    text: "Client projects delivered",
  },
  {
    num: 8,
    text: "Industries worked across",
  },
  {
    num: 100,
    text: "UX problems solved",
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
      {stats.map((item, index) => {
        return (
          <SectionReveal key={index} delay={index * 0.06} as="div" className="bg-primary p-6 xl:p-8">
            <div>
              <span className="text-3xl xl:text-5xl font-bold font-mono text-ink">
                <CountUp end={item.num} duration={2} delay={0.2} loading="lazy" />
              </span>
              <span className="text-xl xl:text-2xl font-bold text-accent">+</span>
            </div>
            <p className="mt-2 leading-snug text-muted text-sm">{item.text}</p>
          </SectionReveal>
        );
      })}
    </div>
  );
};

export default Stats;
