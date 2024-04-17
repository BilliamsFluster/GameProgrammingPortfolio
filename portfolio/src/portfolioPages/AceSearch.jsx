import './styles/visualSave.css'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const AceSearch = () =>
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
                        <iframe src= {"https://giphy.com/embed/KP2Hl3Z1EmHnWnCRwo"}  frameBorder="0" className="gif" allowFullScreen></iframe><p></p>

                    </div>
                    <div className="title">
                        <h1><u>Ace Search</u></h1>
                    </div>
                    <div className="introduction">
                        <h1>Introduction</h1>
                        <p>
                            Survive the Enemies is a Unreal Engine survival game that I built with the main intention of expanding on my knowledge of how to implement a weapon system and inventory system. I also implemented enemy AI and respawning systems that use delegates to make the decision of when to respawn the enemies. 
                                   
                        </p>
                        <h1>Weapon System Approach</h1>
                        <p>
                            My prior knowledge on implementing weapons was to make each weapon its own class. This is a very straight forward approach but this approach can be quite time consuming and error prone. The approach that I wanted to try out is making one weapon class and a 
                            data table containing all the weapon data for each weapon entry. Then when the player picks up a weapon the game reads from the selected weapon row and loads in all of the data. This also means that if designers want to implement weapons they just need to add entries to the data table and populate each entry.  
                        </p>
                        
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default AceSearch;

