
function NetAnomalyDetector({onClose, openInquireMenu}){
    return(
        <div className="relative h-full pt-8 select-none">
            <h2 className="text-md uppercase tracking-widest font-medium text-center">Network Anomaly Detector</h2>
            <div className="flex mx-4 mt-4 justify-between">
                <div className="font-medium text-center">
                    ML-based intrusion detection system
                    classifies abnormal network traffic using supervised learning on labeled datasets.
                    <div className="mt-4 sm:mt-10">
                        Accuracy: ~98.9% | F1: 0.85<br/>
                        Dataset: NSL-KDD<br/>
                        Data Selection: Version 3<br />
                        <div>
                        Arch · Python · Pandas · Anaconda · Scikit-learn
                        </div>
                        <div className="mx-auto w-full mt-2">
                            <div 
                                className="py-4 rounded-2xl hover:bg-black/5 
                                transition-colors text-xs font-semibold uppercase 
                                tracking-wider text-center cursor-pointer"
                                onClick={() => {
                                    onClose();
                                    openInquireMenu();
                                }}
                            >Request Details</div>
                        </div>
                    </div>
                    <img 
                        src="/NetAnomalyDetector/fnn.png"
                        className="mt-6  w-[80%] rounded-md m-auto"
                    />
                </div>
            </div>
            <div 
                onClick={() => window.open("https://github.com/chasehaye/NetworkAnamolyDetector", "_blank")}
                className="cursor-pointer absolute bottom-0 left-1/2 -translate-x-1/2 mb-12 text-xs text-center"
            >
                See the GitHub for the <br/> FNN implementation</div>
        </div>
    )
}

export default NetAnomalyDetector