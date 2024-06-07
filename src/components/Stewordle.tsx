
export default function Stewordle() {
    return (
        <div className="read-me-container paper">
            <p className='read-me-header'>Stewordle</p>
            <p style={{color: "rgba(255,255,255,0.4)", fontFamily: "monospace"}}>This is a private repository</p>
            <a href="https://www.stewordle.com" target="_blank" rel="noreferrer" style={{color: "rgba(0,122,194,0.8)", textDecoration: "none"}}>https://www.stewordle.com</a>
            <p className='read-me-text'>
                Stewordle is a clone of the popular wordle game (but with a pun in the name containing Stewart for my last name) </p>
            <p className='read-me-header'>Purpose</p>
            <p className='read-me-text'>
                I am an avid user of the wordle game and have been playing it since 2020. I have always been fascinated by the game's simplicity and the way it can be played with just a few words. So I wanted to put my skills to use to make a clone and possibly in the future expand on the game to add new features and gamemodes.
            </p>
            <p className='read-me-header'>Features</p>
            <p className='read-me-text'>
                currently the app is nearly identical in functionality to the original wordle game. I have not added any new features or gamemodes to the app yet, but I plan to add more in the future. The only difference is it is an "unlimited" play game where you don't have to wait daily to play the next one. So if you want to play multiple rounds, head to <a href="https://www.stewordle.com" target="_blank" rel="noreferrer" style={{ color: "rgba(0,122,194,0.8)", textDecoration: "none"}}>stewordle.com</a>!
            </p>
            <p className='read-me-header'>Tech Stack</p>
            This is a strictly client side app using just javascript, html, and css.
        </div>
    )
}
