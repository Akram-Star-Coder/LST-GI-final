import React from 'react'
import './index.css';
import Navbar from '../../Controllers/Navbar';
import C1 from './FILES2/c1.pdf';
import C2 from './FILES2/c2.pdf';
import C3 from './FILES2/c3.pdf';
import C4 from './FILES2/c4.pdf';
import C5 from './FILES2/c5.pdf';
import P1 from './FILES2/p1.PNG';
import P2 from './FILES2/p2.PNG';
import P3 from './FILES2/p3.PNG';
import P4 from './FILES2/p4.PNG';
import P5 from './FILES2/p5.PNG';


const BDDC = () => {
  return (
    <div className='X'>
         <Navbar />
        <a href={C1} download className="casev">
            <div className="picturev">
                <img src={P1} alt="" />
            </div>
            <div className="downloadv">
                <span>BDDA Cours Chapitre 1</span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>
        <a href={C2} download className="casev">
            <div className="picturev">
                <img src={P2} alt="" />
            </div>
            <div className="downloadv">
                <span>BDDA Cours Chapitre 2</span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>
        <a href={C3} download className="casev">
            <div className="picturev">
                <img src={P3} alt="" />
            </div>
            <div className="downloadv">
                <span>BDDA Cours Chapitre 3</span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>
        <a href={C4} download className="casev">
            <div className="picturev">
                <img src={P4} alt="" />
            </div>
            <div className="downloadv">
                <span>BDDA Cours Chapitre 4</span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>
        <a href={C5} download className="casev">
            <div className="picturev">
                <img src={P5} alt="" />
            </div>
            <div className="downloadv">
                <span>BDDA Cours Chapitre 5</span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>
    </div>
  )
}

export default BDDC