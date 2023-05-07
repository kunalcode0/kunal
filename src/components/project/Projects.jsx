import React from 'react'
import './Projects.css'
import img1 from '../../Assets/portfolio.png'
import img3 from '../../Assets/resturant-app.png'
import img2 from '../../Assets/coffee.png'
import img4 from '../../Assets/weather-app.png'
import img6 from '../../Assets/gym-app.png'
import img5 from '../../Assets/note-maker.png'
import projects from '../../Assets/projects.png'

function Portfolio() {
  return (
 <div className="project-container" id='projects'>
    <div className="project-title" data-aos="zoom-in-up">
    <p className='project-p1'>My Recent Work</p>
    <p className='project-p2'>Projects</p>
    </div>
    <div className="project-logo" data-aos="zoom-in-up">
        <img src={projects} alt="" />
    </div>
    <div className="container portfolio__container">
        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img1} alt="" />
            </div>
            <h3>Responsive Portfolio Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/kunal-portfolio.com"  target="_blank"   rel="noreferrer" className="github-btn">Github</a>
            <a href="https://kunalcode0.github.io/kunal-portfolio.com/" className="livedemo-btn" target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img2} alt="" />
            </div>
            <h3>Responsive Coffee Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/coffee-website"  target="_blank"   rel="noreferrer" className="github-btn">Github</a>
            <a href="https://kunalcode0.github.io/coffee-website/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img3} alt="" />
            </div>
            <h3>Responsive Resturant Website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/resturant-website"  target="_blank"   rel="noreferrer"  className="github-btn">Github</a>
            <a href="https://kunalcode0.github.io/resturant-website/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img4} alt="" />
            </div>
            <h3>Weather App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/weather-app" className="github-btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://kunalcode0.github.io/weather-app/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img6} alt="" />
            </div>
            <h3>Gym website</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/gym-app" className="github-btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://kunalcode0.github.io/gym-app/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-in-up">
            <div className="portfolio__image">
                <img src={img5} alt="" />
            </div>
            <h3>Note Maker</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/kunalcode0/note-maker" className="github-btn"  target="_blank"   rel="noreferrer">Github</a>
            <a href="https://kunalcode0.github.io/note-maker/" className="livedemo-btn"  target="_blank"   rel="noreferrer">Live Demo</a>
            </div>
        </article>
    </div>
    </div>
  )
}

export default Portfolio
