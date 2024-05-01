import './styles/visualSave.css'
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Avail = () =>
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
                        <iframe src= {"https://giphy.com/embed/OOtW2wcdGoKmRiPAKn" }  frameBorder="0" className="gif" allowFullScreen></iframe><p></p>

                    </div>
                    <div className="title">
                        <h1><u>Avail</u></h1>
                    </div>
                    <div className="introduction">
                        <h1>Introduction</h1>
                        <p>
                        Avail is a collaborative project designed to enhance proficiency with Unreal Engine 5's Gameplay Ability System (GAS). 
                        My role involved implementing key gameplay abilities to demonstrate the system's capabilities and improve our team's development practices.
                        </p>
                        <h1>Frostbite Ability</h1>
                        <p>
                        Developed the Frostbite ability, which applies a damaging and slowing debuff to enemies. 
                        I used Unreal's GAS to manage the complexity of this continuous effect, focusing on ensuring the consistent application of 'ticks'—the intervals at 
                        which effects impact gameplay. This was achieved by integrating a gameplay cue that triggers at the end of the debuff, resetting the player's mana and 
                        clearing effects to maintain balance and prevent lingering impacts.
                            <img src="static/Frostbite.png" alt="Frostbite" width={1000} />
                        </p>
                        <h1>Icicle Barrage Ability</h1>
                        <p>
                        Created the Icicle Barrage ability, an attack that dynamically summons ice shards at a target location. The ability setup involved precise vector 
                        calculations to control shard impact points from a designated height, managed through a gameplay timer. I utilized Unreal's particle system for shard 
                        visualization and a sphere overlap for damage application, ensuring effective and visually appealing interactions.
                        </p>
                        <img src="static/IcicleBarrage.png" alt="IcicleBarrage" width={1000} />
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default Avail;

