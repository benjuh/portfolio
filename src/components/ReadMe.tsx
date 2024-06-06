import React from 'react';
import '../styles/ReadMe.css';

export default function ReadMe() {

    return (
        <div className="read-me-container paper">
            <p className='read-me-header'>About Me</p>
            <p className='read-me-text'>
                I'm a full stack developer with a passion for creating software that helps people. As long as I can solve a problem that people have, I will put all I have into a project. I have experience working with a variety of programming languages and frameworks, and I'm always looking to learn new technologies and tools. I have the most experience developing mobile applications, however, I am also equipped to work on web applications and backend services.
            </p>
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
