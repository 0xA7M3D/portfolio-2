import img_main from "../../../../public/images/photo_2026-02-28_07-10-45.jpg"
import { Link } from "react-router-dom";
import "./home.css"
function Home(){
    return(
        <div className="home">
            
            <div className="section-1">

                <div className="btn-online">
                    <span></span>
                    Available for work
                </div>

                <div className="img_main">
                    <img src={img_main} alt="" />
                </div>
                <div className="title-and-desc">
                    <h2>
                        {/* The efficiency of one, the talent of three. Why look elsewhere? */}
                        I help you bring your ideas <span>online</span>
                    </h2>
                    <p>
                        {/* Developer, art director and photographer, I fuse technicality and aestheticism to bring a unique dimension to my work. Passionate about beauty, I give life to projects that captivate and convert */}
                        Web Developer blending technical precision with visual sensitivity.
                        I build performant, user-focused websites where design and functionality work in harmony.
                    </p>
                </div>
                

                <div className="social-icons">
                    <a target="_blank" href="https://github.com/0xA7M3D/">
                        <div className="soc">
                        <i className="fab fa-github"></i>
                    </div>
                    </a>
                    <a target="_blank" href="https://www.instagram.com/0xahmed_1/">
                        <div className="soc">
                        <i className="fab fa-instagram"></i>
                    </div>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/a7meddev">
                        <div className="soc">
                        <i className="fab fa-linkedin"></i>
                    </div>
                    </a>
                    <a target="_blank" href="https://t.me/A7M3D_DeV">
                        <div className="soc">
                        <i className="fab fa-telegram"></i>
                    </div>
                    </a>
                    <a target="_blank" href="https://wa.me/+201125402541">
                        <div className="soc">
                        <i className="fab fa-whatsapp"></i>
                    </div>
                    </a>
                </div>

                <div className="btns-contacts">
                    
                    <Link to="/contacts">
                        <div className="btn-contact">
                            <button className="btn-1">Let's work together 
                                <i className="fas fa-envelope"></i>
                            </button>
                        </div>
                    </Link>

                    <Link to="/contacts">  
                        <div className="btn-contact">
                            <button className="btn-2">Let's work together 
                                <i className="fas fa-calendar-week"></i>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;