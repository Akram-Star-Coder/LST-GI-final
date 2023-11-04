import React from 'react'
import Navbar from '../../Controllers/Navbar';
import pv from "./FILES6/pv.docx";
import Photo from "./FILES6/photo2.png";

const RIP = () => {
  return (
    <div  className='X'>
        
        <Navbar />
        <a href={pv} download className="casev">
            <div className="picturev">
                <img src={Photo} alt="" />
            </div>
            <div className="downloadv">
                <span>Reseaux Informatique PV </span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>

    </div>
  )
}

export default RIP