import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="copyright">
          <span>copyright-KD </span>
          <span> |</span>
           <span>All rights reserved</span>
        </div>

        <div className="lines">
          <span className='line-item line-item-1'></span>
          <span className='line-item line-item-2'></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer