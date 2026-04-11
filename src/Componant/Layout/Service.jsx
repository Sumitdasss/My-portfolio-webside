import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";

const ServicesSection = () => {
  return (
    <div className="bg-black text-white py-20 px-4 md:px-10 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Comprehensive web development and digital solutions to scale your business.
        </p>
      </div>

      {/* Grid Container - 8 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* Card 1: Frontend Development */}
        <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-[40px] hover:border-blue-500/40 transition-all duration-500 group text-center">
          <div className="mb-6 flex justify-center text-5xl">⚛️</div>
          <h3 className="text-2xl font-bold mb-4">Frontend Development</h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">Modern, interactive user interfaces built with React and Tailwind CSS for seamless performance.</p>
          <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-gray-400 text-left px-4">
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> React Hooks</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Tailwind CSS</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Responsive Design</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Framer Motion</div>
          </div>
          <button className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 px-6 py-2 rounded-full mx-auto hover:bg-blue-600 transition-all">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><HiArrowLongRight className="text-white" /></div>
            <a href='https://calendar.app.google/sWB1cHaj6vEnhiCy8' className="text-sm font-medium">Book a Call</a>
          </button>
        </div>

        {/* Card 2: Full-Stack Web App */}
        <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-[40px] hover:border-blue-500/40 transition-all duration-500 group text-center">
          <div className="mb-6 flex justify-center text-5xl">🚀</div>
          <h3 className="text-2xl font-bold mb-4">Full-Stack Web Apps</h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">End-to-end web applications with robust backend architecture and smooth client-side experience.</p>
          <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-gray-400 text-left px-4">
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Next.js</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Node.js / Express</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> API Development</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Auth Systems</div>
          </div>
          <button className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 px-6 py-2 rounded-full mx-auto hover:bg-blue-600 transition-all">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><HiArrowLongRight className="text-white" /></div>
            <a href='https://calendar.app.google/sWB1cHaj6vEnhiCy8' className="text-sm font-medium">Book a Call</a>
          </button>
        </div>

        {/* Card 3: E-commerce Development */}
        <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-[40px] hover:border-blue-500/40 transition-all duration-500 group text-center">
          <div className="mb-6 flex justify-center text-5xl">🛒</div>
          <h3 className="text-2xl font-bold mb-4">E-commerce Solutions</h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">Scalable online stores with shopping carts, product filtering, and payment gateway integration.</p>
          <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-gray-400 text-left px-4">
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Stripe Integration</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Cart Logic</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Dashboard</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Order Tracking</div>
          </div>
          <button className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 px-6 py-2 rounded-full mx-auto hover:bg-blue-600 transition-all">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><HiArrowLongRight className="text-white" /></div>
          <a href='https://calendar.app.google/sWB1cHaj6vEnhiCy8' className="text-sm font-medium">Book a Call</a>
          </button>
        </div>

        {/* Card 4: UI/UX Web Design */}
        <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-[40px] hover:border-blue-500/40 transition-all duration-500 group text-center">
          <div className="mb-6 flex justify-center text-5xl">🎨</div>
          <h3 className="text-2xl font-bold mb-4">UI/UX Web Design</h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">Converting complex ideas into clean, user-centric, and high-converting interface designs.</p>
          <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-gray-400 text-left px-4">
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Figma to React</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Prototyping</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Custom Icons</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Visual Branding</div>
          </div>
          <button className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 px-6 py-2 rounded-full mx-auto hover:bg-blue-600 transition-all">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><HiArrowLongRight className="text-white" /></div>
          <a href='https://calendar.app.google/sWB1cHaj6vEnhiCy8' className="text-sm font-medium">Book a Call</a>
          </button>
        </div>

        {/* Card 5: Performance Optimization */}
        <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-[40px] hover:border-blue-500/40 transition-all duration-500 group text-center">
          <div className="mb-6 flex justify-center text-5xl">⚡</div>
          <h3 className="text-2xl font-bold mb-4">Speed Optimization</h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">Improving Google Lighthouse scores and Core Web Vitals for lightning-fast loading speeds.</p>
          <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-gray-400 text-left px-4">
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Asset Caching</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Code Splitting</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> SEO Ready</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Lazy Loading</div>
          </div>
          <button className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 px-6 py-2 rounded-full mx-auto hover:bg-blue-600 transition-all">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><HiArrowLongRight className="text-white" /></div>
          <a href='https://calendar.app.google/sWB1cHaj6vEnhiCy8' className="text-sm font-medium">Book a Call</a>
          </button>
        </div>

        {/* Card 6: CMS Development */}
        <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-[40px] hover:border-blue-500/40 transition-all duration-500 group text-center">
          <div className="mb-6 flex justify-center text-5xl">📑</div>
          <h3 className="text-2xl font-bold mb-4">CMS Solutions</h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">Developing Headless CMS solutions like Sanity or Strapi for easy content management.</p>
          <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-gray-400 text-left px-4">
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Sanity CMS</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Strapi</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Markdown</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Content API</div>
          </div>
          <button className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 px-6 py-2 rounded-full mx-auto hover:bg-blue-600 transition-all">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><HiArrowLongRight className="text-white" /></div>
          <a href='https://calendar.app.google/sWB1cHaj6vEnhiCy8' className="text-sm font-medium">Book a Call</a>
          </button>
        </div>

        {/* Card 7: Backend Systems */}
        <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-[40px] hover:border-blue-500/40 transition-all duration-500 group text-center">
          <div className="mb-6 flex justify-center text-5xl">🛠️</div>
          <h3 className="text-2xl font-bold mb-4">Backend Systems</h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">Secure server-side logic and database management using modern NoSQL and SQL databases.</p>
          <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-gray-400 text-left px-4">
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> MongoDB / SQL</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Redis Caching</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> JWT Auth</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Web Sockets</div>
          </div>
          <button className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 px-6 py-2 rounded-full mx-auto hover:bg-blue-600 transition-all">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><HiArrowLongRight className="text-white" /></div>
          <a href='https://calendar.app.google/sWB1cHaj6vEnhiCy8' className="text-sm font-medium">Book a Call</a>
          </button>
        </div>

        {/* Card 8: API Integration */}
        <div className="bg-[#0f0f0f] border border-gray-800 p-8 rounded-[40px] hover:border-blue-500/40 transition-all duration-500 group text-center">
          <div className="mb-6 flex justify-center text-5xl">🔌</div>
          <h3 className="text-2xl font-bold mb-4">API Integration</h3>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">Connecting your application with third-party services like Google, AWS, and social platforms.</p>
          <div className="grid grid-cols-2 gap-2 mb-8 text-xs text-gray-400 text-left px-4">
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Payment Gateway</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Social Login</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> CRM Sync</div>
            <div className="flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span> Webhooks</div>
          </div>
          <button className="flex items-center gap-3 bg-[#1a1a1a] border border-gray-800 px-6 py-2 rounded-full mx-auto hover:bg-blue-600 transition-all">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center"><HiArrowLongRight className="text-white" /></div>
           <a href='https://calendar.app.google/sWB1cHaj6vEnhiCy8' className="text-sm font-medium">Book a Call</a>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ServicesSection;