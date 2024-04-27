
import ProjectCard from "./projectCard";
import "./styles/projects.css"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Projects = () =>{
    const projects = [
      { title: "Visual Save - UE5 Plugin", description: "Plugin for Unreal Engine that uses steganography to embed save data into images.", imageUrl: "./static/Plugin.png", gifUrl: "https://giphy.com/embed/SgHIRZTdqmCHxDtIB9", path: '/visual-save' },
      { title: "BLU - Game Engine", description: "Custom game engine with the sole purpose to strengthen lower level skills.", imageUrl: "./static/GameEngine.png", gifUrl: "https://giphy.com/embed/EU1r5BEp9sejttjQGc", path: '/blu' },
        { title: "Survive The Enemies - Game", description: "Survival game to develop AI, and weapon system knowledge. ", imageUrl: "./static/UnrealEngine.png", gifUrl: "https://giphy.com/embed/UHlKBN2s2nm3aIb1OB", path :'/survive-the-enemies' },
        { title: "AceSearch", description: "This is a description of Project 2.", imageUrl: "./static/UnrealEngine.png", gifUrl: "https://giphy.com/embed/KP2Hl3Z1EmHnWnCRwo", path: "/ace-search" },
      ];
      const projectsContainerRef = useRef(null);
      useEffect(() => {
        const projectCards = projectsContainerRef.current.querySelectorAll('.card');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            stagger: 0.2, // Adds a slight delay between animations of subsequent elements
                            ease: 'power1.out',
                        });
                        observer.unobserve(entry.target); // Stop observing after animating
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.1 // Start animating when 10% of the item is visible
            }
        );

        projectCards.forEach(card => {
            gsap.set(card, { opacity: 0, y: 50 }); // Initial state before animation
            observer.observe(card);
        });

        return () => observer.disconnect(); // Cleanup the observer when component unmounts
    }, []);
      return (
        <>
            <div className="title">
                <h1>Projects</h1>
            </div>
          <div className="projects-container" ref={projectsContainerRef}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </>
      );

}

export default Projects;