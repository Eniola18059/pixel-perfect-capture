import { useEffect, useState } from "react";

type Phase = "loading" | "leaving" | "done";

/**
 * Branded intro shown on each full page load. It is rendered on the server so it
 * covers the first paint, counts up while the page settles, then opens like a shutter.
 * A CSS failsafe hides it even if scripts never run.
 */
export function Preloader() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("is-preloading");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try { seen = sessionStorage.getItem("noveltiq-intro") === "1"; sessionStorage.setItem("noveltiq-intro", "1"); } catch { /* storage unavailable */ }
    const duration = reduce ? 150 : seen ? 650 : 1700;
    const start = performance.now();
    let frame = 0;
    let loaded = document.readyState === "complete";
    const onLoad = () => { loaded = true; };
    window.addEventListener("load", onLoad);
    const tick = (now: number) => {
      const elapsed = now - start;
      // Hold at 90% until the page has loaded, but never longer than 3.2s.
      const target = loaded || elapsed > 3200 ? 1 : 0.9;
      const progress = Math.min(elapsed / duration, target);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress >= 1) { setPhase("leaving"); return; }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("load", onLoad); root.classList.remove("is-preloading"); };
  }, []);

  useEffect(() => {
    if (phase !== "leaving") return;
    document.documentElement.classList.remove("is-preloading");
    const timer = window.setTimeout(() => setPhase("done"), 1000);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "done") return null;

  return <div className={`preloader ${phase === "leaving" ? "is-leaving" : ""}`} role="status" aria-live="polite" aria-label="Loading Noveltiq" aria-hidden={phase === "leaving" ? true : undefined}>
    <div className="preloader-panel preloader-panel-top" />
    <div className="preloader-panel preloader-panel-bottom" />
    <div className="preloader-content">
      <div className="flex items-center gap-3">
        <span className="preloader-mark flex size-11 items-center justify-center rounded-sm bg-primary font-mono text-xl font-bold text-primary-foreground">n.</span>
        <span className="preloader-word text-3xl font-semibold text-foreground">noveltiq</span>
      </div>
      <p className="preloader-tagline mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Software, built with intention.</p>
      <div className="mt-10 w-56 sm:w-72">
        <div className="h-px w-full overflow-hidden bg-border"><div className="h-full bg-primary" style={{ width: `${count}%` }} /></div>
        <div className="mt-3 flex justify-between font-mono text-[10px] text-muted-foreground"><span>build.init</span><span className="tabular-nums text-primary">{String(count).padStart(3, "0")}</span></div>
      </div>
    </div>
  </div>;
}
