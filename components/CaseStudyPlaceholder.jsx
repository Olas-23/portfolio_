import SectionReveal from "./SectionReveal";

const prompts = {
  Challenge: "Add your challenge narrative here — what problem was the client facing, and why did it matter?",
  Research: "Add your research narrative here — what discovery, interviews, or analysis shaped this project?",
  "User Journey": "Add your user journey narrative here — how did users move through the experience before and after?",
  Process: "Add your process narrative here — wireframes, iterations, and key design decisions.",
  Iterations: "Add your iterations narrative here — what changed between early concepts and the final design, and why?",
  "Final Solution": "Add your final solution narrative here — what shipped, and how does it solve the challenge above?",
  Impact: "Add your impact narrative here — real outcomes or metrics, once available.",
  "Lessons Learned": "Add your lessons-learned narrative here — what you'd do differently or carry into future work.",
};

const CaseStudyPlaceholder = ({ section, id }) => {
  return (
    <SectionReveal id={id} className="border-t border-border py-12 scroll-mt-32">
      <div className="max-w-3xl">
        <h3 className="h3 mb-4 text-ink">{section}</h3>
        <p className="text-muted italic">
          {prompts[section] ?? `Add your ${section.toLowerCase()} narrative here.`}
        </p>
      </div>
    </SectionReveal>
  );
};

export default CaseStudyPlaceholder;
