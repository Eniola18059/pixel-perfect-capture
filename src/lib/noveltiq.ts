import commerceStudioImage from "@/assets/commerce-studio.jpg";
import fieldnotesImage from "@/assets/fieldnotes.jpg";
import northstarImage from "@/assets/northstar.jpg";
import workbenchImage from "@/assets/workbench.jpg";
import studioBookingImage from "@/assets/studio-booking.jpg";
import goodgoodsImage from "@/assets/goodgoods.jpg";

export const services = [
  {
    number: "01",
    name: "Web",
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

export const projects = [
  { slug: "commerce-studio", name: "Commerce Studio", type: "E-commerce", text: "A placeholder storefront concept with a clean, direct path from discovery to checkout.", tags: ["E-commerce", "Web"], image: commerceStudioImage },
  { slug: "fieldnotes", name: "Fieldnotes", type: "Website", text: "A placeholder editorial website built to make publishing and reading feel effortless.", tags: ["Website", "Content"], image: fieldnotesImage },
  { slug: "northstar", name: "Northstar", type: "SaaS", text: "A placeholder SaaS product concept for bringing a team's everyday work into focus.", tags: ["SaaS", "Product"], image: northstarImage },
  { slug: "workbench", name: "Workbench", type: "Web App", text: "A placeholder internal tool concept turning a scattered workflow into one clear view.", tags: ["Web App", "Dashboard"], image: workbenchImage },
  { slug: "studio-booking", name: "Studio Booking", type: "Web App", text: "A placeholder booking experience designed to make finding a time feel simple.", tags: ["Web App", "Booking"], image: studioBookingImage },
  { slug: "goodgoods", name: "Goodgoods", type: "E-commerce", text: "A placeholder product launch concept for a modern independent goods brand.", tags: ["E-commerce", "Brand"], image: goodgoodsImage },
];

export const projectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const navLinks = [
  ["Services", "/services"], ["Pricing", "/pricing"], ["Training", "/training"], ["Work", "/work"], ["About", "/about"],
] as const;

export const socialLinks = [
  ["Instagram", "https://instagram.com/noveltiq_"], ["X", "https://x.com/noveltiq_"], ["TikTok", "https://tiktok.com/@noveltiq_"], ["LinkedIn", "https://linkedin.com/company/noveltiq_"], ["Facebook", "https://facebook.com/noveltiq_"],
] as const;