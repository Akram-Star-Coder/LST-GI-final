import React from 'react'
import Navbar from '../../Controllers/Navbar';
import C1 from './FILES3/cours.pdf';
import C2 from './FILES3/commandes.pdf';
import C3 from './FILES3/shell.pdf';
import Y1 from './FILES3/Y1.png';
import Y2 from './FILES3/Y2.png';
import Y3 from './FILES3/Y3.png';


const SEC = () => {
  return (
    <div className='X'>
         <Navbar />
        <a href={C1} download className="casev">
            <div className="picturev">
                <img src={Y1} alt="" />
            </div>
            <div className="downloadv">
                <span>SE Cours</span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>
        <a href={C2} download className="casev">
            <div className="picturev">
                <img src={Y2} alt="" />
            </div>
            <div className="downloadv">
                <span>Commandes Linux</span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>
        <a href={C3} download className="casev">
            <div className="picturev">
                <img src={Y3} alt="" />
            </div>
            <div className="downloadv">
                <span>Programation en Shell</span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>
    </div>
  )
}

export default SEC