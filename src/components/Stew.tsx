export default function Stew() {
    return (
        <div className="read-me-container paper">
            <p className='read-me-header'>Stew</p>
            <a href="https://github.com/benjuh/stew" target="_blank" rel="noreferrer" style={{ color: "rgba(0,122,194,0.8)", textDecoration: "none" }}>Check me out on Github!</a>
            <p className='read-me-text'>
                Stew is a CLI tool written 100% in Go that allows you to create, store, and use templates to remove boilerplate and unnecessary project setup time.</p>
            <p className='read-me-header'>Purpose</p>
            <p className='read-me-text'>
                I often like to create new projects and I find it annoying to have to go through the setup process every time I want to create a new project. I wanted to make it easier for myself by creating a CLI tool that would allow me to quickly create a new project with all the necessary files and folders. Often times I would want to create a new react project but didn't want to use exactly the template `create-react-app` restricted me to. Hence, I built this and now I use it for so much more.
            </p>
            <p className='read-me-header'>Features</p>
            <p className='read-me-text'>
                The app allows the following commands in the cli tool:
            </p>
            <ul className='read-me-list'>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">stew add</span>: add a stew template</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">stew edit</span>: edit the values of a saved stew</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">stew get</span>: get the values of a saved stew</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">stew list</span>: list all saved stews</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">stew new</span>: create a new instance of a saved stew (aka use a stew)</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">stew remove</span>: remove a saved stew</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title code">stew replace</span>: replace all instances of a word or string in a project</li>
                <p className='read-me-text'></p>
            </ul>
            <p className='read-me-header'>Tech Stack</p>
            This is a CLI tool written 100% in Go that utilizes cobra and viper to create a configurable CLI.
        </div>
    )
}
