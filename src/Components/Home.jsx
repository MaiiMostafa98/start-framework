import React from 'react'
import Underline from './Underline'
import Navbar from './Navbar'
import Footer from './Footer'

import img1 from "../assets/imges/sora.png"

export default function Home() {
  return <>
  
   <section className='home pt-2 pb-5  text-white  text-center'>
       <div className='container  pb-3 my-5'>
       <img src={img1} alt="" className='w-25'/>
          <h1 className='h3 fw-bold'>START FRAMEWORK</h1>
          <Underline/>
          <p className='h1'>Graphic Artist - Web Designer - Illustrator</p>
       </div>
   </section>
   
  </>
}
