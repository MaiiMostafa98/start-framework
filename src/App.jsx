import React from 'react'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Portfolio from './Components/Portfolio'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



let Routers = createBrowserRouter([
  { path:'' , element:<Layout/> , children:[
      { path:'' , element:<Home/> },
      { path:'home' , element:<Home/> },
      { path:'about' , element:<About/> },
      { path:'portfolio' , element:<Portfolio/> },
      { path:'contact' , element:<Contact/> },
      
  ]}
])

export default function App() {
  return <>
  <RouterProvider router = {Routers}></RouterProvider>
  </>
  
}

