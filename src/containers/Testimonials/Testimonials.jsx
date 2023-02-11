import { useState, useRef, useEffect } from 'react';
import { AppWrapper } from '../../Wrappers';
import { clients } from '../../constants'
import { motion } from 'framer-motion';

import './Testimonials.scss';


const Testimonials = () => {

  const [width, setWidth] = useState(0);
  const outerSliders = useRef();

  useEffect(()=> {
      setWidth( outerSliders.current.scrollWidth - outerSliders.current.offsetWidth );
  }, []);

  const testimonials = [
    {
      img: clients.client01,
      name: 'client 1',
      status: ' Manager',
      msg: 'You re a best developer and greater worker, keep up with coding, am looking to work again with you',
      date: '2019-09-23'
    }, 
    {

      img: clients.client02,
      name: 'client 2',
      status: ' Manager',
      msg: 'You re a best developer and greater worker, keep up with coding, am looking to work again with you',
      date: '2019-09-23'
    },
    {
      img: clients.client03,
      name: 'client 3',
      status: ' Manager',
      msg: 'You re a best developer and greater worker, keep up with coding, am looking to work again with you',
      date: '2019-09-23'
    },
    {
      img: clients.client04,
      name: 'client 4',
      status: ' Manager',
      msg: 'You re a best developer and greater worker, keep up with coding, am looking to work again with you',
      date: '2019-09-23'
    },
    {
      img: clients.client05,
      name: 'client 5',
      status: ' Manager',
      msg: 'You re a best developer and greater worker, keep up with coding, am looking to work again with you',
      date: '2019-09-23'
    },
    {
      img: clients.client06,
      name: 'client 6',
      status: ' Manager',
      msg: 'You re a best developer and greater worker, keep up with coding, am looking to work again with you',
      date: '2019-09-23'
    }
  ];


  return (
    <>
    <div className="heading">
          <p>Testimonials</p>
          <h2>What my clients say about me</h2>
    </div>
    
    <motion.div className="outer-slider" ref={outerSliders}>
    <motion.div className="testimonials" drag="x" dragConstraints={{right: 0, left: -width}} draggable whileTap={{cursor: "grabbing"}}>
      {
        testimonials.map((testimonial, index) => {
          return(
            <div className="card" key={index + testimonial.name}>
                <div className="client-pic">
                  <img src={testimonial.img} alt="" />
                </div>
                <div className="review-content">
                  <h2>{testimonial.name}</h2> 

                  <span className='status'>{testimonial.status}</span>
                  <p>{testimonial.msg}</p>
                  <small>{testimonial.date}</small>
                  <span className="line"></span>
                </div>
            </div>
          )
        })
      }
    
    </motion.div>
    </motion.div>
  
    </>
  )
}

export default AppWrapper(Testimonials, 'testimonials', 'app__bg-2');