
function ImageClassifierwNN(){
    return(
        <div className="relative h-full pt-8 select-none">
            <h2 className="text-md uppercase tracking-widest font-medium text-center">Image Classificaiton using Nerual Networks</h2>
            <div className="flex flex-col mx-4 mt-4 justify-between relative">
                <div className="font-medium text-center">
                    <span>This project included building and optimizing neural networks for image classification tasks. </span>
                    
                    <span className="sm:hidden">It started with linear and logistic regression, then built a 
                    multi-category neural network for MNIST digits. Implemented a CNN in PyTorch for Fashion 
                    MNIST, experimented with GANs for digit generation, and explored domain adaptation from 
                    SVHN to MNIST.</span>
                    
                    <span className="hidden sm:block">It started with linear and logistic regression to understand basic predictive modeling, then  
                    moved on to a multi-category neural network for classifying handwritten digits from the MNIST 
                    dataset, and then applied optimization techniques to improve training. Next, a Convolutional 
                    Neural Network (CNN) was implemented using PyTorch for Fashion MNIST, followed by experiments 
                    with GANs to generate realistic digit images, and finally explored domain adaptation 
                    techniques to transfer learning from SVHN to MNIST datasets. Together, these projects covered 
                    the full pipeline from data preprocessing, model design, and training optimization to 
                    generative modeling and transfer learning.</span>
                </div>
                <img src="/ImageClassifierwNN/fnn.png" className="w-50 m-auto mt-4 hidden xs:block"/>
                <svg className="absolute mt-4 opacity-50 -z-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#EE4C2C"><title>PyTorch</title><path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z"/></svg>
            </div>
        </div>
    )
}

export default ImageClassifierwNN