import React from 'react'
import './index.css';
import Navbar from '../../Controllers/Navbar';
import T1 from './FILES/td1photo.PNG';
import T2 from './FILES/td2photo.PNG';
import TD1 from './FILES/td1.pdf';
import TD2 from './FILES/td2.pdf';

const AOT = () => {
  return (
    <div className='X'>
      <Navbar />
      <a href={TD1} download className="casev">
          <div className="picturev">
            <img src={T1} alt="" />
          </div>
          <div className="downloadv">
            <span>AO Td1</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
      <a href={TD2} download className="casev">
          <div className="picturev">
            <img src={T2} alt="" />
          </div>
          <div className="downloadv">
            <span>AO Td2</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
    </div>
  )
}

export default AOT