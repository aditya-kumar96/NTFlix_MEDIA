import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import appStore from './redux/store.js'
import {  RouterProvider } from 'react-router-dom'
import Router from './utils/routers' 
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={appStore}>
        <RouterProvider router={Router}/>
      </Provider>
  </StrictMode>,
)
