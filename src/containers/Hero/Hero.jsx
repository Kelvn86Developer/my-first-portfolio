import React from 'react'
import './Hero.scss'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Hero = () => {
  return (
    <section id='home'>
        <motion.span className="circle" whileInView={{scale:[0,0,1]}} transition={{duration: 0.9}}></motion.span>
      <div className="container">

          <motion.div className="namesSocialBtn"
          whileInView={{x:[100, 0], opacity: [0,0.5,1]}} transition={{duration: 0.9, delay:1}}>
          <div className="names">
            <h1>Kelvin David, <span className='initial'>KD.</span></h1>
            <span className="line"></span>
          </div>

          <div className="socials">
            <a href="instagram.com">instagram</a>

            <span>|</span>
        
            <a href="linkedIn.com"> linkedIn</a>
          </div>

          <div className="btn">
            <a href="#contact" className='btn__primary'>Contact me</a>
          </div>
            
        </motion.div>

          <div className="profilePic">
            
              <motion.img src={images.profile} alt="pic" 
              whileInView={{opacity: [0,1]}} transition={{duration: 1, delay:1}}/>
          </div>

          <motion.div className="intro" whileInView={{x:[-100, 0], opacity: [0,0.5,1]}} transition={{duration: 0.9, delay:1}}>
              <span className="header">Introduction</span>
              <span className='line'></span>
              <p className="bold">I full-stack developer</p>
              <p>I Design and Develop Personal website, Social website, E-commerce website, Event website and Business website</p>
              <span className='line left'></span>

              <a href="#work">See my works  <AiOutlineArrowDown/></a>
          </motion.div>
      </div>

      
    </section>
  )
}

export default Hero