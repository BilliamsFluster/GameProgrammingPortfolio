import './styles/visualSave.css'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const VisualSave = () =>
{
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animate the video
        gsap.fromTo(".video iframe", 
            { x: -100, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1, 
              scrollTrigger: {
                trigger: ".video",
                start: "top 80%", // when the top of the trigger hits the 80% of the viewport
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
                        <iframe src= {"https://giphy.com/embed/ULsvTxAo58YG9q9BRN"}  frameBorder="0" className="gif" allowFullScreen></iframe><p></p>

                    </div>
                    <div className="title">
                        <h1><u>Visual Save</u></h1>
                    </div>
                    <div className="introduction">
                    <h1>Introduction</h1>
                    <p>
                    Visual Save is an Unreal Engine plugin I developed for a university project under the guidance of Dr. Hue Henry. 
                    The project merges game development with data security by enabling the saving of game data directly into images, a concept proposed by my professor.
                    </p>
                    <img src="static/VisualSave.png" alt="VisualSave" width={1000}/>
                    <h1>Encoding and Decoding of Data</h1>
                    <p>
                    I tackled the challenge of integrating data encoding within Unreal Engine, which was initially difficult due to my unfamiliarity with the engine's image 
                    handling. To address this, I utilized the least significant bit method for encoding, subtly modifying image pixels to embed data without altering visual 
                    appearance. For decoding, I employed a bitmask technique to retrieve this hidden data, focusing on PNG files to ensure data integrity due to their lossless 
                    format. Additionally, I crafted custom functions to transform image data into game textures, guaranteeing seamless integration with Unreal Engine.
                    </p>
                    <h1>Drag Drop System</h1>
                    <p>
                    To improve the plugin's usability, I developed a drag-and-drop system using Unreal Engine's native tools to maintain consistency and enhance integration. 
                    This system allows users to drag any object that conforms to a specific interface into the game, enhancing flexibility and adaptability for various gaming projects.
                    </p>
                    <img src="static/DragDrop.png" alt="DragDrop" width={800} />
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default VisualSave;