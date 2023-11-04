import React from 'react'
import Navbar from '../../Controllers/Navbar';
import { useNavigate } from 'react-router-dom';



const SE = () => {


  const nav = useNavigate();



  return (
    <div className='X'>
      <Navbar />
      <div className="caseO">
        <div className="caseP">
          <div className="choix"
            onClick={()=>{nav('/se/cours')}}
          >
            Accéder au Cours &nbsp;<i className='fa-solid fa-arrow-right'></i>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SE