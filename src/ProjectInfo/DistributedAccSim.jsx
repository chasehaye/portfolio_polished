
function DistributedAccSim(){
    return(
        <div className="relative h-full pt-8 select-none">
            <h2 className="text-md uppercase tracking-widest font-medium text-center">Distributed Account Simulation</h2>
            <div className="flex mx-4 mt-4 justify-between">
                <div className="font-medium">
acc sim
                </div>
            </div>
            <div 
                onClick={() => window.open("https://github.com/chasehaye/DistributedAccountSim", "_blank")}
                className="cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 mb-12 text-xs text-center hidden h-sm:inline"
            >
                See the GitHub for<br/> the details</div>
        </div>
    )
}

export default DistributedAccSim