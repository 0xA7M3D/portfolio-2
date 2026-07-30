
import My_Image from "../../../../public/images/photo_2026-02-28_07-10-45.jpg"
import svg_css from "../../../../public/svgs/css-3-svgrepo-com.svg"
import svg_git from "../../../../public/svgs/git-svgrepo-com.svg"
import svg_html from "../../../../public/svgs/html-5-svgrepo-com.svg"
import svg_js from "../../../../public/svgs/js-svgrepo-com.svg"
import svg_php from "../../../../public/svgs/php3-svgrepo-com.svg"
import svg_react from "../../../../public/svgs/react-javascript-js-framework-facebook-svgrepo-com (1).svg"
import svg_scss from "../../../../public/svgs/scss-svgrepo-com.svg"
import svg_sql from "../../../../public/svgs/sql-svgrepo-com.svg"
import svg_tailwind from "../../../../public/svgs/tailwindcss-icon-svgrepo-com.svg"
import "./about.css"
function About(){
    return(
        <div className="about active_a">
            <div className="sect-about-1">
                <div className="title-about">
                    <p className="title-main-all">
                        About
                    </p>
                    <p>A few words about me</p>
                </div>
                <hr className="line-projects" />

                <div className="section-img-and-desc">
                    <div className="img">
                        <img src={My_Image} alt="" />
                    </div>
                    <div className="desc-about">
                            <p>Intro</p>
                            <p className="desc-el">
                                Web Developer based in Egypt. With over 3 years of experience in the digital field, I specialize as a full-stack, My work is rooted in the belief that successful digital products require both strong technical foundations and a refined visual perspective. I approach each project with a holistic mindset — understanding not only how it should function, but how it should feel and communicate.
                            </p>
                        
                    </div>

                    
                </div>
                {/* <hr className="line-projects" /> */}
            </div>

{/* 
            <div className="exp">
                <p className="title-experiance">
                    Experiences
                </p>
                <p>Front-End Developer <br/>
                    2021 - Today /360&1
                </p>
                <p>CTO<br/>
2023 - Today
/
Helpr
                </p>
                <p>Artistic Director <br />
2022 - Today

/
Maison Hochard
                </p>
                <p>Web Developer <br />
2019 - Today

/
Freelance
                </p>
            </div> */}

            <hr className="line-projects" />
            <div className="section-about-2">
                <div className="sect-sack">
                    <p className="title-stack">Stack</p>
                    <p className="desc-stack">Some of the software and technologies I use on a daily basis</p>
                </div>

                <div className="sect-boxes">
                    <div className="box">
                        <img src={svg_css} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_git} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_html} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_js} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_php} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_react} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_scss} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_sql} alt="" />
                    </div>
                    <div className="box">
                        <img src={svg_tailwind} alt="" />
                    </div>
          
                </div>
            </div>

            <hr className="line-projects" />

        </div>
    )
}

export default About;