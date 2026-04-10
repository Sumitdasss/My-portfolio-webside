import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";


const SlickSlider = Slider.default ? Slider.default : Slider;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 -right-12 -translate-y-1/2 z-10 cursor-pointer hidden md:block" onClick={onClick}>
      <div className="w-12 h-12 rounded-full border border-gray-800 bg-[#111] flex items-center justify-center hover:border-blue-500 transition-all text-gray-500 hover:text-blue-500 group">
            <FaArrowRightLong/>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 -left-12 -translate-y-1/2 z-10 cursor-pointer hidden md:block" onClick={onClick}>
      <div className="w-12 h-12 rounded-full border border-gray-800 bg-[#111] flex items-center justify-center hover:border-blue-500 transition-all text-gray-500 hover:text-blue-500 group">
        <FaArrowLeftLong/>
      </div>
    </div>
  );
};




const Bannerfour = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    };

    return (
        <div className="bg-black/60 text-white py-24 px-6 relative overflow-hidden font-sans">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-500">Why We Started</h2>
                </div>

       
                <style>{`
                    .slick-slide > div { padding: 15px 12px; }
                    .slick-dots li button:before { color: #333; font-size: 10px; }
                    .slick-dots li.slick-active button:before { color: #3b82f6; }
                `}</style>

                <SlickSlider {...settings} className="max-w-[1440px] relative">
                      
                    <div className="outline-none">
                        <div className="flex flex-col items-center text-center p-12 bg-[#111] border border-gray-800 rounded-[40px] relative group hover:border-blue-500/60 hover:-translate-y-3 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.4)] transition-all duration-500 min-h-[450px]">
                            <div className="text-blue-500 mb-10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3L10.017 3V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z"/></svg>
                            </div>
                            <p className="text-gray-400 text-xl leading-relaxed mb-10 italic flex-grow">
                                "Many businesses face challenges with slow performance and poor SEO. We focus on building high-speed web solutions that ensure better visibility and growth."
                            </p>
                            <div className="mt-auto">
                                <h4 className="text-blue-500 font-bold text-2xl group-hover:tracking-wide transition-all duration-300">Sumit Das</h4>
                                <span className="text-gray-600 text-xs uppercase tracking-[4px] font-bold mt-2 block">Full-Stack Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="outline-none">
                        <div className="flex flex-col items-center text-center p-12 bg-[#111] border border-gray-800 rounded-[40px] relative group hover:border-blue-500/60 hover:-translate-y-3 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.4)] transition-all duration-500 min-h-[450px]">
                            <div className="text-blue-500 mb-10 group-hover:scale-110 transition-all duration-500">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3L10.017 3V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z"/></svg>
                            </div>
                            <p className="text-gray-400 text-xl leading-relaxed mb-10 italic flex-grow">
                                "We leverage the power of React and Next.js to create seamless, interactive, and modern web interfaces that provide the best user experience."
                            </p>
                            <div className="mt-auto">
                                <h4 className="text-blue-500 font-bold text-2xl group-hover:tracking-wide transition-all duration-300">Sumit Das</h4>
                                <span className="text-gray-600 text-xs uppercase tracking-[4px] font-bold mt-2 block">React & Next.js Expert</span>
                            </div>
                        </div>
                    </div>

                 
                    <div className="outline-none">
                        <div className="flex flex-col items-center text-center p-12 bg-[#111] border border-gray-800 rounded-[40px] relative group hover:border-blue-500/60 hover:-translate-y-3 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.4)] transition-all duration-500 min-h-[450px]">
                            <div className="text-blue-500 mb-10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3L10.017 3V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z"/></svg>
                            </div>
                            <p className="text-gray-400 text-xl leading-relaxed mb-10 italic flex-grow">
                                "From initial concept to deployment, we transform raw ideas into scalable web applications with a strong focus on clean code and performance optimization."
                            </p>
                            <div className="mt-auto">
                                <h4 className="text-blue-500 font-bold text-2xl group-hover:tracking-wide transition-all duration-300">Sumit Das</h4>
                                <span className="text-gray-600 text-xs uppercase tracking-[4px] font-bold mt-2 block">Frontend Engineer</span>
                            </div>
                        </div>
                    </div>
                    <div className="outline-none">
                        <div className="flex flex-col items-center text-center p-12 bg-[#111] border border-gray-800 rounded-[40px] relative group hover:border-blue-500/60 hover:-translate-y-3 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.4)] transition-all duration-500 min-h-[450px]">
                            <div className="text-blue-500 mb-10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3L10.017 3V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z"/></svg>
                            </div>
                            <p className="text-gray-400 text-xl leading-relaxed mb-10 italic flex-grow">
                                "Many businesses face challenges with slow performance and poor SEO. We focus on building high-speed web solutions that ensure better visibility and growth."
                            </p>
                            <div className="mt-auto">
                                <h4 className="text-blue-500 font-bold text-2xl group-hover:tracking-wide transition-all duration-300">Sumit Das</h4>
                                <span className="text-gray-600 text-xs uppercase tracking-[4px] font-bold mt-2 block">Full-Stack Developer</span>
                            </div>
                        </div>
                    </div>

                    <div className="outline-none">
                        <div className="flex flex-col items-center text-center p-12 bg-[#111] border border-gray-800 rounded-[40px] relative group hover:border-blue-500/60 hover:-translate-y-3 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.4)] transition-all duration-500 min-h-[450px]">
                            <div className="text-blue-500 mb-10 group-hover:scale-110 transition-all duration-500">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3L10.017 3V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z"/></svg>
                            </div>
                            <p className="text-gray-400 text-xl leading-relaxed mb-10 italic flex-grow">
                                "We leverage the power of React and Next.js to create seamless, interactive, and modern web interfaces that provide the best user experience."
                            </p>
                            <div className="mt-auto">
                                <h4 className="text-blue-500 font-bold text-2xl group-hover:tracking-wide transition-all duration-300">Sumit Das</h4>
                                <span className="text-gray-600 text-xs uppercase tracking-[4px] font-bold mt-2 block">React & Next.js Expert</span>
                            </div>
                        </div>
                    </div>

                
                    <div className="outline-none">
                        <div className="flex flex-col items-center text-center p-12 bg-[#111] border border-gray-800 rounded-[40px] relative group hover:border-blue-500/60 hover:-translate-y-3 hover:shadow-[0_0_50px_-15px_rgba(59,130,246,0.4)] transition-all duration-500 min-h-[450px]">
                            <div className="text-blue-500 mb-10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017C7.56928 16 8.017 15.5523 8.017 15V9C8.017 8.44772 7.56928 8 7.017 8H4.017C2.91243 8 2.017 7.10457 2.017 6V3L10.017 3V15C10.017 18.3137 7.33072 21 4.017 21H2.017Z"/></svg>
                            </div>
                            <p className="text-gray-400 text-xl leading-relaxed mb-10 italic flex-grow">
                                "From initial concept to deployment, we transform raw ideas into scalable web applications with a strong focus on clean code and performance optimization."
                            </p>
                            <div className="mt-auto">
                                <h4 className="text-blue-500 font-bold text-2xl group-hover:tracking-wide transition-all duration-300">Sumit Das</h4>
                                <span className="text-gray-600 text-xs uppercase tracking-[4px] font-bold mt-2 block">Frontend Engineer</span>
                            </div>
                        </div>
                    </div>

                </SlickSlider>
            </div>
        </div>
    )
}

export default Bannerfour;