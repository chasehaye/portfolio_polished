import { useState, useEffect } from "react";

function AboutModal({onClose}) {

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    return(
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                <div 
                    className="absolute inset-0 bg-black/5 backdrop-blur-sm blur-correction cursor-pointer" 
                    onClick={onClose}
                />
                

                <button 
                    onClick={onClose}
                    className="fixed top-4 right-4 z-[60] p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/40 transition-all active:scale-90 cursor-pointer"
                >
                    <svg 
                        width="20" height="20" viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className="flex flex-col relative w-full max-w-[80%] lg:max-w-[30%] rounded-[2.5rem] shadow-2xl bg-3 text-center">
                    <div className="my-auto">

                        <h2 className="text-2xl font-semibold tracking-tight px-10 pt-10 select-none">
                            About
                        </h2>

                        <img 
                        src="/profile.png" 
                        alt="Chase Profile Image"
                        className="mx-auto w-30 h-30 rounded-full object-cover shadow-xl my-4 select-none" 
                        />

                        <div className="h-48 overflow-y-auto scrollbar-hide mb-6 mx-4 h-md:h-80 pr-2 select-none no-scrollbar">
                            I am a developer driven by the challenges of Backend Engineering, with a focus on 
                            building secure, scalable, and intelligent systems. My approach is informed by an academic 
                            background in Big Data, Deep Learning, and Security, allowing me to architect solutions, on teams or independently, that 
                            don't just meet immediate needs, but account for future concerns while exceeding user expectations.

                            With a foundation built through an intensive full-stack bootcamp and a degree focused on software 
                            fundamentals, I enjoy connecting the dots between complex data concepts and the practical logic 
                            that makes them work. I am passionate about creating efficient APIs, optimizing data pipelines, 
                            and ensuring system integrity. Currently, I am developing personal projects that explore backend 
                            and broader logic as I continue to refine my skills for freelance opportunities and full-time roles.
                        </div>

                    </div>
                </div>
                
            </div>
        </>
    )
}

export default AboutModal