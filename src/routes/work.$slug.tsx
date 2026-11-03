import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ContactSection, Eyebrow, pageMeta } from "@/components/marketing";
import { LivePreview } from "@/components/live-preview";
import { projectBySlug, projects } from "@/lib/noveltiq";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => { const project = projectBySlug(params.slug); if (!project) throw notFound(); return project; },
  head: ({ loaderData }) => pageMeta(
    loaderData?.name ?? "Selected project",
    loaderData?.live
      ? `${loaderData.text} Preview the ${loaderData.name} website built by Noveltiq.`
      : `${loaderData?.text ?? "Explore a selected Noveltiq case study."} Placeholder case study, ready for real project details.`,
  ),
  component: CaseStudyPage,
});

const conceptNotes: readonly (readonly [string, string])[] = [
  ["01 / The problem", "Placeholder: the context, user need and challenge this project was designed to address."],
  ["02 / What we built", "Placeholder: an overview of the product, its key experiences and the decisions made along the way."],
  ["03 / Technology", "Placeholder stack: React · FastAPI · PostgreSQL"],
  ["04 / The outcome", "Placeholder: what changed for users or the business and how success was measured."],
];

function CaseStudyPage() {
  const project = Route.useLoaderData();
  const notes = project.notes ?? conceptNotes;
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  return <main>
    <section className="border-b border-border">
      <div className="shell py-12 md:py-16">
        <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="mr-2 inline size-4" />All work</Link>
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl fade-up">
            <Eyebrow>{project.live ? "CASE STUDY / LIVE PROJECT" : "CASE STUDY / CONCEPT"}</Eyebrow>
            <h1 className="text-4xl font-semibold text-foreground sm:text-5xl md:text-6xl">{project.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-7 text-muted-foreground">{project.text}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-border px-2 py-1 font-mono text-xs text-muted-foreground">{tag}</span>)}</div>
          </div>
          {project.live && <dl className="grid grid-cols-2 gap-x-10 gap-y-4 border-t border-border pt-5 font-mono text-xs lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            {[["Client", project.client], ["Type", project.type], ["Region", project.location], ["Status", "Live"]].map(([label, value]) => <div key={label}><dt className="text-[10px] uppercase text-muted-foreground">{label}</dt><dd className="mt-1 text-foreground">{value}</dd></div>)}
          </dl>}
        </div>
        <div className="mt-12">
          {project.live
            ? <LivePreview project={project} />
            : <div className="aspect-[2/1] overflow-hidden border border-border bg-card"><img src={project.image} alt={`${project.name} product interface concept`} width={1536} height={1024} className="size-full object-cover" /></div>}
        </div>
      </div>
    </section>
    <section className="shell grid gap-10 py-16 md:grid-cols-[180px_1fr] md:py-24">
      <div><Eyebrow>Project notes</Eyebrow>{!project.live && <p className="font-mono text-xs text-muted-foreground">PLACEHOLDER COPY</p>}</div>
      <div className="space-y-12">{notes.map(([heading, body]) => <article key={heading} className="border-t border-border pt-5"><h2 className="text-xl font-semibold text-foreground">{heading}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{body}</p></article>)}</div>
    </section>
    {next && <section className="border-t border-border"><Link to="/work/$slug" params={{ slug: next.slug }} className="shell group flex items-center justify-between gap-6 py-10"><div><p className="eyebrow mb-2">Next project</p><p className="text-2xl font-semibold text-foreground transition-colors group-hover:text-primary md:text-3xl">{next.name}</p></div><ArrowRight className="size-6 text-primary transition-transform group-hover:translate-x-1" /></Link></section>}
    <ContactSection />
  </main>;
}
