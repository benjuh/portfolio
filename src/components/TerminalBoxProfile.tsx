export default function TerminalBoxProfile() {

    const navigateTo = (path: string) => {
        window.location.href = `/${path}`;
    }

    return (
        <div className="terminal-box-container">
            <div className="terminal-box-profile">
                <div className='terminal-row'>
                    <p className='terminal-prompt'><span style={{ color: "rgba(0,120,194,0.8)", fontFamily: 'monospace', fontSize: '1.2rem' }}>~/projects</span>$</p>
                    <p className='terminal-command'>ls</p>
                    <p className='terminal-comment'># press the results below!</p>
                </div>
                <div className='terminal-response'>

                    <button className='terminal-response-button' onClick={() => navigateTo("")}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            ..
                        </p>
                        <p className='terminal-comment'># takes you back home </p>
                    </button>
                    <button className='terminal-response-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            unified
                        </p>
                    </button>
                    <button className='terminal-response-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            speakeasy
                        </p>
                    </button>
                    <button className='terminal-response-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            innerlink
                        </p>
                    </button>
                    <button className='terminal-response-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            stewordle
                        </p>
                    </button>
                    <button className='terminal-response-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            myfi
                        </p>
                    </button>
                </div>
                <div className='terminal-row'>
                    <p className='terminal-prompt'>$</p>
                    <p className='terminal-command blinker'>_</p>
                </div>
            </div>
        </div>
    )
}
