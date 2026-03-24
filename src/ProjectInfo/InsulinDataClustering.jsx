
function InsulinDataClustering(){
    return(
        <div className="relative h-full pt-8 select-none">
            <h2 className="text-md uppercase tracking-widest font-medium text-center">Insulin Data Clustering</h2>
            <div className="flex flex-col mx-4 mt-4 justify-between">
                <div className="font-medium text-center">
                    <span>
                    This Python script processes continuous glucose monitoring and insulin intake data to extract features, then applies clustering algorithms like K-Means and DBSCAN to group meal responses and evaluate cluster quality using metrics such as SSE, entropy, and purity.
                    </span>
                    <span>
                    The goal is to analyze patterns in blood glucose response and categorize meal events based on observed glucose dynamics.
                    </span>
                </div>
                <img src="/InsulinDataClustering/insulin.png" className="w-80 m-auto pt-10"/>
            </div>
            <div 
                onClick={() => window.open("https://github.com/chasehaye/DistributedAccountSim", "_blank")}
                className="cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 mb-12 text-xs text-center"
            >
                See the GitHub for the <br/>details & implementation</div>
        </div>
    )
}

export default InsulinDataClustering