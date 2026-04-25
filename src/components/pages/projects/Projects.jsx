
import img_project from "../../../../public/images/photo_2026-03-01_17-51-46.jpg"
// import img_project_2 from "../../../../public/images/proj-2.png"
import img_project_3 from "../../../../public/images/proj-3.png"
import img_project_4 from "../../../../public/images/proj-4.png"
import "./projects.css"
function Projects(){
    return(
        <div className="projects">
            <div className="title-projects">
                <p className="title-main-all">Projects</p>
                <p>A list of projects I've worked on</p>
            </div>
            <hr className="line-projects" />

            <div className="all-projects">

                
                <a target="_blank" href="https://salamaabdulkawi.com">
                    <div className="project">
                        <div className="spans">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="img-project">
                            <img src={img_project} alt="" />
                        </div>
                        <div className="btn-and-info">
                            <div className="l">
                                <p>Wep client</p>
                                <p className="date">2025</p>
                            </div>
                            <div className="r">
                                <button>
                                    <i className="fa fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://ftd-1.netlify.app">
                    <div className="project">
                        <div className="spans">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="img-project">
                            <img src={img_project_3} alt="" />
                        </div>
                        <div className="btn-and-info">
                            <div className="l">
                                <p>Wep collage</p>
                                <p className="date">2025</p>
                            </div>
                            <div className="r">
                                <button>
                                    <i className="fa fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://mx-crazy-t.netlify.app">
                    <div className="project">
                        <div className="spans">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="img-project">
                            <img src={img_project_4} alt="" />
                        </div>
                        <div className="btn-and-info">
                            <div className="l">
                                <p>Simble page</p>
                                <p className="date">2025</p>
                            </div>
                            <div className="r">
                                <button>
                                    <i className="fa fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </a>
                
             

            </div>
        </div>
    )
}

export default Projects