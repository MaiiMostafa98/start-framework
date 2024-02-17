import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Portfolio from './Portfolio'
import Home from './Home'
import { Outlet } from 'react-router-dom'



export default function Layout() {
  return <>
    <Navbar/>
       <Outlet></Outlet>
    <Footer/>

  </>
}
