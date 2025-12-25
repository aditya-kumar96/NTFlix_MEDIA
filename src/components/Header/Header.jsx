import React, { useState } from 'react'
import netflix from '../../assets/netflix.svg'
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../utils/firebase';
const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state=>state.user)
  console.log(user)
 const signOutname = "Sign Out"
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser())
      setIsLoggedIn(true)
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-linear-to-b from-black-50 z-10 flex justify-between'>
        <img
        className='w-44'
           src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        />
    {user &&
    <div className='flex p-2'>  
        <img
        className='w-12 h-12'
       src={user?.photoURL}/>
      <button onClick={handleSignOut} className='font-bold text-black'>({signOutname})</button>
    </div>
}
    </div>
  )
}

export default Header