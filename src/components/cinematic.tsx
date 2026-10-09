import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Braces, Cloud, Code2, Database, Figma, Globe2, Layers, Pause, Play, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/noveltiq";
import studioImage from "@/assets/noveltiq-studio.jpg";
import heroVideo from "@/assets/noveltiq-hero.mp4";
import heroWebm from "@/assets/noveltiq-hero.webm";

export function CinematicMotion() {
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });
    const elements = main.querySelectorAll("section:not(:first-of-type) > .shell, article, .project-reveal, blockquote");
    const images = main.querySelectorAll("article img, .project-reveal img");
    const sync = () => elements.forEach((element) => {
      if (preference.matches) { element.classList.remove("cinema-reveal"); observer.unobserve(element); }
      else { element.classList.add("cinema-reveal"); observer.observe(element); }
    });
    images.forEach((image) => image.classList.add("cinema-image"));
    sync(); preference.addEventListener("change", sync);
    let frame = 0;
    const hero = main.querySelector<HTMLElement>(".hero-film");
    const update = () => {
      frame = 0;
      if (!hero || preference.matches || main.classList.contains("motion-paused")) return;
      hero.style.setProperty("--camera-y", `${Math.min(Math.max(window.scrollY, 0), hero.offsetHeight) * 0.16}px`);
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      observer.disconnect(); cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll); preference.removeEventListener("change", sync);
      elements.forEach((element) => element.classList.remove("cinema-reveal", "is-visible"));
      images.forEach((image) => image.classList.remove("cinema-image"));
      hero?.style.removeProperty("--camera-y"); main.classList.remove("motion-paused");
    };
  }, []);
  return null;
}

export function CinematicBackdrop() {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => { document.querySelector("main")?.classList.toggle("motion-paused", paused); }, [paused]);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setPaused(preference.matches);
      if (preference.matches) video.current?.pause();
      else video.current?.play().catch(() => setPaused(true));
    };
    sync(); preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);
  const toggle = () => {
    const element = video.current;
    if (!element) return;
    if (element.paused) element.play().then(() => setPaused(false)).catch(() => setPaused(true));
    else { element.pause(); setPaused(true); }
  };
  return <>
    <div className="cinema-camera absolute inset-0"><div className="cinema-drift absolute inset-0"><video ref={video} muted loop playsInline poster={studioImage} aria-hidden="true" className="absolute inset-0 size-full object-cover object-center md:object-right"><source src={heroWebm} type="video/webm" /><source src={heroVideo} type="video/mp4" /></video></div></div>
    <div className="cinema-scan pointer-events-none absolute inset-0" aria-hidden="true" />
    <div className="cinema-shutter pointer-events-none absolute inset-0" aria-hidden="true" />
    <Button type="button" size="icon" variant="outline" onClick={toggle} aria-label={paused ? "Play background film" : "Pause background film"} title={paused ? "Resume website motion" : "Pause website motion"} className="absolute bottom-24 right-6 z-20 size-9 rounded-full bg-background/60 backdrop-blur-md md:right-10">{paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}</Button>
  </>;
}

export function CinematicProjectReel() {
  return <section className="project-filmstrip overflow-hidden border-b border-border py-8 md:py-12" aria-label="Noveltiq project concepts">
    <div className="shell mb-5 flex items-center justify-between gap-4"><p className="eyebrow">Noveltiq / In frame</p><Link to="/work" className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary">Selected work ↗</Link></div>
    <div className="project-film-track">
      {[0, 1].map((copy) => <div key={copy} className="project-film-copy" aria-hidden={copy === 1 ? true : undefined}>
        {projects.map((project, index) => <Link key={project.slug} to="/work/$slug" params={{ slug: project.slug }} tabIndex={copy === 1 ? -1 : undefined} className="project-film-frame group relative block overflow-hidden bg-card">
          <img src={project.image} alt={copy === 0 ? `${project.name} concept` : ""} width={1536} height={1024} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-background/95 to-transparent px-5 pb-4 pt-12"><span className="text-sm font-medium text-foreground">{project.name}</span><span className="font-mono text-[10px] text-primary">0{index + 1}</span></div>
        </Link>)}
      </div>)}
    </div>
  </section>;
}

const stack = [
  { name: "React", icon: Code2 }, { name: "TypeScript", icon: Braces },
  { name: "PHP", icon: Code2 }, { name: "Python", icon: Terminal },
  { name: "JavaScript", icon: Braces }, { name: "Laravel", icon: Layers },
  { name: "Next.js", icon: Globe2 }, { name: "Node.js", icon: Terminal },
  { name: "FastAPI", icon: Code2 }, { name: "PostgreSQL", icon: Database },
  { name: "WordPress", icon: Globe2 }, { name: "Tailwind CSS", icon: Layers },
  { name: "Docker", icon: Cloud }, { name: "Git", icon: Code2 }, { name: "Figma", icon: Figma },
];

export function TechnologyStack() {
  return <section className="stack-band overflow-hidden border-y border-border bg-card/25 py-10 md:py-14" aria-label="Technology stack">
    <div className="shell mb-8 flex flex-wrap items-end justify-between gap-3"><p className="eyebrow mb-0">Tools we reach for</p><p className="font-mono text-[10px] uppercase text-muted-foreground">Frontend / Backend / Infrastructure / Design</p></div>
    <div className="stack-window">
      {[stack.slice(0, 8), stack.slice(8)].map((row, rowIndex) => <div key={rowIndex} className={`stack-track ${rowIndex === 1 ? "stack-track-reverse" : ""}`}>
        {[0, 1].map((copy) => <div key={copy} className="stack-copy" aria-hidden={copy === 1 ? true : undefined}>{row.map(({ name, icon: Icon }) => <div key={name} className="stack-item flex items-center gap-3 text-foreground"><Icon className="size-5 shrink-0 text-primary" strokeWidth={1.5} /><span className="whitespace-nowrap text-xl font-medium md:text-2xl">{name}</span><span className="ml-6 text-sm text-muted-foreground" aria-hidden="true">/</span></div>)}</div>)}
      </div>)}
    </div>
  </section>;
}
