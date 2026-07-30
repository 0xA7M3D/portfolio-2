import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import Footer from "./Navbar/footer";
import img_1 from "../assets/img-1.jpg"
import { useRef } from "react";


function Layout(){
    const hover_ref = useRef();
    console.log("lll");
    
    console.log(hover_ref);
    
    function handleMouseOver(e){
        // console.log("lll");
        // console.log(e);
        let x = e.clientX;
        let y = e.clientY;
        // console.log(x,y);
        hover_ref.current.style.left = x + "px";
        hover_ref.current.style.top = y + "px";
    }
    return(
        <div onMouseMove={(e)=>{handleMouseOver(e)}} className="layOut">
            <div ref={hover_ref} className="hover_mouse"></div>
            <div  className="bg-back">
                <img src={img_1} alt="" />
            </div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    )
}

export default Layout;