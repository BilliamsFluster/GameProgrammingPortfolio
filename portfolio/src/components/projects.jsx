import ProjectCard from "./projectCard";
import "./styles/projects.css"

const Projects = () =>{
    const projects = [
        { title: "Visual Save - UE5 Plugin", description: "Plugin for Unreal Engine that uses steganography to embed save data into images.", imageUrl: "./static/Plugin.png", gifUrl: "https://giphy.com/embed/SgHIRZTdqmCHxDtIB9" },
        { title: "BLU - Game Engine", description: "Custom game engine with the sole purpose to strengthen lower level skills.", imageUrl: "./static/GameEngine.png", gifUrl: "https://giphy.com/embed/EU1r5BEp9sejttjQGc" },
        { title: "Survive The Enemies - Game", description: "Survival game to develop AI, and weapon system knowledge. ", imageUrl: "./static/UnrealEngine.png", gifUrl: "https://giphy.com/embed/UHlKBN2s2nm3aIb1OB" },
        { title: "dd", description: "This is a description of Project 2.", imageUrl: "./static/UnrealEngine.png"  },
      ];
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