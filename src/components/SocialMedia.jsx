import React from 'react';
import {BsTwitter, BsInstagram, BsLinkedin,BsGithub} from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div className='social'>
        <BsTwitter/>
      </div>
      <div className='social'>
        <BsInstagram/>
      </div>
      <div className='social'>
        <BsGithub/>
      </div>
      <div className='social'>
        <BsLinkedin/>
      </div>
    </div>
  )
}

export default SocialMedia