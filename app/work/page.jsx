"use client"
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import "swiper/css";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';

import WorkSliderBtns from '@/components/WorkSliderBtns';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    num: "01",
    category: "Design",
    title: "Mhino",
    description:
      "Mhino is a mobile-first micro-healthcare platform that democratizes access to quality healthcare and basic insurance by enabling flexible, bite-sized payments. It connects users, doctors, and agent centres into a single, end-to-end digital care ecosystem.",
    stack: [
      { name: "Figma" },
      { name: "Jira" },
    ],
    image: "/assets/work/Mhino_cover.png",
    live: "https://mhino.com/",
    github: "https://github.com/retrong",
  },
  {
    num: "02",
    category: "Design",
    title: "CarAlert247",
    description:
      "CarAlert247 is a UK based vechicle management platform designed to help users and businesses track, manage and receive first hand notifications about parking tickets, vehicle tax and MOT renewal.",
    stack: [
      { name: "Figma" },
      { name: "Jira" },

    ],
    image: "/assets/work/CarAlert_cover.png",
    live: "https://landing.caralert247.com/",
    github: "https://github.com/retrong",
  },
  {
    num: "03",
    category: "Design",
    title: "Nemera Oil & Gas",
    description:
      "The Nemera project focused on the UI/UX rebranding and redesign of the Nemera Oil & Gas website, modernizing its digital presence to reflect a credible, professional, and forward-looking energy company.",
    stack: [
      { name: "Figma" },
      { name: "Jira" },
    ],
    image: "/assets/work/Nemera.png",
    live: "https://nemera-chi.vercel.app/",
    github: "https://github.com/retrong",
  },
  {
    num: "04",
    category: "design",
    title: "QuikLearn",
    description:
      "The QuikLearn project delivered a user-centric learning platform that connects tutors, students, and parents, enabling parents to manage learning, tutors to deliver structured lessons, and students to engage through intuitive, age-appropriate experiences.",
    stack: [
      { name: "Figma" },
      { name: "Jira" },
    ],
    image: "/assets/work/QuikLearn.png",
    live: "https://quiklearn.co.uk/",
    github: "https://github.com/retrong",
  },
  {
    num: "05",
    category: "design",
    title: "Backyard Website",
    description: "A simple corporate website for a consulting company.",
    stack: [{ name: "Figma" },
      { name: "Jira" },],
    image: "/assets/work/bkyd.png",
    live: "https://backyardtech.co.uk/",
    github: "https://github.com/retrong",
  },
  {
    num: "06",
    category: "design",
    title: "MHRA",
    description:
      "The MHRA project focused on improving the digital experience of a regulatory platform, streamlining how complex health and compliance information is accessed, managed, and understood. The work emphasized clarity, usability, and trust",
    stack: [
      { name: "Figma" },
      { name: "Jira" },
    ],
    image: "/assets/work/MHRA.png",
    live: "https://decorinn.vercel.app/",
    github: "https://decorinn.vercel.app/",
  },
  // {
  //   num: "07",
  //   category: "frontend",
  //   title: "Gfams Accounting",
  //   description:
  //     'A "Get Quote" interface for companies and individuals to make enquire and get direct feedback about services.',
  //   stack: [
  //     { name: "Next.Js" },
  //     { name: "Tailwind.css" },
  //     { name: "Typescript" },
  //   ],
  //   image: "/assets/work/Instant-Quote-snapshot.png",
  //   live: "https://quote-account.vercel.app/",
  //   github: "https://github.com/retrong",
  // },
  // {
  //   num: "08",
  //   category: "frontend",
  //   title: "Aston Luxury Homes",
  //   description: "An Online website for Luxury homes and Interior",
  //   stack: [
  //     { name: "Next,Js" },
  //     { name: "Tailwind.css" },
  //     { name: "Typescript" },
  //   ],
  //   image: "/assets/work/Aston homes.png",
  //   live: "https://aston-website.vercel.app/",
  //   github: "https://github.com/retrong/",
  // },
];


const Work = () => {

    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state with current slide
        setProject(projects[currentIndex]);
    }
    
  return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"} }}
			className="min-h-screen flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between">
						<div className="flex flex-col gap-[30px] h-[50%]">
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
								{project.num}
							</div>
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.title} project
							</h2>
							<p className="text-white/60">{project.description}</p>
							<ul className="flex gap-4">
								{project.stack.map((item, index) => {
									return (
										<li key={index} className="text-xl text-accent">
											{item.name}
											{/* to remove the last comma */}
											{index !== project.stack.length - 1 && ','}
										</li>
									);
								})}
							</ul>
							<div className="border border-white/20"></div>
							<div className='flex items-center gap-4'>
								{/* live project button path */}
								<Link href={project.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full flex bg-white/5 justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live Project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>

								{/* github project button path */}
								{/* <Link href={project.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full flex bg-white/5 justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link> */}
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[55%]">
						<Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] h-[350px] mb-12' onSlideChange={handleSlideChange}>
							{projects.map((project, index) => {
								return (
									<SwiperSlide key={index} className='w-full'>
										<div className='max-h-[400px] h-full relative group flex justify-center items-center'>
												<div className='absolute top-0 bottom-0 w-full h-full z-10'></div>
												{/* image */}
												<div className='relative w-full h-full'>
													<Image src={project.image} alt='project Image' fill className=' object-fill w-full h-auto ' />
												</div>
										</div>
									</SwiperSlide>
								);
							})}
							{/* buttons */}
							<WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.div>
	);
}


export default Work
