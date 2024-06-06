import { useState } from "react";

export default function TerminalBoxContact() {


    const [isRenderingEmailOptions, setRenderingEmailOptions] = useState(false);
    const [isRenderingPhoneOptions, setRenderingPhoneOptions] = useState(false);

    const navigateTo = (path: string) => {
        window.location.href = `/${path}`;
    }

    const sendEmail = (email: string) => {
        window.open(`mailto:${email}`, 'mail')?.event?.preventDefault();
    }

    const renderEmailOptions = () => {

        if (!isRenderingEmailOptions) return null;

        return (
            <div className='terminal-sub-row'>
                <a className='terminal-response-button link' href="mailto:benrstewart.12@gmail.com" onClick={() => sendEmail("benrstewart.12@gmail.com")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 512" style={{ width: '1.5em', height: '1.5em', fill: "rgba(255,255,255,0.8)" }}>
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                    <p className="terminal-sub-row-item">benrstewart.12@gmail.com</p>
                    <p className="terminal-comment"># personal email</p>
                </a>
                <a className='terminal-response-button link' href="mailto:stewartsoftwaresolutions@gmail.com" onClick={() => sendEmail("stewartsoftwaresolutions@gmail.com")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 512" style={{ width: '1.5em', height: '1.5em', fill: "rgba(255,255,255,0.8)" }}>
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                    <p className="terminal-sub-row-item">stewartsoftwaresolutions@gmail.com</p>
                    <p className="terminal-comment"># consulting email</p>
                </a>
            </div>
        )
    }

    const renderPhoneOptions = () => {

        if (!isRenderingPhoneOptions) return null;
        return (
            <div className='terminal-sub-row'>
                <button className='terminal-response-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10, fill: "rgba(255,255,255,0.8)" }}>
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                    <p><span style={{color: "rgba(255,255,255,0.3)"}}>+1</span> (501) 291-0864</p>
                    <p className="terminal-comment"># send a voicemail if you want to speak with me!</p>
                </button>
            </div>
        )
    }

    return (
        <div className="terminal-box-container">
            <div className="terminal-box-contact">
                <div className='terminal-row'>
                    <p className='terminal-prompt'><span style={{ color: "rgba(0,120,194,0.8)", fontFamily: 'monospace', fontSize: '1.2rem' }}>~/contact</span>$</p>
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
                    <button className='terminal-response-button' onClick={() => setRenderingEmailOptions(!isRenderingEmailOptions)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10, fill: 'rgba(255,255,255,0.9)' }}>
                            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>

                        </svg>
                        <p className='terminal-response-text'>
                            email<span style={{color: "rgba(255,255,255,0.3)", fontFamily: "monospace"}}>.txt</span>
                        </p>
                    </button>
                    {renderEmailOptions()}
                    <button className='terminal-response-button' onClick={() => setRenderingPhoneOptions(!isRenderingPhoneOptions)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10, fill: 'rgba(255,255,255,0.9)' }}>
                            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>

                        </svg>
                        <p className='terminal-response-text'>
                            phone<span style={{color: "rgba(255,255,255,0.3)", fontFamily: "monospace"}}>.txt</span>
                        </p>
                    </button>
                    {renderPhoneOptions()}
                </div>
                <div className='terminal-row'>
                    <p className='terminal-prompt'>$</p>
                    <p className='terminal-command blinker'>_</p>
                </div>
            </div>
        </div>
    )
}
