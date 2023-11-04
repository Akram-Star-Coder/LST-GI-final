import React from 'react'
import './index.css';
import Navbar from '../../Controllers/Navbar';
import c1 from './FILES4/ArrayList.pdf';
import c2 from './FILES4/courspoo.pdf';
import c3 from './FILES4/gestiondesthreads.pdf';
import P1 from './FILES4/p1.png';
import P3 from './FILES4/p3.png';
import P2 from './FILES4/p2.png';


const JAVAC = () => {
  return (
    <div className='X'>
      <Navbar />
      
      <a href={c2} download className="casev">
          <div className="picturev">
            <img src={P1} alt="" />
          </div>
          <div className="downloadv">
            <span>JAVA Cours</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
      <a href={c1} download className="casev">
          <div className="picturev">
            <img src={P2} alt="" />
          </div>
          <div className="downloadv">
            <span>Array Lists</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
      <a href={c3} download className="casev">
          <div className="picturev">
            <img src={P3} alt="" />
          </div>
          <div className="downloadv">
            <span>Gestion des exceptions et threads</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
    </div>
  )
}

export default JAVAC