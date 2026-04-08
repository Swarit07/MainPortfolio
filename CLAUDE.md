# Portfolio -- Swarit Sheel

## Architecture
- Next.js 14+ App Router, TypeScript, Tailwind CSS
- 3 routes: `/` (Hero/About), `/projects`, `/experience`
- Static export (`output: 'export'`) for Vercel
- Server Components by default, Client Components only when needed (usePathname, animations)

## File Structure
- `components/layout/` -- Navbar, Footer (shared via app/layout.tsx)
- `components/hero/` -- HeroSection, AboutSection
- `components/projects/` -- ProjectGrid, ProjectCard
- `components/experience/` -- Timeline, TimelineCard, SkillsSection, ResumeButton
- `components/ui/` -- SocialLinks, TechTag, SectionHeading
- `data/` -- projects.ts, experience.ts, skills.ts, socials.ts
- `lib/types.ts` -- Project, Experience, Skill, SocialLink interfaces

## Design Constraints
- Dark theme default, no light mode toggle for v1
- NO Inter, Roboto, or system fonts for display text
- NO purple/blue gradient backgrounds
- NO generic card shadows or template aesthetics
- Animations under 300ms, respect prefers-reduced-motion
- Mobile-first: everything works at 375px before scaling up
- Icons from lucide-react only, no emoji as structural elements
- Color contrast: 4.5:1 body text, 3:1 large text minimum

## About Me
- Name: Swarit Sheel
- Title: Computer Engineering @ UIUC
- Skills: C, Java, Arduino, LC-3 Assembly, Python, JavaScript
- Interests: Robotics, embedded systems, astrophysics, entrepreneurship
- Experience: Liebherr Canada (co-op), Longo's, MDSA Programming Club exec, DECA ESB exec
- Socials: GitHub, LinkedIn
