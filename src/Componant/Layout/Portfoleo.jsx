import React from 'react';
import img from "/src/assets/22.png"
import img2 from "/src/assets/23.png"
import img3 from "/src/assets/24.png"
import img4 from "/src/assets/25.png"
import img5 from "/src/assets/26.png"
import img6 from "/src/assets/27.png"
import img7 from "/src/assets/28.png"
import img8 from "/src/assets/29.png"

const PortfolioSection = () => {
  return (
    <div className="bg-[#0a0a0a] text-white">
      
      {/* --- Projects Section (8 Static Projects) --- */}
      <section className="py-24 border-b border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 uppercase text-amber-500">
              Selected <br /> <span className="text-zinc-500 italic font-light text-white">Works.</span>
            </h2>
            <p className="text-zinc-500 font-mono">Total Projects: 08</p>
          </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
  
  {/* Project 01 - Large */}
  <a href="https://project-1-inky-beta.vercel.app/" target="_blank" className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-zinc-900  block border border-zinc-800">
    <img src={img} alt="" />
    <div className="absolute inset-0 bg-amber-600 opacity-5  transition-opacity"></div>

    <div className="absolute bottom-0 left-0 p-8 w-full">

      <p className="text-xs text-amber-500 font-mono mb-2">01 // FULL STACK WEB</p>
      <h3 className="text-3xl text-[#262626] font-bold group-hover:translate-x-2 transition-transform">Premium E-Commerce Webside</h3>
    </div>
  </a>

  {/* Project 02 - Small */}
  <a href="https://sumitdasss.github.io/work19/" target="_blank" className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-zinc-900  md:aspect-auto block border border-zinc-800">
  <img src={img2} alt="" className='h-full w-full object-cover' />
    <div className="absolute bottom-0 left-0 p-8">

      <p className="text-xs text-amber-500 font-mono mb-2">02 // REACT JS</p>
      <h3 className="text-xl text-[#262626] font-bold">Social Media Dashboard</h3>
    </div>
  </a>

  {/* Project 03 - Medium */}
  <a href="https://sumitdasss.github.io/work13/" target="_blank" className="md:col-span-4 group relative overflow-hidden rounded-3xl bg-zinc-900  block border border-zinc-800">
  <img src={img4} alt=""  className='h-full w-full object-cover'/>
    <div className="absolute bottom-0 left-0 p-8">
      <p className="text-xs text-amber-500 font-mono mb-2">03 // UI/UX DESIGN</p>
      <h3 className="text-xl text-[#262626] font-bold">Modern Portfolio </h3>
    </div>
  </a>

  {/* Project 04 - Large */}
  <a href=" https://sumitdasss.github.io/work12/" target="_blank" className="md:col-span-8 group relative overflow-hidden rounded-3xl bg-zinc-900  block border border-zinc-800">
  <img src={img3} alt="" />
    <div className="absolute inset-0 bg-amber-600 opacity-5 group-hover:opacity-10 transition-opacity"></div>
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <p className="text-xs text-amber-500 font-mono mb-2">04 // FRONTEND DEVELOPMENT</p>
      <h3 className="text-3xl text-[#262626] font-bold group-hover:translate-x-2 transition-transform">Premium E-Commerce Webside</h3>
    </div>
  </a>

  {/* Project 05 - Half Width */}
  <a href="https://sumitdasss.github.io/work14/" target="_blank" className="md:col-span-6 group relative overflow-hidden rounded-3xl bg-zinc-900 aspect-video block border border-zinc-800">
  <img src={img5} alt="" />
    <div className="absolute bottom-0 left-0 p-8">
      <p className="text-xs text-amber-500 font-mono mb-2">05 // JAVASCRIPT</p>
      <h3 className="text-2xl text-[#262626] font-bold">Premium E-Commerce Webside</h3>
    </div>
  </a>

  {/* Project 06 - Half Width */}
  <a href="https://sumitdasss.github.io/work15/" target="_blank" className="md:col-span-6 group relative overflow-hidden rounded-3xl bg-zinc-900  block border border-zinc-800">
  <img src={img6} alt="" className='h-full' />
    <div className="absolute bottom-0 left-0 p-8">
      <p className="text-xs text-amber-500 font-mono mb-2">06 // TAILWIND CSS</p>
      <h3 className="text-2xl text-[#262626] font-bold">Premium E-Commerce Webside</h3>
    </div>
  </a>

  {/* Project 07 - Small */}
  <a href="https://sumitdasss.github.io/work20/" target="_blank" className="md:col-span-5 group relative overflow-hidden rounded-3xl bg-zinc-900  block border border-zinc-800">
  <img src={img7} alt="" className='h-full w-full'/>
    <div className="absolute bottom-0 left-0 p-8">
      <p className="text-xs text-amber-500 font-mono mb-2">07 // API INTEGRATION</p>
      <h3 className="text-2xl text-white font-bold">Premium E-Commerce Webside</h3>
    </div>
  </a>

  {/* Project 08 - Large Width */}
  <a href="https://sumitdasss.github.io/work21/" target="_blank" className="md:col-span-7 group relative overflow-hidden rounded-3xl bg-zinc-900  block border border-zinc-800">
  <img src={img8} alt="" />
    <div className="absolute inset-0 bg-amber-600 opacity-5 group-hover:opacity-10 transition-opacity"></div>
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <p className="text-xs text-amber-500 font-mono mb-2">08 // MERN STACK</p>
      <h3 className="text-3xl font-bold text-[#262626] group-hover:translate-x-2 transition-transform">Premium E-Commerce Webside</h3>
    </div>
  </a>

</div>
        </div>
      </section>

      {/* --- Skills Section (Node, React, JS, Tailwind) --- */}
     {/* --- Skills Section --- */}
      <div className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-widest inline-block border-b-2 border-amber-600 pb-2">Tech Stack</h2>
            <p className="text-zinc-500 mt-4 font-mono">My core technical expertise</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* React Card */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-400 transition-all duration-300 group">
              <div className="text-5xl mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">⚛️</div>
              <h3 className="font-bold text-xl mb-3">React.js</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Building dynamic, high-performance SPAs with Hooks, Context API, and modular component architecture.
              </p>
            </div>

            {/* Next.js Card */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-white transition-all duration-300 group">
              <div className="text-5xl mb-6 text-white group-hover:scale-110 transition-transform duration-300">▲</div>
              <h3 className="font-bold text-xl mb-3">Next.js</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Optimizing web applications with Server-Side Rendering (SSR), Static Site Generation (SSG), and seamless routing.
              </p>
            </div>

            {/* Node.js Card */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-green-600 transition-all duration-300 group">
              <div className="text-5xl mb-6 text-green-500 group-hover:scale-110 transition-transform duration-300">🟢</div>
              <h3 className="font-bold text-xl mb-3">Node.js</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Developing scalable backend services, RESTful APIs, and managing server-side logic and databases.
              </p>
            </div>

            {/* MongoDB Card */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-green-400 transition-all duration-300 group">
              <div className="text-5xl mb-6 text-green-400 group-hover:scale-110 transition-transform duration-300">🍃</div>
              <h3 className="font-bold text-xl mb-3">MongoDB</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Designing NoSQL database schemas and managing data with high availability and scalability in mind.
              </p>
            </div>

            {/* JavaScript Card */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500 transition-all duration-300 group">
              <div className="text-5xl mb-6 text-yellow-400 group-hover:scale-110 transition-transform duration-300">🟨</div>
              <h3 className="font-bold text-xl mb-3">JavaScript</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Expertise in ES6+, asynchronous programming, and DOM manipulation to create interactive experiences.
              </p>
            </div>

            {/* Express.js Card */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-400 transition-all duration-300 group">
              <div className="text-5xl mb-6 text-zinc-300 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="font-bold text-xl mb-3">Express.js</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Fast, unopinionated, minimalist web framework for Node.js to build robust API endpoints.
              </p>
            </div>

            {/* Tailwind Card */}
            <div className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-sky-500 transition-all duration-300 group">
              <div className="text-5xl mb-6 text-sky-400 group-hover:scale-110 transition-transform duration-300">🌊</div>
              <h3 className="font-bold text-xl mb-3">Tailwind CSS</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Crafting pixel-perfect, responsive layouts with utility-first CSS for rapid and modern UI development.
              </p>
            </div>

          </div>
        </div>
      </div>
      {/* --- Dual Section: Work Related & Educational Related --- */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Side 1: Work & Experience */}
            <div>
              <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-amber-600"></span>
                EXPERIENCE
              </h2>
              <div className="space-y-10">
                <div className="border-l-2 border-zinc-800 pl-8 relative group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-amber-600 rounded-full"></div>
                  <h4 className="text-amber-500 font-mono text-sm">2024 - PRESENT</h4>
                  <h3 className="text-2xl font-bold">Frontend Developer</h3>
                  <p className="text-zinc-400 mt-2">Working on complex React projects, converting Figma to pixel-perfect code with Tailwind CSS.</p>
                </div>
                <div className="border-l-2 border-zinc-800 pl-8 relative group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-700 rounded-full group-hover:bg-amber-600 transition-colors"></div>
                  <h4 className="text-zinc-500 font-mono text-sm">2023 - 2024</h4>
                  <h3 className="text-2xl font-bold">Junior Web Developer</h3>
                  <p className="text-zinc-400 mt-2">Developed responsive landing pages and integrated RESTful APIs.</p>
                </div>
              </div>
            </div>

            {/* Side 2: Educational Related */}
            <div>
              <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
                <span className="w-12 h-[2px] bg-blue-600"></span>
                EDUCATION
              </h2>
              <div className="space-y-10">
                <div className="border-l-2 border-zinc-800 pl-8 relative group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <h4 className="text-blue-500 font-mono text-sm">2026 - 2030</h4>
                  <h3 className="text-2xl font-bold">Pending</h3>
                  <p className="text-zinc-400 mt-2">Pending</p>
                </div>
                <div className="border-l-2 border-zinc-800 pl-8 relative group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-700 rounded-full group-hover:bg-blue-600 transition-colors"></div>
                  <h4 className="text-zinc-500 font-mono text-sm">2024 - 2025</h4>
                  <h3 className="text-2xl font-bold">Higher Secondary</h3>
                  <p className="text-zinc-400 mt-2">Completed Humantis background with a focus on Govt. Job  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default PortfolioSection;