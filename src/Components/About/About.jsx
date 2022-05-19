import React from 'react'
import './about.css'
import ME1 from '../../Assets/ME1.jpg'
import {MdCastForEducation} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know </h5>
      <h2> About Me </h2>

      <div className="container about__container">

        <div className="about__me">

          <div className="about__me-image">
            <img src={ME1} alt="About Image"/>
          </div>

        </div>

        <div className='about__content'>

          <div className='about__cards'>
            
          <article className='about__card'>
              <MdCastForEducation className='about__icon'/>
              <h5> Education </h5>
              <small> Computer Science BSc (1st) including Placement Year degree, University of Essex, UK. </small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience </h5>
              <small>2 Years Working </small>
            </article>
          
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5> Projects </h5>
              <small> 10+ Completed Projects</small>
            </article>

          </div>

          <p>
          Junior Software Engineer at ASM-Assembly-Systems (Weymouth, UK) and Computer Science BSc (Hons) (1st)
          including Placement Year degree at the University of Essex, UK. <br></br>

          From an early age I have been interested in Software development, spent most of my time and energy trying to grasp it under the hood.
          I am not interested in a specific language or framework;
          I prefer to spend my time implementing new designs, reading codebases, models, and algorithms.
          Computer science taught me how to face problems and find solutions, thus also built my character.
          Contradictory to the stereotype, I do believe, I have proper communicative and time management skills.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About