import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Darkunderline from './Darkunderline'

import img1 from "../assets/imges/poert1.png"
import img2 from "../assets/imges/port2.png"
import img3 from "../assets/imges/port3.png"




export default function Portfolio() {
  return <>
 
  <section>
     
  <div className='container  pb-3 '>
  <h1 className='h2 fw-bold dark-star text-center'>PORTFOLIO COMPONENT</h1>
  <Darkunderline/>

   <div className='row'>
   <div className='col-md-4 '>
      <img src={img1} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={img1} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  
  <div className='col-md-4 '>
      <img src={img2} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={img2} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  
  <div className='col-md-4 '>
      <img src={img3} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={img3} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  <div className='col-md-4 pt-4 '>
      <img src={img3} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={img3} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  <div className='col-md-4  pt-4 '>
      <img src={img1} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={img1} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  <div className='col-md-4  pt-4'>
      <img src={img2} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={img2} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>
   </div>
  
  </div>
  </section>
  
  </>
}
