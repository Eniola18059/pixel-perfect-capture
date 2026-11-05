import commerceStudioImage from "@/assets/commerce-studio.jpg";
import fieldnotesImage from "@/assets/fieldnotes.jpg";
import northstarImage from "@/assets/northstar.jpg";
import workbenchImage from "@/assets/workbench.jpg";
import studioBookingImage from "@/assets/studio-booking.jpg";
import goodgoodsImage from "@/assets/goodgoods.jpg";
import serviceWebImage from "@/assets/service-web.jpg";
import serviceSoftwareImage from "@/assets/service-software.jpg";
import serviceCloudImage from "@/assets/service-cloud.jpg";
import trainingDeskImage from "@/assets/training-desk.jpg";
import willnetCover from "@/assets/live/willnet-cover.jpg";
import willnetDesktop from "@/assets/live/willnet-desktop.jpg";
import willnetMobile from "@/assets/live/willnet-mobile.jpg";
import eventbmcCover from "@/assets/live/eventbmc-cover.jpg";
import eventbmcDesktop from "@/assets/live/eventbmc-desktop.jpg";
import eventbmcMobile from "@/assets/live/eventbmc-mobile.jpg";
import seabluehillsCover from "@/assets/live/seabluehills-cover.jpg";
import seabluehillsDesktop from "@/assets/live/seabluehills-desktop.jpg";
import seabluehillsMobile from "@/assets/live/seabluehills-mobile.jpg";

export const trainingImage = trainingDeskImage;

export const services = [
  {
    number: "01",
    name: "Web",
    image: serviceWebImage,
    subtitle: "Sites & storefronts",
    description: "Fast, considered digital storefronts built to turn a first impression into a real conversation.",
    items: [
      ["Business Websites", "Clear, considered websites that give your business a credible home online."],
      ["E-commerce & Ordering", "Product storefronts and WhatsApp ordering that make buying straightforward."],
      ["WordPress Development", "Flexible WordPress builds made easy to manage and ready to grow."],
      ["Landing & Campaign Pages", "Focused pages for launches, campaigns and ideas that need to move."],
      ["Payment Integration", "Paystack, Flutterwave or Stripe checkout connected to your customer journey."],
    ],
  },
  {
    number: "02",
    name: "Software",
    image: serviceSoftwareImage,
    subtitle: "Applications & systems",
    description: "Purpose-built software that makes complicated work simpler and gives good ideas room to scale.",
    items: [
      ["Custom Web Applications", "Useful, intuitive applications designed around the way your business actually works."],
      ["Backend & API Development", "Secure, dependable services and integrations that connect your products."],
      ["SaaS Product Development", "From a first validated MVP to the foundations of a product built to grow."],
      ["Technical Consulting", "Clear technical guidance to help you choose the right next step with confidence."],
    ],
  },
  {
    number: "03",
    name: "Cloud",
    image: serviceCloudImage,
    subtitle: "Infrastructure & scale",
    description: "The behind-the-scenes engineering that makes digital products more capable, reliable and resilient.",
    items: [
      ["Cloud & DevOps", "Thoughtful infrastructure, deployment and DevOps that reduce friction as you grow."],
      ["Mobile Applications", "Useful mobile experiences designed to bring your service into people's hands."],
      ["AI & Automation", "Practical automation that frees your team from repetitive work."],
      ["Web Scraping & Data", "Responsible data extraction that turns available information into something useful."],
      ["Maintenance & Support", "Steady updates, fixes and technical help after launch day."],
    ],
  },
];

export const faqs: readonly (readonly [string, string])[] = [
  ["How long does a project take?", "A focused landing page can take a couple of weeks; larger websites and software take longer. After we understand the scope, we’ll share a realistic timeline before work begins."],
  ["Can you work with clients anywhere?", "Yes. We’re remote-first and work with businesses worldwide. Quotes can be discussed in USD, GBP or NGN, with the scope and milestones agreed clearly up front."],
  ["What do you need to get started?", "A short conversation about your goals, audience, timing and any references you like is enough. We’ll help shape the brief from there."],
  ["What happens after launch?", "We can stay involved with maintenance, updates and ongoing support, or hand over the keys with a clear walkthrough. The right option depends on your needs."],
  ["Can you take on a custom request?", "Often, yes. Tell us what you’re trying to solve. If it fits our experience, we’ll map out a sensible approach; if it doesn’t, we’ll be upfront."],
];

export const pricing: readonly (readonly [string, string, number | null])[] = [
  ["Consultation", "A focused technical conversation and clear next steps.", 25],
  ["Landing Page", "One purposeful page built around a clear offer.", 120],
  ["Portfolio Website", "A polished home for your work and point of view.", 90],
  ["Business Website", "A complete, considered presence for your business.", 220],
  ["Blog / Content Site", "A flexible publishing home for your ideas.", 150],
  ["WordPress Website", "A tailored WordPress build you can manage yourself.", 250],
  ["Shopify Store Setup", "A ready-to-sell store configured for your products.", 280],
  ["E-commerce / Ordering", "An online storefront with a considered ordering flow.", 550],
  ["Booking & Appointments", "A streamlined way to take bookings online.", 300],
  ["Payment Integration", "A secure, tested payment flow for your site.", 80],
  ["LMS / Course Platform", "A structured online home for courses and learners.", 650],
  ["Dashboard & Admin Panel", "A useful operational view of your business.", 400],
  ["Web Scraping & Data", "An automated way to gather the data you need.", 150],
  ["Custom Web Application", "A tailored application for your specific workflow.", null],
  ["Backend & API Development", "Dependable services and integrations behind your product.", null],
  ["SaaS MVP Build", "A focused first release to validate your product idea.", null],
  ["Maintenance & Care Plan", "Ongoing attention to keep your site in good shape.", 35],
];

export const training: readonly (readonly [string, string, string, string])[] = [
  ["Coding Fundamentals", "A practical introduction to programming concepts, tools and how to build your first small projects.", "$60", "Move from curious beginner to confidently understanding the fundamentals."],
  ["1:1 Mentorship", "Regular sessions shaped around your goals, current projects and next steps as a developer.", "$90 / month", "A steady sounding board for your learning and the work you want to do."],
  ["Team Onboarding", "A hands-on session to help your team get up to speed with a codebase, tools or technical workflow.", "$40", "Get everyone aligned and moving with shared context."],
  ["Custom Curriculum", "A learning plan designed around your team, timeline and the skills you want to build.", "Custom quote", "A practical path with content that fits your real work."],
];

export const estimateBaseNames = ["Landing Page", "Business Website", "E-commerce / Ordering", "Custom Web Application"] as const;
export const estimateAddOnNames = ["Payment Integration", "Booking & Appointments", "Web Scraping & Data"] as const;

export const industries = [
  {
    slug: "events",
    name: "Events & conferences",
    title: "A digital front door for your next event.",
    summary: "Give attendees, speakers and sponsors one clear place to understand the event and take their next step.",
    image: eventbmcCover,
    projectSlug: "bmc-2026",
    audience: "Conferences, summits and event teams",
    needs: ["An event story and programme visitors can scan quickly", "Clear paths for registration, speakers and sponsors", "A mobile-first experience designed for sharing"],
  },
  {
    slug: "engineering",
    name: "Engineering & industry",
    title: "Make complex capability easy to trust.",
    summary: "Present your services, process and expertise with the clarity serious buyers need to start a conversation.",
    image: seabluehillsCover,
    projectSlug: "sea-blue-hills",
    audience: "Engineering, procurement and industrial businesses",
    needs: ["A clear picture of what your team does", "Service and project information that is easy to navigate", "A credible route from first visit to direct enquiry"],
  },
  {
    slug: "leadership-communities",
    name: "Leadership communities",
    title: "Help the right people find their place.",
    summary: "Bring your mission, programmes and membership journey together in a welcoming, useful online home.",
    image: willnetCover,
    projectSlug: "willnet",
    audience: "Membership networks, leadership programmes and communities",
    needs: ["A mission and audience story that feels human", "Clear paths into programmes and membership", "A thoughtful experience across phones and desktops"],
  },
] as const;

export const studioArticles = [
  {
    slug: "a-clear-scope-builds-better-software",
    series: "Studio note / 01",
    title: "A clear scope is a kindness to the work.",
    summary: "Good software starts before the first screen is designed. It starts by deciding what the work is for.",
    sections: [
      ["Start with the decision, not the feature list", "Teams often arrive with a long list of features. Before estimating that list, agree on the decision the product should help someone make, the task it should make easier, or the change the business needs to see. That gives every later choice a useful test."],
      ["Separate essentials from possibilities", "A strong first scope distinguishes what must be there for the experience to work from what might be valuable later. This is not about doing less carelessly. It is about protecting the core journey from ideas that have not earned their place yet."],
      ["Make boundaries visible", "Pages, integrations, content, approvals and handover all take time. Naming them early helps everyone understand what is included, where a decision is still open, and what could change the timeline or investment."],
      ["Keep the scope useful", "A scope should guide the work without pretending nothing will change. Regular check-ins let the team adjust when new information appears, while a clear record keeps those changes deliberate rather than accidental."],
    ],
  },
  {
    slug: "the-useful-first-release",
    series: "Studio note / 02",
    title: "Build the first release around a real task.",
    summary: "A useful first release gives a real person a complete path through one important job—not a collection of half-finished screens.",
    sections: [
      ["Choose one meaningful journey", "The best starting point is usually a task with a clear beginning and end: understand an offer and enquire, find an event and register, or review information and make a decision. A complete journey reveals more than a broad menu of disconnected features."],
      ["Design the edges as well as the centre", "Empty states, errors, small screens and handovers are part of the product. Thinking through them early makes the first release feel dependable instead of like a demo that only works in ideal conditions."],
      ["Leave room for the next decision", "A first release should make learning possible. Keep the underlying structure understandable, make the important actions visible, and agree what evidence will help decide what comes next."],
      ["Finish means ready to use", "Content, device checks, accessibility basics, deployment and a clear handover all belong to a release. The goal is not simply to merge the last change; it is to give people something they can confidently use."],
    ],
  },
  {
    slug: "a-website-is-part-of-the-service",
    series: "Studio note / 03",
    title: "Your website is part of the service you deliver.",
    summary: "Before a conversation begins, your site is already helping people decide what to expect from working with you.",
    sections: [
      ["Answer the visitor's first questions", "People want to know what you do, who it is for and what they can do next. Clear language and a sensible page structure are service decisions: they save visitors effort before anyone speaks to them."],
      ["Make proof easy to understand", "A project image is more useful when its context is clear. Explain the challenge, the work and the decisions behind it, and distinguish published client work from concepts. Specific, honest context earns more confidence than an inflated claim."],
      ["Treat mobile as the main experience too", "A phone visit should not feel like a smaller version that lost its content. Keep headings readable, actions easy to reach and important information in a natural order."],
      ["Keep the next step uncomplicated", "When someone is ready, make the route obvious: a short enquiry, a direct email or a conversation. A clear next step closes the gap between a good first impression and a useful discussion."],
    ],
  },
] as const;

export type LivePreview = { domain: string; desktop: string; mobile: string };
export type Project = {
  slug: string; name: string; type: string; text: string; tags: readonly string[]; image: string;
  live?: LivePreview; client?: string; location?: string; notes?: readonly (readonly [string, string])[];
};

export const projects: readonly Project[] = [
  {
    slug: "willnet", name: "WILLNET", type: "Community website", client: "Women in Learning and Leadership Network", location: "Canada · Global",
    text: "A warm, editorial home for a global community helping women grow in leadership, careers and business.",
    tags: ["Website", "Community"], image: willnetCover,
    live: { domain: "willnet.ca", desktop: willnetDesktop, mobile: willnetMobile },
    notes: [
      ["01 / The brief", "Give a growing leadership community a home that feels personal, credible and welcoming to women at every stage — from emerging leaders to established founders."],
      ["02 / What we built", "A multi-page website with clear starting points for each audience, interactive “told vs. shown” cards, programme and membership pages, and a calm editorial design that lets the stories lead."],
      ["03 / Experience", "Soft motion, considered typography and a mobile-first layout so joining the community feels as easy on a phone as on a laptop."],
    ],
  },
  {
    slug: "bmc-2026", name: "BMC 2026", type: "Event platform", client: "Billionaire Mindset Conference", location: "Lagos, Nigeria",
    text: "The launch site for Africa’s largest business storytelling conference — programme, speakers, sponsors and registration in one place.",
    tags: ["Event", "Web"], image: eventbmcCover,
    live: { domain: "eventbmc.com.ng", desktop: eventbmcDesktop, mobile: eventbmcMobile },
    notes: [
      ["01 / The brief", "Turn a high-energy conference into a site that sells the room: who’s speaking, what attendees will learn and why sponsors should be part of it."],
      ["02 / What we built", "A bold event website with a live countdown, add-to-calendar links, speaker highlights, a pitch-fund story, sponsor pathways and a clear registration flow."],
      ["03 / Experience", "Fast, punchy and built for mobile sharing, so every visit has an obvious next step — register, sponsor or see the programme."],
    ],
  },
  {
    slug: "sea-blue-hills", name: "Sea-Blue Hills", type: "Corporate website", client: "Sea-Blue Hills Multi-Concept", location: "Nigeria",
    text: "A confident corporate presence for an integrated engineering, procurement and supply chain partner.",
    tags: ["Website", "Corporate"], image: seabluehillsCover,
    live: { domain: "seabluehills.com.ng", desktop: seabluehillsDesktop, mobile: seabluehillsMobile },
    notes: [
      ["01 / The brief", "Present a multi-discipline engineering firm with the authority of a much larger company, and make it simple for serious clients to start a conversation."],
      ["02 / What we built", "A structured corporate site covering core service areas, a step-by-step delivery process, projects in the pipeline, FAQs and direct WhatsApp, phone and email contact."],
      ["03 / Experience", "A dark, industrial design language with strong headlines and quiet motion that keeps the focus on capability and trust."],
    ],
  },
  { slug: "commerce-studio", name: "Commerce Studio", type: "E-commerce", text: "A placeholder storefront concept with a clean, direct path from discovery to checkout.", tags: ["E-commerce", "Web"], image: commerceStudioImage },
  { slug: "fieldnotes", name: "Fieldnotes", type: "Website", text: "A placeholder editorial website built to make publishing and reading feel effortless.", tags: ["Website", "Content"], image: fieldnotesImage },
  { slug: "northstar", name: "Northstar", type: "SaaS", text: "A placeholder SaaS product concept for bringing a team's everyday work into focus.", tags: ["SaaS", "Product"], image: northstarImage },
  { slug: "workbench", name: "Workbench", type: "Web App", text: "A placeholder internal tool concept turning a scattered workflow into one clear view.", tags: ["Web App", "Dashboard"], image: workbenchImage },
  { slug: "studio-booking", name: "Studio Booking", type: "Web App", text: "A placeholder booking experience designed to make finding a time feel simple.", tags: ["Web App", "Booking"], image: studioBookingImage },
  { slug: "goodgoods", name: "Goodgoods", type: "E-commerce", text: "A placeholder product launch concept for a modern independent goods brand.", tags: ["E-commerce", "Brand"], image: goodgoodsImage },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
export const liveProjects = projects.filter((project) => project.live);

export const studioProof: readonly { label: string; detail: string }[] = [
  { label: "Independent studio", detail: "Remote-first since 2023" },
  { label: "Client work", detail: "Canada · Nigeria · worldwide" },
  { label: "From strategy to launch", detail: "One accountable team" },
  { label: "Built for the work", detail: "Web · software · cloud" },
];

export const navLinks = [
  ["Services", "/services"], ["Pricing", "/pricing"], ["Training", "/training"], ["Work", "/work"], ["About", "/about"],
] as const;

export const socialLinks = [
  ["Instagram", "https://instagram.com/noveltiq_"], ["X", "https://x.com/noveltiq_"], ["TikTok", "https://tiktok.com/@noveltiq_"], ["LinkedIn", "https://linkedin.com/company/noveltiq_"], ["Facebook", "https://facebook.com/noveltiq_"],
] as const;