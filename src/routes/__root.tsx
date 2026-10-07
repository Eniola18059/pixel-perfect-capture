import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Menu } from "lucide-react";
import { navLinks } from "@/lib/noveltiq";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Noveltiq — Software, built with intention." },
      { name: "description", content: "Noveltiq builds websites, custom software and cloud systems for ambitious businesses worldwide." },
      { name: "author", content: "Noveltiq" },
      { property: "og:title", content: "Noveltiq — Software, built with intention." },
      { property: "og:description", content: "Websites, custom software and cloud systems, built with intention." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="shell flex h-[68px] items-center justify-between gap-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5 text-foreground" aria-label="Noveltiq home">
          <span className="flex size-7 items-center justify-center rounded-sm bg-primary font-mono text-sm font-bold text-primary-foreground">n.</span>
          <span className="text-[17px] font-semibold tracking-normal">noveltiq</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navLinks.map(([label, href]) => <Link key={href} to={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</Link>)}
        </nav>
        <Button asChild size="sm" className="hidden h-9 rounded-sm px-4 md:inline-flex"><a href="/#contact">Start a project <ArrowUpRight /></a></Button>
        <details className="group relative md:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center text-foreground" aria-label="Open navigation"><Menu size={21} /></summary>
          <nav className="absolute right-0 top-12 flex w-56 flex-col border border-border bg-card p-3 shadow-xl" aria-label="Mobile navigation">
            {navLinks.map(([label, href]) => <Link key={href} to={href} className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground">{label}</Link>)}
            <a href="/#contact" className="mt-2 border-t border-border px-3 py-3 text-sm text-primary">Start a project <ArrowUpRight className="ml-1 inline size-4" /></a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="shell grid gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div><Link to="/" className="flex items-center gap-2.5 font-semibold"><span className="flex size-7 items-center justify-center rounded-sm bg-primary font-mono text-sm font-bold text-primary-foreground">n.</span>noveltiq</Link><p className="mt-4 text-sm text-muted-foreground">Software, built with intention.</p><p className="mt-2 font-mono text-xs text-muted-foreground">Remote-first · Since 2023</p></div>
        <div><p className="eyebrow mb-4">Explore</p><div className="flex flex-col gap-2.5 text-sm text-muted-foreground">{[["Home", "/"], ...navLinks.slice(0, 3)].map(([label, href]) => <Link key={href} to={href} className="w-fit hover:text-foreground">{label}</Link>)}</div></div>
        <div><p className="eyebrow mb-4">Company</p><div className="flex flex-col gap-2.5 text-sm text-muted-foreground"><Link to="/work" className="w-fit hover:text-foreground">Work</Link><Link to="/about" className="w-fit hover:text-foreground">About</Link><a href="/#contact" className="w-fit hover:text-foreground">Contact</a><Link to="/log" className="w-fit hover:text-foreground">Build log</Link></div></div>
        <div><p className="eyebrow mb-4">Say hello</p><a className="block text-sm text-muted-foreground hover:text-foreground" href="https://wa.me/2349066420706" target="_blank" rel="noreferrer">WhatsApp ↗</a><a className="mt-2 block text-sm text-muted-foreground hover:text-foreground" href="mailto:noveltiqhq@gmail.com">noveltiqhq@gmail.com</a><div className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-xs text-muted-foreground"><a href="https://instagram.com/noveltiq_" target="_blank" rel="noreferrer">Instagram</a><a href="https://x.com/noveltiq_" target="_blank" rel="noreferrer">X</a><a href="https://tiktok.com/@noveltiq_" target="_blank" rel="noreferrer">TikTok</a><a href="https://linkedin.com/company/noveltiq_" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://facebook.com/noveltiq_" target="_blank" rel="noreferrer">Facebook</a></div></div>
      </div>
      <div className="shell flex flex-col gap-3 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Noveltiq. All rights reserved.</span><div className="flex gap-5"><Link to="/privacy">Privacy</Link><Link to="/terms">Terms</Link></div><span className="font-mono">build.log / 001</span></div>
    </footer>
  );
}
