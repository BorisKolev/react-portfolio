import React from 'react'
import './header.css'
import { useState} from 'react'
import CTA from './CTA'
import ME2 from '../../Assets/ME2.jpg'
import HeaderSocials from './HeaderSocials'
import { useTypedText } from './useTypedText'

const Header = () => {

  const typedText = useTypedText()

  return (
    <header>

      <div className="container header__container">
        <h5>
          <span> Hello I'm </span>
        </h5>
        <h1>
          <span> Borislav Kolev </span>
        </h1>
        <h5 className="text-light">
          <span className="blinking-cursor"> {typedText} </span>
        </h5>
        
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME2} alt="me"/>
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>

    </header>
  )
}

export default Header