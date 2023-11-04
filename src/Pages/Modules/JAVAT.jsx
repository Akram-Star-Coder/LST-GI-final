import React from 'react'
import './index.css';
import Navbar from '../../Controllers/Navbar';
import TD1 from './FILES4/TD1.pdf';
import TD2 from './FILES4/TD2.pdf';
import TD3 from './FILES4/TD3.pdf';
import TD4 from './FILES4/TD4.pdf';
import TD5 from './FILES4/TD5.pdf';
import X1 from './FILES4/x1.png';
import X2 from './FILES4/x2.png';
import X3 from './FILES4/x3.png';
import X4 from './FILES4/x4.png';
import X5 from './FILES4/x5.png';


const JAVAT = () => {
  return (
    <div className='X'>
      <Navbar />
      
      <a href={TD1} download className="casev">
          <div className="picturev">
            <img src={X1} alt="" />
          </div>
          <div className="downloadv">
            <span>JAVA Td1</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
      <a href={TD2} download className="casev">
          <div className="picturev">
            <img src={X2} alt="" />
          </div>
          <div className="downloadv">
            <span>JAVA Td2</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
      <a href={TD3} download className="casev">
          <div className="picturev">
            <img src={X3} alt="" />
          </div>
          <div className="downloadv">
            <span>JAVA Td3</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
      <a href={TD4} download className="casev">
          <div className="picturev">
            <img src={X4} alt="" />
          </div>
          <div className="downloadv">
            <span>JAVA Td4</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
      <a href={TD5} download className="casev">
          <div className="picturev">
            <img src={X5} alt="" />
          </div>
          <div className="downloadv">
            <span>JAVA Td5</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
    </div>
  )
}

export default JAVAT