import "./styles/navigation.css"
import gsap from "gsap";
const Navigation = () =>{
    const scaleUp = (e) => gsap.to(e.currentTarget, { scale: 1.1, duration: 0.4 });
    const scaleDown = (e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.4 });
    return(
        <>
            <div className="navBar">
                <div className="name">
                    <b>William Wapniarek</b> 
                </div>
                <div className="sections">
                    <ul>
                        <li onMouseEnter={scaleUp} onMouseLeave={scaleDown}><a href="">Projects</a></li>
                        <li onMouseEnter={scaleUp} onMouseLeave={scaleDown}><a href="">Skills</a></li>
                        <li onMouseEnter={scaleUp} onMouseLeave={scaleDown}><a href="">About</a></li>
                        <li onMouseEnter={scaleUp} onMouseLeave={scaleDown}><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navigation;