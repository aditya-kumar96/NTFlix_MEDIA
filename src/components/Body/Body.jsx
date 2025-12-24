import React, { useEffect } from 'react'
import Browse from '../Browse/Browse'
import Login from '../Login/Login'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../../redux/slices/userSlice'

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

  return (
    <div>
     <Text>Body</Text>
    </div>
  )
}

export default Body