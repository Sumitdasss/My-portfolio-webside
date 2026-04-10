import React, { useState } from 'react';

const FAQSectiontwo = () => {
  const [open, setOpen] = useState(1); // Default vabe 1st ta open thakbe

  return (
    <div className="bg-black/85 text-white py-24 px-6 font-sans">
      <div className="max-w-[1000px] mx-auto">
        
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Web Development FAQs
        </h2>

        <div className="flex flex-col gap-5">
          
          {/* ITEM 01 */}
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
                Loading speed is crucial for user experience and SEO. A fast-loading site reduces bounce rates and helps your business rank higher on Google search results.
              </div>
            )}
          </div>

          {/* ITEM 02 */}
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
                React allows for building fast and interactive interfaces using reusable components. Its efficient rendering makes it perfect for complex web applications.
              </div>
            )}
          </div>

          {/* ITEM 03 */}
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
                Yes, every website I build is 100% responsive, meaning it works perfectly on desktops, tablets, and mobile phones.
              </div>
            )}
          </div>

          {/* ITEM 04 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 4 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 4 ? 0 : 4)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 4 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>04</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 4 ? 'text-blue-500' : 'text-gray-300'}`}>What is SEO and why do I need it?</h3>
              </div>
              <div className="text-2xl">{open === 4 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 4 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                SEO helps your site rank higher on Google. I optimize the code and structure to ensure maximum visibility for your business.
              </div>
            )}
          </div>

          {/* ITEM 05 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 5 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 5 ? 0 : 5)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 5 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>05</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 5 ? 'text-blue-500' : 'text-gray-300'}`}>How do I update content?</h3>
              </div>
              <div className="text-2xl">{open === 5 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 5 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                I can build a custom admin dashboard or integrate a CMS so you can easily change text and images without any coding.
              </div>
            )}
          </div>

          {/* ITEM 06 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 6 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 6 ? 0 : 6)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 6 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>06</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 6 ? 'text-blue-500' : 'text-gray-300'}`}>Is my website secure?</h3>
              </div>
              <div className="text-2xl">{open === 6 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 6 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                I use SSL certificates and secure API connections to ensure that your site and user data are protected from threats.
              </div>
            )}
          </div>

          {/* ITEM 07 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 7 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 7 ? 0 : 7)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 7 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>07</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 7 ? 'text-blue-500' : 'text-gray-300'}`}>Do you offer website redesign?</h3>
              </div>
              <div className="text-2xl">{open === 7 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 7 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                Yes, I can take your existing website and modernize it with a brand new look and better performance.
              </div>
            )}
          </div>

          {/* ITEM 08 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 8 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 8 ? 0 : 8)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 8 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>08</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 8 ? 'text-blue-500' : 'text-gray-300'}`}>What is domain and hosting?</h3>
              </div>
              <div className="text-2xl">{open === 8 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 8 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                A domain is your website's name, and hosting is where the files are stored. You need both to be online.
              </div>
            )}
          </div>

          {/* ITEM 09 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 9 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 9 ? 0 : 9)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 9 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>09</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 9 ? 'text-blue-500' : 'text-gray-300'}`}>How long does a project take?</h3>
              </div>
              <div className="text-2xl">{open === 9 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 9 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                A simple site takes about a week, while more complex apps might take 2-4 weeks depending on requirements.
              </div>
            )}
          </div>

          {/* ITEM 10 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 10 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 10 ? 0 : 10)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 10 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>10</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 10 ? 'text-blue-500' : 'text-gray-300'}`}>What is Frontend vs Backend?</h3>
              </div>
              <div className="text-2xl">{open === 10 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 10 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                Frontend is what users see. Backend is the server-side logic and database that runs behind the scenes.
              </div>
            )}
          </div>

          {/* ITEM 11 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 11 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 11 ? 0 : 11)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 11 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>11</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 11 ? 'text-blue-500' : 'text-gray-300'}`}>Can you build an E-commerce store?</h3>
              </div>
              <div className="text-2xl">{open === 11 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 11 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                Yes, I can build stores with shopping carts, product filtering, and secure payment integrations.
              </div>
            )}
          </div>

          {/* ITEM 12 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 12 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 12 ? 0 : 12)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 12 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>12</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 12 ? 'text-blue-500' : 'text-gray-300'}`}>What technologies do you use?</h3>
              </div>
              <div className="text-2xl">{open === 12 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 12 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                I primarily use React, Next.js, Tailwind CSS, and Framer Motion for smooth animations.
              </div>
            )}
          </div>

          {/* ITEM 13 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 13 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 13 ? 0 : 13)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 13 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>13</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 13 ? 'text-blue-500' : 'text-gray-300'}`}>Do you provide maintenance?</h3>
              </div>
              <div className="text-2xl">{open === 13 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 13 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                Yes, I can provide ongoing support to keep your website updated and running smoothly.
              </div>
            )}
          </div>

          {/* ITEM 14 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 14 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 14 ? 0 : 14)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 14 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>14</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 14 ? 'text-blue-500' : 'text-gray-300'}`}>How much does a site cost?</h3>
              </div>
              <div className="text-2xl">{open === 14 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 14 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                The cost depends on the features and design. Contact me for a custom quote based on your needs.
              </div>
            )}
          </div>

          {/* ITEM 15 */}
          <div className={`rounded-[35px] overflow-hidden transition-all duration-300 ${open === 15 ? 'bg-[#181818]' : 'bg-[#111]'}`}>
            <div className="flex items-center justify-between p-7 cursor-pointer" onClick={() => setOpen(open === 15 ? 0 : 15)}>
              <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold ${open === 15 ? 'bg-[#222] text-blue-500' : 'bg-[#1a1a1a] text-gray-500'}`}>15</div>
                <h3 className={`text-xl md:text-2xl font-semibold ${open === 15 ? 'text-blue-500' : 'text-gray-300'}`}>How to get started?</h3>
              </div>
              <div className="text-2xl">{open === 15 ? <span className="text-blue-500">✕</span> : <span className="text-gray-500">＋</span>}</div>
            </div>
            {open === 15 && (
              <div className="px-8 pb-8 ml-20 text-gray-400 text-lg leading-relaxed max-w-[800px]">
                Just send me a message through the contact form, and we can discuss your goals and get started!
              </div>
            )}
          </div>

        </div>

        <div className="flex justify-center mt-14">
           <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-12 rounded-2xl transition-all shadow-lg active:scale-95">
             See More FAQ
           </button>
        </div>

      </div>
    </div>
  );
};

export default FAQSectiontwo;