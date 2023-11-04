import React, {useState} from 'react'
import './index.css';
import { useNavigate } from 'react-router-dom';

const PartModules = () => {

    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

  return (
    <div className='PartModules'>
        <div className="rowModule">
            <div className="nameModule">
            Architecture de l'ordinateur 💻
            </div>
            <div className="nameProf">
                <span>Email</span> : h.benalla@uhp.ac.ma  
            </div>
            <div className="nameProf">
                <button
                    onClick={()=>{navigate('/architecture-ordinateur')}}
                >
                 Accéder aux documents &nbsp;<i className='fa-solid fa-arrow-right'></i> 
                </button>
            </div>
        </div>
        
        <div className="rowModule">
            <div className="nameModule">
            Base de données Avancés 🗃️
            </div>
            <div className="nameProf">
                <span>Email</span> : benmakhloufamine@gmail.com  
            </div>
            <div className="nameProf">
                <button
                    onClick={()=>{navigate('/base-donnee-avance')}}

                >
                 Accéder aux documents &nbsp;<i className='fa-solid fa-arrow-right'></i> 
                </button>
            </div>
        </div>
        <div className="rowModule">
            <div className="nameModule">
            Système d'exploitation 🛠️
            </div>
            <div className="nameProf">
                <span>Email</span> : abdellah.ezzati@uhp.ac.ma  
            </div>
            <div className="nameProf">
                <button
                    onClick={()=>{navigate('/systeme-exploitation')}}
                >
                 Accéder aux documents &nbsp;<i className='fa-solid fa-arrow-right'></i> 
                </button>
            </div>
        </div>
        <div className="rowModule">
            <div className="nameModule">
            Java P.O.O ☕
            </div>
            <div className="nameProf">
                <span>Email</span> : abdellah.ezzati@uhp.ac.ma  
            </div>
            <div className="nameProf">
                <button
                    onClick={()=>{navigate('/java-poo')}}
                >
                 Accéder aux documents &nbsp;<i className='fa-solid fa-arrow-right'></i> 
                </button>
            </div>
        </div>

        <div className="rowModule">
            <div className="nameModule">
            Réseau Informatique 🌐
            </div>
            <div className="nameProf">
                <span>Email</span> : 
            </div>
            <div className="nameProf">
                <button
                onClick={()=>{navigate('/reseau-informatique')}}
                >
                 Accéder aux documents &nbsp;<i className='fa-solid fa-arrow-right'></i> 
                </button>
            </div>
        </div>

        
        <div className="rowModule">
            <div className="nameModule">
            Recherche Opérationelle 📊
            </div>
            <div className="nameProf">
                <span>Email</span> : chakirilham@yahoo.fr 
            </div>
            <div className="nameProf">
                <button 
                    onClick={()=>{navigate('/recherche-operationelle')}}
                >
                    Accéder aux documents &nbsp;<i className='fa-solid fa-arrow-right'></i> 
                </button>
            </div>
        </div>
    </div>
  )
}

export default PartModules