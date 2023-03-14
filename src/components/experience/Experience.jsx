import React from 'react'
import "./Experience.css"
import experience from "../../Assets/experience.png";
import intern3 from "../../Assets/toffeemoney.jpg";
import intern4 from "../../Assets/lgm.png";

function Experience() {
  return (
    <>
    <div className="experience-container" id='experience'>
    <div className="experience-title" data-aos="zoom-in-up">
          <p className="experience-p1"> What Experience I Have</p>
          <p className="experience-p2"> My Experience</p>
        </div>
        <div className="experience-logo" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">
            <img src={experience} alt="" />
        </div>
        <div className="experience-details "  >
            <p className='experience-p3'>Web Developer & UI/UX Intern</p>
            <p className='experience-p4'> Toffee Money</p>
            <p className='experience-p5'>jan-23 to feb-23</p>
            <img src={intern3} alt="" data-aos="zoom-in-up" />
        </div>

        <div className="experience-details "  >
            <p className='experience-p3'>Web Developer Intern</p>
            <p className='experience-p4'> LetsGrowMore</p>
            <p className='experience-p5'>feb-23 to mar-23</p>
            <img src={intern4} alt="" data-aos="zoom-in-up" />
        </div>

    </div>
      
    </>
  )
}

export default Experience
