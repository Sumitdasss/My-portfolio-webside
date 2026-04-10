import React from 'react'

const Bannertwo = () => {
  return (
 <div className="bg-black/70 text-gray-100 antialiased py-20 px-4 relative overflow-hidden">
  
  

  <div className="max-w-[1440px] mx-auto relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
        Our Ultimate Set of Services
      </h2>
      <p className="text-gray-400 text-lg md:text-xl font-medium">
        For Your Ideas Implementation
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

      <div className="group bg-[#0f0f0f] p-10 rounded-[40px] border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-2xl flex flex-col items-center text-center">
        <div className="mb-8 p-6 bg-gray-900 rounded-3xl group-hover:bg-blue-900/20 transition-colors">
          <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Frontend Development</h3>
        <p className="text-gray-400 leading-relaxed">
          Crafting high-performance, pixel-perfect, and fully responsive user interfaces using modern frameworks like React and Tailwind CSS.
        </p>
      </div>

      <div className="group bg-[#0f0f0f] p-10 rounded-[40px] border border-gray-800 hover:border-orange-500/50 transition-all duration-300 shadow-2xl flex flex-col items-center text-center">
        <div className="mb-8 p-6 bg-gray-900 rounded-3xl group-hover:bg-orange-900/20 transition-colors">
          <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Backend & API</h3>
        <p className="text-gray-400 leading-relaxed">
          Building secure, scalable server-side logic and robust APIs to ensure seamless data management and application performance.
        </p>
      </div>

      <div className="group bg-[#0f0f0f] p-10 rounded-[40px] border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 shadow-2xl flex flex-col items-center text-center">
        <div className="mb-8 p-6 bg-gray-900 rounded-3xl group-hover:bg-emerald-900/20 transition-colors">
          <svg className="w-16 h-16 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 0１-１v-3a１ １ ０ ００-１-１H4a２ ２ ０ １１０-４h１a１ １ ０ ００１-１V7a１ １ ０ ０１１-１h3a１ １ ０ ００１-１V4z"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Solutions</h3>
        <p className="text-gray-400 leading-relaxed">
          Providing end-to-end web development from initial concept to final deployment, delivering complete digital products for your business.
        </p>
      </div>

    </div>
  </div>
</div>
  )
}

export default Bannertwo