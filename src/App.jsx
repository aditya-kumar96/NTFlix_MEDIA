import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body/Body'
import { Provider, useDispatch } from 'react-redux'
import appStore from './redux/store'
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './utils/firebase'
import { addUser, removeUser } from './redux/slices/userSlice'
import Login from './components/Login/Login'
import Browse from './components/Browse/Browse'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
          
          navigate("/browse")
          
        } else {
          dispatch(removeUser())
          navigate("/")
        }
      });
      return()=>unsubscribe()
    },[])
  return <Outlet />; 
}

export default App
