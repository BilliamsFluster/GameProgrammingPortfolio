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
                        Survive the Enemies is a survival game I developed in Unreal Engine, focusing on implementing advanced game mechanics including weapon 
                        and inventory systems, alongside AI and a delegate-controlled respawning system. This project served as both a technical 
                        challenge and a learning opportunity, enhancing my understanding of Unreal Engine’s capabilities and best practices.
                        </p>
                        <h1>Weapon System Approach</h1>
                        <p>
                        In previous projects, I utilized individual classes for each weapon type, a method that became cumbersome as game complexity grew. To optimize this, 
                        I implemented a unified weapon class linked to a data table containing all necessary weapon attributes like damage, ammunition type, and range. This 
                        approach simplifies weapon management by enabling dynamic attribute assignment when a weapon is picked up, and allows designers to easily update or 
                        add new weapons directly in the data table. This streamlined process enhances game adaptability, reduces potential errors, and accelerates development.
                        </p>
                        <h1>AI System</h1>
                        <p>
                        The AI uses Unreal Engine's Perception System, allowing enemies to detect players based on sight and hearing. 
                        I configured sensory components to trigger AI behaviors through behavior trees, which define logical sequences of actions and 
                        decisions. Blackboards are used to store and manage runtime data for each AI entity, facilitating complex decision-making and state management.
                        </p>
                        <h1>Multidirectional Locomotion System</h1>
                        <p>
                        The directional vector calculated from the player is utilized to drive a 2D blend space in Unreal Engine, which controls character animations based on movement direction and 
                        speed. This vector is calculated each frame and mapped to corresponding axes in the blend space—typically, one axis represents the speed of the character while the other 
                        represents the direction.
                        The system processes this vector to adjust the character's animation state dynamically. As the player changes direction or speed, the vector updates, and the blend 
                        space outputs the appropriate animation by interpolating between available animations (like walking, running, or idle) that best match the current movement vector. 
                        This setup allows for smooth and responsive transitions between animations, giving a realistic portrayal of movement that aligns closely with the player's intended 
                        direction and speed.
                        </p>
                        
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default SurviveTheEnemies;