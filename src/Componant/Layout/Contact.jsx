import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

const ContactSection = () => {
  const form = useRef();
  const buttonRef = useRef();
  const fillRef = useRef(); 
  const textContainerRef = useRef();
  const [isSending, setIsSending] = useState(false);


  const { contextSafe } = useGSAP({ scope: buttonRef });

  // eslint-disable-next-line react-hooks/refs
  const runAnimation = contextSafe(() => {
    const tl = gsap.timeline();

  
    tl.to(buttonRef.current, { scale: 0.96, duration: 0.1 })
      .to(buttonRef.current, { scale: 1, duration: 0.4, ease: "elastic.out(1, 0.3)" });

   
    tl.to(fillRef.current, { 
      width: "100%", 
      duration: 2, 
      ease: "power2.inOut" 
    }, "-=0.3");

    
    tl.to(textContainerRef.current, { 
      y: "-50%", 
      duration: 0.6, 
      ease: "expo.inOut" 
    });

  
    tl.to(buttonRef.current, { 
      boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)", 
      duration: 0.3 
    });
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    runAnimation(); 

    emailjs.sendForm('service_iilgqfs', 'template_pgnlgns', form.current, '8sFKdd9saUd-f5gbd')
      .then((result) => {
        console.log(result);
        
       setTimeout(() => {
  setIsSending(false);
  if (form.current) form.current.reset(); 


  const resetTl = gsap.timeline();
  
  resetTl.to([fillRef.current, textContainerRef.current, buttonRef.current], {
    width: (index) => index === 0 ? "0%" : undefined, 
    y: (index) => index === 1 ? "0%" : undefined,    
    boxShadow: (index) => index === 2 ? "none" : undefined, 
    backgroundColor: (index) => index === 0 ? "#d97706" : undefined, 
    duration: 0.6,
    ease: "expo.out",
    stagger: 0 
  });

}, 4000);
      }, (error) => {
        console.log(error);
        
        alert("Error sending message.");
        setIsSending(false);
        gsap.to(fillRef.current, { backgroundColor: "#ef4444", duration: 0.3 }); // এরর হলে লাল রঙ
      });
  };

  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 uppercase">
            Get In <span className="text-amber-500 italic font-light">Touch.</span>
          </h2>
          <p className="text-zinc-500 font-mono italic">Available for new opportunities in 2026</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#0c0c0c] p-8 md:p-12 rounded-3xl border border-zinc-900">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-zinc-500 mb-2 uppercase tracking-widest">Name</label>
                  <input name="user_name" type="text" placeholder="Your Name" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-mono text-zinc-500 mb-2 uppercase tracking-widest">Email</label>
                  <input name="user_email" type="email" placeholder="example@mail.com" required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
              </div>
            
              <div>
                <label className="block text-sm font-mono text-zinc-500 mb-2 uppercase tracking-widest">Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project..." required className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors resize-none"></textarea>
              </div>

              {/* --- STYLISH LIQUID BUTTON --- */}
              <button 
                ref={buttonRef}
                type="submit" 
                disabled={isSending}
                className="relative w-full h-16 bg-zinc-800 rounded-xl overflow-hidden group transition-all disabled:cursor-not-allowed border border-zinc-700"
              >
                {/* Background Liquid Fill Layer */}
                <div 
                  ref={fillRef}
                  className="absolute top-0 left-0 h-full w-0 bg-amber-600 z-0 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                ></div>

                {/* Text Sliding Container */}
                <div className="relative z-10 h-full w-full overflow-hidden">
                  <div 
                    ref={textContainerRef}
                    className="flex flex-col h-[200%] w-full"
                  >
                    {/* Default State */}
                    <div className="h-1/2 w-full flex items-center justify-center">
                      <span className="uppercase tracking-[0.3em] font-black text-sm">Send Message</span>
                    </div>
                    {/* Success State */}
                    <div className="h-1/2 w-full flex items-center justify-center gap-2 bg-emerald-600">
                      <FaCheck className="text-white" />
                      <span className="uppercase tracking-[0.3em] font-black text-sm">Sent Successfully</span>
                    </div>
                  </div>
                </div>
              </button>
            </form>
          </div>

          {/* Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 flex items-center gap-4 hover:border-amber-500/50 transition-colors">
                <div className="w-12 h-12 bg-amber-600/10 rounded-full flex items-center justify-center text-amber-500">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono">EMAIL ME</p>
                  <p className="font-bold">aditodas4612@gmail.com</p>
                </div>
              </div>

              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 flex items-center gap-4 hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono">LOCATION</p>
                  <p className="font-bold">Basta, Keraniganj, Dhaka</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-6">Social Ecosystem</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/sumitdasss" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#161b22] rounded-2xl flex items-center justify-center hover:bg-amber-600 transition-all group">
                  <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#0077b5] rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#0077b5] transition-all group">
                  <FaLinkedinIn size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.facebook.com/sumit.das.413998" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#1877f2] rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#1877f2] transition-all group">
                  <FaFacebookF size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-64 bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative group">
              <a 
                href="https://www.google.com/maps/place/Basta+Radha+Krishna+Mondir/@23.7122521,90.3392015,14.25z/data=!4m6!3m5!1s0x3755bfd5ca41e06f:0x25cbb88cc0bb9e8e!8m2!3d23.6940316!4d90.3357982!16s%2Fg%2F11j5rp74b4?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noreferrer"
                className="absolute top-4 right-4 z-10 bg-white text-black px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-amber-500 hover:text-white transition-all flex items-center gap-2"
              >
                <FaMapMarkerAlt size={14} />
                VIEW IN MAP
              </a>

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14619.066487841355!2d90.3541888!3d23.6485504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;