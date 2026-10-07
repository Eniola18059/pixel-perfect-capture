import { useEffect, useRef, useState } from "react";
import { Braces, Cloud, Code2, Database, Figma, Globe2, Layers, Pause, Play, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import studioImage from "@/assets/noveltiq-studio.jpg";
import heroVideo from "@/assets/noveltiq-hero.mp4";

export function CinematicMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -32px 0px" });
    const elements = document.querySelectorAll("main > section:not(:first-of-type) > .shell, main article, main .project-reveal, main blockquote");
    elements.forEach((element) => { element.classList.add("cinema-reveal"); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach((element) => element.classList.remove("cinema-reveal", "is-visible")); };
  }, []);
  return null;
}

export function CinematicBackdrop() {
  const video = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
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
    <div className="cinema-drift absolute inset-0"><video ref={video} autoPlay muted loop playsInline poster={studioImage} aria-hidden="true" className="absolute inset-0 size-full object-cover object-center md:object-right"><source src={heroVideo} type="video/mp4" /></video></div>
    <div className="cinema-shutter pointer-events-none absolute inset-0" aria-hidden="true" />
    <Button type="button" size="icon" variant="outline" onClick={toggle} aria-label={paused ? "Play background film" : "Pause background film"} title={paused ? "Play background film" : "Pause background film"} className="absolute bottom-24 right-6 z-20 size-9 rounded-full bg-background/60 backdrop-blur-md md:right-10">{paused ? <Play className="size-3.5" /> : <Pause className="size-3.5" />}</Button>
  </>;
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
