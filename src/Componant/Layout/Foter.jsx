import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Foter = () => {
  return (
    <footer className="bg-black/80 text-white pt-20 pb-10 border-t-2 border-white/25">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
          
     
          <div className="flex font-medium items-center gap-3">
            Logo
          </div>

      
          <nav className="flex flex-wrap justify-center gap-8 text-gray-400 font-medium">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="hover:text-white transition-colors">About Us</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
          </nav>

        
          <div className="flex gap-4 p-4 border border-gray-800 rounded-2xl bg-[#0a0a0a]">
            
              <div  className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
                <div className="text-[30px]"><FaLinkedin/></div> 
              
              </div>
              <div  className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
                
                <a href='https://www.facebook.com/sumit.das.413998' className="text-[30px]"><FaFacebook/></a> 
               
              </div>
              <div  className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all cursor-pointer">
               
                <a href='https://github.com/sumitdasss' className="text-[30px]"><FaGithub/></a> 
              </div>
        
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-900 pt-10 gap-6">
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-lg"><MdEmail/></span> aditodas4612@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-lg"><FaPhone/></span> +8801880851638
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500 text-lg"><IoLocationSharp/></span> Basta,Konakhola, Keraniganj,Dhaka-1310
            </div>
          </div>

          <div className="flex gap-8 text-gray-500 text-sm font-medium">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm mt-12">
          © 2025 Catalyst Analytics. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Foter