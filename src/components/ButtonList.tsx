import github from '../assets/github-mark-white.png';
import linkedin from '../assets/linkedin.png';

export default function ButtonList() {
    return (
        <div>
            <a href="https://github.com/benjuhminstewart" target="_blank" rel="noreferrer">
                <img src={github} alt="github" className="header-github" />
            </a>
            <a href="https://www.linkedin.com/in/benjuhminstewart/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="linkedin" className="header-linkedin" />
            </a>
        </div>
    )
}
