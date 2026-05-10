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
