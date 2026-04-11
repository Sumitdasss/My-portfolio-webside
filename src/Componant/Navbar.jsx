import React, { useState } from 'react'
import { Link,  } from 'react-router-dom'
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";
  
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className="bg-[#1E1E1E] sticky top-0 z-50">
      <div className="max-w-[1440px] m-auto px-6">
        <div className="flex justify-between items-center h-[80px]">
          {/* Logo */}
          <div className="">
            <p className='text-[20px] text-white font-medium'>Logo</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className='flex gap-x-10'>
              <Link to="/" className='text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold'>Home</Link>
              <Link to="/AboutUs" className='text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold'>About</Link>
              <Link to="/service" className='text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold cursor-pointer'>Services</Link>
              <Link to="/portfolio" className='text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold cursor-pointer'>Portfolio</Link>
              <Link to="/Contact" className='text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold cursor-pointer'>Contact</Link>
              <li className='text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold cursor-pointer'>Blog</li>
            </ul>
          </div>

         
          <div className="hidden md:block">
            <button className='bg-amber-600 text-white font-medium py-2.5 px-5 rounded-md hover:bg-amber-700 duration-500'>
              Hire Me
            </button>
          </div>

           <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
              {isOpen ? <RxCross1/> : <FaBars/>}
            </button>
          </div>
        </div>

      
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
          <ul className='flex flex-col gap-y-4'>
            <Link to="/" className='text-[18px] text-white font-medium hover:text-amber-600'>Home</Link>
            <Link to="/AboutUs" className='text-[18px] text-white font-medium hover:text-amber-600'>About</Link>
            <Link to="/service" className='text-[18px] text-white font-medium hover:text-amber-600 cursor-pointer'>Services</Link>
            <Link to="/portfolio" className='text-[18px] text-white font-medium hover:text-amber-600 cursor-pointer'>Portfolio</Link>
            <Link to="/Contact" className='text-[18px] text-white font-medium hover:text-amber-600 cursor-pointer'>Contact</Link>
            <li className='text-[18px] text-white font-medium hover:text-amber-600 cursor-pointer'>Blog</li>
            <button className='bg-amber-600 text-white font-medium py-2 px-5 rounded-md w-fit'>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar