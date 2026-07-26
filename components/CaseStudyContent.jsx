import SectionReveal from "./SectionReveal";

const Block = ({ block }) => {
  switch (block.type) {
    case "h4":
      return <h4 className="font-mono text-xs uppercase tracking-widest text-ink mt-6 mb-2">{block.text}</h4>;
    case "ul":
      return (
        <ul className="list-disc pl-5 space-y-1.5 text-muted leading-relaxed mb-4">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-5 space-y-1.5 text-muted leading-relaxed mb-4">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-4 text-ink italic my-6">
          {block.text}
        </blockquote>
      );
    case "p":
    default:
      return <p className="text-muted leading-relaxed mb-4">{block.text}</p>;
  }
};

const CaseStudyContent = ({ section, id, blocks }) => {
  return (
    <SectionReveal id={id} className="border-t border-border py-12 scroll-mt-32">
      <div className="max-w-3xl">
        <h3 className="h3 mb-4 text-ink">{section}</h3>
        {blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </SectionReveal>
  );
};

export default CaseStudyContent;
