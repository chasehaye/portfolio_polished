
function PortfolioV3(){
    return(
        <div 
            className="p-10 px-12 relative h-full group cursor-pointer select-none" 
            onClick={() => window.open("https://github.com/chasehaye/portfolio_polished", "_blank")}
        >
            <svg className="group-hover:translate-x-1 absolute top-1/2 right-[3%] -translate-y-1/2 text-2" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
            <svg className="group-hover:-translate-x-1 absolute top-1/2 left-[3%] -translate-y-1/2 text-2" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <svg className="group-hover:-translate-y-1 absolute top-[2%] left-1/2 -translate-x-1/2 text-2" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <svg className="group-hover:translate-y-1 absolute bottom-[3%] left-1/2 -translate-x-1/2 text-2" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
            </svg>

            <h2 className="text-md uppercase tracking-widest font-medium text-center">Welcome:</h2>
            <h3 className="font-medium mt-4 sm:mt-45">
                To one of many iterations of my portfolio! This is the most polished
                and formal version yet. Feel free to look around and see what is present.
                It is adaptive to mobile and desktop. I recommend checking out the desktop version,
                it has more polish and features.
            </h3>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-12 text-xs text-center hidden h-sm:inline">See the GitHub for the <br/> design & implementation</div>
        </div>
    )
}

export default PortfolioV3