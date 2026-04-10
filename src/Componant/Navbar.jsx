import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-[#1E1E1E] ">
        <div className="max-w-[1440px] m-auto">
<div className="flex justify-between items-center h-[80px]">
    <div className="">
        <p className='text-[20px] text-white font-medium'>Logo</p>
    </div>
    <div className="">
        <ul className='flex gap-x-15'>
            <Link to="/" className=' text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold'>Home</Link>
            <Link to="/AboutUs" className=' text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold'>About</Link>
            <li className=' text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold'>Services</li>
            <li className=' text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold'>Portfolio</li>
            <li className=' text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold'>Contact</li>
            <li className=' text-[18px] text-white font-medium hover:text-amber-600 duration-500 hover:font-bold'>Blog</li>
        </ul>
    </div>
    <div className="">
        <button className='bg-amber-600 text-white font-medium py-2.5 px-5 rounded-md hover:bg-amber-700 duration-500'>Hier Me</button>
    </div>

</div>
        </div>
      
    </div>
  )
}

export default Navbar