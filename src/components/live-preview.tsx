import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Lock, Monitor, Pause, Play, Smartphone } from "lucide-react";
import type { Project } from "@/lib/noveltiq";

type Device = "desktop" | "mobile";

/**
 * An in-site preview of a launched project. It shows a scrollable snapshot of the
 * live site inside a browser frame and deliberately never links out to it.
 */
export function LivePreview({ project }: { project: Project }) {
  const live = project.live;
  const viewport = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const [device, setDevice] = useState<Device>("desktop");
  const [touring, setTouring] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoStarted = useRef(false);

  const stopTour = () => { cancelAnimationFrame(frame.current); frame.current = 0; setTouring(false); };

  const startTour = () => {
    const element = viewport.current;
    if (!element) return;
    if (element.scrollTop >= element.scrollHeight - element.clientHeight - 2) element.scrollTop = 0;
    setTouring(true);
    let last = performance.now();
    const speed = device === "desktop" ? 110 : 140; // px per second
    const step = (now: number) => {
      const node = viewport.current;
      if (!node) return;
      node.scrollTop += ((now - last) / 1000) * speed;
      last = now;
      if (node.scrollTop >= node.scrollHeight - node.clientHeight - 1) { stopTour(); return; }
      frame.current = requestAnimationFrame(step);
    };
    frame.current = requestAnimationFrame(step);
  };

  // Reset to the top whenever the device changes.
  useEffect(() => { stopTour(); if (viewport.current) viewport.current.scrollTop = 0; setProgress(0); }, [device]);

  // Start a gentle tour once the preview first comes into view.
  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !autoStarted.current && !reduce.matches) {
        autoStarted.current = true;
        window.setTimeout(startTour, 900);
        observer.disconnect();
      }
    }, { threshold: 0.6 });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!live) return null;

  const onScroll = () => {
    const element = viewport.current;
    if (!element) return;
    const max = element.scrollHeight - element.clientHeight;
    setProgress(max > 0 ? element.scrollTop / max : 0);
  };
  const blockMenu = (event: MouseEvent) => event.preventDefault();
  const image = device === "desktop" ? live.desktop : live.mobile;

  return <figure className="live-preview overflow-hidden border border-border bg-card shadow-2xl">
    <div className="flex items-center gap-3 border-b border-border bg-background/70 px-3 py-2.5 sm:px-4">
      <div className="hidden gap-1.5 sm:flex" aria-hidden="true"><span className="size-2.5 rounded-full bg-muted-foreground/40" /><span className="size-2.5 rounded-full bg-muted-foreground/30" /><span className="size-2.5 rounded-full bg-muted-foreground/20" /></div>
      <div className="flex min-w-0 flex-1 select-none items-center justify-center gap-2 rounded-sm border border-border bg-card px-3 py-1.5 font-mono text-[11px] text-muted-foreground" aria-label={`Preview of ${live.domain}`}>
        <Lock className="size-3 shrink-0 text-primary" /><span className="truncate">{live.domain}</span><span className="ml-1 hidden shrink-0 border-l border-border pl-2 text-[10px] uppercase text-primary sm:inline">Preview</span>
      </div>
      <div className="flex shrink-0 items-center gap-1" role="group" aria-label="Preview device">
        {([["desktop", Monitor, "Desktop view"], ["mobile", Smartphone, "Mobile view"]] as const).map(([value, Icon, label]) => <button key={value} type="button" onClick={() => setDevice(value)} aria-pressed={device === value} aria-label={label} title={label} className={`flex size-8 items-center justify-center rounded-sm border transition-colors ${device === value ? "border-primary/60 bg-accent text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}><Icon className="size-4" /></button>)}
        <button type="button" onClick={touring ? stopTour : startTour} aria-label={touring ? "Pause auto-scroll" : "Auto-scroll the preview"} title={touring ? "Pause auto-scroll" : "Auto-scroll"} className="ml-1 flex size-8 items-center justify-center rounded-sm border border-border text-muted-foreground transition-colors hover:text-foreground">{touring ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}</button>
      </div>
    </div>
    <div className={`relative ${device === "mobile" ? "flex justify-center bg-background/60 py-8" : ""}`}>
      <div className={device === "mobile" ? "live-phone overflow-hidden rounded-[2.2rem] border-[6px] border-border bg-background" : "w-full"}>
        <div ref={viewport} onScroll={onScroll} onWheel={stopTour} onPointerDown={stopTour} onTouchStart={stopTour} onKeyDown={stopTour} tabIndex={0} aria-label={`Scrollable preview of the ${project.name} website`} className={`preview-viewport overflow-y-auto overscroll-contain focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${device === "mobile" ? "h-[560px] w-[270px] sm:h-[600px] sm:w-[290px]" : "h-[min(70vh,680px)] w-full"}`}>
          <img key={image} src={image} alt={`${project.name} website, ${device} view`} draggable={false} onContextMenu={blockMenu} className="pointer-events-none block w-full select-none" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-border/60" aria-hidden="true"><div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${progress * 100}%` }} /></div>
    </div>
    <figcaption className="flex flex-wrap items-center justify-between gap-2 border-t border-border px-4 py-3 font-mono text-[10px] uppercase text-muted-foreground"><span><span className="signal-pulse mr-2 inline-block size-1.5 rounded-full bg-primary align-middle" />Live project · snapshot preview</span><span>Scroll inside the frame to explore</span></figcaption>
  </figure>;
}
