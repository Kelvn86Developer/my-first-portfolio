import React from 'react'
import { AppWrapper } from '../../Wrappers';

import { motion } from 'framer-motion';

import './Skills.scss'

const Skills = () => {
  const skills = [
    {
      year: '2018-2019',
      lang: 'adobe xd & adobe illustrator',
      type: 'UI designer'
    },
    {
      year: '2019-2020',
      lang: 'html, css & javascript',
      type: 'Front-end developer'
    },
    {
      year: '2020-2021',
      lang: 'PHP,MySQL and MongoDB',
      type: 'Back-end developer'
    },
    {
      year: '2021-2022',
      lang: 'PHP,MySQL & Laravel',
      type: 'Back-end developer'
    },
    {
      year: 'current',
      lang: 'ReactJS & MaterialUI, Node.js & PostgreSQL',
      type: 'Full-stack developer'
    }
  ]
  return (
    <>
    <div className="heading">
      <p>Skills and Experience</p>
      <h2>What i have gained through building projects</h2>
      <h3>All skills are in intermediate level</h3>
    </div>

    <div className="skills-card">
      {
        skills.map((skill, index) => {
          return(
            <div className="skill-item" key={index+skill.year}>
                <span className="year">{skill.year}</span>
                <p>{skill.lang}</p>
                <h2>{skill.type}</h2>
                <span className="line"></span>
            </div>
          )
        
        })
      }
     
    </div>
    </>
  )
}

export default AppWrapper(Skills, 'skills', 'app__bg-1')