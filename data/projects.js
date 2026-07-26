export const projects = [
  {
    num: "01",
    slug: "mhino",
    category: "Design",
    role: "Product Design",
    featured: true,
    featuredOrder: 2,
    title: "Mhino",
    tagline: "A micro-healthcare platform making quality care and insurance affordable through bite-sized payments.",
    description:
      "Mhino is a mobile-first micro-healthcare platform that democratizes access to quality healthcare and basic insurance by enabling flexible, bite-sized payments. It connects users, doctors, and agent centres into a single, end-to-end digital care ecosystem.",
    stack: [{ name: "Figma" }, { name: "Jira" }],
    image: "/assets/work/Mhino_cover.png",
    imageDimensions: { width: 2160, height: 1238 },
    live: "https://mhino.com/",
    github: "https://github.com/Olas-23",
    meta: {
      role: "UI/UX Designer",
      timeline: "2024–2025",
      platform: "Mobile (iOS & Android), Responsive Web",
      industry: "Digital Health (HealthTech)",
    },
    metrics: [
      { value: "7 → 1", label: "Fragmented care touchpoints unified into a single wallet-to-care flow" },
      { value: "6", label: "Core modules designed — Wallet, Doctors, Appointments, Records, Agents, Profile" },
      { value: "3", label: "User groups served in one ecosystem — patients, doctors, agent centres" },
      { value: "9", label: "Steps in the redesigned end-to-end journey, from registration to prescription" },
    ],
    caseStudy: {
      sections: [
        {
          id: "challenge",
          label: "Challenge",
          blocks: [
            {
              type: "p",
              text: "Access to healthcare in Nigeria remains heavily constrained by affordability, fragmented service delivery, and low insurance penetration. Many people postpone treatment because healthcare expenses must often be paid upfront, while finding trusted providers can involve multiple disconnected channels.",
            },
            {
              type: "p",
              text: "The challenge was not simply to design another healthcare application — it was to rethink how everyday Nigerians could discover providers, save for healthcare, make payments in small amounts, and receive medical services through one seamless digital experience.",
            },
            {
              type: "p",
              text: "The platform also needed to earn user trust. Since it would manage sensitive health information and financial transactions, every interaction had to communicate credibility, simplicity, and security.",
            },
          ],
        },
        {
          id: "research",
          label: "Research",
          blocks: [
            {
              type: "p",
              text: "The design process began by understanding both the healthcare landscape and the people using it. Research focused on identifying:",
            },
            {
              type: "ul",
              items: [
                "Barriers preventing people from accessing healthcare",
                "Existing patient behaviours around payments",
                "Trust concerns surrounding digital health services",
                "Friction within appointment booking and healthcare financing",
                "Opportunities for simplifying complex healthcare processes",
              ],
            },
            { type: "h4", text: "Competitive analysis" },
            {
              type: "p",
              text: "Competitive analysis included studying healthcare marketplaces, digital wallets, telemedicine platforms, insurance applications, and mobile banking experiences.",
            },
            {
              type: "quote",
              text: "People don't think in terms of insurance — they think in terms of today's medical need.",
            },
            {
              type: "p",
              text: "This insight shifted the experience away from selling insurance toward enabling everyday healthcare access through simple, understandable financial interactions.",
            },
          ],
        },
        {
          id: "user-journey",
          label: "User Journey",
          blocks: [
            { type: "h4", text: "Before Mhino" },
            { type: "p", text: "A typical healthcare journey looked like this:" },
            {
              type: "ol",
              items: [
                "Search for a nearby clinic",
                "Make several phone calls",
                "Travel to the facility",
                "Pay the full consultation fee upfront",
                "Receive prescriptions",
                "Visit another pharmacy",
                "Repeat the process for future visits",
              ],
            },
            { type: "p", text: "The experience was fragmented, time-consuming, and financially stressful." },
            { type: "h4", text: "With Mhino" },
            { type: "p", text: "The redesigned journey became:" },
            {
              type: "ol",
              items: [
                "Register within minutes",
                "Verify identity",
                "Create a healthcare wallet",
                "Fund the wallet using flexible amounts",
                "Discover verified healthcare providers",
                "Book appointments digitally",
                "Pay seamlessly through the wallet",
                "Access consultation records and prescriptions",
                "Continue saving for future healthcare needs",
              ],
            },
            { type: "p", text: "The result was a much shorter, more connected healthcare experience." },
          ],
        },
        {
          id: "process",
          label: "Process",
          blocks: [
            {
              type: "p",
              text: "The project followed a user-centred design process from discovery through high-fidelity implementation.",
            },
            { type: "h4", text: "Discovery" },
            {
              type: "p",
              text: "I worked closely with stakeholders to understand business objectives while translating healthcare workflows into user-friendly digital experiences.",
            },
            { type: "h4", text: "Information architecture" },
            {
              type: "p",
              text: "I restructured the platform around core user goals rather than internal business functions. Primary navigation prioritized:",
            },
            { type: "ul", items: ["Home", "Healthcare Wallet", "Doctors", "Appointments", "Health Records", "Profile"] },
            {
              type: "p",
              text: "This reduced cognitive load and made the platform easier to navigate for first-time users.",
            },
            { type: "h4", text: "Wireframing" },
            { type: "p", text: "Low-fidelity wireframes were created to validate:" },
            {
              type: "ul",
              items: [
                "Onboarding",
                "Wallet funding",
                "Appointment booking",
                "Provider discovery",
                "Medical records",
                "Healthcare payments",
              ],
            },
            { type: "p", text: "These early concepts allowed rapid feedback before visual design began." },
            { type: "h4", text: "Visual design" },
            { type: "p", text: "The interface emphasized:" },
            {
              type: "ul",
              items: [
                "Clean layouts",
                "Large touch targets",
                "Accessible typography",
                "Clear visual hierarchy",
                "Trust-building colour choices",
                "Consistent component patterns",
              ],
            },
            {
              type: "p",
              text: "Given the product's financial and healthcare focus, reducing anxiety through thoughtful design became a guiding principle.",
            },
          ],
        },
        {
          id: "iterations",
          label: "Iterations",
          blocks: [
            { type: "p", text: "Several parts of the experience evolved significantly throughout the project." },
            { type: "h4", text: "Simplifying onboarding" },
            {
              type: "p",
              text: "Early onboarding asked users to complete too much information before experiencing value. The flow was redesigned into progressive steps, allowing users to start quickly while completing profile information only when necessary.",
            },
            { type: "h4", text: "Wallet experience" },
            {
              type: "p",
              text: "Initial wallet screens resembled traditional banking applications. User feedback showed people cared less about financial terminology and more about understanding:",
            },
            {
              type: "ul",
              items: [
                "How much healthcare balance they had",
                "What it could be used for",
                "How to add more funds",
              ],
            },
            {
              type: "p",
              text: "The wallet was redesigned around healthcare outcomes instead of banking concepts.",
            },
            { type: "h4", text: "Appointment booking" },
            {
              type: "p",
              text: "Early appointment flows required too many decisions before confirming a booking. The final experience surfaced available providers, available time slots, consultation fees, and payment confirmation in a single streamlined flow.",
            },
            { type: "h4", text: "Navigation" },
            {
              type: "p",
              text: "Several navigation structures were tested before arriving at a simplified information architecture that reduced unnecessary steps while making important actions immediately visible.",
            },
          ],
        },
        {
          id: "final-solution",
          label: "Final Solution",
          blocks: [
            {
              type: "p",
              text: "The final product delivered a unified digital healthcare ecosystem where users could:",
            },
            {
              type: "ul",
              items: [
                "Create a healthcare account",
                "Fund a healthcare wallet",
                "Save gradually for future medical expenses",
                "Discover healthcare providers",
                "Book appointments",
                "Access consultation history",
                "View medical records",
                "Manage healthcare payments",
                "Connect with agent centres for offline support",
              ],
            },
            {
              type: "p",
              text: "Behind the interface, the design system established reusable components and interaction patterns that improved design consistency and accelerated future product development.",
            },
            {
              type: "p",
              text: "Rather than feeling like separate healthcare tools stitched together, the final experience behaved as one connected healthcare platform.",
            },
          ],
        },
        {
          id: "impact",
          label: "Impact",
          blocks: [
            {
              type: "p",
              text: "While the platform continues to evolve, the design established the foundation for a scalable digital healthcare ecosystem capable of serving diverse user groups across Nigeria.",
            },
            { type: "h4", text: "Key outcomes" },
            {
              type: "ul",
              items: [
                "A significantly simplified healthcare access journey",
                "Consistent user experience across core product modules",
                "A reusable design system for faster product iteration",
                "Improved usability through reduced navigation complexity",
                "A stronger product identity centred on accessibility, trust, and affordability",
              ],
            },
            {
              type: "p",
              text: "The project also positioned Mhino beyond a traditional healthcare booking application by combining healthcare financing, provider discovery, and digital care management into one experience.",
            },
          ],
        },
        {
          id: "lessons-learned",
          label: "Lessons Learned",
          blocks: [
            {
              type: "p",
              text: "Designing for healthcare reinforced that simplicity is often the most valuable feature.",
            },
            {
              type: "p",
              text: "Working on Mhino taught me that successful healthcare products require balancing business objectives with empathy. Users aren't opening the app because they're excited about technology — they're often seeking help during stressful or vulnerable moments.",
            },
            {
              type: "p",
              text: "I also learned the importance of designing for financial accessibility. Small changes in language, navigation, and payment flows can dramatically reduce friction for users who may be unfamiliar with insurance or digital health platforms.",
            },
            {
              type: "p",
              text: "Most importantly, I learned that trust isn't created through branding alone — it is built through every interaction, every confirmation screen, every payment flow, and every piece of information architecture.",
            },
          ],
        },
        {
          id: "contributions",
          label: "My Contributions",
          blocks: [
            {
              type: "ul",
              items: [
                "Product Discovery",
                "UX Research",
                "User Flows",
                "Information Architecture",
                "Wireframing",
                "High-Fidelity UI Design",
                "Design System",
                "Prototyping",
                "Interaction Design",
                "Usability Testing",
                "Developer Handoff",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    num: "02",
    slug: "caralert247",
    category: "Design",
    role: "Product Design",
    featured: true,
    featuredOrder: 1,
    title: "CarAlert247",
    tagline: "A UK vehicle management platform for tracking parking tickets, vehicle tax and MOT renewals.",
    description:
      "CarAlert247 is a UK based vechicle management platform designed to help users and businesses track, manage and receive first hand notifications about parking tickets, vehicle tax and MOT renewal.",
    stack: [{ name: "Figma" }, { name: "Jira" }],
    image: "/assets/work/CarAlert_cover.png",
    imageDimensions: { width: 1440, height: 778 },
    live: "https://landing.caralert247.com/",
    github: "https://github.com/Olas-23",
    meta: {
      role: "UI/UX Designer",
      timeline: "2024–2025",
      platform: "Responsive Web & Mobile",
      industry: "Mobility / Vehicle Compliance / SaaS",
    },
    metrics: [
      { value: "4", label: "Compliance categories unified — PCNs, penalties, MOT, tax & insurance" },
      { value: "5 → 1", label: "Disconnected sources consolidated into one compliance dashboard" },
      { value: "2", label: "User types supported on one platform — individual drivers and fleet operators" },
      { value: "6", label: "Primary navigation sections — Dashboard, Vehicles, Alerts, Compliance, Subscriptions, Account" },
    ],
    caseStudy: {
      sections: [
        {
          id: "challenge",
          label: "Challenge",
          blocks: [
            {
              type: "p",
              text: "Managing vehicle compliance is often more complicated than it should be. Drivers receive notifications from multiple agencies and service providers, each with different timelines, communication channels, and response processes. Missing a single notice — whether it's a parking charge, speeding penalty, MOT renewal, or vehicle tax reminder — can result in unnecessary fines, legal complications, or disruptions to daily life.",
            },
            {
              type: "p",
              text: "For businesses managing multiple vehicles, the challenge becomes even greater. Tracking compliance across an entire fleet without a centralized system is both time-consuming and prone to costly mistakes.",
            },
            {
              type: "p",
              text: "The challenge was to design a platform that simplified vehicle compliance into one cohesive experience while making complex information easy to understand and quick to act on. Every interaction needed to reduce cognitive load, build user confidence, and encourage proactive rather than reactive vehicle management.",
            },
          ],
        },
        {
          id: "research",
          label: "Research",
          blocks: [
            {
              type: "p",
              text: "The discovery phase focused on understanding how drivers and fleet operators currently managed vehicle-related responsibilities and where existing processes created friction. Research explored:",
            },
            {
              type: "ul",
              items: [
                "Common reasons drivers miss important vehicle deadlines",
                "Pain points associated with managing multiple compliance obligations",
                "User expectations around real-time notifications",
                "Trust concerns when dealing with legal and financial information",
                "Differences between individual drivers and fleet managers",
              ],
            },
            {
              type: "p",
              text: "A review of existing mobility, fleet management, and compliance platforms revealed a recurring issue: most solutions focused on individual services rather than the complete ownership experience.",
            },
            {
              type: "quote",
              text: "Users don't want another reminder app — they want confidence that nothing important will be missed.",
            },
            {
              type: "p",
              text: "This shifted the design focus from displaying information to helping users understand what requires immediate attention and what can safely wait.",
            },
          ],
        },
        {
          id: "user-journey",
          label: "User Journey",
          blocks: [
            { type: "h4", text: "Before CarAlert247" },
            {
              type: "p",
              text: "Users often relied on multiple disconnected sources to stay compliant:",
            },
            {
              type: "ol",
              items: [
                "Receive notices through post or email",
                "Manually track MOT, insurance, and tax renewal dates",
                "Search different websites to understand penalties",
                "Switch between multiple platforms to pay or appeal notices",
                "Repeat the process for every vehicle",
              ],
            },
            { type: "p", text: "The experience was fragmented, reactive, and easy to overlook." },
            { type: "h4", text: "With CarAlert247" },
            { type: "p", text: "The redesigned journey became:" },
            {
              type: "ol",
              items: [
                "Create an account",
                "Register one or more vehicles",
                "Receive automatic compliance monitoring",
                "View all active alerts from a centralized dashboard",
                "Review notices with clear priority indicators",
                "Take action by paying, appealing, or managing the notice",
                "Receive reminders before future compliance deadlines",
              ],
            },
            {
              type: "p",
              text: "For fleet operators, the experience extended to managing multiple vehicles, assigning responsibilities, and maintaining visibility across an entire fleet from a single interface.",
            },
          ],
        },
        {
          id: "process",
          label: "Process",
          blocks: [
            {
              type: "p",
              text: "The project followed a user-centered design process that emphasized simplicity, scalability, and trust.",
            },
            { type: "h4", text: "Discovery" },
            {
              type: "p",
              text: "Working closely with stakeholders, I translated complex compliance workflows into user-friendly digital experiences while ensuring the platform supported both personal and commercial use cases.",
            },
            { type: "h4", text: "Information architecture" },
            {
              type: "p",
              text: "The platform was organized around user priorities rather than backend systems. The navigation prioritized:",
            },
            { type: "ul", items: ["Dashboard", "My Vehicles", "Alerts", "Compliance", "Subscriptions", "Account"] },
            {
              type: "p",
              text: "This structure allowed users to quickly understand the health of their vehicles without navigating multiple sections.",
            },
            { type: "h4", text: "Wireframing" },
            {
              type: "p",
              text: "Low-fidelity wireframes were developed to validate key user flows including:",
            },
            {
              type: "ul",
              items: [
                "User onboarding",
                "Vehicle registration",
                "Subscription selection",
                "Dashboard overview",
                "Notification center",
                "Notice management",
                "Multi-vehicle management",
              ],
            },
            {
              type: "p",
              text: "These early concepts enabled rapid testing and stakeholder feedback before progressing to visual design.",
            },
            { type: "h4", text: "Visual design" },
            {
              type: "p",
              text: "The interface was designed to communicate urgency without creating unnecessary anxiety. Key design principles included:",
            },
            {
              type: "ul",
              items: [
                "Clear visual hierarchy",
                "Status-based color coding",
                "Accessible typography",
                "Responsive layouts",
                "Consistent interaction patterns",
                "Dashboard-first navigation",
              ],
            },
            {
              type: "p",
              text: "Particular attention was given to presenting compliance information in a way that users could scan and understand within seconds.",
            },
          ],
        },
        {
          id: "iterations",
          label: "Iterations",
          blocks: [
            { type: "p", text: "Several important workflows evolved significantly throughout the design process." },
            { type: "h4", text: "Dashboard prioritization" },
            {
              type: "p",
              text: "Early dashboard concepts presented equal emphasis across all vehicle information, making it difficult for users to identify urgent actions.",
            },
            {
              type: "p",
              text: "The final design introduced clear prioritization, surfacing critical alerts and upcoming deadlines while pushing lower-priority information into supporting sections. This made the dashboard more actionable and significantly reduced information overload.",
            },
            { type: "h4", text: "Vehicle registration" },
            {
              type: "p",
              text: "Initial registration required users to complete several steps before experiencing the platform's value. The onboarding experience was simplified to focus on quickly adding a vehicle, allowing users to begin receiving alerts with minimal effort while completing additional setup later.",
            },
            { type: "h4", text: "Notification experience" },
            {
              type: "p",
              text: "Early notification screens displayed alerts in chronological order, forcing users to determine which issues were most important. The final design grouped notifications by urgency and actionability, helping users quickly distinguish between critical penalties, upcoming renewals, and informational reminders.",
            },
            { type: "h4", text: "Multi-vehicle management" },
            {
              type: "p",
              text: "Supporting both individual users and fleet operators required flexible navigation. Several layouts were explored before arriving at a scalable experience that enabled users to switch between vehicles effortlessly while maintaining a consistent overview of their compliance status.",
            },
          ],
        },
        {
          id: "final-solution",
          label: "Final Solution",
          blocks: [
            {
              type: "p",
              text: "The final product delivered a centralized vehicle compliance platform that enabled users to:",
            },
            {
              type: "ul",
              items: [
                "Register and manage one or multiple vehicles",
                "Receive real-time compliance notifications",
                "Monitor Parking Charge Notices and penalties",
                "Track MOT, tax, and insurance renewals",
                "Manage subscriptions",
                "Access a unified dashboard for all vehicle-related activities",
                "Stay ahead of important deadlines through proactive reminders",
              ],
            },
            {
              type: "p",
              text: "Supporting the experience was a reusable design system that standardized interface components, interaction patterns, and visual language across the platform, improving consistency and streamlining future product development.",
            },
            {
              type: "p",
              text: "Rather than functioning as a simple notification service, CarAlert247 became a comprehensive compliance companion that helped users stay informed, organized, and in control of their vehicle responsibilities.",
            },
          ],
        },
        {
          id: "impact",
          label: "Impact",
          blocks: [
            {
              type: "p",
              text: "The redesigned experience established a strong foundation for a scalable compliance platform serving both individual drivers and commercial fleet operators.",
            },
            { type: "h4", text: "Key outcomes" },
            {
              type: "ul",
              items: [
                "Simplified navigation across complex compliance workflows",
                "Improved visibility of time-sensitive vehicle obligations",
                "A scalable information architecture supporting single and multi-vehicle management",
                "A consistent design system that accelerated development and future product enhancements",
                "A user experience centered on clarity, trust, and proactive compliance",
              ],
            },
            {
              type: "p",
              text: "By consolidating multiple compliance processes into a single digital experience, the platform reduced friction and made vehicle management significantly easier for its users.",
            },
          ],
        },
        {
          id: "lessons-learned",
          label: "Lessons Learned",
          blocks: [
            {
              type: "p",
              text: "Designing CarAlert247 reinforced the importance of information hierarchy when working with time-sensitive products. Users don't simply need access to information — they need immediate clarity on what matters most and what action to take next.",
            },
            {
              type: "p",
              text: "The project also emphasized the value of designing for different user types without creating separate products. Balancing the needs of individual drivers and fleet operators required scalable interaction patterns that remained intuitive regardless of account size.",
            },
            {
              type: "p",
              text: "Most importantly, I learned that trust is built through predictability. In products dealing with legal obligations and financial consequences, clear communication, consistent interactions, and thoughtful prioritization are just as important as visual design.",
            },
          ],
        },
        {
          id: "contributions",
          label: "My Contributions",
          blocks: [
            {
              type: "ul",
              items: [
                "Product Discovery",
                "UX Research",
                "Information Architecture",
                "User Journey Mapping",
                "User Flows",
                "Wireframing",
                "High-Fidelity UI Design",
                "Design System",
                "Interactive Prototyping",
                "Usability Testing",
                "Developer Handoff",
                "Cross-functional Collaboration",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    num: "03",
    slug: "nemera-oil-gas",
    category: "Design",
    role: "Product Design",
    featured: true,
    featuredOrder: 3,
    title: "Nemera Oil & Gas",
    tagline: "UI/UX rebrand and redesign of an energy company's digital presence.",
    description:
      "The Nemera project focused on the UI/UX rebranding and redesign of the Nemera Oil & Gas website, modernizing its digital presence to reflect a credible, professional, and forward-looking energy company.",
    stack: [{ name: "Figma" }, { name: "Jira" }],
    image: "/assets/work/Nemera.png",
    imageDimensions: { width: 1440, height: 850 },
    live: "https://www.nemeraoilandgas.com/",
    github: "https://github.com/Olas-23",
    meta: {
      role: "UI/UX Designer",
      timeline: "2025",
      platform: "Responsive Corporate Website",
      industry: "Oil & Gas / Engineering / Energy",
    },
    metrics: [
      { value: "7", label: "Primary site sections restructured around user priorities" },
      { value: "5", label: "Core service lines presented as scannable, digestible cards" },
      { value: "3", label: "Breakpoints designed for — desktop, tablet & mobile" },
      { value: "6", label: "Key pages wireframed before visual design — Home, About, Services, Projects, Leadership, Contact" },
    ],
    caseStudy: {
      sections: [
        {
          id: "challenge",
          label: "Challenge",
          blocks: [
            {
              type: "p",
              text: "For many B2B companies, a website is more than a marketing asset — it's often the first touchpoint for potential clients, partners, and investors.",
            },
            {
              type: "p",
              text: "Nemera's previous website lacked the visual polish, information hierarchy, and user experience expected from a company operating in Nigeria's oil and gas industry. Visitors had to work harder than necessary to understand the company's capabilities, certifications, and project experience.",
            },
            { type: "p", text: "The redesign needed to accomplish several objectives:" },
            {
              type: "ul",
              items: [
                "Present Nemera as a credible, premium engineering company",
                "Clearly communicate a broad portfolio of technical services",
                "Showcase completed and ongoing projects",
                "Reinforce trust through certifications and company credentials",
                "Improve navigation and accessibility across all devices",
                "Create a scalable foundation for future content updates",
              ],
            },
            {
              type: "p",
              text: "The challenge wasn't simply making the website look modern — it was designing an experience that strengthened confidence from the moment users landed on the homepage.",
            },
          ],
        },
        {
          id: "research",
          label: "Research",
          blocks: [
            { type: "p", text: "The project began with understanding both the business and its audience." },
            {
              type: "p",
              text: "Research focused on identifying the information prospective clients needed before making contact, including service capabilities, project experience, safety standards, and corporate credibility.",
            },
            {
              type: "p",
              text: "I also reviewed websites of established engineering and energy companies to identify common design patterns, navigation structures, and content hierarchies used across the industry.",
            },
            { type: "h4", text: "Key insights" },
            {
              type: "ul",
              items: [
                "Visitors wanted to quickly understand what the company does",
                "Proof of experience was just as important as listing services",
                "Certifications and safety standards significantly influence trust",
                "Large amounts of technical information needed to remain easy to scan rather than overwhelming users",
              ],
            },
            {
              type: "p",
              text: "These insights shaped a design that emphasized clarity, credibility, and structured storytelling.",
            },
          ],
        },
        {
          id: "user-journey",
          label: "User Journey",
          blocks: [
            {
              type: "p",
              text: "Before the redesign, the user journey lacked a clear progression. Visitors often needed to search through multiple pages before understanding the company's capabilities or finding relevant contact information.",
            },
            { type: "p", text: "The redesigned journey became more intentional:" },
            {
              type: "ol",
              items: [
                "Arrive on the homepage",
                "Immediately understand who Nemera is and what it offers",
                "Explore core service offerings",
                "Discover completed and ongoing projects",
                "Build confidence through certifications, company values, and leadership information",
                "Contact the business through clear calls to action",
              ],
            },
            {
              type: "p",
              text: "Instead of presenting isolated pages, the website now guides users through a narrative that builds trust before asking them to engage.",
            },
          ],
        },
        {
          id: "process",
          label: "Process",
          blocks: [
            {
              type: "p",
              text: "The redesign followed a user-centered approach that balanced business goals with usability.",
            },
            { type: "h4", text: "Discovery" },
            {
              type: "p",
              text: "I worked with stakeholders to understand the company's positioning, target audience, and long-term digital objectives, translating complex engineering services into content structures that were easy to navigate.",
            },
            { type: "h4", text: "Information architecture" },
            {
              type: "p",
              text: "One of the primary improvements involved reorganizing the website around user priorities rather than internal company structure. The navigation prioritized:",
            },
            {
              type: "ul",
              items: ["Home", "About", "Services", "Projects", "Clients & Partners", "Gallery", "Contact"],
            },
            {
              type: "p",
              text: "This structure reduced friction and made important business information easier to discover.",
            },
            { type: "h4", text: "Wireframing" },
            {
              type: "p",
              text: "Low-fidelity wireframes were created to validate the layout and flow of key pages, including:",
            },
            { type: "ul", items: ["Homepage", "About", "Services", "Projects", "Leadership", "Contact"] },
            {
              type: "p",
              text: "These early concepts helped establish content hierarchy before moving into visual design.",
            },
            { type: "h4", text: "Visual design" },
            {
              type: "p",
              text: "The visual language was designed to communicate professionalism, reliability, and operational excellence. Design decisions emphasized:",
            },
            {
              type: "ul",
              items: [
                "Strong visual hierarchy",
                "Spacious layouts",
                "High-quality project imagery",
                "Consistent typography",
                "Clear sectioning",
                "Responsive components",
                "Strategic calls to action",
              ],
            },
            {
              type: "p",
              text: "The interface balances corporate professionalism with modern web design, ensuring technical information remains approachable and easy to consume.",
            },
          ],
        },
        {
          id: "iterations",
          label: "Iterations",
          blocks: [
            { type: "p", text: "Several parts of the website evolved significantly throughout the design process." },
            { type: "h4", text: "Homepage storytelling" },
            {
              type: "p",
              text: "Early concepts focused heavily on introducing the company. Through iteration, the homepage shifted toward telling a stronger business story by highlighting services, project expertise, certifications, and client value much earlier in the experience.",
            },
            { type: "h4", text: "Services presentation" },
            {
              type: "p",
              text: "Initial layouts displayed services as dense blocks of information. The final design broke each offering into digestible cards supported by concise descriptions, making the breadth of Nemera's expertise easier to understand at a glance.",
            },
            { type: "h4", text: "Building trust" },
            {
              type: "p",
              text: "Rather than placing certifications and company credentials deep within the site, they were surfaced more prominently to reinforce credibility throughout the user journey. This included showcasing ISO certifications and emphasizing Nemera's commitment to quality, environmental management, and workplace safety.",
            },
            { type: "h4", text: "Project showcase" },
            {
              type: "p",
              text: "Project pages evolved from simple lists into visual case studies that highlighted the company's capabilities and real-world execution. This made the website feel less like a brochure and more like a portfolio of proven expertise.",
            },
          ],
        },
        {
          id: "final-solution",
          label: "Final Solution",
          blocks: [
            {
              type: "p",
              text: "The final website presents Nemera as a modern engineering and energy company with a strong emphasis on capability, trust, and operational excellence. The redesigned experience enables visitors to:",
            },
            {
              type: "ul",
              items: [
                "Learn about the company and its values",
                "Explore engineering and operational services",
                "View completed and ongoing projects",
                "Review ISO certifications and corporate credentials",
                "Discover leadership and company expertise",
                "Contact the business through clear, accessible channels",
              ],
            },
            {
              type: "p",
              text: "The responsive design ensures a consistent experience across desktop, tablet, and mobile devices, while a scalable component system supports future expansion as the company continues to grow.",
            },
          ],
        },
        {
          id: "impact",
          label: "Impact",
          blocks: [
            {
              type: "p",
              text: "The redesign transformed Nemera's online presence into a digital platform that better reflects the quality of its operations and the professionalism of its team.",
            },
            { type: "h4", text: "Key outcomes" },
            {
              type: "ul",
              items: [
                "A stronger and more modern corporate identity",
                "Improved information architecture for easier navigation",
                "Better visibility of services, certifications, and project experience",
                "A responsive experience across all major devices",
                "A scalable website capable of supporting future business growth",
              ],
            },
            {
              type: "p",
              text: "The website now functions as both a marketing platform and a credibility-building tool, helping prospective clients quickly understand Nemera's expertise and capabilities.",
            },
          ],
        },
        {
          id: "lessons-learned",
          label: "Lessons Learned",
          blocks: [
            {
              type: "p",
              text: "Designing for the engineering and energy sector reinforced that trust is built through both content and presentation.",
            },
            {
              type: "p",
              text: "Unlike consumer products, enterprise clients make decisions based on confidence, technical competence, and demonstrated experience. Every design decision — from information hierarchy to typography and imagery — contributes to that perception.",
            },
            {
              type: "p",
              text: "This project also highlighted the importance of simplifying complex business information without losing technical credibility. A well-designed corporate website doesn't just look professional; it makes expertise easier to understand and helps users reach informed decisions more quickly.",
            },
          ],
        },
        {
          id: "contributions",
          label: "My Contributions",
          blocks: [
            {
              type: "ul",
              items: [
                "Stakeholder Discovery",
                "UX Research",
                "Information Architecture",
                "User Journey Mapping",
                "Wireframing",
                "High-Fidelity UI Design",
                "Responsive Web Design",
                "Design System",
                "Interactive Prototyping",
                "Developer Handoff",
                "Cross-functional Collaboration",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    num: "04",
    slug: "quiklearn",
    category: "Design",
    role: "Product Design",
    title: "QuikLearn",
    tagline: "A learning platform connecting tutors, students and parents in one intuitive experience.",
    description:
      "The QuikLearn project delivered a user-centric learning platform that connects tutors, students, and parents, enabling parents to manage learning, tutors to deliver structured lessons, and students to engage through intuitive, age-appropriate experiences.",
    stack: [{ name: "Figma" }, { name: "Jira" }],
    image: "/assets/work/quiklearn.png",
    imageDimensions: { width: 1728, height: 970 },
    live: "https://quiklearn.co.uk/",
    github: "https://github.com/Olas-23",
  },
  {
    num: "05",
    slug: "backyard-website",
    category: "Design",
    role: "Product Design",
    title: "Backyard Website",
    tagline: "A clean corporate website for a technology consulting company.",
    description: "A simple corporate website for a consulting company.",
    stack: [{ name: "Figma" }, { name: "Jira" }],
    image: "/assets/work/bkyd.png",
    imageDimensions: { width: 2160, height: 1214 },
    live: "https://backyardtech.co.uk/",
    github: "https://github.com/Olas-23",
  },
];
