import React from 'react'
import Browse from '../Browse/Browse'
import Login from '../Login/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
  const Router = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])
  return (
    <div>
     <RouterProvider router={Router}/>
    </div>
  )
}

export default Body