import "./styles/about.css"
import { gsap } from "gsap";
import React, { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";




const About = () =>{
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(".about h1", {
            opacity: 0,  // Start state
            y: 50        // Starting position for the animation
        }, {
            opacity: 1,  // End state
            y: 0,        // End position for the animation
            duration: 1.2,
            scrollTrigger: {
                trigger: ".about h1",
                start: "top bottom", // Trigger when top of h1 hits bottom of viewport
                toggleActions: "play none none none"
            }
        });

        gsap.fromTo(".aboutMe p", {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.3,  // Delay between animations for each paragraph
            scrollTrigger: {
                trigger: ".aboutMe p",
                start: "top 90%",
                toggleActions: "play none none none",
                
            }
        });

    }, []);
    return(
        <>
        <section>
            <div className="contnet">
                <div className="about">
                    <h4>ABOUT</h4>
                    <h1>About Me</h1>
                </div>
                <div className="aboutMeContainer">
                    <div className="aboutMe">
                    <p>Hello, my name is <b>William</b> I am a <b>Gameplay Programmer</b> and a <b>Front-End Developer</b>. My interests in both stem from my immense satisfaction from <b>translating thoughts into playable realities</b>. </p>
                    <p>I love to <b>solve problems</b> and make the journey <b>fun</b> while doing so. I believe in consistent learning and sharing knowledge while maintaining a sense of joy in the process. Collaborating on ambitious projects to bring functionality to life is a pursuit I thoroughly enjoy. It is my aspiration to contribute my skills and passion to <b>create clean, well organized systems</b> while collaborating with a like-minded team, to produce innovative games and websites that players can appreciate.</p> 
                    <p>I just released a <b>innovative plugin</b> for Unreal Engine. The plugin is called Visual Save and its main purpose is to <b> encode Save Game data into images</b>, allowing for players to load, share and save their progress via images. The plugin presented a lot of challenges and enlightening moments that I had to solve and learn. Go check it out in my portfolio section.</p>
                    </div>

                </div>
            </div>
        </section>
            
        </>
    )

}

export default About;


