import { useState } from "react";
import ContactModal from "./SubMenus/ContactModal";
import AboutModal from "./SubMenus/AboutModal";
import InquireModal from "./SubMenus/InquireModal";

function App() {

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);

  const projects = [
    { id: 1, name: "Net Anomaly Detector", year: "2025" },
    { id: 2, name: "Hot Spot Identifier", year: "2025" },
    { id: 3, name: "Insulin Data Clustering", year: "2025" },
    { id: 4, name: "Project Alpha", year: "2025" },
    { id: 5, name: "Quantum Path Optimizer", year: "2024" },
    { id: 6, name: "Sentinel Vision API", year: "2024" },
    { id: 7, name: "Neural Flow Engine", year: "2024" },
    { id: 8, name: "Project Bravo", year: "2023" },
    { id: 9, name: "Titan Ledger System", year: "2023" },
    { id: 10, name: "Aether Signal Mesh", year: "2023" },
    { id: 11, name: "Vector Search Core", year: "2023" },
    { id: 12, name: "Distributed Lock Manager", year: "2023" },
    { id: 13, name: "Async Event Pipeline", year: "2022" },
    { id: 14, name: "Global State Sync", year: "2022" },
    { id: 15, name: "Shadow Proxy Layer", year: "2022" },
    { id: 16, name: "Project Gamma", year: "2022" },
    { id: 17, name: "Kernel Metric Scraper", year: "2021" },
    { id: 18, name: "Binary Stream Parser", year: "2021" },
    { id: 19, name: "Hyperion Auth Gateway", year: "2021" },
    { id: 20, name: "Void Storage Engine", year: "2021" },
  ];

  return (
    <>
      <main className="lg:flex lg:flex-row-reverse lg:justify-end">

        {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
        {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}
        {isInquireOpen && <InquireModal onClose={() => setIsInquireOpen(false)} />}

        <div 
          className="mt-[30vh] ml-[6vw] select-none touch-none 
          lg:fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 
          lg:mt-0 lg:ml-0 lg:text-center"
        >
          <div className="font-bold text-[1.33rem] lg:!text-[1.2rem] lg:text-left">
            Chase Haye
          </div>
          <div className="font-bold text-[1.32rem] lg:!text-[1.19rem]">
            software development focus<span className="hidden lg:inline">ed on</span> <br className="lg:hidden"/> 
            <span className="bg-gradient-to-l from-4 to-6 bg-clip-text text-transparent font-bold">backend</span>
          </div>
          <div className="flex mt-1 text-2 font-medium lg:!text-[0.9rem]">
            <div className="cursor-pointer hover:text-5" onClick={() => setIsAboutOpen(true)}>About</div>
            <div className="mx-2 cursor-pointer hover:text-5" onClick={() => setIsContactOpen(true)}>Contact</div>
            <div className="cursor-pointer hover:text-5" onClick={() => setIsInquireOpen(true)}>Inquire</div>
            <div 
              className="mx-2 cursor-pointer hover:text-5" 
              onClick={() => window.open("https://www.linkedin.com/in/chase-haye/", "_blank", "noopener,noreferrer")}
            >
              LinkedIn
            </div>
          </div>
        </div>

        <div 
          className="select-none mb-[3vh] mx-[6vw] mt-[18vh] 
          h-sm:mt-[14vh] h-md:mt-[20vh] h-lg:mt-[17vh] h-xl:mt-[21vh] h-2xl:mt-[20vh] h-3xl:mt-[23vh] 
          lg:!mt-[10vh] lg:!mb-[10vh] lg:!ml-[10vw] lg:!text-sm"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="flex justify-between mt-[5vh] cursor-pointer"
            >
              <div className="font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1 lg:mr-4">
                {project.name}
              </div>
              <div className="text-2 font-medium">
                {project.year}
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  )
}

export default App
