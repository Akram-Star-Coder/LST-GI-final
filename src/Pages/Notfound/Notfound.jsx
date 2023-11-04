import React, { useEffect, useState } from 'react'
import './index.css';
import { useNavigate } from 'react-router-dom';

const Notfound = () => {

    const [isRendered, setIsRendered] = useState(false);
    const [isRendered2, setIsRendered2] = useState(false);

    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            setIsRendered(true);
        }, 50);
        setTimeout(()=>{
            setIsRendered2(true);
        }, 0);
    }, []);

    const setBtnIsClicked = ()=>{
        setIsRendered(false);
        setTimeout(()=>{
            navigate('/');
        }, 366);
    }

  return (
    <div className={isRendered ? "Notfound showNotfound" : "Notfound"}>
        <div className="error">
            <div className="titleOfError">
                Page Not Found
            </div>
            <div className="descriptionOfError">
                The path you are trying to access is not existing!
            </div>
            <div className="buttoncontainer">
                <button
                    className={isRendered2 && "showBtn"}
                    onClick={()=>{setBtnIsClicked(true);}}
                >
                    Return back home
                </button>
            </div>
        </div>
    </div>
  )
}

export default Notfound