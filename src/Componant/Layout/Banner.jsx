import React from 'react'
import img from '/src/assets/22440.jpg'
import { FaLinkedin, FaFacebook,FaGithub } from "react-icons/fa";
const Banner = () => {
  return (




    <div className='bg-[#1E1E1E]/70 min-h-screen lg:h-[800px] relative overflow-hidden'>
      
   
      <div className="hidden xl:flex gap-x-6 absolute -rotate-90 top-[330px] -left-[280px]">
        {["D", "E", "V", "E", "L", "O", "P", "E", "R"].map((letter, index) => (
          <p 
            key={index} 
            className="text-[100px] font-bold animate-text-gradient opacity-50"
            style={{ animationDelay: `${index * 0.1}s` }} 
          >
            {letter}
          </p>
        ))}
      </div>

      <div className="max-w-[1440px] m-auto px-6">
        <div className="text-white font-sans flex items-center">
          <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between mt-[50px] lg:mt-[100px] py-10 gap-y-16 lg:gap-y-0">
            
         
            <div className="w-full lg:w-1/2 z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
              <p className="text-xl text-gray-400">Hi I am</p>
              <h2 className="text-2xl font-semibold text-gray-300">Sumit Das</h2>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#f97316] mt-4 leading-tight">
                Frontend Web Developer
              </h1>
             
              <div className="flex space-x-4 mt-8">
                <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-[#f97316] hover:text-[#f97316] transition cursor-pointer text-gray-400 bg-white/5">
                  <span className="text-[22px]"><FaLinkedin/></span>
                </div>
                <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-[#f97316] hover:text-[#f97316] transition cursor-pointer text-gray-400 bg-white/5">
                  <a href='https://www.facebook.com/sumit.das.413998' target="_blank" rel="noreferrer" className="text-[22px]"><FaFacebook/></a>
                </div>
                <div className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:border-[#f97316] hover:text-[#f97316] transition cursor-pointer text-gray-400 bg-white/5">
                  <a href='https://github.com/sumitdasss' target="_blank" rel="noreferrer" className="text-[22px]"><FaGithub/></a>
                </div>
              </div>

           
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
                <button className="bg-[#f97316] px-8 md:px-10 py-3 rounded-md font-bold hover:bg-[#ea580c] transition duration-300 shadow-lg shadow-orange-500/20">
                  Hire Me
                </button>
                <button className="border border-gray-600 px-8 md:px-10 py-3 rounded-md font-bold hover:bg-white hover:text-black transition duration-300">
                  Download CV
                </button>
              </div>

              <div className="flex space-x-6 md:space-x-12 mt-16 bg-[#111111]/70 p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl">
                <div className="text-center lg:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-[#f97316]">3.75</h3>
                  <p className="text-xs md:text-sm text-gray-400">CGPA</p>
                </div>
                <div className="border-l border-gray-800 h-12"></div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-[#f97316]">20+</h3>
                  <p className="text-xs md:text-sm text-gray-400">Projects Done</p>
                </div>
                <div className="border-l border-gray-800 h-12"></div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-[#f97316]">100%</h3>
                  <p className="text-xs md:text-sm text-gray-400">Commitment</p>
                </div>
              </div>
            </div>

            
            <div className="w-full lg:w-1/2 relative flex justify-center items-center">
      
              <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-[#181818] rounded-full shadow-[0_0_100px_rgba(249,115,22,0.05)]"></div>
              
          
              <div className="relative z-10 w-[260px] h-[350px] md:w-[400px] md:h-[500px] bg-gradient-to-b from-gray-800 to-transparent rounded-b-full flex items-end justify-center overflow-hidden border-b-4 border-orange-500/30">
                <img 
                  src={img} 
                  alt="Sumit Das" 
                  className="grayscale hover:grayscale-0 transition duration-700 object-cover w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner