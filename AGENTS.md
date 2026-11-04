<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep project imagery attached to each project record in `src/lib/noveltiq.ts` so every project view stays visually consistent.

- Keep homepage cinematic behavior and technology presentation in `src/components/cinematic.tsx`; use CSS motion with reduced-motion support and a coordinated film/motion pause control, and keep scroll camera updates requestAnimationFrame-throttled so movement remains lightweight and accessible.

- Live client projects preview in-site via snapshot images in `src/components/live-preview.tsx`; never link or iframe the live domains, so visitors stay on the Noveltiq site.

- The work list lives in `src/routes/work.index.tsx` (not `work.tsx`) so `/work/$slug` case studies render as their own pages instead of being swallowed by a layout without an Outlet.

- The site-wide preloader in `src/components/preloader.tsx` is server-rendered with a CSS failsafe so it covers first paint yet never blocks the page if scripts fail.
