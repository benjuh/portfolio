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
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="folder-row"
                aria-label={p.slug}
              >
                <span aria-hidden="true">📁</span>
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
