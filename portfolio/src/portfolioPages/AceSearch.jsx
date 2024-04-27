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
                            Ace Search is a top-down game developed in a university class called Game-A-Week, where we create a new game each week based on a specific theme. 
                            The theme for this particular game was "10 Seconds to Live." Initially, it was challenging to conceptualize a game that would fit the theme while remaining 
                            simple and engaging. The solution was Ace Search, a game where players need to find the ace card within 10 seconds each round. With each new round, 
                            more cards are spawned, increasing the difficulty.
                        </p>
                        <h1>Card System</h1>
                        <p>
                            The development of Ace Search began with a focus on the card mechanics. Each card is defined by a suit and a number. To organize the cards efficiently, 
                            I created four maps, each with a suit as the key and all the numbers in that suit as the values. This setup facilitated the organization of cards for 
                            spawning and condition checks. The next step was to ensure the ace card spawned in each round. I started by randomizing the number of cards to be 
                            spawned and then adding them to an array designated for spawning. To guarantee the appearance of an ace, I iterated over the array again; if no ace was 
                            present, I randomly selected a card and replaced it with an ace. This method ensured that an ace card would spawn in every round.
                        </p>
                        
                    </div>

                </div>
                
                
            </div>
        </>
    )
}

export default AceSearch;

