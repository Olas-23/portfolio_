import AvailabilityIndicator from "@/components/AvailabilityIndicator";
import { BentoCard, BentoGrid } from "@/components/BentoGrid";
import MagneticButton from "@/components/MagneticButton";
import Marquee from "@/components/Marquee";
import Photo from "@/components/Photo";
import ProjectSpotlight from "@/components/ProjectSpotlight";
import SectionReveal from "@/components/SectionReveal";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

const tools = [
  "Figma",
  "Framer",
  "Jira",
  "Canva",
  "HTML5",
  "CSS",
  "JavaScript",
  "Bootstrap",
];

const featuredProjects = projects
  .filter((project) => project.featured)
  .sort((a, b) => a.featuredOrder - b.featuredOrder);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <SectionReveal delay={0}>
              <AvailabilityIndicator className="mb-8" />
            </SectionReveal>

            <SectionReveal delay={0.05}>
              <h1 className="display text-[13vw] sm:text-[64px] xl:text-[104px] text-ink">
                {profile.role.split(" ")[0]}{" "}
                <span className="text-accent">{profile.role.split(" ")[1]}</span>
                <br />
                <span className="text-muted text-[9vw] sm:text-[36px] xl:text-[56px]">
                  based in {profile.location.split(",")[0]}.
                </span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <p className="max-w-[520px] mt-8 mb-10 text-muted text-lg leading-relaxed">
                I specialize in designing intuitive, user-centered digital products, leveraging strong UX thinking, visual design, and a deep understanding of how products are built and scaled.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <MagneticButton>
                  <Link href="/work">
                    <Button size="xl" className="flex items-center gap-2">
                      View my work
                      <BsArrowUpRight />
                    </Button>
                  </Link>
                </MagneticButton>
                <a
                  href="https://drive.google.com/file/d/1EFLLBOA3fLPVRDr0W0xFxU8iE4MmFoCG/view?usp=sharing"
                  target="_blank"
                  className="flex items-center gap-2 text-ink hover:text-accent transition-colors duration-200 font-medium"
                >
                  Download CV
                  <FiDownload />
                </a>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2} className="mt-14">
              <Socials
                containerStyles="flex gap-4"
                iconStyles="w-9 h-9 border border-border rounded-full flex justify-center items-center text-muted text-base hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
              />
            </SectionReveal>
          </div>
        </div>

        {/* Photo — right-aligned, fully on-page and vertically centered */}
        <div className="hidden xl:block absolute right-[4%] top-1/2 -translate-y-1/2 pointer-events-none">
          <Photo />
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto py-12 xl:py-16">
        <Stats />
      </section>

      {/* Marquee */}
      <section className="py-10 xl:py-16 border-y border-border">
        <Marquee items={tools} />
      </section>

      {/* Work spotlight */}
      <section className="container mx-auto py-16 xl:py-24">
        <SectionReveal>
          <div className="flex items-end justify-between mb-4 xl:mb-8">
            <h2 className="h2">Selected work</h2>
            <Link
              href="/work"
              className="hidden sm:flex items-center gap-2 text-muted hover:text-accent transition-colors duration-200 font-mono text-sm"
            >
              View all
              <BsArrowUpRight />
            </Link>
          </div>
        </SectionReveal>

        <div>
          {featuredProjects.map((project, index) => (
            <ProjectSpotlight
              key={project.slug}
              project={project}
              index={index}
              reverse={index % 2 === 1}
              variant="compact"
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      {/* Capabilities & proof — bento */}
      <section className="container mx-auto py-16 xl:py-24">
        <SectionReveal>
          <h2 className="h2 mb-8 xl:mb-10">Range &amp; proof</h2>
        </SectionReveal>

        <BentoGrid>
          <BentoCard size="wide">
            <p className="text-ink text-xl xl:text-2xl leading-snug font-medium">
              I design digital products that are clear, intuitive, and built to be used in the real world — curiosity and craft over trends.
            </p>
            <Link
              href="/resume"
              className="mt-6 inline-flex items-center gap-2 text-accent font-mono text-sm"
            >
              Read more about me
              <BsArrowUpRight />
            </Link>
          </BentoCard>

          <BentoCard as="div">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.slice(0, 5).map((tool) => (
                <span key={tool} className="text-sm text-ink">
                  {tool}
                  {tool !== tools[4] && ","}
                </span>
              ))}
            </div>
          </BentoCard>

          <BentoCard as={Link} href="/services" className="hover:border-accent/50 transition-colors duration-200 cursor-pointer">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
                Services
              </h3>
              <p className="text-ink text-lg">Product design, systems, UX strategy &amp; usability.</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-2 text-accent font-mono text-sm">
              Explore
              <BsArrowUpRight />
            </span>
          </BentoCard>

          <BentoCard size="wide" className="p-0 overflow-hidden">
            <iframe
              src="https://www.superme.ai/embed/oajayi?style=minimalistic"
              width="100%"
              height="100%"
              title="Olaoluwa's SuperMe Profile"
              loading="lazy"
              className="min-h-[150px] border-none"
            ></iframe>
          </BentoCard>
        </BentoGrid>
      </section>

      <Testimonials />

      {/* Closing CTA */}
      <section className="container mx-auto py-20 xl:py-28 text-center">
        <SectionReveal>
          <h2 className="display text-[36px] xl:text-[64px] mb-8">
            Let&apos;s build something <span className="text-accent">exceptional</span>.
          </h2>
          <MagneticButton className="inline-block">
            <Link href="/contact">
              <Button size="xl" className="flex items-center gap-2">
                Get in touch
                <BsArrowUpRight />
              </Button>
            </Link>
          </MagneticButton>
        </SectionReveal>
      </section>
    </>
  );
}
