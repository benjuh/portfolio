# Portfolio Restyle Design

**Date:** 2026-05-10
**Status:** Approved

## Goal

Restyle the portfolio with a cooler, more modern aesthetic while keeping the terminal theme. Scope the content solely to project showcase — no About/README or Contact sections (those live on a separate services site).

## Visual Design

### Background
Deep dark gradient with ambient glow blobs:
- Background: `linear-gradient(135deg, #0d0d1a 0%, #0a0a1f 50%, #0d1a2e 100%)`
- Glow blob top-left: `radial-gradient(circle, rgba(0,255,180,0.07) 0%, transparent 70%)`, ~240×240px, positioned off-screen
- Glow blob bottom-right: `radial-gradient(circle, rgba(122,162,247,0.06) 0%, transparent 70%)`, ~180×180px

### Color Palette (Tokyo Night)
| Token | Value | Usage |
|---|---|---|
| `text-primary` | `#c0caf5` | Body text, terminal output |
| `text-dim` | `rgba(192,202,245,0.3)` | Prompt separators (`@`, `:`, `$`) |
| `blue` | `#7aa2f7` | Hostname in prompt, links, cursor |
| `green` | `#9ece6a` | Username in prompt, tech stack tags |
| `yellow` | `#e0af68` | Path in prompt, folder names |
| `red` | `#f7768e` | Terminal traffic light (close) |
| `bg-terminal` | `rgba(13,13,26,0.92)` | Terminal body |
| `bg-titlebar` | `#1e2030` | Terminal title bar |

### Typography
- Header name: `system-ui`, 700/300 weight split
- Terminal content: `'JetBrains Mono', 'Fira Code', monospace`
- Everything else: `system-ui`

### Terminal Chrome
Realistic OS-style window on every page:
- Title bar: `#1e2030`, traffic light dots (red `#f7768e`, yellow `#e0af68`, green `#9ece6a`) with subtle glow
- Title text: `portfolio — zsh` or `~/project-name — zsh`, centered, dim
- Body: `rgba(13,13,26,0.92)`, `border-radius: 9px`, `box-shadow: 0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(122,162,247,0.08)`

### Header (shared across all pages)
- Left: name `Benjamin Stewart` (bold/light weight split) + breadcrumb below in monospace (`→ projects` or `→ projects / project-name`)
- Right: GitHub icon button + LinkedIn icon button — rounded square `32×32px`, `rgba(122,162,247,0.08)` background, `rgba(122,162,247,0.18)` border

## Architecture

### Pages

**Two pages, replacing the current three (`/`, `/projects`, `/contact`):**

| Route | Component | Description |
|---|---|---|
| `/` | `ProjectList` | Terminal showing `ls` of all projects |
| `/projects/:slug` | `ProjectDetail` | Terminal showing `cd slug` + `cat README.md` |
| `*` | redirect → `/` | |

Remove: `Contact` page, `Home` page, `ReadMe` component, `TerminalBoxHome`, `TerminalBoxContact`.

### Project List (`/`)
Terminal body content:
```
benjamin@portfolio:~$ ls
📁 unified          mobile app
📁 speakeasy        web app
📁 hash-cli         cli tool
📁 stewordle        web game
📁 stew             cli tool
benjamin@portfolio:~$ ▌
```
Each folder row is a link to `/projects/:slug`. Styling: `rgba(224,175,104,0.06)` background, `rgba(224,175,104,0.12)` border, `border-radius: 5px`, hover lifts border opacity.

### Project Detail (`/projects/:slug`)
Terminal body content:
```
[dim] benjamin@portfolio:~$ cd unified
benjamin@portfolio:~/unified$ cat README.md
[styled block]
  # Project Name
  Description text
  [tech stack tags]
  [github →]  [live demo →]
[/styled block]
benjamin@portfolio:~/unified$ ▌
```
- Previous `cd` command ghosted at `opacity: 0.35`
- `cat README.md` output block: left border `rgba(122,162,247,0.3)`, `background: rgba(122,162,247,0.04)`
- Tech stack tags: green (`#9ece6a`) with `rgba(158,206,106,0.1)` background
- GitHub/demo buttons: bordered pill style, `color: #7aa2f7`
- Back link below terminal: `← cd ..` → navigates to `/`
- Breadcrumb updates to `→ projects / slug`

### Project Data
Static data file `src/data/projects.ts` — array of project objects:
```ts
interface Project {
  slug: string;
  name: string;
  type: string;           // shown as dim annotation in ls
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}
```
Projects: `unified`, `speakeasy`, `hash-cli`, `stewordle`, `stew`. Content migrated from existing individual project components (`UnifiedProject.tsx`, `SpeakeasyProject.tsx`, etc.).

### CSS Strategy
- Replace `Home.css`, `TerminalBox.css`, `ReadMe.css` with two new files: `global.css` (variables, body, header) and `terminal.css` (terminal chrome, rows, items)
- No new dependencies — plain CSS, no Tailwind

## Components

| New Component | Replaces | Purpose |
|---|---|---|
| `Header` | existing `Header` | Updated styles + breadcrumb prop |
| `TerminalWindow` | `TerminalBoxHome/Project/Contact` | Shared chrome wrapper |
| `ProjectList` | `TerminalBoxProject` (partial) | `ls` view |
| `ProjectDetail` | individual project components | `cat README.md` view |

## What Gets Deleted
- `src/pages/Home.tsx`
- `src/pages/Contact.tsx`
- `src/components/TerminalBoxHome.tsx`
- `src/components/TerminalBoxContact.tsx`
- `src/components/ReadMe.tsx`
- `src/components/UnifiedProject.tsx`
- `src/components/SpeakeasyProject.tsx`
- `src/components/HashCli.tsx`
- `src/components/Stewordle.tsx`
- `src/components/Stew.tsx`
- `src/styles/ReadMe.css`
- `src/styles/TerminalBox.css` (replaced)
- `src/styles/Home.css` (replaced)

## Out of Scope
- Animations / typing effects (not selected)
- Scanline overlay (not selected)
- Backend / CMS for project data
- Contact form
