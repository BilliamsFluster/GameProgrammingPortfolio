import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './styles/skills.css';

const Skills = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".skill-item", 
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 0.5, 
              stagger: 0.1,
              scrollTrigger: {
                  trigger: ".skills-container",
                  start: "top 90%",
                  end: "bottom 80%",
                  toggleActions: "play none none none"
              }
            }
        );
    }, []);

    return (
    <div className="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill-category">
                    <h2>Languages</h2>
                    <ul>
                        <li className="skill-item">C++</li>
                        <li className="skill-item">C#</li>
                        <li className="skill-item">C</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h2>Engines</h2>
                    <ul>
                        <li className="skill-item">Unreal Engine</li>
                        <li className="skill-item">Unity</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h2>Game Development Concepts</h2>
                    <ul>
                        <li className="skill-item">Game Physics</li>
                        <li className="skill-item">AI Programming</li>
                        <li className="skill-item">Computer Graphics</li>
                        <li className="skill-item">Gameplay Systems</li>
                    </ul>
                </div>
                <div className="skill-category">
                    <h2>Tools</h2>
                    <ul>
                        <li className="skill-item">Git</li>
                        <li className="skill-item">Visual Studio</li>
                        <li className="skill-item">Rider</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    );
}

export default Skills;
