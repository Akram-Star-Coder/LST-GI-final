import React, {useState} from 'react'
import './index.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const [isclicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <>
    <div className={isclicked ? "POPuP showPOPuP" : "POPuP"}>
      <div className="cCancel">
       <button
          onClick={()=>{setIsClicked(false);}}
       >
       <i className='fa-solid fa-xmark'></i>
       </button>
      </div>
      <div className="casePoptions">
        <div className="rowOppp">
          <a href="tel:+212639239316">
            <button><i className='fa-solid fa-message'></i>&nbsp;&nbsp;&nbsp;Contacter la déléguée</button>
          </a>
        </div>
        <div className="rowOppp">
          <a href="tel:+21245975213">
            <button><i className="fa-solid fa-triangle-exclamation"></i>&nbsp;&nbsp;&nbsp;Signaler un problème </button>
          </a>
        </div>
      </div>
    </div>
    <div className='Navbar'>
        <div className="cLogo"
          onClick={()=>{navigate("/")}}
        >
          <span>
            LST<span>Docs</span>
          </span>
        </div>
        <div className="cOption">
        &nbsp;
          {
            window.innerWidth < 776 && 
            <button
            className='btnElipsis'
            onClick={()=>{setIsClicked(true);}}
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
          }
        </div>
    </div>
    </>
  )
}

export default Navbar