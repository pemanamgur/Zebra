import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import clsx from 'clsx';





function Nab() {

   const [isSideMenuOpen , setSideMenu] = useState(true);

   const navLinks = [
    {
       label : "Home",
       href : "/"
    },
    {
       label : "Photos",
       href : "/photos"
    },
    {
       label : "Videos",
       href : "/videos"
    },
    {
       label : "Contact",
       href : "/contact"
    },
    {
       label : "Pricing",
       href : "/pricing"
    },
    {
       label : "Reviews",
       href : "/reviews"
    },
   ]
    

  return (
   <main>
     <nav className='flex justify-between items-center px-8 py-6 lg:px-24'>
        <div className='flex items-center gap-4'>
      <section className='flex items-center gap-4'>
         {/* menu */}
         <GiHamburgerMenu 
          onClick={()=>{setSideMenu(true)}}
         className='text-3xl cursor-pointer  lg:hidden' />
         {/* logo */}
          <Link to={"/"} className='text-4xl font-mono'>
           Logo
          </Link>
      </section>
        
      {
            navLinks.map((link,index)=>(
                <Link
                key={index}
                to={link.href} className= 'hidden text-gray-600 lg:block hover:text-black'>{link.label}</Link>
            ))
         }

      </div>
  {/* Sidebar menu Mobile */}
       
         <div className={clsx('fixed h-full w-screen lg:hidden bg-black/50 backdrop-blur-sm top-0 z-10 right-0 -translate-x-full transition-all',
            isSideMenuOpen && 'translate-x-0'
         )}>
           <section className='text-black bg-white flex-col absolute left-0 top-0 h-screen z-[100] flex p-6 w-56 gap-8'>
             <ImCross 
              onClick={()=> setSideMenu(false)}
             className='mt-0 mb-8 cursor-pointer text-3xl'/>
             
         {
            navLinks.map((link,index)=>(
                <Link
                key={index}
                to={link.href} className='font-bold'>{link.label}</Link>
            ))
         }


           </section>
         </div>

     
      <section className='flex items-center rounded-full '>
          {/* img */}
          <img src="https://static.wixstatic.com/media/593ea9_e30ac9b5ca484e318a2d25a832c7d680~mv2.png/v1/fill/w_438,h_779,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/593ea9_e30ac9b5ca484e318a2d25a832c7d680~mv2.png" alt=""
          className=' w-16 h-16 object-cover rounded-full  '
          style={{borderRadius : '50%'}}
          />
      </section>
    </nav>
    <hr className='lg:mx-24' />
   </main>

  )
}

export default Nab
