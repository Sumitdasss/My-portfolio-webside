import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQSection = () => {
    const navigate = useNavigate()
  const [open, setOpen] = useState(1); 

  return (
    <div className="bg-black/85 text-white py-24 px-6 font-sans">
      <div className="max-w-[1000px] mx-auto">
        
     
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Web Development FAQs
        </h2>

        <div className="flex flex-col gap-5">
          
         
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 1 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 1 ? 0 : 1)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 1 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>01</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 1 ? 'text-blue-500' : 'text-gray-300'}`}>Why is website loading speed important?</h3>
              </div>
              <div className="text-2xl">{open === 1 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 1 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                Loading speed is crucial for user experience and SEO. A fast-loading site reduces bounce rates, keeps users engaged, and helps your business rank higher on Google search results.
              </div>
            )}
          </div>

       
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 2 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 2 ? 0 : 2)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 2 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>02</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 2 ? 'text-blue-500' : 'text-gray-300'}`}>What are the benefits of using React.js?</h3>
              </div>
              <div className="text-2xl">{open === 2 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 2 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                React allows for building fast, scalable, and interactive user interfaces using reusable components. Its virtual DOM and efficient rendering make it perfect for complex web applications.
              </div>
            )}
          </div>

       
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 3 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 3 ? 0 : 3)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 3 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>03</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 3 ? 'text-blue-500' : 'text-gray-300'}`}>Do you build mobile-responsive websites?</h3>
              </div>
              <div className="text-2xl">{open === 3 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 3 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                Yes, every website I build is 100% responsive. This means it will look and work perfectly on desktops, tablets, and mobile phones of all screen sizes.
              </div>
            )}
          </div>

        
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 4 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 4 ? 0 : 4)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 4 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>04</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 4 ? 'text-blue-500' : 'text-gray-300'}`}>What is SEO and why does my site need it?</h3>
              </div>
              <div className="text-2xl">{open === 4 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 4 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                SEO (Search Engine Optimization) ensures your site is visible to people searching on Google. I implement clean code, meta tags, and optimized structure to help your site rank better.
              </div>
            )}
          </div>

       
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 5 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 5 ? 0 : 5)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 5 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>05</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 5 ? 'text-blue-500' : 'text-gray-300'}`}>How do I update content on my website?</h3>
              </div>
              <div className="text-2xl">{open === 5 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 5 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                Depending on your needs, I can integrate a CMS (Content Management System) or build a custom admin dashboard so you can easily update text, images, and blogs without writing code.
              </div>
            )}
          </div>

        
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 6 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 6 ? 0 : 6)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 6 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>06</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 6 ? 'text-blue-500' : 'text-gray-300'}`}>How do you ensure website security?</h3>
              </div>
              <div className="text-2xl">{open === 6 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 6 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                I follow industry-standard security practices, including SSL certification, secure API connections, and sanitizing user inputs to protect your site from common cyber attacks.
              </div>
            )}
          </div>

        </div>

    
        <div className="flex justify-center mt-14">
           <button onClick={()=>navigate("/FAQ")} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-12 rounded-2xl transition-all shadow-lg active:scale-95">
             See More FAQ
           </button>
        </div>

      </div>
    </div>
  );
};

export default FAQSection;