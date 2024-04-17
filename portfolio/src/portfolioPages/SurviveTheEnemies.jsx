import './styles/visualSave.css'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SurviveTheEnemies = () =>
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
                        <iframe src= {"https://giphy.com/embed/UHlKBN2s2nm3aIb1OB"}  frameBorder="0" className="gif" allowFullScreen></iframe><p></p>

                    </div>
                    <div className="title">
                        <h1><u>Survive The Enemies</u></h1>
                    </div>
                    <div className="introduction">
                        <h1>Introduction</h1>
                        <p>
                            Survive the Enemies is a survival game developed in Unreal Engine, created with the primary intention of expanding my knowledge 
                            in implementing weapon and inventory systems. Additionally, I integrated enemy AI and respawning systems that utilize delegates to decide when to 
                            respawn enemies.
                        </p>
                        <h1>Weapon System Approach</h1>
                        <p>
                            My prior approach to implementing weapons involved creating a distinct class for each weapon. While straightforward, this method can be time-consuming 
                            and prone to errors. The approach I opted to explore involves using a single weapon class coupled with a data table that contains all the 
                            necessary weapon data for each entry. When a player picks up a weapon, the game retrieves and loads the data from the selected weapon's row 
                            in the data table. This method also simplifies the process for designers, who need only to add entries to the data table and populate each with 
                            the relevant data.
                        </p>
                        
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default SurviveTheEnemies;