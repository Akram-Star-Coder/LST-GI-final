import React from 'react'
import './index.css';
import Navbar from '../../Controllers/Navbar';
import P from './FILES/projet.pdf';
import Pp from './FILES/projetp.PNG';


const AOP = () => {
  return (
    <div className='X'>
      <Navbar />
        <a href={P} download className="casev">
            <div className="picturev">
              <img src={Pp} alt="" />
            </div>
            <div className="downloadv">
              <span>AO Projet (2 parties)</span>
              <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>
    </div>
  )
}

export default AOP