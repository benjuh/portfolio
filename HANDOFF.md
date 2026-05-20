# Portfolio Restyle — Agent Handoff

**Repo:** /Users/benjamin/code/repos/portfolio  
**Branch:** main  
**Last commit:** 0132c9c  
**Test status:** 27/27 passing

---

## What's Done

Tasks 1–6 of the plan at `docs/superpowers/plans/2026-05-10-portfolio-restyle.md` are complete and committed:

| Task | Files | Status |
|------|-------|--------|
| 1 | `src/data/projects.ts` + test | ✅ |
| 2 | `src/styles/index.css`, `global.css`, `terminal.css` | ✅ |
| 3 | `src/components/TerminalWindow.tsx` + test | ✅ |
| 4 | `src/components/Header.tsx` + test | ✅ |
| 5 | `src/pages/ProjectList.tsx` + test | ✅ |
| 6 | `src/pages/ProjectDetail.tsx` + test | ✅ |

---

## What Remains

### Task 7: Rewrite App.tsx

Replace `src/App.tsx` entirely with:

```tsx
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

Then run `npx react-scripts test --watchAll=false` — expect 27/27 still passing.

Then start dev server (`npm start`), open http://localhost:3000 and verify:
- Dark gradient background with ambient green/blue glow blobs
- Terminal window with red/yellow/green traffic light dots
- Header "Benjamin Stewart" + breadcrumb "→ projects" + GitHub/LinkedIn icon buttons
- 5 folder rows: unified, speakeasy, hash-cli, stewordle, stew
- Click a folder → navigates to `/projects/slug`, shows `cd slug` (ghosted) + `cat README.md` with description, tech tags, links
- `← cd ..` navigates back

Then commit:
```bash
git add src/App.tsx
git commit -m "feat: wire up two-page route structure"
```

### Task 8: Delete Old Files

```bash
cd /Users/benjamin/code/repos/portfolio
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
   src/components/ButtonList.tsx \
   src/styles/ReadMe.css \
   src/styles/TerminalBox.css \
   src/styles/Home.css
```

Then verify build is clean:
```bash
npx react-scripts build 2>&1 | tail -5
# Expected: Successfully compiled.
```

If any "Cannot find module" errors: trace with
```bash
grep -r "TerminalBoxHome\|ReadMe\|Home\.css\|TerminalBox\.css\|ButtonList" src/
```

Then run tests one final time:
```bash
npx react-scripts test --watchAll=false
# Expected: 27 passed, 5 suites
```

Then commit:
```bash
git add -A
git commit -m "chore: delete old pages, components, and CSS files"
```

---

## Design Context

- **Visual:** Deep dark gradient bg (#0d0d1a → #0a0a1f → #0d1a2e), fixed ambient glow blobs, Tokyo Night color palette
- **Terminal chrome:** OS-style title bar with traffic lights, `~/${slug} — zsh` title
- **Two routes only:** `/` (project list) and `/projects/:slug` (detail) — no home/contact pages
- **Spec:** `docs/superpowers/specs/2026-05-10-portfolio-restyle-design.md`
- **Plan:** `docs/superpowers/plans/2026-05-10-portfolio-restyle.md`
