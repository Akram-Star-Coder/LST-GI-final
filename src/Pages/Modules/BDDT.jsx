import React from 'react'
import './index.css';
import Navbar from '../../Controllers/Navbar';
import TD1 from './FILES2/td1.pdf';
import TD2 from './FILES2/td2.pdf';
import TD3 from './FILES2/td3.pdf';
import TD4 from './FILES2/td4.pdf';
import TD5 from './FILES2/td5.pdf';
import TD6 from './FILES2/td6.pdf';
import TD7 from './FILES2/td7.pdf';
import X1 from './FILES2/x1.PNG';
import X2 from './FILES2/x2.PNG';
import X3 from './FILES2/x3.PNG';
import X4 from './FILES2/x4.PNG';
import X5 from './FILES2/x5.PNG';
import X6 from './FILES2/x6.PNG';
import X7 from './FILES2/x7.PNG';

const BDDT = () => {
  return (
    <div className='X'>
        <Navbar />
      <a href={TD1} download className="casev">
          <div className="picturev">
            <img src={X1} alt="" />
          </div>
          <div className="downloadv">
            <span>BDDA Td1</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>

      <a href={TD2} download className="casev">
          <div className="picturev">
            <img src={X2} alt="" />
          </div>
          <div className="downloadv">
            <span>BDDA Td2</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>

      <a href={TD3} download className="casev">
          <div className="picturev">
            <img src={X3} alt="" />
          </div>
          <div className="downloadv">
            <span>BDDA Td3</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>

      <a href={TD4} download className="casev">
          <div className="picturev">
            <img src={X4} alt="" />
          </div>
          <div className="downloadv">
            <span>BDDA Td4</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>

      <a href={TD5} download className="casev">
          <div className="picturev">
            <img src={X5} alt="" />
          </div>
          <div className="downloadv">
            <span>BDDA Td5</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>


      <a href={TD6} download className="casev">
          <div className="picturev">
            <img src={X6} alt="" />
          </div>
          <div className="downloadv">
            <span>BDDA Td6</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>

      <a href={TD7} download className="casev">
          <div className="picturev">
            <img src={X7} alt="" />
          </div>
          <div className="downloadv">
            <span>BDDA Td7</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
      </a>
    
    </div>
  )
}

export default BDDT