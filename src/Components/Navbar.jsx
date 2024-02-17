import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return <>
    
     <div className='nav-footer  z-3 '>
     <div className='container py-3 '>
      
      <div className='row px-5 mx-5 '>
           
           <div className='col-md-6 '>
                <Link className='h3 text-decoration-none  '  to={'home'}>START FRAMEWORK</Link>
           </div>

           <div className='col-md-6 text-end '>
               <ul className='d-flex justify-content-end gap-4  h-100 align-items-center '>
                <li>
                   <Link className='text-white text-decoration-none '  to={'about'}>ABOUT</Link>
                </li>
                <li>
                   <Link className='text-white text-decoration-none ' to={'portfolio'}>PORTFOLIO</Link>
                </li>
                <li>
                   <Link className='text-white text-decoration-none ' to={'contact'}>CONTACT</Link>
                </li>
               </ul>
           </div>

      </div>
       
    </div>
     </div>

  </>
}
