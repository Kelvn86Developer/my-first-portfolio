import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
           {['home', 'about', 'work', 'skills','testimonials', 'contact'].map((item, index)=> (
           <a 
           href={`#${item}`} 
           key={item + index}
           className='dot'
           style={active === item? {backgroundColor: 'rgba(219, 62, 62, 0.8)'}: {}}>
           </a>
                
        
         ))} 
    </div>
  )
}

export default NavigationDots