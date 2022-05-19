import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/borislav.kolev.18400" target="_blank"><FaFacebookF/></a>
        <a href='https://www.linkedin.com/in/borislav-kolev-2b1142194/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/BorisKolev' target="_blank"><FaGithub/> </a>
    </div>
  )
}

export default HeaderSocials