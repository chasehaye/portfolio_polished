import { useState, useEffect } from "react";

function InquireModal({onClose}) {

    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        try {
            const formData = new FormData(e.target);
            
            console.log("Write to send to backend");
            onClose(); 
        } catch (error) {
            console.error("Failed to send", error);
        } finally {
            setIsSending(false);
        }
    };

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

                <div className="flex flex-col relative w-full max-w-[80%] lg:max-w-[40%] rounded-[2.5rem] shadow-2xl bg-3 text-center">
                    <form onSubmit={handleSubmit} className="space-y-4 p-6 pt-3">
                        <div className="flex flex-col gap-1">

                            <label className="text-md uppercase tracking-widest text-2 ml-1 font-medium">Get in Touch</label>
                            <input 
                            type="email"
                            name="email"
                            placeholder="email@email.com"
                            required
                            className="w-full bg-1 border border-white/10 rounded-lg px-4 py-3 
                                        text-7 outline-none focus:border-6 transition-all appearance-none mt-2"
                            />

                            <textarea 
                                name="message"
                                placeholder="Project details or inquiry..."
                                required
                                rows="4"
                                className="w-full bg-1 border border-white/10 rounded-lg px-4 py-3 no-scrollbar
                                        text-7 outline-none focus:border-6 transition-all appearance-none mt-2"
                            />

                            <button 
                                type="submit"
                                disabled={isSending}
                                className="w-full bg-4/70 border border-white/10 rounded-lg px-4 py-3 cursor-pointer 
                                        text-7 transition-all appearance-none mt-2 hover:bg-6/30"
                            >
                                {isSending ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
                
            </div>
        </>
    )
}

export default InquireModal