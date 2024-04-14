import "./styles/hero.css"
import gsap from 'gsap'
const Hero = () =>{
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
                    <div className="description">
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