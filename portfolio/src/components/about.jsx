import "./styles/about.css"
import { gsap } from "gsap";
import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";




const About = () =>{
    const aboutRef = useRef(null);

    useEffect(() => {
        const elementsToAnimate = aboutRef.current.querySelectorAll('.animate');

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            ease: 'power1.out',
                            onComplete: () => observer.unobserve(entry.target)
                        });
                    }
                });
            },
            {
                threshold: 0.5 // adjust as necessary
            }
        );

        elementsToAnimate.forEach(element => {
            gsap.set(element, { opacity: 0, y: 30 }); // initial state
            observer.observe(element);
        });

        return () => observer.disconnect(); // Cleanup observer on component unmount
    }, []);
    return(
        <>
        
        <div className="aboutContainer" ref={aboutRef}>
            <div className="aboutContent">

            
                <div className="about">
                    <h4>ABOUT</h4>
                    <h1>About Me</h1>
                </div>
                <div className="aboutMeContainer">
                    <div className="aboutMe">
                    <p  className="animate">Hello, my name is <b>William</b> I am a <b>Gameplay Programmer</b>. My interest stem from my immense satisfaction from <b>translating thoughts into playable realities</b>. </p>
                    <p  className="animate">I love to <b>solve problems</b> and make the journey <b>fun</b> while doing so. I believe in consistent learning and sharing knowledge while maintaining a sense of joy in the process. Collaborating on ambitious projects to bring functionality to life is a pursuit I thoroughly enjoy. It is my aspiration to contribute my skills and passion to <b>create clean, well organized systems</b> while collaborating with a like-minded team, to produce innovative games and applications that players can appreciate.</p> 
                    <p  className="animate">I just released a <b>innovative plugin</b> for Unreal Engine. The plugin is called Visual Save and its main purpose is to <b> encode Save Game data into images</b>, allowing for players to load, share and save their progress via images. The plugin presented a lot of challenges and enlightening moments that I had to solve and learn. Go check it out in my portfolio section.</p>
                    </div>

                </div>
            </div>
        </div>
    
        
        </>
    )

}

export default About;


