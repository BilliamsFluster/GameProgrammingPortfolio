import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './styles/skills.css';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const skillsContainer = skillsRef.current;
        const skillItems = skillsContainer.querySelectorAll('.skill-item');

        // Set initial state for all skill items
        gsap.set(skillItems, { opacity: 0, y: 50 });

        // Use IntersectionObserver to trigger animation when the container is visible
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate all skill items at once with stagger
                        gsap.to(skillItems, {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            stagger: 0.1,
                            ease: "power1.out",
                            onComplete: () => observer.unobserve(entry.target) // Stop observing after animation
                        });
                    }
                });
            }, 
            {
                threshold: 0.1 // Trigger animation when 10% of the container is visible
            }
        );

        observer.observe(skillsContainer); // Observe the skills container

        return () => {
            observer.disconnect(); // Cleanup observer on component unmount
        };
    }, []);

    return (
    <div className="skills" ref={skillsRef}>
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
                    <h2>Engines & Tools</h2>
                    <ul>
                        <li className="skill-item">Unreal Engine</li>
                        <li className="skill-item">Unity</li>
                        <li className="skill-item">Git</li>
                        <li className="skill-item">Visual Studio</li>
                        <li className="skill-item">Rider</li>
                        <li className="skill-item">Premake</li>
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
                
            </div>
        </div>
    </div>
    
    );
}

export default Skills;
