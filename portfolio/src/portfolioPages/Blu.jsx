import './styles/visualSave.css'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Blu = () =>{
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate the video
        gsap.fromTo(".video iframe", 
            { x: -100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1, 
              scrollTrigger: {
                trigger: ".video",
                start: "top 80%", // Animation starts when the top of the trigger hits 80% of the viewport
                toggleActions: "play none none none"
              },
              ease: "power3.out"
            }
        );

        // Animate each header
        gsap.fromTo(".visualSaveContent h1", 
            { x: -100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1, 
              scrollTrigger: {
                trigger: ".visualSaveContent h1",
                start: "top 90%",
                toggleActions: "play none none none"
              },
              ease: "power3.out",
              stagger: 0.2
            }
        );

        // Animate paragraphs
        gsap.fromTo(".visualSaveContent p", 
            { x: 100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1, 
              scrollTrigger: {
                trigger: ".visualSaveContent p",
                start: "top 95%",
                toggleActions: "play none none none"
              },
              ease: "power3.out",
              stagger: 0.2
            }
        );

    }, []);
    return(
        <>
        <div className="visualSaveContainer">
                <div className="visualSaveContent">
                    <div className="video">
                        <iframe src= {"https://giphy.com/embed/EU1r5BEp9sejttjQGc"}  frameBorder="0" className="gif" allowFullScreen></iframe><p></p>

                    </div>
                    <div className="title">
                        <h1><u>BLU</u></h1>
                    </div>
                    <div className="introduction">
                        <h1>Introduction</h1>
                        <p>
                        Blu is a custom game engine I developed from scratch to deepen my understanding of core game engine components, 
                        such as event handling and graphics rendering. The project was instrumental in enhancing my problem-solving abilities and applying theoretical 
                        knowledge practically in game development.
                        </p>
                        <h1> Scripting System</h1>
                        <p>
                        Blu's game engine integrates a Mono-based C# scripting system that allows for dynamic script loading and execution without engine restarts. This system compiles 
                        C# scripts into .NET assemblies, enabling real-time script updates. A separate solution enhances this setup, linking C# scripting directly with Blu's core 
                        functionalities like scene management and entity handling, allowing scripts to manipulate game objects and perform complex operations efficiently. 
                        This integration ensures development flexibility and efficient workflow in game logic implementation.
                        </p>
                        <img src="static/ScriptSystem.png" alt="ScriptSystem" width={1000}/>
                        <h1>Event System</h1>
                        <p>
                        In designing Blu's event system, I tackled the challenge without prior experience in such architectures. My approach involved studying and implementing 
                        layers and layer stacks to effectively manage event flow within the engine. I developed a cohesive structure that included an event class, an event 
                        manager, and an event dispatcher. This configuration ensured efficient event organization and selective processing by different engine layers, 
                        providing a robust foundation for managing game dynamics.
                        </p>
                        <img src="static/EventManager.png" alt="EventManager" width={1000}/>
                        <h1>External Dependencies</h1>
                        <p>
                        Managing external dependencies was critical for Blu’s development. I utilized Premake to handle dependencies essential for graphics and physics, such as OpenGL and 
                        Box2D. This tool streamlined the setup and integration process, significantly reducing complexity and allowing me to concentrate on enhancing the engine’s core features. 
                        Mastery of Premake improved my efficiency in managing project dependencies, which was important for the smooth development of Blu.
                        </p>
                        <h1>2D Renderer Implementation</h1>
                        <p>
                        The system initializes specific vertex arrays and buffers for each shape type, ensuring precise data handling for rendering. I configured the buffer layouts to manage attributes such as color, position, and texture coordinates, crucial for the GPU's accurate processing of vertex data.
                        Dynamic shader management is integral to the module. Shaders are loaded and bound as needed for different drawable objects, with uniforms like transformation matrices and texture slots updated in real-time during rendering. This ensures optimal shader operation.
                        The rendering process utilizes batch processing, accumulating quads, circles, and lines into single buffers to minimize draw calls, thereby boosting performance. A texture management system allows multiple textures to be bound in a single batch, reducing overhead and enhancing rendering efficiency.
                        </p>
                        <img src="static/Renderer.png" alt="Renderer" width={1000}/>
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default Blu;