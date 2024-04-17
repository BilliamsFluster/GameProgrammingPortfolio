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
                            Blu is a game engine designed primarily to aid in developing lower-level skills essential for game programming. 
                            I created Blu because, as a game developer, understanding more complex systems can illuminate many of the challenges programmers face. 
                            Knowing how lower-level systems such as event systems, rendering systems, and overall game engine structure work makes problem-solving more intuitive. 
                            What benefit would there be in making games if you don't even have a basic understanding of how game engines operate? 
                            Since I use Unreal Engine for game programming, I aim to learn how to write better code and follow superior standards to improve efficiency 
                            in both work and time. This is why I decided to create a very basic game engine. Moreover, it's quite intriguing to explore different perspectives, 
                            which may connect missing pieces of information needed for a breakthrough.
                        </p>
                        <h1>Event System</h1>
                        <p>
                            Event systems can be complex, especially within game engines. When I first started implementing the event system in Blu, 
                            I didn't even know what layers and layer stacks were. Since this was my first game engine in development, much wasn't known at the time of creation. 
                            My approach to structuring the event system in Blu was straightforward: firstly, I needed to understand layers and layer stacks, which help organize 
                            the game engine's event system. I learned that when an event is triggered, it passes through each layer, and the layer can choose whether to handle 
                            that event or not. I have an event class, an event manager class, and an event dispatcher class. Keeping complex systems as simple as possible has 
                            taught me that simplification can help programmers avoid numerous headaches in the future. This structure has significantly aided my understanding of 
                            Unreal's event system, enhancing my ability to leverage it more efficiently than in the past.
                        </p>
                        <h1>External Dependencies</h1>
                        <p>
                            This game engine is the first massive project I have been exposed to working on. Managing dependencies is crucial, not only for saving time but also 
                            for reducing headaches. I came across Premake to handle the dependencies for my game engine. I learned that Premake is quite easy to use and 
                            incorporate into the project. It helps manage all my dependencies, which include OpenGL, Box2D, YAML, and so on.
                        </p>
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default Blu;