import React , {useRef} from 'react';
import {auth} from './firebase'


import './SignUpScreen.css'

function SignUpScreen() {
  const emailRef=useRef(null);
  const passwordRef=useRef(null);

const register =(event)=>{
  event.preventDefault();

auth.createUserWithEmailAndPassword(
emailRef.current.value,
passwordRef.current.value
)
.then((authUser)=>{
console.log(authUser)
})
.catch((error)=>{
  alert(error.message)
})

}

const signIn =(event)=>{
  event.preventDefault();

  auth.signInWithEmailAndPassword(
    emailRef.current.value,
passwordRef.current.value
)
.then((authUser)=>{
  console.log(authUser)
})
.catch((error)=> alert(error.message));
};


  return (
    <div className='signupscreen'>
      
<form>

<h1>Sign Up</h1> 
<input ref={emailRef} placeholder="Email" type="email" />
<input ref={passwordRef} placeholder="Password" type="password" />
<button type='submit' onClick={signIn}>Sign In</button>
<h4> 
  <span className='signupscreen_gray'>New to Netflix? </span>
  
  <span className='signupscreen_link'  onClick={register}>Sign Up Now.</span>
  
  </h4>


</form>


    </div>
  )
}

export default SignUpScreen;