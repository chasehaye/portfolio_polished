import { act, useState } from "react";
import ContactModal from "./SubMenus/ContactModal";
import AboutModal from "./SubMenus/AboutModal";
import InquireModal from "./SubMenus/InquireModal";
import ProjectContainer from "./ProjectInfo/ProjectContainer/ProjectContainer";
import iconLibrary from './data/iconLibrary.json';

function App() {

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isInquireOpen, setIsInquireOpen] = useState(false);

  
  const [activeProject, setActiveProject] = useState(null);

  const handleOpenProject = (projectName) => {
    setActiveProject(prev => (prev === projectName ? null : projectName));
  };

  
  const projects = [
    { id: 0, name: "Portfolio V3", year: "2026", tech: [5,7,8,9,6] },
    { id: 1, name: "Precision & Optics", year: "2026", tech: [0,4,3,2] },
    { id: 2, name: "Net Anomaly Detector", year: "2025", tech: [10,0,11,1,3,2,4] },
    { id: 3, name: "Distributed Acc Sim", year: "2025", tech: [0,12] },
    { id: 4, name: "CryptoFundamentals", year: "2025", tech: [13,14] },
    { id: 5, name: "Hot Spot Identifier", year: "2025", tech: [15,16,18,17] },
    { id: 6, name: "Insulin Data Clustering", year: "2025", tech: [0,3,2] },
    { id: 7, name: "Image Classifier w/ NN", year: "2024", tech: [0,3,2,19] },
    { id: 8, name: "AMM", year: "2024", tech: [21,20,0,5,7,8,9,6,26] },
    { id: 9, name: "PathFinder", year: "2024", tech: [24,22,23,5,7,8,9,6,27] },
    { id: 10, name: "Rig Draft", year: "2023", tech: [24,22,23,5,7,8,9,6,27] },
    { id: 11, name: "Gear Box", year: "2023", tech: [21,20,0,25,8,9,6] },
    { id: 12, name: "HSZ", year: "2023", tech: [24,22,23,25,8,9,6] },
  ];
  

  return (
    <>
      <main className="lg:flex lg:flex-row-reverse lg:justify-end">
        

        {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
        {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}
        {isInquireOpen && <InquireModal onClose={() => setIsInquireOpen(false)} />}

        {activeProject && <ProjectContainer onClose={() => setActiveProject(null)} project={activeProject} />}
        
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
          h-sm:mt-[23vh] h-md:mt-[20vh] h-lg:mt-[26vh] h-xl:mt-[24vh] h-2xl:mt-[23vh]
          lg:!mt-[10vh] lg:!mb-[10vh] lg:!ml-[10vw] lg:!text-sm"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col relative group cursor-pointer"
              onClick={() => handleOpenProject(project.name)}
            >
              <div 
                className="flex justify-between mt-[5vh] lg:my-[2.5vh]"
              >
                <div className="font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1 lg:mr-4">
                  {project.name}
                </div>
                <div className="text-2 font-medium">
                  {project.year}
                </div>
              </div>

              <div 
                className="hidden lg:flex absolute bottom-0 left-0 mb-2 items-center">
                {project.tech.map((iconIndex, idx) => {
                  const icon = iconLibrary[iconIndex];
                  if (!icon) return null;
                  return (
                    <div
                      key={`${project.id}-${iconIndex}-${idx}`}
                      className="w-4 h-4 inline-block mr-1 transition-opacity 
                      duration-500 opacity-0 group-hover:opacity-100"
                      style={{ 
                        color: icon.color, 
                        transitionDelay: `${idx * 150}ms` 
                      }}
                      dangerouslySetInnerHTML={{ __html: icon.svg }}
                      title={icon.name}
                      />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  )
}

export default App
