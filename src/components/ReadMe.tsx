import React from 'react';
import '../styles/ReadMe.css';

export default function ReadMe() {

    return (
        <div className="read-me-container paper">
            <p className='read-me-header'>About Me</p>
            <p className='read-me-text'>I'm a full stack developer with a passion for building user-friendly and accessible web applications. I have a strong background in front-end development, with experience in React, Node.js, and TypeScript. I am also proficient in back-end development using Express and MongoDB.</p>
            <p className='read-me-header'>Skills</p>
            <ul className='read-me-list'>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Programming Languages</span>: Python, C#, Java, Javascript, Typescript, Go</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Shell Scripting</span>: Bash, Zsh, Powershell</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Databases</span>: MySQL, PostgreSQL, NoSQL</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Cloud</span>: AWS, GCP</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Version Control</span>: Git</li>
                <li className='read-me-list-item'><span className="read-me-list-item-title">Frameworks</span>: React, React Native, Node.js, Tailwind CSS, .NET, JUnit</li>
                <p className='read-me-text'></p>
            </ul>
            <p className='read-me-header'>Education</p>
            <p className='read-me-text'>B.S., Computer Science, University of Washington, June 2022</p>
            <p className='read-me-subheading'>Notable Courses</p>
            <p className='read-me-text'>Data Structures and Algorithms, Machine Learning, Cryptography, Web Development, Mobile Applications, Introduction to Database Systems</p>
        </div>
    )
}
