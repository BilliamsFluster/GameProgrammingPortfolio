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
                        Ace Search was developed during a university course called Game-A-Week, where each game created must align with a weekly theme. The challenge for
                         "10 Seconds to Live" week led to the creation of "Ace Search," a top-down game where players locate an ace card within 10 seconds each round. 
                         The difficulty increases with each round as more cards are added, enhancing engagement and challenge.
                        </p>
                        <h1>Card System</h1>
                        <p>
                        The gameplay of "Ace Search" centers around a card system where each card is defined by a suit and number, akin to a standard deck. I organized this system
                         using four maps, one for each suit, with each map holding an array of numbers representing the cards in that suit. This setup streamlined card 
                         organization and access for game logic and spawning.
                        To meet the game's thematic challenge, I implemented a system to ensure an ace card appears in each round. After determining the number of cards to spawn
                         via a randomization function, I added them to a spawning array. I then included a verification step to check for at least one ace card in the array. 
                         If absent, I randomly replaced a card with an ace to maintain gameplay integrity and unpredictability, thus preserving the theme of urgency and enhancing 
                         player engagement.
                        </p>
                        
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default AceSearch;

