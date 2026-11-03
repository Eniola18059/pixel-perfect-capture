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

export const studioStats: readonly { value: number; suffix: string; label: string }[] = [
  { value: liveProjects.length, suffix: "", label: "Live client launches" },
  { value: 2, suffix: "", label: "Countries served" },
  { value: 3, suffix: "", label: "Core disciplines" },
  { value: 15, suffix: "+", label: "Technologies in our stack" },
];

export const testimonials: readonly { quote: string; name: string; role: string; company: string }[] = [
  {
    quote: "Noveltiq rebuilt our storefront end to end. Checkout went from four confusing steps to one clean flow, and we started receiving orders from customers we'd never reached before.",
    name: "Amara Okafor",
    role: "Founder",
    company: "Lagos-based fashion label",
  },
  {
    quote: "They took a workflow we were running in spreadsheets and turned it into a tool our whole team actually enjoys using. Clear communication from the first call to launch day.",
    name: "Daniel Whitmore",
    role: "Operations Lead",
    company: "UK logistics firm",
  },
  {
    quote: "What stood out was the honesty. We were told exactly what we needed — and just as importantly, what we didn't. The site launched on time and it still feels fast a year later.",
    name: "Priya Raman",
    role: "Managing Director",
    company: "Consulting agency",
  },
];

export const navLinks = [
  ["Services", "/services"], ["Pricing", "/pricing"], ["Training", "/training"], ["Work", "/work"], ["About", "/about"],
] as const;

export const socialLinks = [
  ["Instagram", "https://instagram.com/noveltiq_"], ["X", "https://x.com/noveltiq_"], ["TikTok", "https://tiktok.com/@noveltiq_"], ["LinkedIn", "https://linkedin.com/company/noveltiq_"], ["Facebook", "https://facebook.com/noveltiq_"],
] as const;