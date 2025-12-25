import React, { use, useRef, useState } from 'react'
import Header from '../Header/Header'
import { checkValidData } from '../../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  
  const email = useRef(null)
  const password = useRef(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const name = useRef(null)
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }

  const handleButtonClick = () => {
    //validate the form data
    let ans = checkValidData(email.current.value, password.current.value)
    setErrorMessage(ans !== null ? ans : '')
    if (ans) return
    // Sign In Sign Up Logic
    if (!isSignInForm) {
      //sign up the user
      
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log('user : ',user)
          updateProfile(user,{
            displayName:name.current.value,
            photoURL:'https://avatars.githubusercontent.com/u/122636454?v=4'
          }).then(()=>{
            console.log(user)
            dispatch(addUser({
              photoURL:'https://avatars.githubusercontent.com/u/122636454?v=4',
              displayName:user.displayName
            }))
            navigate("/browse")
          })

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode ," - ",errorMessage)
          // ..
        });
    } else {
      //sign In the user
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    alert('User Login Successful')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode ,"- ",errorMessage)
  });
    }
  }
  return (
    <div>
      <Header />
      <div className='inset-0 z-0 absolute'>
        <img
          src='https://assets.nflxext.com/ffe/siteui/vlv3/a92a67ee-cd07-46a8-8354-c431a96a97b0/web/IN-en-20251103-TRIFECTA-perspective_8a65e995-9926-414c-83c5-f7cc9af10871_large.jpg'
          className='w-full h-full object-cover '
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      {/* <div className="sm:hidden absolute inset-0 z-0 bg-black" /> */}
      <main className='relative z-10 flex items-center justify-center min-h-[70vh] px-4 py-8'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
          }}
          className='w-full 
            max-w-lg 
            sm:max-w-md
            bg-black/65
            text-white
            p-6
            sm:p-8
            shadow-2xl
            rounded-lg
        '
        >
          <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"} </h1>
          {!isSignInForm && <input
            type='text'
            ref={name}
            placeholder='Full Name'
            className='p-2 my-2 w-full bg-gray-500' />
          }

          <input
            type='text'
            placeholder='Email Address'
            ref={email}
            className='p-2 my-2 w-full bg-gray-500' />

          <input
            type='password'
            ref={password}
            placeholder='Password'
            className='p-2 my-2 w-full bg-gray-500' />
          <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className='text-red-500'>{errorMessage}</p>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix ? Sign Up Now" : "Already User ? Sign In Now"}</p>
        </form>
      </main>
    </div>

  )
}

export default Login