"use client";

import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import {
  SiCanva,
  SiFramer,
} from "react-icons/si";
import IndexRail from "@/components/IndexRail";
import SectionReveal from "@/components/SectionReveal";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { profile } from "@/data/profile";

const chapters = [
  { id: "profile", label: "Profile" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
];

const about = {
  description: [
    "I design digital products that are clear, intuitive, and built to be used in the real world. I enjoy solving design problems, taking on new challenges, and turning complex ideas into experiences that feel simple and natural. UI/UX design is my craft, but curiosity and learning are what keep me sharp.",
    "Beyond design, I'm pretty laid-back and easygoing, especially in public spaces. I love football, enjoy video games, and I’m always up for exploring something new. I like meeting people, hearing their stories, and exchanging ideas. Creativity is something I carry beyond screens, and I bring that same energy into every product I work on.",
  ],
  info: [
    { fieldName: "Name", fieldValue: profile.name },
    { fieldName: "Phone", fieldValue: profile.phone },
    { fieldName: "Experience", fieldValue: "4+ Years" },
    { fieldName: "Nationality", fieldValue: "Nigerian" },
    { fieldName: "Email", fieldValue: profile.email },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Language", fieldValue: "English" },
  ],
};

const experience = {
  description: "My work experience, from present to past.",
  items: [
    { company: "E-Scape Technologies", position: "UI/UX Designer", duration: "Nov 2021 - Present" },
    { company: "Backyard Technologies", position: "UI/UX Designer", duration: "Feb 2025 - Present" },
    { company: "E-Scape Technologies", position: "Enterprise Architecte", duration: "Sept 2022 - Present" },
    { company: "KOICA", position: "Enterprise Architecture Consultant", duration: "Jan 2023 - Sept 2025" },
    { company: "E-Scape Technologies", position: "Web Developer Intern", duration: "2022 - 2023" },
    { company: "Intercontinental Distillers Ltd.", position: "IT Support Specialist", duration: "2020 - 2021" },
    { company: "ATM Dreams", position: "Graphics Designer", duration: "2017 - 2018" },
  ],
};

const education = {
  description: "Educational background and courses taken.",
  items: [
    { institution: "Udemy", degree: "Complete Web & Mobile Designer: UI/UX...", duration: "2024 - 2025" },
    { institution: "Daniel Walter - Udemy", degree: "Figma UI UX Design Essentials", duration: "2024" },
    { institution: "Scott Duffy - Udemy", degree: "Enterprise Architecture - TOGAF 9.2", duration: "2023" },
    { institution: "App Brewery - Angela Yu", degree: "The Complete Full-Stack Web Development Bootcamp", duration: "2022" },
    { institution: "Adeleke University", degree: "Bsc. Computer Science", duration: "2017 - 2021" },
    { institution: "FreeCodeCamp", degree: "HTML, CSS", duration: "2021" },
  ],
};

const skills = {
  categories: [
    {
      label: "Design Tools",
      items: [
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiFramer />, name: "Framer" },
        { icon: <SiCanva />, name: "Canva" },
      ],
    },
    {
      label: "Development",
      items: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaBootstrap />, name: "Bootstrap" },
      ],
    },
  ],
};

const Resume = () => {
  return (
    <div className="container mx-auto py-8 xl:py-12 pb-24">
      <SectionReveal>
        <span className="font-mono text-sm text-accent uppercase tracking-widest">
          Resume
        </span>
        <h1 className="display text-[44px] xl:text-[80px] mt-4 mb-16 max-w-3xl">
          {profile.role}, {profile.location}.
        </h1>
      </SectionReveal>

      <div className="grid xl:grid-cols-[200px_1fr] gap-10 xl:gap-16">
        <IndexRail sections={chapters} />

        <div className="max-w-3xl">
          {/* Profile */}
          <SectionReveal id="profile" className="border-t border-border py-12 first:border-t-0 first:pt-0 scroll-mt-32">
            <h2 className="h2 mb-6">Profile</h2>
            <div className="flex flex-col gap-5 mb-10">
              {about.description.map((paragraph, index) => (
                <p key={index} className="text-muted text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 mb-10">
              {about.info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-sm">
                  <span className="text-muted">{item.fieldName}</span>
                  <span className="text-ink">{item.fieldValue}</span>
                </li>
              ))}
            </ul>
            <Stats />
          </SectionReveal>

          {/* Experience */}
          <SectionReveal id="experience" className="border-t border-border py-12 scroll-mt-32">
            <h2 className="h2 mb-2">Experience</h2>
            <p className="text-muted mb-10">{experience.description}</p>
            <Timeline
              items={experience.items.map((item) => ({
                primary: item.position,
                secondary: item.company,
                meta: item.duration,
              }))}
            />
          </SectionReveal>

          {/* Education */}
          <SectionReveal id="education" className="border-t border-border py-12 scroll-mt-32">
            <h2 className="h2 mb-2">Education</h2>
            <p className="text-muted mb-10">{education.description}</p>
            <Timeline
              items={education.items.map((item) => ({
                primary: item.degree,
                secondary: item.institution,
                meta: item.duration,
              }))}
            />
          </SectionReveal>

          {/* Skills */}
          <SectionReveal id="skills" className="border-t border-border py-12 scroll-mt-32">
            <h2 className="h2 mb-2">Skills</h2>
            <p className="text-muted mb-10">Languages and tools I use actively.</p>
            <div className="flex flex-col gap-10">
              {skills.categories.map((category, catIndex) => (
                <SectionReveal key={category.label} delay={catIndex * 0.1} as="div">
                  <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-4">
                    {category.label}
                  </h3>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {category.items.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[120px] bg-surface/60 border border-border rounded-xl flex justify-center items-center group transition-all duration-200 hover:border-accent hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,71,255,0.15)]">
                              <div className="text-5xl text-ink group-hover:text-accent transition-all duration-200">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </SectionReveal>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </div>
  );
};

export default Resume;
