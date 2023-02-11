import React from 'react';
import {NavigationDots, SocialMedia, Bars} from '../components';
import { motion } from 'framer-motion'

const AppWrap = (Component, idName, classNames) => function HOC(){
  const whileInView = {
    opacity: [0 , 0, 1],
    y: [-250, 0]
}

const transition = {
 duration: 1.2
}


  return (
    <section id={idName} className={`${classNames}`}>
        <Bars/>
        <SocialMedia/>
        <motion.div className='container' whileInView={whileInView} transition={transition}>
            <Component/>
        </motion.div>

        <NavigationDots active={idName}/>
    </section>
  )
}

export default AppWrap