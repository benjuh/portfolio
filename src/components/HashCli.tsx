export default function HashCli() {

    return (
        <div className="read-me-container paper">
            <p className='read-me-header'>Hashing CLI Tool</p>
            <a style={{ color: "rgba(0,122,194,0.8)", textDecoration: "none" }} href="https://github.com/benjuh/cryptography-project" target="_blank" rel="noreferrer">
                check me out on github!
            </a>
            <p className='read-me-text'>
                This is a simple CLI tool that allows you to hash a file or string. To use it, simply check out the repository and follow the steps in the <a style={{ textDecoration: "none", color: "rgba(0,122,194,0.8)" }} href="https://github.com/benjuh/cryptography-project/blob/main/README.md" target="_blank" rel="noreferrer">README.md</a></p>
            <p className='read-me-header'>Purpose</p>
            <p className='read-me-text'>
                This cli tool was a project for a class I took at the University of Washington. It allows you to hash a file or string with a passcode so you can encrypt local files that you don't want people to see and decrypt them with the passcode you assigned so that you can still view the contents. If you wanna send an encrypted message to someone else, have them download the repository and use the same passcode during decryption and they will be able to view the contents you sent them.
            </p>
            <p className='read-me-header'>Features</p>
            <p className='read-me-text'>
                The app allows the following commands in the cli tool:
            </p>
            <ul className='read-me-list'>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">symm</span>: Encrypt/Decrypt a file symmetrically using a passphrase.</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">auth</span>: Computes an authentication tag (MAC) of a given file under a given passphrase.</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">kmac</span>: Compute cryptographic hash</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">ec</span>: Elliptic curve functions</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">help</span>: List all commands</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">exit</span>: Exit the program</li>
                <p className='read-me-text'></p>
            </ul>
            <p className='read-me-header'>Tech Stack</p>
            <p className='read-me-text'>
                The app is written 100% in Java
            </p>
        </div>
    )
}
