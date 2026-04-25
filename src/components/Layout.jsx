import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import Footer from "./Navbar/footer";
import back_ani from "../assets/original-e10daf1419f90a8b1787ae43f95d3c36.mp4"


function Layout(){
    return(
        <div className="layOut">
            <div className="bg-back">
                <video autoPlay muted loop src={back_ani} ></video>
            </div>
        <NavBar/>
        <Outlet></Outlet>
        <Footer/>
        </div>
    )
}

export default Layout;