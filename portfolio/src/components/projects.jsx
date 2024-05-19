
import ProjectCard from "./projectCard";
import "./styles/projects.css"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';



const Projects = () =>{
    const projects = [
      { title: "Visual Save - UE5 Plugin", description: "Check out Visual Save on the Unreal Engine Marketplace.->", sourceImageUrl: "https://www.unrealengine.com/marketplace/en-US/product/visual-save-plugin", sourceImage: "./static/Market.png", imageUrl: "./static/Plugin.png", gifUrl: "https://giphy.com/embed/ULsvTxAo58YG9q9BRN", path: '/visual-save' },
      { title: "BLU - Game Engine", description: "Game engine with the sole purpose to strengthen lower level skills.->",sourceImageUrl: "https://github.com/BilliamsFluster/Blu", sourceImage: "./static/Github.png", imageUrl: "./static/GameEngine.png", gifUrl: "https://giphy.com/embed/EU1r5BEp9sejttjQGc", path: '/blu' },
      { title: "Avail", description: "Educational application for implementing Gameplay Ability System(GAS) functionality in UE5.", sourceImage: "./static/Transparent.png", imageUrl: "./static/UnrealEngine.png", gifUrl: "https://giphy.com/embed/OOtW2wcdGoKmRiPAKn", path: "/avail" },
      { title: "Survive The Enemies - Game", description: "Survival game to develop AI, and weapon system knowledge. ", sourceImage: "./static/Transparent.png", imageUrl: "./static/UnrealEngine.png", gifUrl: "https://giphy.com/embed/UHlKBN2s2nm3aIb1OB", path :'/survive-the-enemies' },
      { title: "AceSearch", description: "Game built for 10 seconds to live", sourceImage: "./static/Transparent.png", imageUrl: "./static/UnrealEngine.png", gifUrl: "https://giphy.com/embed/KP2Hl3Z1EmHnWnCRwo", path: "/ace-search" },
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