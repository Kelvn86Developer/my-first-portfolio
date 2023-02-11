import React from 'react'
import { AppWrapper } from '../../Wrappers';

import { motion } from 'framer-motion';

import './Contact.scss'

const Contact = () => {

  const contacts = [
    {
      type: 'email',
      contact: 'kelvndavd86@gmail.com',
    },
    {
      type: 'phone',
      contact: '(+255) 0742-348-759',
    },
    {
      type: 'teregram',
      contact: 'teregram',
    },
    {
      type: 'WhatsApp',
      contact: 'WhatsApp',
    },
    {
      type: 'Instagram',
      contact: 'Instagram',
    },
    {
      type: 'twitter',
      contact: 'twitter',
    }
  ];


  return (
    <>
      <div className="heading">
          <p>Contact Us</p>
          <h2>Ways to reach and connect with me</h2>
      </div>

      <motion.div className="contacts">
          {
            contacts.map((item, index) => {
              return(
                <motion.div className="contact-item" key={index + item.type}>
                    <a href="/">{item.contact}</a> 
                </motion.div>
              )
            })
          }
      </motion.div>
    </>
  )
}

export default AppWrapper(Contact, 'contact', 'app__bg-1');