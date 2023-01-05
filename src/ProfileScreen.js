import React from 'react'
import './ProfileScreen.css'
import Nav from './Nav'
import userEvent from '@testing-library/user-event'
import { selectUser } from './userSlice'
import {useSelector} from 'react-redux'
import { auth } from './firebase'

function ProfileScreen() {
    const user = useSelector(selectUser) 

  return (
    <div className='profilescreen'>
    <Nav/>
    <div className='profilescreen__body'>

<h1>Edit Profile</h1>

<div className='profilescreen__info'>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt='Sign In'/>

<div className='profilescreen__details'>
    <h2>{user.email}</h2>

<div className='profilescreen__plans'>

    <h3>Plans (Current Plan: Premium) </h3>

    <div className='profilescreen__date'>Renewal Date: 01-01-2023</div>

    <div className='profilescreen__plancolumn'>
    <div className='profilescreen__planslist'>
       <div>Netflix Standard </div> 
       <div>1080p </div> 
       </div>
       <button className='profilescreen__subscribe'>Subscribe</button>
    </div>

    <div className='profilescreen__plancolumn'>
    <div className='profilescreen__planslist'>
       <div>Netflix Basic </div> 
       <div>480p </div> 
       </div>
       <button className='profilescreen__subscribe'>Subscribe</button>
    </div>

    <div className='profilescreen__plancolumn'>
    <div className='profilescreen__planslist'>
       <div>Netflix Premium </div> 
       <div>4K+HDR </div> 
       </div>
       <button className='profilescreen__subscribed'>Current Package</button>
    </div>


    
    <p></p>
<button onClick={()=>{auth.signOut()}} className='profilescreen__signout'>Sign Out</button>


</div>

</div>
</div>

    </div>
    
    </div>
  )
}

export default ProfileScreen