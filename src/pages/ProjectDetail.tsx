import { Link, useParams, Navigate } from 'react-router-dom';
import TerminalWindow from '../components/TerminalWindow';
import { projects } from '../data/projects';
import '../styles/global.css';
import '../styles/terminal.css';
import github from '../assets/github-mark-white.png';
import linkedin from '../assets/linkedin.png';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" />;

  return (
    <div className="page-root">
      <div className="glow-tl" />
      <div className="glow-br" />
      <div className="container">
        <div className="header">
          <div>
            <div className="header-name">
              Benjamin <span className="header-name-light">Stewart</span>
            </div>
            <div className="header-breadcrumb">
              → projects / <span className="header-breadcrumb-segment">{project.slug}</span>
            </div>
          </div>
          <div className="social-buttons">
            <a href="https://github.com/benjuh" target="_blank" rel="noreferrer" className="social-button" aria-label="source code">
              <img src={github} alt="source code" />
            </a>
            <a href="https://www.linkedin.com/in/benjuhminstewart/" target="_blank" rel="noreferrer" className="social-button" aria-label="professional profile">
              <img src={linkedin} alt="professional profile" />
            </a>
          </div>
        </div>
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
                <a href={project.github} target="_blank" rel="noreferrer" className="readme-link">
                  ⬡ github →
                </a>
              ) : (
                <span className="readme-link readme-link-dim">⬡ private repo</span>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="readme-link">
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
