import React, {useState, useEffect} from 'react';
import './Works.scss';

import {AiFillEye, AiFillGithub} from 'react-icons/ai';
import {motion} from 'framer-motion';
import { abouts } from '../../constants';

import { AppWrapper } from '../../Wrappers';

const Works = () => {

  const works = [
    {
       title: 'modern UI/UX website',
       description: 'a modern ui/ux portfolio website made with react js sass and framer motion',
       projectLink: 'https//github.com/kd8developer',
       codeLink: 'https//github.com/kd8developer',
       imgUrl: abouts.about01,
       tag: 'Web App'
    },
    {
       title: 'modern mobile app',
       description: 'a modern food delivery mobile app  made with flutter sass and framer motion',
       projectLink: 'https//github.com/kd8developer',
       codeLink: 'https//github.com/kd8developer',
       imgUrl: abouts.about02,
       tag: 'Mobile App'
    },
    {
       title: 'school management system',
       description: 'a modern ui/ux  system made with react js sass and framer motion',
       projectLink: 'https//github.com/kd8developer',
       codeLink: 'https//github.com/kd8developer',
       imgUrl: abouts.about03,
       tag: 'Web App'
    },
    {
       title: 'school management system',
       description: 'a modern ui/ux  system made with react js sass and framer motion',
       projectLink: 'https//github.com/kd8developer',
       codeLink: 'https//github.com/kd8developer',
       imgUrl: abouts.about04,
       tag: 'UI/UX'
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [ Works, setWorks ] = useState([]);
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});
  const [ filterWork, setFilterWork] = useState([]);

  useEffect(() =>{  
    setWorks(works);
    setFilterWork(works);
  
  },[]);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity:0}]);

    setTimeout(()=>{
      setAnimateCard([{y:0, opacity:1}]);
    },500);

    if(item === "All"){
      setFilterWork(works);
    }

    else {
      setFilterWork(Works.filter((work) => work.tag.includes(item)));
    }

  }

  return (
    <>
    <div className="heading">
        <p>Works</p>
        <h2>My masterpiece collection</h2>
        <h3>Development done with consideration of all principles and standards of designing and writing codes</h3>
    </div>

    <div className="app__work-filter">
    {['UI/UX', 'Web App', 'Mobile App', 'All'].map((item, index) => (
            <div key={index} onClick={() => handleWorkFilter(item)} className={ `app__work-filter-item app__flex p-text ${activeFilter === item? 'item-active': ''}` }>
              {item}
            </div>
          ))}
    </div>

    <motion.div
          animate = {animateCard}
          transition = {{duration: 0.5, delayChildren: 0.5}}
          className='app__work-portfolio'>
            {filterWork.map((work, index)=> (
              <div className='app__work-item app__flex' key={index} >
                <div className='app__work-img app__flex'>
                  <img src={work.imgUrl} alt="work" />

                  <motion.div
                  whileHover={{opacity: [0, 1]}}
                  transition={{duration: 0.25,ease: 'easeInOut', staggerChildren:0.5}}
                  className= 'app__work-hover app__flex'>
                    <a href={work.projectLink} target= "_blank" rel="noreferrer" >
                       <motion.div 
                       whileInView={{opacity: 1}}
                       whileHover={{scale: 1.3}}
                        transition={{duration: 0.25}}
                        className='app__flex'>
                         <AiFillEye/>
                       </motion.div>
                    </a>
                    <a href={work.codeLink} target= "_blank" rel="noreferrer" >
                       <motion.div 
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.3}}
                        transition={{duration: 0.25}}
                        className='app__flex'>
                         <AiFillGithub/>
                       </motion.div>
                    </a>

                  </motion.div>
                </div>

                <div className='app__work-content app__flex'>
                   <h4 className='bold-text'>{work.title}</h4>
                   <p className='p-text'>{work.description}</p>

                   <div className='app__work-tag app__flex'>
                    <p className='p-text'>{work.tag}</p>
                   </div>
                </div>

              </div>
            ))} 
          
         </motion.div>
    </>
  )
}

export default AppWrapper(Works, 'work', 'app__bg-2')