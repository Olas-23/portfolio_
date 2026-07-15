import ProjectSpotlight from "@/components/ProjectSpotlight";
import SectionReveal from "@/components/SectionReveal";
import { projects } from "@/data/projects";

export default function Work() {
  return (
    <div className="container mx-auto py-8 xl:py-12 pb-24">
      <SectionReveal>
        <span className="font-mono text-sm text-accent uppercase tracking-widest">
          Selected work
        </span>
        <h1 className="display text-[44px] xl:text-[80px] mt-4 mb-4 max-w-3xl">
          Product design, shipped.
        </h1>
        <p className="max-w-xl text-muted text-lg leading-relaxed">
          A collection of real client engagements spanning healthcare, mobility, energy, education, and regulatory platforms — each one designed end to end.
        </p>
      </SectionReveal>

      <div className="mt-8 xl:mt-12">
        {projects.map((project, index) => (
          <ProjectSpotlight
            key={project.slug}
            project={project}
            index={index}
            reverse={index % 2 === 1}
            variant="full"
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  );
}
