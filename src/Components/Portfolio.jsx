import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Darkunderline from './Darkunderline'



export default function Portfolio() {
  return <>
 
  <section>
     
  <div className='container  pb-3 '>
  <h1 className='h2 fw-bold dark-star text-center'>PORTFOLIO COMPONENT</h1>
  <Darkunderline/>

   <div className='row'>
   <div className='col-md-4 '>
      <img src={require("../imges/poert1.png")} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={require("../imges/poert1.png")} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  
  <div className='col-md-4 '>
      <img src={require("../imges/port2.png")} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={require("../imges/port2.png")} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  
  <div className='col-md-4 '>
      <img src={require("../imges/port3.png")} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={require("../imges/port3.png")} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  <div className='col-md-4 pt-4 '>
      <img src={require("../imges/port3.png")} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={require("../imges/port3.png")} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  <div className='col-md-4  pt-4 '>
      <img src={require("../imges/poert1.png")} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={require("../imges/poert1.png")} alt="" className='w-100'/>
      </div>
      </div>
      </div>
      </div>
  </div>

  <div className='col-md-4  pt-4'>
      <img src={require("../imges/port2.png")} alt="" className='w-100' data-bs-toggle="modal" data-bs-target="#exampleModal"/> 
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
      <div className="modal-content bg-transparent border-0">
      <div className="modal-header">
      <img src={require("../imges/port2.png")} alt="" className='w-100'/>
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
