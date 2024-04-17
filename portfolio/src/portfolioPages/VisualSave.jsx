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
                        <iframe src= {"https://giphy.com/embed/SgHIRZTdqmCHxDtIB9"}  frameBorder="0" className="gif" allowFullScreen></iframe><p></p>

                    </div>
                    <div className="title">
                        <h1><u>Visual Save</u></h1>
                    </div>
                    <div className="introduction">
                    <h1>Introduction</h1>
                    <p>
                        Visual Save is an Unreal Engine plugin that has provided a challenging and insightful opportunity to improve as a game developer. It was created to 
                        fulfill the requirements of a university course known as SIP (Student Innovation Project). Passing the SIP class is necessary for graduation, and it 
                        focuses on the creation of innovative projects. Struggling to come up with project ideas, I consulted my professor, Dr. Hue Henry, who proposed a plugin 
                        that uses Unreal Engine to store game data into images. He is the reason this project exists, and I am thankful for the opportunity to work on it.
                    </p>
                    <h1>Encoding and Decoding of Data</h1>
                    <p>
                        Since Visual Save is a steganography plugin, it needs to encode and decode data within images. Initially, integrating this functionality with 
                        Unreal Engine posed a challenge, as it was unfamiliar to me. To address this, I opted to use the least significant bit for encoding data and a bit 
                        mask for decoding. The resulting data is added to a byte array, forming the save game object that was passed into the encoding algorithm. Although 
                        this method proved successful, I initially overlooked how it would integrate with Unreal Engine. As images in UE5 are treated as textures, this added a 
                        layer of complexity. My primary concerns were compression and texture format. To mitigate the compression issue, I use PNG images and ensure they are 
                        not uploaded to sites that compress images. Regarding textures, I have developed functions to create textures from pixel data and save the encoded 
                        texture data into PNG images stored in a directory local to the game.
                    </p>
                    <h1>Drag Drop System</h1>
                    <p>
                        Visual Save features an integrated drag-and-drop system for uploading encoded images. Initially, I was uncertain how to implement this feature effectively and 
                        considered using platform-specific libraries. However, after consulting with several tools developers, I learned about external drag-and-drop operations with 
                        Slate, though unfortunately, UMG does not support external operations, only internal ones. While designing this system, I included the option for users to pass 
                        in a world object that implements a specific interface to hold the drag-and-drop data. This design not only enhances user comprehension but also adds 
                        flexibility, allowing users to employ any object they prefer, as long as it adheres to the specified interface. This approach opens up endless possibilities 
                        for handling the saving and loading processes more dynamically.

                    </p>
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default VisualSave;