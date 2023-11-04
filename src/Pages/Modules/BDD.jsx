import React from 'react'
import Navbar from '../../Controllers/Navbar';
import './index.css';
import { useNavigate } from 'react-router-dom';

const BDD = () => {

  const nav = useNavigate();

  return (
    <div className='X'>
              <Navbar />
              <div className="caseO">
        <div className="caseP">
          <div className="choix"
            onClick={()=>{nav('/bdd/cours')}}
          >
            Accéder au Cours &nbsp;<i className='fa-solid fa-arrow-right'></i>
          </div>
          <div className="choix"
            onClick={()=>{nav('/bdd/tds')}}
          >
            Accéser aux Tds &nbsp;<i className='fa-solid fa-arrow-right'></i>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default BDD