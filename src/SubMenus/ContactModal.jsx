import { useState, useEffect } from "react";

function ContactModal({onClose}) {

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

                <div className="flex flex-col relative w-full max-w-[80%] lg:max-w-[30%] rounded-[2.5rem] p-10 shadow-2xl bg-3 text-center">
                    <div className="my-auto">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Contact
                        </h2>
                        <a href="mailto:chasehaye.dev@gmail.com" className="group flex items-center justify-between py-4 rounded-2xl hover:bg-black/5 transition-colors">
                        <div className="mx-auto">
                            <div className="text-xs font-semibold uppercase tracking-wider">Email</div>
                            <div className="text-[1.1rem] font-medium sm:break-normal">chasehaye.dev<wbr />@gmail.com</div>
                        </div>
                        </a>
                        <a href="tel:+18057945988" className="group flex items-center justify-between py-4 rounded-2xl hover:bg-black/5 transition-colors">
                        <div className="mx-auto">
                            <div className="text-xs font-semibold uppercase tracking-wider">Phone</div>
                            <div className="text-[1.1rem] font-medium sm:break-normal">+1 (805) <wbr />794-5988</div>
                        </div>
                        </a>

{/* ADD ONCLICK TO CUSTOM API IN THE FUTURE */}
                        <button className="mx-auto flex items-center space-x-3 py-4 rounded-2xl hover:bg-black/5 transition-colors text-red-600 cursor-pointer hover:bg-black/5 w-full">
                            <div className="mx-auto flex">
                                <div className="p-2 bg-red-100 rounded-lg ml-4">
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                                        strokeLinejoin="round" className="lucide lucide-bug-icon lucide-bug"
                                    >
                                        <path d="M12 20v-9"/>
                                        <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"/>
                                        <path d="M14.12 3.88 16 2"/>
                                        <path d="M21 21a4 4 0 0 0-3.81-4"/>
                                        <path d="M21 5a4 4 0 0 1-3.55 3.97"/>
                                        <path d="M22 13h-4"/>
                                        <path d="M3 21a4 4 0 0 1 3.81-4"/>
                                        <path d="M3 5a4 4 0 0 0 3.55 3.97"/>
                                        <path d="M6 13H2"/>
                                        <path d="m8 2 1.88 1.88"/>
                                        <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"/>
                                    </svg>
                                </div>
                                <div className="font-semibold text-sm pr-3 m-auto pl-2">Report a Bug</div>
                            </div>
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ContactModal