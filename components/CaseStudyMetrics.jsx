import SectionReveal from "./SectionReveal";

const CaseStudyMetrics = ({ metrics }) => {
  return (
    <SectionReveal delay={0.2}>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
        {metrics.map((metric) => (
          <div key={metric.label} className="border border-border rounded-xl px-4 py-5">
            <div className="font-sans font-semibold text-2xl xl:text-3xl text-ink mb-1.5">
              {metric.value}
            </div>
            <p className="text-muted text-xs leading-snug">{metric.label}</p>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
};

export default CaseStudyMetrics;
