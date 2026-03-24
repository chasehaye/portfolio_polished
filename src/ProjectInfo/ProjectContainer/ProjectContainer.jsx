import { useState, useEffect } from "react";
import PortfolioV3 from "../PortfolioV3";
import PrecisionOptics from "../PrecisionOptics";
import NetAnomalyDetector from "../NetAnomalyDetector";
import DistributedAccSim from "../DistributedAccSim";
import CryptoFundamentals from "../CryptoFundamentals";
import HotSpotIdentifier from "../HotSpotIdentifier";
import InsulinDataClustering from "../InsulinDataClustering";
import ImageClassifierwNN from "../ImageClassifierwNN";

// no spaces and no special chars
const componentRegistry = {
    PortfolioV3: PortfolioV3,
    PrecisionOptics: PrecisionOptics,
    NetAnomalyDetector: NetAnomalyDetector,
    DistributedAccSim: DistributedAccSim,
    CryptoFundamentals: CryptoFundamentals,
    HotSpotIdentifier: HotSpotIdentifier,
    InsulinDataClustering: InsulinDataClustering,
    ImageClassifierwNN: ImageClassifierwNN,
};

function ProjectContainer({onClose, project, openInquireMenu}) {
    const slug = project.replace(/[^a-zA-Z0-9]/g, "");
    const SelectedProject = componentRegistry[slug];

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

                <div 
                    className="flex flex-col relative w-full max-w-sm aspect-[9/16] 
                    rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                    backdrop-blur-2xl overflow-hidden"
                >
                    
                    {SelectedProject ? 
                        <SelectedProject onClose={onClose} openInquireMenu={openInquireMenu} /> : 
                        <span className="m-auto">Not Found</span>
                    }
                </div>
                
            </div>
        </>
    )
}

export default ProjectContainer