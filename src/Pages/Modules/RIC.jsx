import React from 'react'
import Navbar from '../../Controllers/Navbar';
import cours from "./FILES6/cours.pdf";
import Photo from "./FILES6/photo.png";

const RIC = () => {
  return (
    <div className='X'>
        
        <Navbar />
        <a href={cours} download className="casev">
            <div className="picturev">
                <img src={Photo} alt="" />
            </div>
            <div className="downloadv">
                <span>Reseaux Informatique Cours </span>
                <button><i className='fa-solid fa-circle-down'></i></button>
            </div>
        </a>

    </div>
  )
}

export default RIC