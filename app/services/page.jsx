import SectionReveal from '@/components/SectionReveal';
import Link from 'next/link';
import { BsArrowUpRight } from "react-icons/bs";

const services = [
	{
		num: '01',
		title: 'Product Design',
		description:
			'I design user-centered digital products from concept to launch, focusing on clarity, usability, and real user needs.',
		href: '/contact',
	},
	{
		num: '02',
		title: 'Interface & Design Systems',
		description:
			'I create clean, consistent interfaces and scalable design systems that keep products visually aligned and easy to extend.',
		href: '/contact',
	},
	{
		num: '03',
		title: 'UX Strategy & Research',
		description:
			'I uncover user needs through research, journey mapping, and analysis to inform smarter design decisions and reduce guesswork.',
		href: '/contact',
	},
	{
		num: '04',
		title: 'Usability Optimization',
		description:
			'I test, refine, and improve designs based on feedback and real usage to ensure products are intuitive and effective.',
		href: '/contact',
	},
];

const Service = () => {
  return (
    <div className="container mx-auto py-8 xl:py-12 pb-24">
      <SectionReveal>
        <span className="font-mono text-sm text-accent uppercase tracking-widest">
          Services
        </span>
        <h1 className="display text-[44px] xl:text-[80px] mt-4 mb-16 max-w-3xl">
          How I can help.
        </h1>
      </SectionReveal>

      <div>
        {services.map((service, index) => (
          <SectionReveal key={index} delay={index * 0.08} className="border-t border-border first:border-t-0">
            <Link
              href={service.href}
              className="group flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-16 py-10 xl:py-14"
            >
              <span className="font-mono text-2xl text-muted xl:w-20 shrink-0">
                {service.num}
              </span>
              <h2 className="h2 xl:w-[380px] shrink-0 text-ink group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-muted text-lg leading-relaxed flex-1">
                {service.description}
              </p>
              <span className="w-14 h-14 rounded-full border border-border shrink-0 flex items-center justify-center text-ink group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-300 group-hover:-rotate-45">
                <BsArrowUpRight className="text-2xl" />
              </span>
            </Link>
          </SectionReveal>
        ))}
      </div>
    </div>
  )
}

export default Service
