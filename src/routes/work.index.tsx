import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContactSection, Eyebrow, PageIntro, pageMeta, ProjectGrid } from "@/components/marketing";
import { projects } from "@/lib/noveltiq";

export const Route = createFileRoute("/work/")({ head: () => pageMeta("Selected work", "Live client websites by Noveltiq — WILLNET, BMC 2026 and Sea-Blue Hills — alongside studio concepts for software and digital products."), component: WorkPage });

const filters = [["All work", () => true], ["Live projects", (p: (typeof projects)[number]) => Boolean(p.live)], ["Concepts", (p: (typeof projects)[number]) => !p.live]] as const;

function WorkPage() {
  const [active, setActive] = useState(0);
  const items = projects.filter(filters[active]?.[1] ?? (() => true));
  return <main>
    <PageIntro label="Work / selected projects" title={<>Thoughtful work.<br />Built to be useful.</>} copy="Live websites we’ve launched for clients, plus studio concepts that show the range of what we build. Open any live project to preview it right here." />
    <div className="shell mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">{filters.map(([label], i) => <button key={label} type="button" onClick={() => setActive(i)} aria-pressed={i === active} className={`border px-3 py-1.5 font-mono text-[10px] uppercase transition-colors ${i === active ? "border-primary/50 bg-accent text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>{label}</button>)}</div>
    <ProjectGrid items={items} />
    <section className="border-t border-border py-14"><div className="shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><Eyebrow>Have something in mind?</Eyebrow><h2 className="text-2xl font-semibold text-foreground">Your work could be next.</h2></div><a href="/#contact" className="text-sm text-primary">Start a conversation <ArrowRight className="ml-1 inline size-4" /></a></div></section>
    <ContactSection />
  </main>;
}
