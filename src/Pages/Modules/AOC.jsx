import React from 'react'
import './index.css';
import Navbar from '../../Controllers/Navbar';
import L from './FILES/ch1-ao.PNG';
import L2 from './FILES/ch1-ao2.PNG';
import L3 from './FILES/ch1-ao3.PNG';
import L4 from './FILES/ch1-ao4.PNG';
import Ch1 from './FILES/ao-ch1.pdf';
import Ch2 from './FILES/ao-ch2.pdf';
import Ch3 from './FILES/ao-ch3.pdf';
import Ch4 from './FILES/ao-ch4.pdf';

const AOC = () => {
  return (
    <div className='X'>
        <Navbar />
        <a href={Ch1} download className="casev">
          <div className="picturev">
            <img src={L} alt="" />
          </div>
          <div className="downloadv">
            <span>AO Cours Chapitre 1</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
        </a>
        <a href={Ch2} download className="casev">
          <div className="picturev">
            <img src={L2} alt="" />
          </div>
          <div className="downloadv">
            <span>AO Cours Chapitre 2</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
        </a>
        <a href={Ch3} download className="casev">
          <div className="picturev">
            <img src={L3} alt="" />
          </div>
          <div className="downloadv">
            <span>AO Cours Chapitre 3</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
        </a>
        <a href={Ch4} download className="casev">
          <div className="picturev">
            <img src={L4} alt="" />
          </div>
          <div className="downloadv">
            <span>AO Cours Chapitre 4</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
        </a>
    </div>
  )
}

export default AOC