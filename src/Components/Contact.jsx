import React from 'react'

import Darkunderline from './Darkunderline'

export default function Contact() {
  return <>
  
   <section>
    <div className='container text-center pt-5 pb-2'>
      <h2 className='text-color fw-bolder'>CONATCT SECTION</h2>
      <Darkunderline/>
      <form className='container pt-5'>
      
        <div className='row'>
          <div className='col-md-6 col-lg-12 py-3'>
          <input type="text" placeholder='UserName' className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>

          <div className='col-md-6 col-lg-12 py-3'>
          <input type="text" placeholder='UserAge' className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          </div>
          <div className='row'>
          <div className='col-md-6 col-lg-12 py-3'>
          <input type="text" placeholder='UserEmail' className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>

          <div className='col-md-6 col-lg-12 py-3'>
          <input type="text" placeholder='UserPassword' className="form-control " aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          </div>
 
      </form>
     
    </div>

    <div className='container'>
    <button className=' btn-form text-white mb-4 ms-2 '>Send</button>
    </div>

   </section>
  
  </>
}
