
function HotSpotIdentifier(){
    return(
        <div className="relative h-full pt-8 select-none">
            <h2 className="text-md uppercase tracking-widest font-medium text-center">Hot Spot Identifier</h2>
            <div className="flex mx-4 mt-4 justify-between">
                <div className="font-medium mx-4 text-center">
                    Implemented Spark solutions to identify high-activity zones and top hot cells 
                    in NYC taxi data using hot zone and Getis-Ord hot cell analysis. Applied spatial 
                    statistics and aggregation techniques to efficiently process large spatio-temporal datasets.
                </div>
            </div>
            <img src="/HotSpotIdentifier/nyc.png" className="rounded-lg m-auto mt-10 w-[80%] hidden sm:block" />
            <div 
                onClick={() => window.open("https://github.com/chasehaye/HotSpotAnalysisTaxi", "_blank")}
                className="cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 mb-12 text-xs text-center"
            >
                See the GitHub for the <br/>details & implementation</div>
        </div>
    )
}

export default HotSpotIdentifier