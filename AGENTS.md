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
