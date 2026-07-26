import BrowserMockup from "@/components/BrowserMockup";
import CaseStudyContent from "@/components/CaseStudyContent";
import CaseStudyMetrics from "@/components/CaseStudyMetrics";
import CaseStudyPlaceholder from "@/components/CaseStudyPlaceholder";
import IndexRail from "@/components/IndexRail";
import SectionReveal from "@/components/SectionReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const narrativeSections = [
  "Challenge",
  "Research",
  "User Journey",
  "Process",
  "Iterations",
  "Final Solution",
  "Impact",
  "Lessons Learned",
];

const toId = (label) => label.toLowerCase().replace(/\s+/g, "-");

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study | Ola Ajayi`,
    description: project.description,
  };
}

export default function CaseStudy({ params }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const customSections = project.caseStudy?.sections;
  const railSections = customSections
    ? customSections.map((section) => ({ id: section.id, label: section.label }))
    : narrativeSections.map((label) => ({ id: toId(label), label }));

  return (
    <div className="py-8 xl:py-12">
      <div className="container mx-auto">
        <SectionReveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 mb-10"
          >
            <BsArrowLeft />
            Back to work
          </Link>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-8">
            <div>
              <span className="font-mono text-sm text-accent uppercase tracking-widest">
                {project.category}
              </span>
              <h1 className="display text-[40px] xl:text-[76px] capitalize mt-2">{project.title}</h1>
            </div>
            <Link href={project.live} target="_blank">
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                View live
                <BsArrowUpRight />
              </Button>
            </Link>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08}>
          <div className="flex flex-wrap gap-2 mb-10">
            <Badge variant="accent">{project.role}</Badge>
            {project.stack.map((item) => (
              <Badge key={item.name}>{item.name}</Badge>
            ))}
            {!project.metrics && <Badge variant="placeholder">Metrics — pending real data</Badge>}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <BrowserMockup
            url={project.live}
            aspectRatio={
              project.imageDimensions
                ? `${project.imageDimensions.width} / ${project.imageDimensions.height}`
                : "16 / 10"
            }
            className="mb-10"
          >
            <Image
              src={project.image}
              alt={`${project.title} cover image`}
              fill
              priority
              className="object-cover"
            />
          </BrowserMockup>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <p className={`text-muted text-lg leading-relaxed ${project.meta ? "mb-8" : "mb-16"}`}>
            {project.description}
          </p>
        </SectionReveal>

        {project.meta && (
          <SectionReveal delay={0.18}>
            <dl className="grid grid-cols-2 xl:grid-cols-4 gap-6 mb-16 border-y border-border py-6">
              {Object.entries(project.meta).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted mb-1">{key}</dt>
                  <dd className="text-ink text-sm leading-snug">{value}</dd>
                </div>
              ))}
            </dl>
          </SectionReveal>
        )}

        {project.metrics && <CaseStudyMetrics metrics={project.metrics} />}

        <div className="grid xl:grid-cols-[200px_1fr] gap-10 xl:gap-16">
          <IndexRail sections={railSections} />
          <div>
            {customSections
              ? customSections.map((section) => (
                  <CaseStudyContent
                    key={section.id}
                    section={section.label}
                    id={section.id}
                    blocks={section.blocks}
                  />
                ))
              : narrativeSections.map((section) => (
                  <CaseStudyPlaceholder key={section} section={section} id={toId(section)} />
                ))}
          </div>
        </div>

        {/* Next project */}
        <SectionReveal className="mt-20 xl:mt-28 border-t border-border pt-12">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col xl:flex-row xl:items-center justify-between gap-6"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                Next project
              </span>
              <h3 className="display text-[32px] xl:text-[52px] mt-2 group-hover:text-accent transition-colors duration-200">
                {nextProject.title}
              </h3>
            </div>
            <span className="w-16 h-16 rounded-full border border-border flex items-center justify-center text-ink group-hover:border-accent group-hover:text-accent group-hover:translate-x-1 transition-all duration-200">
              <BsArrowUpRight className="text-2xl" />
            </span>
          </Link>
        </SectionReveal>
      </div>
    </div>
  );
}
