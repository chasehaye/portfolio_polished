
function PrecisionOptics({onClose}){
    return(
        <div className="relative h-full pt-8 select-none">
            <h2 className="text-md uppercase tracking-widest font-medium text-center">Precision & Optics</h2>
            <div className="flex mx-4 mt-4 justify-between">
                <div className="sm:w-40">
                    This project focused on providing useful insights from adult demographic data for a company. 
                    In addition to the implementation, an in-depth report was written showing how the data could 
                    benefit their marketing endeavors. Some of the Python-generated figures can be seen here. The
                    implementation was done using python and some corresponding tools like Numpy, Pandas, and Pyplot.
                </div>
                <div className="hidden sm:block">
                    <img className="w-40 mt-2" src="/precisionOptics/3.png" alt="figure 1" />
                    <img className="w-40 mt-2" src="/precisionOptics/2.png" alt="figure 2" />
                    <img className="w-40 mt-2" src="/precisionOptics/1.png" alt="figure 3" />
                </div>
            </div>
            <div 
                onClick={() => window.open("fix me so i point correctly", "_blank")}
                className="cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 mb-12 text-xs text-center hidden h-sm:inline"
            >
                See the GitHub for the <br/> details & implementation</div>
        </div>
    )
}

export default PrecisionOptics