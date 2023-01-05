import './App.css';
import React , {useEffect}from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './Homepage';
import Login from './Login'
import {auth} from './firebase'
import {useDispatch, useSelector, Provider } from 'react-redux';
import {login, logout, selectUser} from './userSlice' ;
import ProfileScreen from './ProfileScreen'

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
 

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if (userAuth){
        // the user is logged in....
        dispatch(
          login({
            uid:userAuth.uid,
            email:userAuth.email,
          })
        );
      }else{
        //the user is logged out....
        dispatch(logout());
       }
    })
  
  return () =>{
    // Any cleanupoperations go in there
  unsubscribe();
  };
  
  },[dispatch]);

  return (

    <div className="App">
       <BrowserRouter>
       

{!user ? (
  <Login/>

): (

<Routes>
<Route path='/profile' element={<ProfileScreen/>}></Route>
<Route path='/' element={<Homepage/>}></Route>
</Routes>
      )}

</BrowserRouter>


     


      
    </div>

    
  );
 
}

export default App;
