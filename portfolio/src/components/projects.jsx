
import ProjectCard from "./projectCard";
import "./styles/projects.css"
import gsap from 'gsap';
import React, { useEffect } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Projects = () =>{
    const projects = [
      { title: "Visual Save - UE5 Plugin", description: "Plugin for Unreal Engine that uses steganography to embed save data into images.", imageUrl: "./static/Plugin.png", gifUrl: "https://giphy.com/embed/SgHIRZTdqmCHxDtIB9", path: '/visual-save' },
      { title: "BLU - Game Engine", description: "Custom game engine with the sole purpose to strengthen lower level skills.", imageUrl: "./static/GameEngine.png", gifUrl: "https://giphy.com/embed/EU1r5BEp9sejttjQGc", path: '/blu' },
        { title: "Survive The Enemies - Game", description: "Survival game to develop AI, and weapon system knowledge. ", imageUrl: "./static/UnrealEngine.png", gifUrl: "https://giphy.com/embed/UHlKBN2s2nm3aIb1OB", path :'/survive-the-enemies' },
        { title: "AceSearch", description: "This is a description of Project 2.", imageUrl: "./static/UnrealEngine.png", gifUrl: "https://giphy.com/embed/KP2Hl3Z1EmHnWnCRwo", path: "/ace-search" },
      ];
      useEffect(() => {
        console.log(document.querySelectorAll('.card')); 
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".card", 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 1, stagger: 0.3,
            scrollTrigger: {
              trigger: ".projects-container",
              start: "top 90%",
              end: "bottom top",
              toggleActions: "play none none none",
              
            }
          }
        );
      }, []);
      return (
        <>
            <div className="title">
                <h1>Projects</h1>
            </div>
          <div className="projects-container">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </>
      );

}

export default Projects;