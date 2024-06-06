import React from 'react';
import '../styles/TerminalBox.css';
import ReadMe from './ReadMe';

export default function TerminalBoxHome() {
    const [canRenderContent, setCanRenderContent] = React.useState(false);

    function navigateTo(page: string) {
        window.location.href = `/${page}`;
    }

    return (
        <div className="terminal-box-container">
            <div className="terminal-box">
                <div className='terminal-row'>
                    <p className='terminal-prompt'><span style={{ color: "rgba(0,120,194,0.8)", fontFamily: 'monospace', fontSize: '1.2rem'  }}>~</span>$</p>
                    <p className='terminal-command'>ls</p>
                    <p className='terminal-comment'># press the results below!</p>
                </div>
                <div className='terminal-response'>
                    <button className='terminal-response-button' onClick={() => setCanRenderContent(!canRenderContent)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="#fff" fillRule="evenodd">
                                <path d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z" />
                            </g>
                        </svg>
                        <p className='terminal-response-text'>
                            README.md
                        </p>
                    </button>

                    <button className='terminal-response-button' onClick={() => navigateTo("projects")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            projects
                        </p>
                    </button>
                    <button className='terminal-response-button' onClick={() => navigateTo("contact")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            contact
                        </p>
                    </button>
                </div>
                <div className='terminal-row'>
                    <p className='terminal-prompt'>$</p>
                    <p className='terminal-command blinker'>_</p>
                </div>
            </div>
            {canRenderContent && <ReadMe />}
        </div>
    )
}
