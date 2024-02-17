import React from 'react'

export default function Footer() {
  return <>
  <footer className='nav-footer '>
    <div className='container py-4 pt-4'>

    <div className='row d-flex justify-content-between '>
       <div className='col-md-4 text-center'>
           <h4> LOCATION </h4>
           <p className='fs-6'> 2215 John Daniel Drive </p>
           <p className='fs-6'> Clark, MO 65243 </p>
       </div>

       <div className='col-md-4 text-center'>
         <h4>AROUND THE WEB</h4>
        
         <div className=' d-flex justify-content-center container gap-2'>
         <div className=' icons'>
         <i class="fa-brands fa-facebook-f text-white"></i>
         </div>
         <div className=' icons'>
         <i class="fa-brands fa-twitter"></i>
         </div>
         <div className=' icons'>
         <i class="fa-brands fa-linkedin-in"></i>
         </div>
         <div className=' icons'>
         <i class="fa-solid fa-globe"></i>
         </div>
         </div>
       </div>

       <div className='col-md-4 text-center'>
         <h4>ABOUT FREELANCER</h4>
         <h6>Freelance is a free to use, licensed Bootstrap theme created by Route</h6>
       </div>
    </div>
     
    </div>
   
    <div className=' footer  text-center py-1'>
       <p>Copyright © Your Website 2021</p>
    </div>
  
  </footer>
  </>
}
