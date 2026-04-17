import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iilgqfs','template_pgnlgns', form.current,'8sFKdd9saUd-f5gbd')
      .then((result) => {
          console.log(result.text); 
          alert("Message Sent!");
          e.target.reset();
      }, (error) => {
          console.log(error.text); 
          alert("Error sending message.");
      });
  }; 

  return (
    <section className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-4 uppercase">
            Get In <span className="text-amber-500 italic font-light">Touch.</span>
          </h2>
          <p className="text-zinc-500 font-mono">Available for new opportunities in 2026</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Form - 7 Columns */}
          <div className="lg:col-span-7 bg-[#0c0c0c] p-8 md:p-12 rounded-3xl border border-zinc-900">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-zinc-500 mb-2">NAME</label>
                  <input name="user_name" type="text" placeholder="Sumit Das" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-mono text-zinc-500 mb-2">EMAIL</label>
                  <input name="user_email" type="email" placeholder="example@mail.com" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-500 mb-2">SUBJECT</label>
                <input name="subject" type="text" placeholder="Project Inquiry" className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-mono text-zinc-500 mb-2">MESSAGE</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project..." className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-all transform hover:scale-105">
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Info & Socials - 5 Columns */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600/10 rounded-full flex items-center justify-center text-amber-500">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono">EMAIL ME</p>
                  <p className="font-bold">aditodas4612@gmail.com</p>
                </div>
              </div>

              <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-mono">LOCATION</p>
                  <p className="font-bold">Basta,Keraniganj, Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 bg-zinc-900 rounded-3xl border border-zinc-800">
              <h3 className="text-xl font-bold mb-6">Social Ecosystem</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/sumitdasss" target="_blank" className="w-14 h-14 bg-[#161b22] rounded-2xl flex items-center justify-center hover:bg-amber-600 transition-all group">
                  <FaGithub size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://linkedin.com" target="_blank" className="w-14 h-14 bg-[#0077b5] rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#0077b5] transition-all group">
                  <FaLinkedinIn size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.facebook.com/sumit.das.413998" target="_blank" className="w-14 h-14 bg-[#1877f2] rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#1877f2] transition-all group">
                  <FaFacebookF size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                  <a href='https://share.google/BGgJwE27O3LmXUEey'  target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#1877f2] rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#1877f2] transition-all group">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.908 5.957l-1.107-5.123c-.11-.512-.56-.834-1.01-.834H4.21c-.45 0-.9.322-1.01.834L2.093 5.957c-.16.745.037 1.517.543 2.062.054.057.111.108.17.157v12.244c0 1.1.9 2 2 2h14.4c1.1 0 2-.9 2-2V8.176c.059-.049.116-.1.17-.157.506-.545.703-1.317.543-2.062zM5.353 1.94h13.294l.802 3.71c.044.204-.01.407-.151.558-.15.16-.36.252-.577.252-.533 0-.966-.433-.966-.966V4.53h-1.2v.964c0 .662-.538 1.2-1.2 1.2s-1.2-.538-1.2-1.2V4.53h-1.2v.964c0 .662-.538 1.2-1.2 1.2s-1.2-.538-1.2-1.2V4.53h-1.2v.964c0 .662-.538 1.2-1.2 1.2s-1.2-.538-1.2-1.2V4.53h-1.2v.964c0 .533-.433.966-.966.966-.217 0-.427-.092-.577-.252-.141-.151-.195-.354-.151-.558l.802-3.71zM18.8 20.44H5.2V8.46c.045.011.092.022.14.022.697 0 1.306-.39 1.627-.968.321.578.93.968 1.627.968.697 0 1.306-.39 1.627-.968.321.578.93.968 1.627.968.697 0 1.306-.39 1.627-.968.321.578.93.968 1.627.968.697 0 1.306-.39 1.627-.968.048 0 .095-.011.14-.022v11.98zM14.4 11.24h-4.8v4.8h4.8v-4.8z"/>
      </svg>
    </a>
              </div>
            </div>

            {/* Map Section */}
            <div className="h-64 bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative group">
              <a 
                href="https://maps.google.com" 
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