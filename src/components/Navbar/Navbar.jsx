import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"
function NavBar(){
    const location = useLocation()
    console.log(location.pathname);
    
    return(
        <div className="navbar">
            <div className="links">
                <Link to="/" className={`link ${location.pathname =="/" ?"active":""}`}>
                    <i className="fal fa-home"></i>
                </Link>
                {/* <Link to="/" className={`link ${location.pathname =="/works" ?"active":""}`}>
                    <i className="fab fa-hive"></i>
                </Link> */}
                <Link to="/projects" className={`link ${location.pathname =="/projects" ?"active":""}`}>
                    <i className="fal fa-book"></i>
                </Link>
                <Link to="/about" className={`link ${location.pathname =="/about" ?"active":""}`}>
                    <i className="fal fa-user"></i>
                </Link>
                <Link to="/contacts" className={`link ${location.pathname =="/contacts" ?"active":""}`}>
                    <i className="fal fa-envelope"></i>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;