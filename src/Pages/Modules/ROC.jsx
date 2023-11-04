import React from 'react'
import Navbar from '../../Controllers/Navbar';
import { useNavigate } from 'react-router-dom';
import X1 from './FILES5/PL_Cours1.pdf'
import X2 from './FILES5/PL_Cours2.pdf'
import X3 from './FILES5/PL_Cours3.pdf'
import X4 from './FILES5/PL_Cours4.pdf'
import Graphes from './FILES5/polyGraphes.pdf';

import L1 from './FILES5/x1.png';
import L2 from './FILES5/x2.png';
import L3 from './FILES5/x3.png';
import L4 from './FILES5/x4.png';
import L5 from './FILES5/x5.png';

const ROC = () => {


  const nav = useNavigate();


  return (
    <div className='X'>
      <Navbar />
      <a href={X1} download className="casev">
          <div className="picturev">
            <img src={L1} alt="" />
          </div>
          <div className="downloadv">
            <span>RO Cours Chapitre 1</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
        </a>

        <a href={X2} download className="casev">
          <div className="picturev">
            <img src={L2} alt="" />
          </div>
          <div className="downloadv">
            <span>RO Cours Chapitre 2</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
        </a>

        <a href={X3} download className="casev">
          <div className="picturev">
            <img src={L3} alt="" />
          </div>
          <div className="downloadv">
            <span>RO Cours Chapitre 3</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
        </a>

        <a
         href={X4} download className="casev">
          <div className="picturev">
            <img src={L4} alt="" />
          </div>
          <div className="downloadv">
            <span>RO Cours Chapitre 4</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
        </a>
     

        <a
         href={Graphes} download className="casev">
          <div className="picturev">
            <img src={L5} alt="" />
          </div>
          <div className="downloadv">
            <span>RO Cours Graphes</span>
            <button><i className='fa-solid fa-circle-down'></i></button>
          </div>
        </a>


    </div>
  )
}

export default ROC