import React from 'react'
import './portfolio.css'
import ProgrammingViewerIMG from '../../Assets/ProgrammingViewer.png'
import SnakeIMG from '../../Assets/Snake.png'
import PuzzleFinderIMG from '../../Assets/Puzzle_Finder.PNG'
import MambossaSearchIMG from '../../Assets/MambossaSearch.PNG'
import LR_TextClassifierIMG from '../../Assets/LR_Text_Classifier.PNG'
import CompilerIMG from '../../Assets/Compiler.PNG'


const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            
            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={ProgrammingViewerIMG} alt=""></img>
                </div>
                <h3>
                  Programming Viewer is standalone application used internally within ASM Assembly Systems
                  for reading files with information about the current programs runned on the machine before it crashes.
                  Created using C# WPF/Prism/Ninject.
                </h3>
                <a href="https://github.com/BorisKolev/ASM.DEK.ProgrammingViewer" className="btn" target="_blank"> GitHub </a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={CompilerIMG} alt=""></img>
                </div>
                <h3>
                  Compiler able to compile specific grammar to .py files.
                  Supporting multiple features: <br></br> variable assignments, math operations, function calls, error handling, etc.
                  Created using ANTRL with Java.
                </h3>
                <a href="https://github.com/BorisKolev/Mambossa_Compiler" className="btn" target="_blank"> GitHub </a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={SnakeIMG} alt=""></img>
                </div>
                <h3>
                  2D Snake game implemented using Java and Swing library.
                </h3>
                <a href="https://github.com/BorisKolev/Java-Snake2D_Swing" className="btn" target="_blank"> GitHub </a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={MambossaSearchIMG} alt=""></img>
                </div>
                <h3>
                  Platform hosting hiring process allowing users to create job ads hire / reject candidates.
                  Implemented using ASP.NET / Razor Pages / MySQL. <br></br>Soon to be hosted online.
                </h3>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={PuzzleFinderIMG} alt=""></img>
                </div>
                <h3>
                  Finding the solution to a small puzzle using AI Breadth First Search in Java.
                </h3>
                <a href="https://github.com/BorisKolev/Java-PuzzleFinder_AI-Breadth-First-Search" className="btn" target="_blank"> GitHub </a>
            </article>

            <article className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={LR_TextClassifierIMG} alt=""></img>
                </div>
                <h3>
                  Logistic Regression classifier used to predict negative or positive reviews using Tf Idf Vectorization, NLTK and sklearn.
                  Implemented in Python (duh).
                </h3>
                <a href="https://github.com/BorisKolev/LogisticRegression_Text_Classifier" className="btn" target="_blank"> GitHub </a>
            </article>

        </div>

    </section>
  )
}

export default Portfolio