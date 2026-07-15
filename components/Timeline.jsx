import SectionReveal from "./SectionReveal";

const Timeline = ({ items }) => {
  return (
    <ol className="relative border-l border-border pl-8 space-y-10">
      {items.map((item, index) => (
        <SectionReveal key={index} as="li" delay={index * 0.05} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] top-1.5 w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_0_4px_rgba(0,71,255,0.12)]" />
          <span className="text-accent font-mono text-sm">{item.meta}</span>
          <h3 className="text-lg font-semibold text-ink mt-1">{item.primary}</h3>
          <p className="text-muted">{item.secondary}</p>
        </SectionReveal>
      ))}
    </ol>
  );
};

export default Timeline;
