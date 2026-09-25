import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Cloud, Globe2, Layers3, MoveUpRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs, projects, services } from "@/lib/noveltiq";
import workspaceImage from "@/assets/noveltiq-workspace.jpg";

export function pageMeta(title: string, description: string) {
  return { meta: [
    { title: `${title} — Noveltiq` }, { name: "description", content: description },
    { property: "og:title", content: `${title} — Noveltiq` }, { property: "og:description", content: description },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] };
}

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow mb-4">{children}</p>; }

export function PageIntro({ label, title, copy }: { label: string; title: ReactNode; copy: string }) {
  return <div className="shell pb-16 pt-20 md:pb-20 md:pt-28"><Eyebrow>{label}</Eyebrow><h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-normal text-foreground sm:text-5xl md:text-6xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{copy}</p></div>;
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hi Noveltiq, my name is ${name}. I'm interested in ${projectType}. My budget range is ${budget}.`;
    window.open(`https://wa.me/2349066420706?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };
  return <section id="contact" className="scroll-mt-24 border-t border-border bg-card/40 py-20 md:py-28"><div className="shell grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-24"><div><Eyebrow>Have a project in mind?</Eyebrow><h2 className="max-w-xl text-4xl font-semibold leading-tight text-foreground md:text-5xl">Let’s make something that matters.</h2><p className="mt-5 max-w-lg text-muted-foreground">Tell us where you want to go. We’ll help you find the right way to build it.</p><p className="mt-8 flex items-center gap-2 font-mono text-xs text-primary"><span className="size-1.5 rounded-full bg-primary" />We reply within a day</p></div><form onSubmit={submit} className="grid gap-4"><label className="grid gap-2 text-sm text-muted-foreground">Your name<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="h-12 border border-input bg-background px-4 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" /></label><label className="grid gap-2 text-sm text-muted-foreground">What do you need?<select required value={projectType} onChange={(e) => setProjectType(e.target.value)} className="h-12 border border-input bg-background px-4 text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"><option value="" disabled>Select a project type</option><option>Website or storefront</option><option>Custom software</option><option>Cloud, AI or automation</option><option>Training or mentorship</option><option>Something else</option></select></label><label className="grid gap-2 text-sm text-muted-foreground">Budget range<select required value={budget} onChange={(e) => setBudget(e.target.value)} className="h-12 border border-input bg-background px-4 text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"><option value="" disabled>Select a range</option><option>Under $500</option><option>$500–$2,000</option><option>$2,000–$5,000</option><option>$5,000+</option><option>Still figuring it out</option></select></label><Button type="submit" className="mt-2 h-12 justify-between rounded-sm px-5">Start a conversation <ArrowUpRight /></Button><a href="mailto:noveltiqhq@gmail.com?subject=Project%20enquiry" className="text-center text-sm text-muted-foreground hover:text-foreground">Email us instead ↗</a></form></div></section>;
}

export function ServiceSummary() {
  const icons = [Globe2, Code2, Cloud];
  return <div className="grid gap-px border border-border bg-border md:grid-cols-3">{services.map((service, index) => { const Icon = icons[index]; return <article key={service.number} className="group bg-background p-7 transition-colors hover:bg-card md:p-8"><div className="flex items-center justify-between"><Icon className="size-5 text-primary" /><span className="font-mono text-xs text-muted-foreground">{service.number}</span></div><h3 className="mt-9 text-xl font-semibold text-foreground">{service.name}<span className="ml-2 text-sm font-normal text-muted-foreground">/ {service.subtitle}</span></h3><p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">{service.description}</p><ul className="mt-6 space-y-2 border-t border-border pt-5">{service.items.slice(0, 4).map(([title]) => <li key={title} className="text-sm text-muted-foreground">{title}</li>)}</ul></article>; })}</div>;
}

export function ServiceDetailGroups() {
  return <div className="shell space-y-20 pb-24">{services.map((service) => <section key={service.number} className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"><div className="lg:sticky lg:top-28 lg:self-start"><Eyebrow>{service.number} — {service.name}</Eyebrow><h2 className="text-3xl font-semibold text-foreground">{service.subtitle}</h2><p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">{service.description}</p></div><div className="grid gap-0 border-t border-border sm:grid-cols-2">{service.items.map(([title, description], index) => <article key={title} className="border-b border-border py-6 sm:px-5 sm:even:border-l sm:even:border-l-border"><p className="font-mono text-xs text-muted-foreground">{service.number}.{String(index + 1).padStart(2, "0")}</p><h3 className="mt-3 font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></article>)}</div></section>)}</div>;
}

export function FAQ({ questions = faqs }: { questions?: readonly (readonly [string, string])[] }) {
  return <section className="border-t border-border py-20 md:py-24"><div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><Eyebrow>Good to know</Eyebrow><h2 className="text-3xl font-semibold text-foreground">A few things people ask.</h2><p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">If we haven’t covered your question, get in touch. We’re happy to talk it through.</p></div><Accordion type="single" collapsible className="w-full">{questions.map(([question, answer], i) => <AccordionItem key={question} value={`item-${i}`} className="border-border"><AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground hover:no-underline">{question}</AccordionTrigger><AccordionContent className="max-w-2xl pb-5 text-sm leading-6 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

export function ProjectGrid() {
  return <div className="shell grid gap-5 pb-24 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, i) => <Link key={project.slug} to="/work/$slug" params={{ slug: project.slug }} className="group border border-border bg-card/50 transition-colors hover:border-primary/50"><div className="relative aspect-[1.42] overflow-hidden border-b border-border bg-background"><img src={workspaceImage} alt="Placeholder product interface for case study" width={1440} height={960} loading="lazy" className="size-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-[1.035]" /><span className="absolute left-4 top-4 border border-border bg-background/90 px-2 py-1 font-mono text-[10px] text-primary">PLACEHOLDER {String(i + 1).padStart(2, "0")}</span></div><div className="p-5"><div className="flex items-center justify-between gap-4"><h2 className="font-semibold text-foreground">{project.name}</h2><MoveUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" /></div><p className="mt-2 text-sm leading-6 text-muted-foreground">{project.text}</p><div className="mt-5 flex gap-2">{project.tags.map((tag) => <span key={tag} className="border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">{tag}</span>)}</div></div></Link>)}</div>;
}

export function Steps() {
  const items = [["Discover", "We start by listening. Together we shape the problem, goals and what success looks like."], ["Design", "We map the experience and technical plan before committing to a direction."], ["Build", "The person who scoped the work builds it — with regular progress and direct feedback."], ["Launch & support", "We get it live, make sure you’re comfortable, and stay available as you grow."]];
  return <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{items.map(([title, text], i) => <article key={title} className="bg-background p-6"><p className="font-mono text-xs text-primary">0{i + 1} / PROCESS</p><h3 className="mt-8 font-semibold text-foreground">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>;
}

export function PlaceholderQuotes() {
  return <div className="grid gap-4 md:grid-cols-3">{[1, 2, 3].map((id) => <blockquote key={id} className="border border-border bg-card/40 p-6"><p className="font-mono text-[10px] text-primary">CLIENT TESTIMONIAL / PLACEHOLDER</p><p className="mt-7 text-sm leading-6 text-muted-foreground">“Client feedback will appear here once a project is ready to share.”</p><footer className="mt-6 border-t border-border pt-4 text-sm text-foreground">Client name <span className="block pt-1 text-xs text-muted-foreground">Company name</span></footer></blockquote>)}</div>;
}

export function BuildLog({ compact = false }: { compact?: boolean }) {
  const entries = [["2026.03", "A more intentional way to build", "A note on why small teams and clear decisions can move good work forward."], ["2026.01", "Shipping the useful first version", "A reminder that a thoughtful first release beats a perfect product that never arrives."], ["2025.11", "Making room for the work", "How clearer scopes create better space for craft and collaboration."], ["2025.09", "Building Noveltiq", "A small independent studio for websites, software and the systems behind them."]];
  return <div className="divide-y divide-border border-y border-border">{entries.slice(0, compact ? 3 : 4).map(([date, title, copy]) => <article key={date} className="grid gap-3 py-6 sm:grid-cols-[130px_1fr]"><p className="font-mono text-xs text-muted-foreground">{date} <span className="text-primary">●</span></p><div><h3 className="font-medium text-foreground">{title} <span className="ml-1 font-mono text-[10px] text-primary">PLACEHOLDER</span></h3><p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{copy}</p></div></article>)}</div>;
}

export function SectionTitle({ label, title, action }: { label: string; title: string; action?: ReactNode }) {
  return <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><Eyebrow>{label}</Eyebrow><h2 className="text-3xl font-semibold text-foreground md:text-4xl">{title}</h2></div>{action}</div>;
}

export function DecorativeTerminal() {
  return <div className="line-grid relative flex min-h-64 items-center justify-center overflow-hidden border-y border-border py-14"><div className="relative w-full max-w-xl border border-border bg-background/95 p-5 shadow-2xl"><div className="mb-5 flex items-center gap-2 border-b border-border pb-4"><Terminal className="size-4 text-primary"/><span className="font-mono text-xs text-muted-foreground">build.log — project health</span><span className="ml-auto size-2 rounded-full bg-primary" /></div><div className="space-y-3 font-mono text-xs"><p className="text-muted-foreground"><span className="text-primary">✓</span> clear scope, agreed together</p><p className="text-muted-foreground"><span className="text-primary">✓</span> one team, start to finish</p><p className="text-muted-foreground"><span className="text-primary">✓</span> built for what's next</p><p className="pt-2 text-primary">all systems thoughtfully considered <Check className="ml-1 inline size-3" /></p></div><ChevronDown className="absolute bottom-5 right-5 size-4 text-muted-foreground" /></div></div>;
}