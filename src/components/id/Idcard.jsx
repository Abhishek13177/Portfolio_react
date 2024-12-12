import dpImage from "../../assets/images/dp.jpg";
import { MdOutlineDownloading } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import "./idcard.css"

function Id()
{

    return(
        <>
          <section className="id-section " id="about">
            <div className="id-info-container width85" >

                <div className="id-container">
                    <img src={dpImage} alt="profilepic" className="dp-img"/>
                    <h2 className="id-font1">Abhishek Chauhan</h2>
                    <div className="about-btn btn-one text-center">
                        <h6 >Available for Work</h6> 
                        <div className="circle pulse color-pulse"></div>
                    </div>
                    <div className="social-buttons">
                        {/* Facebook Icon */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="social-icon fb-icon"  />
                        </a>

                        {/* GitHub Icon */}
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="social-icon github-icon" />
                        </a>

                        {/* LinkedIn Icon */}
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="social-icon linkedin-icon" />
                        </a>

                        {/* Twitter Icon */}
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="social-icon twitter-icon" />
                        </a>
                    </div>
                </div>
                <div className="intro-div">
                    <h2 className="id-font2">Hello, I’m Abhishek Chauhan,<br/><span className="id-font2 web-dev">Web Developer</span> and UX <br/>/ UI Designer Based in <br/>India.</h2>
                    <button className="down-btn">Download CV &nbsp;<MdOutlineDownloading /></button>
                    <div className="ul-div">
                        <ul className="info-list popin">
                            <li><FiArrowUpRight/> Logo Design</li>
                            <li><FiArrowUpRight/> Branding Identity</li>
                            <li><FiArrowUpRight/> Web Design</li>
                        </ul>
                        <ul className="info-list popin">    
                            <li><FiArrowUpRight/> Social Marketing</li>
                            <li><FiArrowUpRight/> Digital Marketing</li>
                            <li><FiArrowUpRight/> Product Design</li>
                        </ul>
                    </div>
                </div>
                
            </div>
          </section>  
        </>
    );
}
export default Id;