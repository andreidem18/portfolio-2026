# Portfolio 2026

Personal portfolio built with modern web technologies, featuring smooth animations, internationalization, and a clean feature-based architecture.

## Tech Stack

| Category             | Technology                                               |
| -------------------- | -------------------------------------------------------- |
| Framework            | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language             | TypeScript                                               |
| Styling              | Tailwind CSS v4                                          |
| UI Components        | shadcn/ui + Radix UI                                     |
| Animations           | GSAP + @gsap/react                                       |
| Smooth Scroll        | Lenis                                                    |
| Internationalization | next-intl                                                |
| Icons                | Lucide React                                             |
| Package Manager      | pnpm                                                     |

## Running Locally

```bash
pnpm i
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technical Decisions

**Feature-based folder structure** — code is organized by feature (`hero`, `projects`, `experience`, etc.) rather than by type (`components`, `hooks`, `utils`). This keeps related logic co-located and scales better as the project grows.

**GSAP for animations** — chosen over CSS-only or Framer Motion for its fine-grained control over scroll-triggered sequences, timeline pinning, and cross-browser consistency. The `@gsap/react` integration keeps animations tied to the React lifecycle.

**Lenis for smooth scroll** — a lightweight smooth-scroll library that integrates cleanly with GSAP's ScrollTrigger, allowing scroll-based animations to feel physically accurate without fighting the browser's native scroll behavior.

**next-intl for i18n** — provides compile-time type-safe translations and works natively with the Next.js App Router, including server components and middleware-based locale detection.

**Tailwind CSS v4** — uses the new CSS-first configuration (`@tailwindcss/postcss`) instead of `tailwind.config.js`, reducing configuration overhead and leveraging native CSS cascade layers.

**Turbopack** — enabled in development for significantly faster HMR compared to Webpack, especially noticeable as the number of components grows.

## Trade-offs

- **GSAP + Lenis coordination** — GSAP ScrollTrigger and Lenis must be initialized in the correct order (Lenis must tick before ScrollTrigger updates). This adds a small layer of setup complexity in the providers.
- **shadcn/ui copy-paste model** — components are copied into the repo rather than imported from a package. This gives full control but means updates from upstream must be applied manually.
- **Client-only animations** — scroll-driven animations are client-only to avoid hydration mismatches, so the page layout must not depend on animation state at render time.

## Deploy

The project is deployed on [Vercel](https://vercel.com), which is the natural hosting target for Next.js apps. Vercel provides:

- Zero-config deployment from the `main` branch
- Automatic preview deployments for every push
- Edge network CDN for static assets
- Built-in environment variable management

To deploy your own instance, import the repository in the Vercel dashboard — no additional configuration is needed.
