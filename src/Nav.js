import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY > 100){
                handleShow(true);
            }else
                 handleShow(false);
            });
        
            return()=>{
                window.removeEventListener("scroll",null);
            };
        },[]);

  return (
    <div className={`nav ${show && "nav_black"}`}>

        <img className='nav_logo'
         onClick={()=>{navigate('/')}}
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt='Netflix logo'
        />
        
        <img className='nav_avatar'
        onClick={()=>{navigate('/profile')}}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt='Sign In'
        />
    
    </div>
  )
}

export default Nav