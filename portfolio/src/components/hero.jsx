import React, { useEffect } from 'react';
import "./styles/hero.css"
import gsap from 'gsap'
const Hero = () =>{
    useEffect(() => {
        // Text Animation
        gsap.fromTo(".name h1", 
            { x: -50, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo(".field h2", 
            { x: -50, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1, delay: 0.2, ease: 'power3.out' }
        );
        gsap.fromTo(".heroDescription", 
            { x: -50, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1, delay: 0.4, ease: 'power3.out' }
        );

        // Image Animation
        gsap.fromTo(".billy", 
            { x: 50, opacity: 0 }, 
            { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );

        // Link Animation
        gsap.fromTo(".links img, .links button", 
            { y: 30, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, delay: 0.5, ease: 'power3.out' }
        );
    }, []);

    const scaleUp = (e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.4 });
    const scaleDown = (e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.4 });
    return(
        <>
            
            <div className="container">
                <div className="containerLeft">
                    <div className="name">
                        <h1>Hello I'm <b>William</b></h1>
                    </div>
                    <div className="field">
                        <h2>Gameplay Programmer</h2>
                    </div>
                    <div className="heroDescription">
                        I love to solve problems and make the journey fun while doing so. I believe in consistent learning and sharing 
                    knowledge while maintaining clean, well organized code that helps transform ideas into reality that players can experience
                    </div>
                    

                </div>
                <div className="containerRight">
                    <img className="billy" src="./static/Billy.png" alt="Billy" />
                    <div className="links">
                        <a href="https://www.linkedin.com/in/williamwapniarek/">
                            <img onMouseEnter={scaleUp} onMouseLeave={scaleDown} src="./static/linkedin.png" alt="linkedin" />
                        </a>
                        <a href="https://github.com/BilliamsFluster">
                            <img onMouseEnter={scaleUp} onMouseLeave={scaleDown} src="./static/Github.png" alt="linkedin" />
                        </a>
                        <a href="mailto:ww27hockey@icloud.com">
                            <img onMouseEnter={scaleUp} onMouseLeave={scaleDown} src="./static/Mail.png" alt="linkedin" />
                        </a>
                        <a href="https://docs.google.com/document/d/12GtkKixHYPvFlJCWfXx_4etS_pKIu5v70eESW6R86J4/export?format=pdf" download title="Download Resume" className="resumeButton">
                            <button onMouseEnter={scaleUp} onMouseLeave={scaleDown}>
                            Resume
                            </button>
                        </a>

                    </div>
                </div>
            </div>
            
        </>
    )

}

export default Hero;