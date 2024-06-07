import '../styles/ReadMe.css';

export default function UnifiedProject() {

    return (
        <div className="read-me-container paper">
            <p className='read-me-header'>Unified Mobile App</p>
            <p style={{color: "rgba(255,255,255,0.4)", fontFamily: "monospace"}}>This is a private repository</p>
            <p className='read-me-text'>
                Unified is a mobile app on iOS and android that allows users in a community to easily communicate with their HOA or city officials to report incidents in the area. 
            </p>
            <p className='read-me-header'>Purpose</p>
            <p className='read-me-text'>
                The story behind Unified is that I was working on a project for a local HOA and I wanted to make it easier for them to report incidents in the area. I decided to create a mobile app that would allow them to easily report incidents and get a response from the city officials. This would help them to be more efficient and effective in their community. Since implementing Unified in their community, they have seen less crime and more timely responses to things like vandalism and lost pets.
            </p>
            <p className='read-me-header'>Features</p>
            <p className='read-me-text'>
                The app allows users to report incidents in the area, view a map of the area, and get a response from the city officials. It also allows users to view a list of all the incidents that have been reported in the area. The app is designed to be user-friendly and easy to navigate, making it a great tool for anyone who wants to stay informed about the community. The data is also stored so that the people in the community can see areas that struggle with certain types of incidents more often and allow them to address that problem with their HOA or city officials.
            </p>
            <p className='read-me-header'>Tech Stack</p>
            <ul className='read-me-list'>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Programming Language</span>: Javascript</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Hosting Service</span>: Supabase</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Database</span>: PostgreSQL</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Version Control</span>: Git</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Frameworks</span>: React, React Native, Expo</li>
                <p className='read-me-text'></p>
            </ul>
        </div>
    )
}
