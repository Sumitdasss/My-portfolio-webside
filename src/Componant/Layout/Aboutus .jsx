import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-24 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center mb-20">
          <h4 className="text-blue-500 font-bold uppercase tracking-[4px] text-sm mb-4">Who We Are</h4>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Empowering Your Digital <br className="hidden md:block" /> Presence with Innovation.
          </h2>
        </div>

        {/* Main Content: Image & Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Design Box (image_19a895.png style) */}
          <div className="relative p-10 bg-[#111] border border-gray-800 rounded-[40px] group hover:border-blue-500/50 transition-all duration-500 shadow-2xl">
            {/* Quote Icon */}
            <div className="text-blue-500 mb-8">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3L10.017 3V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z" />
              </svg>
            </div>
            
            <p className="text-gray-300 text-2xl md:text-3xl leading-relaxed italic mb-10">
              "We leverage the power of React and Next.js to create seamless, interactive, and modern web interfaces."
            </p>
            
            <div className="border-t border-gray-800 pt-8">
              <h4 className="text-blue-500 font-bold text-2xl">Sumit Das</h4>
              <p className="text-gray-500 text-sm uppercase tracking-[3px] mt-1">Lead Web Developer</p>
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Amader lokkho holo modern technology bebohar kore business-gulo ke digital world-e ekti shokti-shali obosthan toiri kore deya. Ami React, Next.js ebong Tailwind bebohar kore high-performance website toiri kori.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#111] p-6 rounded-3xl border border-gray-800">
                <h2 className="text-3xl font-bold text-blue-500">20+</h2>
                <p className="text-gray-500 text-sm uppercase mt-1">Projects Done</p>
              </div>
              <div className="bg-[#111] p-6 rounded-3xl border border-gray-800">
                <h2 className="text-3xl font-bold text-blue-500">6+</h2>
                <p className="text-gray-500 text-sm uppercase mt-1">Month Experience</p>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95">
              Contact Me
            </button>
          </div>

        </div>

        {/* Bottom Section: Skills Icons or Tech Stack */}
        <div className="mt-24 pt-16 border-t border-gray-900 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
           <span className="text-2xl font-bold">REACT</span>
           <span className="text-2xl font-bold">NEXT.JS</span>
           <span className="text-2xl font-bold">TAILWIND</span>
           <span className="text-2xl font-bold">GSAP</span>
           <span className="text-2xl font-bold">FIREBASE</span>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;