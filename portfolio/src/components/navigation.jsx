import "./styles/navigation.css"
const Navigation = () =>{
    return(
        <>
            <div className="navBar">
                <div className="name">
                    <b>William Wapniarek</b> 
                </div>
                <div className="sections">
                    <ul>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Skills</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navigation;