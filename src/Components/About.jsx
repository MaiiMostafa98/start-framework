import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Underline from './Underline'

export default function About() {
  return <>
  
  <section className='home py-5  text-white  '>
       <div className='container  py-5 my-5'>
          <h1 className='h1 fw-bold text-center'>ABOUT COMPONENT</h1>
          <Underline/>
          <div className='container  py-3 '>
           <div className='row'>
            <div className='col-md-6'>
              <h5>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </h5>
            </div>
            <div className='col-md-6'>
              <h5>
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </h5>
            </div>

           </div>
          </div>
       </div>
   </section>
  
  </>
}
