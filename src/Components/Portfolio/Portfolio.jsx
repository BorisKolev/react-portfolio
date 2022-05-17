import React from 'react'
import './portfolio.css'
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG1} alt=""></img>
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className="btn" target="_blank"> Github </a>
                <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank"> Live Demo </a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG1} alt=""></img>
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className="btn" target="_blank"> Github </a>
                <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank"> Live Demo </a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG1} alt=""></img>
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className="btn" target="_blank"> Github </a>
                <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank"> Live Demo </a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={IMG1} alt=""></img>
                </div>
                <h3>This is a portfolio item title</h3>
                <a href="https://github.com" className="btn" target="_blank"> Github </a>
                <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="_blank"> Live Demo </a>
            </article>

        </div>

    </section>
  )
}

export default Portfolio