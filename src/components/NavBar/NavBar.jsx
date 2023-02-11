
import { motion } from 'framer-motion';
import { GoThreeBars } from 'react-icons/go';

import { useState } from 'react';

import './NavBar.scss';


const NavBar = () => {
  const links = [
    {
      name: 'Home',
      id: 'home'
    },
    {
      name: 'About',
      id: 'about'
    },
    {
      name: 'Works',
      id: 'work'
    },
    {
      name: 'Skills',
      id: 'skills'
    },

    {
      name: 'Contact',
      id: 'contact'
    }
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <nav className="nav">
        <div className="container">
                <h1 className='logo'><a href='/'>KD<span>.</span></a></h1>

                <motion.div className="links__container set-false">
            
              
                {
                  links.map((link,index) => {
                    return (
                      <motion.div className='link' key={index + link}>
                           <a href={`#${link.id}`} >{link.name}</a>
                      </motion.div>
                    )
                  
                  })
                }
                  {
                    toggle && (
                      
                        links.map((link,index) => {
                          return (
                            <motion.div className='link' key={index + link}>
                                <a href={`#${link.id}`}>{link.name}</a>
                            </motion.div>
                          )
                        
                        })
                      
                    )
                  }
                   
                </motion.div>

                {
                  toggle && (
                    <motion.div className="links__container"
                    transition={{duration: 1.2, delay: 0.5}}>

                      {
                        toggle && (
                          
                            links.map((link,index) => {
                              return (
                                <motion.div className='link' key={index + link}>
                                    <a href={`#${link.id}`} onClick={()=>setToggle(!toggle)}>{link.name}</a>
                                </motion.div>
                              )
                            
                            })
                          
                        )
                      }
                      
                    </motion.div>
                  )
                  
                }
              
                <GoThreeBars className='toggle-btn' onClick={()=>setToggle(!toggle)}/>
        </div>
       
      </nav>
    </nav>
  )
}

export default NavBar