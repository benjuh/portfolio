import { useState } from "react";
import SpeakeasyProject from "./SpeakeasyProject";
import UnifiedProject from "./UnifiedProject";
import HashCli from "./HashCli";
import Stewordle from "./Stewordle";
import Stew from "./Stew";

export default function TerminalBoxProject() {
    const [isRenderingUnifiedProject, setRenderingUnifiedProject] = useState(false);
    const [isRenderingSpeakeasyProject, setRenderingSpeakeasyProject] = useState(false);
    const [isRenderingHashCliProject, setRenderingHashCliProject] = useState(false);
    const [isRenderingStewordleProject, setRenderingStewordleProject] = useState(false);
    const [isRenderingStewProject, setRenderingStewProject] = useState(false);

    const navigateTo = (path: string) => {
        window.location.href = `/${path}`;
    }

    const renderUnifiedProject = () => {

        if (!isRenderingUnifiedProject) return null;
        return (
            <UnifiedProject />
        )
    }

    const renderSpeakeasyProject = () => {

        if (!isRenderingSpeakeasyProject) return null;
        return (
            <SpeakeasyProject />
        )
    }

    const renderHashCliProject = () => {

        if (!isRenderingHashCliProject) return null;
        return (
            <HashCli />
        )
    }

    const renderStewordleProject = () => {
        if (!isRenderingStewordleProject) return null;
        return (
            <Stewordle />
        )
    }

    const renderStewProject = () => {
        if (!isRenderingStewProject) return null;
        return (
            <Stew />
        )
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
                    <button className='terminal-response-button' onClick={() => setRenderingUnifiedProject(!isRenderingUnifiedProject)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            unified
                        </p>
                    </button>
                    {renderUnifiedProject()}
                    <button className='terminal-response-button' onClick={() => setRenderingSpeakeasyProject(!isRenderingSpeakeasyProject)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            speakeasy
                        </p>
                    </button>
                    {renderSpeakeasyProject()}
                    <button className='terminal-response-button' onClick={() => setRenderingHashCliProject(!isRenderingHashCliProject)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            hash-cli
                        </p>
                    </button>
                    {renderHashCliProject()}
                    <button className='terminal-response-button' onClick={() => setRenderingStewordleProject(!isRenderingStewordleProject)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            stewordle
                        </p>
                    </button>
                    {renderStewordleProject()}
                    <button className='terminal-response-button' onClick={() => setRenderingStewProject(!isRenderingStewProject)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ width: '1.5em', height: '1.5em', marginRight: 10 }}>
                            <g fill="rgba(0,112,194, 1)" fillRule="evenodd">
                                <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                            </g>

                        </svg>
                        <p className='terminal-response-text'>
                            stew
                        </p>
                    </button>
                    {renderStewProject()}
                </div>
                <div className='terminal-row'>
                    <p className='terminal-prompt'>$</p>
                    <p className='terminal-command blinker'>_</p>
                </div>
            </div>
        </div>
    )
}
