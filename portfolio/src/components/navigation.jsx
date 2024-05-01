import "./styles/navigation.css"
import { useEffect, useState } from 'react';
import gsap from "gsap";
import { useNavigate } from 'react-router-dom';

const Navigation = ({ onMenuClick }) =>{
    const [navHeight, setNavHeight] = useState(0);
    const navigate = useNavigate();
    const scaleUp = (e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.4 });
    const scaleDown = (e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.4 });

    useEffect(() => {
        const navBar = document.querySelector('.navBar');
        if (navBar) {
            setNavHeight(navBar.offsetHeight);
        }
    }, []);

    const handleLearnMore = () => {
        navigate("/home", { replace: true }); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return(
        <>
            <div className="navBar">
                <div className="navName">
                <button className = "nameButton" onClick={handleLearnMore}><b>William Wapniarek</b></button>
                     
                </div>
                <div className="sections">
                    <ul>
                    <li onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={() => onMenuClick('projects')}><button>Projects</button></li>
                        <li onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={() => onMenuClick('skills')}><button>Skills</button></li>
                        <li onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={() => onMenuClick('about')}><button>About</button></li>
                        <li onMouseEnter={scaleUp} onMouseLeave={scaleDown} onClick={() => onMenuClick('contact')}><button>Contact</button></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navigation;