# Portfolio Restyle Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle the portfolio as a projects-only showcase with a Tokyo Night terminal aesthetic — deep gradient background, ambient glow blobs, realistic terminal chrome, and a two-page route structure (`/` list + `/projects/:slug` detail).

**Architecture:** Static project data in `src/data/projects.ts` drives both pages. A shared `TerminalWindow` component provides the OS-style terminal chrome. Two new pages (`ProjectList`, `ProjectDetail`) replace all three existing pages. Old per-project components are deleted; their content migrates into the data file.

**Tech Stack:** React 18, TypeScript, React Router v6, plain CSS (no new dependencies)

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `src/data/projects.ts` | Project interface + static data array |
| Write | `src/styles/index.css` | Body reset, gradient background |
| Create | `src/styles/global.css` | CSS vars, container, header, social buttons, glow blobs |
| Create | `src/styles/terminal.css` | Terminal chrome, prompt classes, folder rows, readme block |
| Create | `src/components/TerminalWindow.tsx` | Shared OS-style terminal wrapper |
| Modify | `src/components/Header.tsx` | Breadcrumb prop, new styles, social icon buttons |
| Create | `src/pages/ProjectList.tsx` | `/` route — `ls` view |
| Create | `src/pages/ProjectDetail.tsx` | `/projects/:slug` route — `cat README.md` view |
| Modify | `src/App.tsx` | Updated routes, remove old imports |
| Delete | `src/pages/Home.tsx` | Replaced by ProjectList |
| Delete | `src/pages/Contact.tsx` | Removed (separate services site) |
| Delete | `src/components/TerminalBoxHome.tsx` | Replaced by TerminalWindow + ProjectList |
| Delete | `src/components/TerminalBoxProject.tsx` | Replaced by TerminalWindow + ProjectList |
| Delete | `src/components/TerminalBoxContact.tsx` | Removed |
| Delete | `src/components/ReadMe.tsx` | Removed |
| Delete | `src/components/UnifiedProject.tsx` | Content migrated to data file |
| Delete | `src/components/SpeakeasyProject.tsx` | Content migrated to data file |
| Delete | `src/components/HashCli.tsx` | Content migrated to data file |
| Delete | `src/components/Stewordle.tsx` | Content migrated to data file |
| Delete | `src/components/Stew.tsx` | Content migrated to data file |
| Delete | `src/styles/ReadMe.css` | Replaced by global.css + terminal.css |
| Delete | `src/styles/TerminalBox.css` | Replaced by terminal.css |
| Delete | `src/styles/Home.css` | Replaced by global.css |

---

## Task 1: Project Data

**Files:**
- Create: `src/data/projects.ts`
- Create: `src/data/projects.test.ts`

- [ ] **Step 1: Write the failing test**

```typescript
// src/data/projects.test.ts
import { projects, Project } from './projects';

describe('projects data', () => {
  it('exports a non-empty array', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('every project has required fields', () => {
    projects.forEach((p: Project) => {
      expect(typeof p.slug).toBe('string');
      expect(typeof p.name).toBe('string');
      expect(typeof p.type).toBe('string');
      expect(typeof p.description).toBe('string');
      expect(Array.isArray(p.tech)).toBe(true);
      expect(p.tech.length).toBeGreaterThan(0);
    });
  });

  it('has exactly 5 projects', () => {
    expect(projects).toHaveLength(5);
  });

  it('slugs are unique', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('slugs match expected values', () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toEqual(['unified', 'speakeasy', 'hash-cli', 'stewordle', 'stew']);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
cd /Users/benjamin/code/repos/portfolio
npx react-scripts test --watchAll=false --testPathPattern=projects.test
```

Expected: FAIL — "Cannot find module './projects'"

- [ ] **Step 3: Create the data file**

```typescript
// src/data/projects.ts
export interface Project {
  slug: string;
  name: string;
  type: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  private?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'unified',
    name: 'Unified',
    type: 'mobile app',
    description:
      'iOS and Android app allowing community members to report local incidents to HOA and city officials. Reduced area crime and improved response times since deployment.',
    tech: ['React Native', 'Expo', 'JavaScript', 'PostgreSQL', 'Supabase'],
    private: true,
  },
  {
    slug: 'speakeasy',
    name: 'Speakeasy',
    type: 'mobile app',
    description:
      'Audio-only messaging app for iOS and Android with real-time vocal effects — pitch bending, reverse, and more — to bring personality back to conversations.',
    tech: ['TypeScript', 'Go', 'React Native', 'Expo', 'Gin', 'PostgreSQL', 'AWS'],
    private: true,
  },
  {
    slug: 'hash-cli',
    name: 'Hash CLI',
    type: 'cli tool',
    description:
      'CLI tool for symmetric file encryption and decryption with passphrase-based MAC authentication, KMAC hashing, and elliptic curve operations.',
    tech: ['Java'],
    github: 'https://github.com/benjuh/cryptography-project',
  },
  {
    slug: 'stewordle',
    name: 'Stewordle',
    type: 'web game',
    description:
      'Unlimited Wordle clone — same 5-letter word guessing mechanics, no daily wait. Play as many rounds as you want.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    demo: 'https://www.stewordle.com',
    private: true,
  },
  {
    slug: 'stew',
    name: 'Stew',
    type: 'cli tool',
    description:
      'Go CLI tool for creating, storing, and applying project templates — eliminating boilerplate setup for any language or framework.',
    tech: ['Go', 'Cobra', 'Viper'],
    github: 'https://github.com/benjuh/stew',
  },
];
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx react-scripts test --watchAll=false --testPathPattern=projects.test
```

Expected: PASS — 5 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/data/projects.ts src/data/projects.test.ts
git commit -m "feat: add project data file"
```

---

## Task 2: CSS — Reset, Variables, Global Styles

**Files:**
- Modify: `src/styles/index.css`
- Create: `src/styles/global.css`
- Create: `src/styles/terminal.css`

- [ ] **Step 1: Write `src/styles/index.css`** (replaces empty file)

```css
/* src/styles/index.css */
*, *::before, *::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background: linear-gradient(135deg, #0d0d1a 0%, #0a0a1f 50%, #0d1a2e 100%);
  background-attachment: fixed;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
}
```

- [ ] **Step 2: Create `src/styles/global.css`**

```css
/* src/styles/global.css */
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

:root {
  --text-primary: #c0caf5;
  --text-dim: rgba(192, 202, 245, 0.3);
  --blue: #7aa2f7;
  --green: #9ece6a;
  --yellow: #e0af68;
  --red: #f7768e;
  --bg-terminal: rgba(13, 13, 26, 0.92);
  --bg-titlebar: #1e2030;
  --mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}

.page-root {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.glow-tl {
  position: fixed;
  top: -80px;
  left: -80px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 255, 180, 0.07) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.glow-br {
  position: fixed;
  bottom: -60px;
  right: -40px;
  width: 340px;
  height: 340px;
  background: radial-gradient(circle, rgba(122, 162, 247, 0.06) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.container {
  padding: 32px;
  max-width: 860px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Header */
.header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 28px;
}

.header-name {
  font-size: 32px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.1;
}

.header-name-light {
  font-weight: 300;
  color: rgba(192, 202, 245, 0.45);
}

.header-breadcrumb {
  font-size: 12px;
  color: var(--blue);
  font-family: var(--mono);
  margin-top: 5px;
}

.header-breadcrumb-segment {
  color: var(--yellow);
}

/* Social icon buttons */
.social-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 4px;
  flex-shrink: 0;
}

.social-button {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: rgba(122, 162, 247, 0.08);
  border: 1px solid rgba(122, 162, 247, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.15s, border-color 0.15s;
}

.social-button:hover {
  background: rgba(122, 162, 247, 0.15);
  border-color: rgba(122, 162, 247, 0.35);
}

.social-button img {
  width: 15px;
  height: 15px;
  object-fit: contain;
}

@media (max-width: 600px) {
  .container { padding: 20px 16px; }
  .header-name { font-size: 24px; }
}
```

- [ ] **Step 3: Create `src/styles/terminal.css`**

```css
/* src/styles/terminal.css */

/* Window chrome */
.terminal-wrapper {
  border-radius: 10px;
  overflow: hidden;
  box-shadow:
    0 8px 40px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(122, 162, 247, 0.1);
}

.terminal-titlebar {
  background: var(--bg-titlebar);
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.terminal-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  flex-shrink: 0;
}

.terminal-dot-red   { background: #f7768e; box-shadow: 0 0 6px rgba(247, 118, 142, 0.35); }
.terminal-dot-yellow{ background: #e0af68; box-shadow: 0 0 6px rgba(224, 175, 104, 0.35); }
.terminal-dot-green { background: #9ece6a; box-shadow: 0 0 6px rgba(158, 206, 106, 0.35); }

.terminal-title {
  flex: 1;
  text-align: center;
  font-family: var(--mono);
  font-size: 10px;
  color: rgba(192, 202, 245, 0.2);
}

.terminal-body {
  background: var(--bg-terminal);
  padding: 18px 20px;
  font-family: var(--mono);
  font-size: 13px;
  line-height: 2;
}

/* Prompt segments */
.prompt-user   { color: var(--green); }
.prompt-at     { color: var(--text-dim); }
.prompt-host   { color: var(--blue); }
.prompt-colon  { color: var(--text-dim); }
.prompt-path   { color: var(--yellow); }
.prompt-dollar { color: var(--text-dim); }
.prompt-cmd    { color: var(--text-primary); }
.prompt-comment {
  color: rgba(192, 202, 245, 0.2);
  font-size: 11px;
  margin-left: 12px;
}
.prompt-ghost { opacity: 0.35; }

.terminal-cursor {
  display: inline-block;
  width: 8px;
  height: 14px;
  background: var(--blue);
  margin-left: 6px;
  vertical-align: middle;
  border-radius: 1px;
  opacity: 0.7;
  animation: blink 1s step-end infinite;
}

@keyframes blink { 50% { opacity: 0; } }

/* ls output — folder rows */
.folder-rows { margin-top: 8px; margin-bottom: 4px; }

.folder-row {
  padding: 7px 12px;
  background: rgba(224, 175, 104, 0.06);
  border: 1px solid rgba(224, 175, 104, 0.12);
  border-radius: 5px;
  color: var(--yellow);
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.15s, background 0.15s;
  margin-bottom: 4px;
  font-size: 13px;
}

.folder-row:hover {
  border-color: rgba(224, 175, 104, 0.32);
  background: rgba(224, 175, 104, 0.11);
}

.folder-row-name { flex: 1; }

.folder-row-type {
  font-size: 10px;
  color: rgba(192, 202, 245, 0.2);
}

/* cat README.md output */
.readme-block {
  padding: 12px 14px;
  background: rgba(122, 162, 247, 0.04);
  border-left: 2px solid rgba(122, 162, 247, 0.3);
  border-radius: 0 6px 6px 0;
  margin-top: 2px;
  margin-bottom: 2px;
}

.readme-title {
  color: var(--blue);
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 6px;
}

.readme-desc {
  color: rgba(192, 202, 245, 0.7);
  font-size: 11px;
  line-height: 1.7;
  font-family: system-ui, sans-serif;
}

.readme-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}

.readme-tag {
  padding: 2px 8px;
  background: rgba(158, 206, 106, 0.1);
  border: 1px solid rgba(158, 206, 106, 0.2);
  border-radius: 4px;
  color: var(--green);
  font-size: 10px;
  font-family: var(--mono);
}

.readme-links {
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
}

.readme-link {
  padding: 4px 12px;
  border: 1px solid rgba(122, 162, 247, 0.3);
  border-radius: 4px;
  color: var(--blue);
  font-size: 11px;
  cursor: pointer;
  text-decoration: none;
  transition: border-color 0.15s, background 0.15s;
  font-family: var(--mono);
}

.readme-link:hover {
  border-color: rgba(122, 162, 247, 0.6);
  background: rgba(122, 162, 247, 0.08);
}

.readme-link-dim {
  color: rgba(192, 202, 245, 0.35);
  border-color: rgba(192, 202, 245, 0.1);
  cursor: default;
}

.readme-link-dim:hover {
  border-color: rgba(192, 202, 245, 0.1);
  background: transparent;
}

/* Back navigation */
.back-nav {
  display: inline-block;
  margin-top: 12px;
  font-family: var(--mono);
  font-size: 11px;
  color: rgba(122, 162, 247, 0.5);
  cursor: pointer;
  text-decoration: none;
  transition: color 0.15s;
}

.back-nav:hover { color: var(--blue); }

@media (max-width: 600px) {
  .terminal-body { padding: 14px 12px; font-size: 11px; }
  .folder-row { font-size: 11px; }
}
```

- [ ] **Step 4: Verify app still builds (CSS-only changes)**

```bash
npx react-scripts build 2>&1 | tail -5
```

Expected: `Successfully compiled.` — old CSS files still imported by old components, no errors yet.

- [ ] **Step 5: Commit**

```bash
git add src/styles/index.css src/styles/global.css src/styles/terminal.css
git commit -m "feat: add Tokyo Night CSS design system"
```

---

## Task 3: TerminalWindow Component

**Files:**
- Create: `src/components/TerminalWindow.tsx`
- Create: `src/components/TerminalWindow.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/TerminalWindow.test.tsx
import { render, screen } from '@testing-library/react';
import TerminalWindow from './TerminalWindow';

describe('TerminalWindow', () => {
  it('renders the title in the title bar', () => {
    render(<TerminalWindow title="~ — zsh"><p>content</p></TerminalWindow>);
    expect(screen.getByText('~ — zsh')).toBeInTheDocument();
  });

  it('renders children inside the body', () => {
    render(<TerminalWindow title="test"><p>hello world</p></TerminalWindow>);
    expect(screen.getByText('hello world')).toBeInTheDocument();
  });

  it('renders three traffic light dots', () => {
    const { container } = render(<TerminalWindow title="test"><span /></TerminalWindow>);
    const dots = container.querySelectorAll('.terminal-dot');
    expect(dots).toHaveLength(3);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx react-scripts test --watchAll=false --testPathPattern=TerminalWindow.test
```

Expected: FAIL — "Cannot find module './TerminalWindow'"

- [ ] **Step 3: Create TerminalWindow component**

```tsx
// src/components/TerminalWindow.tsx
import React from 'react';
import '../styles/terminal.css';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function TerminalWindow({ title, children }: Props) {
  return (
    <div className="terminal-wrapper">
      <div className="terminal-titlebar">
        <div className="terminal-dot terminal-dot-red" />
        <div className="terminal-dot terminal-dot-yellow" />
        <div className="terminal-dot terminal-dot-green" />
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx react-scripts test --watchAll=false --testPathPattern=TerminalWindow.test
```

Expected: PASS — 3 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/components/TerminalWindow.tsx src/components/TerminalWindow.test.tsx
git commit -m "feat: add TerminalWindow shared chrome component"
```

---

## Task 4: Header Component

**Files:**
- Modify: `src/components/Header.tsx`
- Create: `src/components/Header.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/components/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the full name', () => {
    render(<Header />);
    expect(screen.getByText('Benjamin')).toBeInTheDocument();
    expect(screen.getByText('Stewart')).toBeInTheDocument();
  });

  it('shows base breadcrumb without prop', () => {
    render(<Header />);
    expect(screen.getByText(/→ projects/)).toBeInTheDocument();
  });

  it('shows slug segment when breadcrumb prop provided', () => {
    render(<Header breadcrumb="stew" />);
    expect(screen.getByText('stew')).toBeInTheDocument();
  });

  it('renders GitHub link', () => {
    render(<Header />);
    const ghLink = screen.getByRole('link', { name: /github/i });
    expect(ghLink).toHaveAttribute('href', 'https://github.com/benjuh');
  });

  it('renders LinkedIn link', () => {
    render(<Header />);
    const liLink = screen.getByRole('link', { name: /linkedin/i });
    expect(liLink).toHaveAttribute('href', 'https://www.linkedin.com/in/benjuhminstewart/');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx react-scripts test --watchAll=false --testPathPattern=Header.test
```

Expected: FAIL — breadcrumb-related tests fail since current Header has no breadcrumb prop

- [ ] **Step 3: Rewrite Header component**

```tsx
// src/components/Header.tsx
import '../styles/global.css';
import github from '../assets/github-mark-white.png';
import linkedin from '../assets/linkedin.png';

interface Props {
  breadcrumb?: string;
}

export default function Header({ breadcrumb }: Props) {
  return (
    <div className="header">
      <div>
        <div className="header-name">
          Benjamin <span className="header-name-light">Stewart</span>
        </div>
        <div className="header-breadcrumb">
          → projects
          {breadcrumb && (
            <> / <span className="header-breadcrumb-segment">{breadcrumb}</span></>
          )}
        </div>
      </div>
      <div className="social-buttons">
        <a
          href="https://github.com/benjuh"
          target="_blank"
          rel="noreferrer"
          className="social-button"
          aria-label="GitHub"
        >
          <img src={github} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/benjuhminstewart/"
          target="_blank"
          rel="noreferrer"
          className="social-button"
          aria-label="LinkedIn"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx react-scripts test --watchAll=false --testPathPattern=Header.test
```

Expected: PASS — 5 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/components/Header.tsx src/components/Header.test.tsx
git commit -m "feat: update Header with breadcrumb prop and social icon buttons"
```

---

## Task 5: ProjectList Page

**Files:**
- Create: `src/pages/ProjectList.tsx`
- Create: `src/pages/ProjectList.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/pages/ProjectList.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProjectList from './ProjectList';

const renderWithRouter = (ui: React.ReactElement) =>
  render(<MemoryRouter>{ui}</MemoryRouter>);

describe('ProjectList', () => {
  it('renders all 5 project folder rows', () => {
    renderWithRouter(<ProjectList />);
    expect(screen.getByText('unified')).toBeInTheDocument();
    expect(screen.getByText('speakeasy')).toBeInTheDocument();
    expect(screen.getByText('hash-cli')).toBeInTheDocument();
    expect(screen.getByText('stewordle')).toBeInTheDocument();
    expect(screen.getByText('stew')).toBeInTheDocument();
  });

  it('each project links to /projects/:slug', () => {
    renderWithRouter(<ProjectList />);
    const unifiedLink = screen.getByRole('link', { name: /unified/ });
    expect(unifiedLink).toHaveAttribute('href', '/projects/unified');
    const stewLink = screen.getByRole('link', { name: /stew/ });
    expect(stewLink).toHaveAttribute('href', '/projects/stew');
  });

  it('shows the ls command in the terminal', () => {
    renderWithRouter(<ProjectList />);
    expect(screen.getByText(/ls/)).toBeInTheDocument();
  });

  it('renders GitHub and LinkedIn links', () => {
    renderWithRouter(<ProjectList />);
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx react-scripts test --watchAll=false --testPathPattern=ProjectList.test
```

Expected: FAIL — "Cannot find module './ProjectList'"

- [ ] **Step 3: Create ProjectList page**

```tsx
// src/pages/ProjectList.tsx
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TerminalWindow from '../components/TerminalWindow';
import { projects } from '../data/projects';
import '../styles/global.css';
import '../styles/terminal.css';

export default function ProjectList() {
  return (
    <div className="page-root">
      <div className="glow-tl" />
      <div className="glow-br" />
      <div className="container">
        <Header />
        <TerminalWindow title="~ — zsh">
          <div>
            <span className="prompt-user">benjamin</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-colon">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-dollar">$</span>
            <span className="prompt-cmd"> ls</span>
            <span className="prompt-comment"># click a project to explore it</span>
          </div>
          <div className="folder-rows">
            {projects.map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="folder-row">
                <span>📁</span>
                <span className="folder-row-name">{p.slug}</span>
                <span className="folder-row-type">{p.type}</span>
              </Link>
            ))}
          </div>
          <div>
            <span className="prompt-user">benjamin</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-colon">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-dollar">$</span>
            <span className="terminal-cursor" />
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx react-scripts test --watchAll=false --testPathPattern=ProjectList.test
```

Expected: PASS — 4 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/pages/ProjectList.tsx src/pages/ProjectList.test.tsx
git commit -m "feat: add ProjectList page with terminal ls view"
```

---

## Task 6: ProjectDetail Page

**Files:**
- Create: `src/pages/ProjectDetail.tsx`
- Create: `src/pages/ProjectDetail.test.tsx`

- [ ] **Step 1: Write the failing test**

```tsx
// src/pages/ProjectDetail.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';

const renderAtSlug = (slug: string) =>
  render(
    <MemoryRouter initialEntries={[`/projects/${slug}`]}>
      <Routes>
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/" element={<div>home</div>} />
      </Routes>
    </MemoryRouter>
  );

describe('ProjectDetail', () => {
  it('renders the project name', () => {
    renderAtSlug('stew');
    expect(screen.getByText(/# Stew/)).toBeInTheDocument();
  });

  it('renders the project description', () => {
    renderAtSlug('stew');
    expect(screen.getByText(/Go CLI tool for creating/)).toBeInTheDocument();
  });

  it('renders tech stack tags', () => {
    renderAtSlug('stew');
    expect(screen.getByText('Go')).toBeInTheDocument();
    expect(screen.getByText('Cobra')).toBeInTheDocument();
    expect(screen.getByText('Viper')).toBeInTheDocument();
  });

  it('renders github link when available', () => {
    renderAtSlug('stew');
    const ghLink = screen.getByRole('link', { name: /github/i });
    expect(ghLink).toHaveAttribute('href', 'https://github.com/benjuh/stew');
  });

  it('shows private repo label when no github link', () => {
    renderAtSlug('unified');
    expect(screen.getByText(/private repo/)).toBeInTheDocument();
  });

  it('renders demo link when available', () => {
    renderAtSlug('stewordle');
    const demoLink = screen.getByRole('link', { name: /live demo/i });
    expect(demoLink).toHaveAttribute('href', 'https://www.stewordle.com');
  });

  it('renders breadcrumb with project slug', () => {
    renderAtSlug('stew');
    expect(screen.getByText('stew')).toBeInTheDocument();
  });

  it('shows the ghosted cd command', () => {
    renderAtSlug('hash-cli');
    expect(screen.getByText(/cd hash-cli/)).toBeInTheDocument();
  });

  it('redirects to / for unknown slug', () => {
    renderAtSlug('does-not-exist');
    expect(screen.getByText('home')).toBeInTheDocument();
  });

  it('renders back navigation link', () => {
    renderAtSlug('stew');
    const backLink = screen.getByRole('link', { name: /cd \.\./ });
    expect(backLink).toHaveAttribute('href', '/');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

```bash
npx react-scripts test --watchAll=false --testPathPattern=ProjectDetail.test
```

Expected: FAIL — "Cannot find module './ProjectDetail'"

- [ ] **Step 3: Create ProjectDetail page**

```tsx
// src/pages/ProjectDetail.tsx
import { Link, useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import TerminalWindow from '../components/TerminalWindow';
import { projects } from '../data/projects';
import '../styles/global.css';
import '../styles/terminal.css';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" />;

  return (
    <div className="page-root">
      <div className="glow-tl" />
      <div className="glow-br" />
      <div className="container">
        <Header breadcrumb={project.slug} />
        <TerminalWindow title={`~/${project.slug} — zsh`}>
          <div className="prompt-ghost">
            <span className="prompt-user">benjamin</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-colon">:</span>
            <span className="prompt-path">~</span>
            <span className="prompt-dollar">$</span>
            <span className="prompt-cmd"> cd {project.slug}</span>
          </div>
          <div>
            <span className="prompt-user">benjamin</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-colon">:</span>
            <span className="prompt-path">~/{project.slug}</span>
            <span className="prompt-dollar">$</span>
            <span className="prompt-cmd"> cat README.md</span>
          </div>
          <div className="readme-block">
            <div className="readme-title"># {project.name}</div>
            <div className="readme-desc">{project.description}</div>
            <div className="readme-tags">
              {project.tech.map((t) => (
                <span key={t} className="readme-tag">{t}</span>
              ))}
            </div>
            <div className="readme-links">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="readme-link"
                >
                  ⬡ github →
                </a>
              ) : (
                <span className="readme-link readme-link-dim">⬡ private repo</span>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="readme-link"
                >
                  ⬡ live demo →
                </a>
              )}
            </div>
          </div>
          <div>
            <span className="prompt-user">benjamin</span>
            <span className="prompt-at">@</span>
            <span className="prompt-host">portfolio</span>
            <span className="prompt-colon">:</span>
            <span className="prompt-path">~/{project.slug}</span>
            <span className="prompt-dollar">$</span>
            <span className="terminal-cursor" />
          </div>
        </TerminalWindow>
        <Link to="/" className="back-nav">← cd ..</Link>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npx react-scripts test --watchAll=false --testPathPattern=ProjectDetail.test
```

Expected: PASS — 10 tests passing

- [ ] **Step 5: Commit**

```bash
git add src/pages/ProjectDetail.tsx src/pages/ProjectDetail.test.tsx
git commit -m "feat: add ProjectDetail page with cd + cat README.md view"
```

---

## Task 7: Wire Up Routes in App.tsx

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace App.tsx**

```tsx
// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProjectList from './pages/ProjectList';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
```

- [ ] **Step 2: Start the dev server and verify visually**

```bash
npm start
```

Open http://localhost:3000 — verify:
- Project list page loads with dark gradient background, ambient glows, terminal chrome
- GitHub and LinkedIn icon buttons visible in header
- Click `stew` → navigates to `/projects/stew`
- Detail page shows `cd stew` (ghosted), `cat README.md`, tech tags, GitHub link
- `← cd ..` navigates back to `/`
- All 5 projects accessible
- Traffic light dots in title bar glow faintly

Stop server with Ctrl+C when done.

- [ ] **Step 3: Run all tests to confirm no regressions**

```bash
npx react-scripts test --watchAll=false
```

Expected: All tests PASS

- [ ] **Step 4: Commit**

```bash
git add src/App.tsx
git commit -m "feat: wire up two-page route structure"
```

---

## Task 8: Delete Old Files

**Files:**
- Delete: all listed below

- [ ] **Step 1: Delete old pages and components**

```bash
rm src/pages/Home.tsx \
   src/pages/Contact.tsx \
   src/components/TerminalBoxHome.tsx \
   src/components/TerminalBoxProject.tsx \
   src/components/TerminalBoxContact.tsx \
   src/components/ReadMe.tsx \
   src/components/UnifiedProject.tsx \
   src/components/SpeakeasyProject.tsx \
   src/components/HashCli.tsx \
   src/components/Stewordle.tsx \
   src/components/Stew.tsx \
   src/components/ButtonList.tsx
```

- [ ] **Step 2: Delete old CSS files**

```bash
rm src/styles/ReadMe.css \
   src/styles/TerminalBox.css \
   src/styles/Home.css
```

- [ ] **Step 3: Build to confirm no dead imports remain**

```bash
npx react-scripts build 2>&1 | tail -10
```

Expected: `Successfully compiled.`

If any "Cannot find module" errors appear, the deleted file is still imported somewhere — trace with `grep -r "TerminalBoxHome\|ReadMe\|Home.css\|TerminalBox.css" src/`.

- [ ] **Step 4: Run all tests one final time**

```bash
npx react-scripts test --watchAll=false
```

Expected: All tests PASS

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: delete old pages, components, and CSS files"
```

---

## Done

Portfolio is now a two-page projects-only showcase with Tokyo Night terminal aesthetic. All routes, components, CSS, and data are in place. Old files deleted. Test suite green.
