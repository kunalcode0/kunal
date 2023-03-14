import React from 'react';
import "./Social.css";
import{FaLinkedinIn} from 'react-icons/fa'
import{BsGithub} from 'react-icons/bs'
import{BsStackOverflow} from 'react-icons/bs'
import{AiFillBehanceCircle} from 'react-icons/ai'
import{BsInstagram} from 'react-icons/bs'
import resume from "../../Assets/resume.pdf"

function Social() {
  return (
    <>
    <div className="social-container">
        

        <div className="social-cv">
        <a href={resume} download className="cv-btn" data-aos="fade-up-right"  data-aos-delay="100"    data-aos-duration="1200"> Download CV</a>
        <a href="#contact" className=" talk-btn" data-aos="fade-up-left"  data-aos-delay="100"    data-aos-duration="1200">Let's Talk</a>
        </div>

        <div className="social-links" data-aos="zoom-in">
        <a href="https://www.linkedin.com/in/kunal-chauhan-354a32213/" target="_blank"><FaLinkedinIn/></a>
    <a href="https://github.com/kunalcode0" target="_blank"><BsGithub/></a>
    <a href="https://stackoverflow.com/users/19845225/kunal-chauhan" target="_blank"><BsStackOverflow/></a>
    <a href="https://www.behance.net/kunalrajput10" target="_blank"><AiFillBehanceCircle/></a>
    <a href="https://www.instagram.com/corruptprogrammer/" target="_blank"><BsInstagram/></a>
        </div>
    </div>
      
    </>
  )
}

export default Social
