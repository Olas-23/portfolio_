"use client";

import {
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobephotoshop,
  SiCanva,
  SiCsharp,
  SiFramer,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description: [
    "I design digital products that are clear, intuitive, and built to be used in the real world. I enjoy solving design problems, taking on new challenges, and turning complex ideas into experiences that feel simple and natural. UI/UX design is my craft, but curiosity and learning are what keep me sharp.",
    "Beyond design, I'm pretty laid-back and easygoing, especially in public spaces. I love football, enjoy video games, and I’m always up for exploring something new. I like meeting people, hearing their stories, and exchanging ideas. Creativity is something I carry beyond screens, and I bring that same energy into every product I work on.",
  ],
  info: [
    {
      fieldName: "Name",
      fieldValue: "Olaoluwa Ajayi",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 802 658 7123",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Nigerian",
    },
    {
      fieldName: "Email",
      fieldValue: "olaoluwaajayib23@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "You'll find below my work experiences, from present to past.",
  items: [
    {
      company: "E-Scape Technologies",
      position: "UI/UX Designer",
      duration: "Nov 2021 - Present",
    },
    {
      company: "Backyard Technologies",
      position: "UI/UX Designer",
      duration: "Feb 2025 - Present",
    },
    {
      company: "E-Scape Technologies",
      position: "Enterprise Architecte",
      duration: "Sept 2022 - Present",
    },
    {
      company: "KOICA",
      position: "Enterprise Architecture Consultant",
      duration: "Jan 2023 - Sept 2025",
    },
    {
      company: "E-Scape Technologies",
      position: "Web Developer Intern",
      duration: "2022 - 2023",
    },
    {
      company: "Intercontinental Distillers Ltd.",
      position: "IT Support Specialist",
      duration: "2020 - 2021",
    },
    {
      company: "ATM Dreams",
      position: "Graphics Designer",
      duration: "2017 - 2018",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "My Educational background and courses taken",
  items: [
    {
      institution: "Udemy",
      degree: "Complete Web & Mobile Designer: UI/UX...",
      duration: "2024 - 2025",
    },
    {
      institution: "Daniel Walter - Udemy",
      degree: "Figma UI UX Design Essentials",
      duration: "2024",
    },
    {
      institution: "Scott Duffy - Udemy",
      degree: "Enterprise Architecture - TOGAF 9.2",
      duration: "2023",
    },
    {
      institution: "App Brewery - Angela Yu",
      degree: "The Complete Full-Stack Web Development Bootcamp",
      duration: "2022",
    },
    {
      institution: "Adeleke University",
      degree: "Bsc. Computer Science",
      duration: "2017 - 2021",
    },
    {
      institution: "FreeCodeCamp",
      degree: "HTML, CSS",
      duration: "2021",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Languages and Tools I have learnt and actively using",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiFramer />,
      name: "Framer",
    },
    {
      icon: <SiCanva />,
      name: "Canva",
    },
    // {
    //   icon: <SiAdobephotoshop />,
    //   name: "Photoshop",
    // },
    // {
    //   icon: <SiAdobeindesign />,
    //   name: "Adobe InDesign",
    // },
    // {
    //   icon: <SiAdobeillustrator />,
    //   name: "Adobe Illustrator",
    // },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* about me */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 text-sm"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-white">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{experience.title}</h3>
                <div className="max-w-[600px] w-full text-white/60 mx-auto xl:mx-0 space-y-4">
                  {experience.description}
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-md max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-3xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.institution}
                          </span>
                          <h3 className="text-md max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[25px] text-center xl:text-left">
                  <h3 className="text-3xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
