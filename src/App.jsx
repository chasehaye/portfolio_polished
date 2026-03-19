import { useState } from "react";
import ContactModal from "./SubMenus/ContactModal";
import AboutModal from "./SubMenus/AboutModal";

function App() {

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

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
  ];

  return (
    <>
      <main className="">

        {isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
        {isAboutOpen && <AboutModal onClose={() => setIsAboutOpen(false)} />}

        <div className="mt-[30vh] ml-[6vw] select-none touch-none">
          <div className="font-bold text-[1.33rem]">
            Chase Haye
          </div>
          <div className="font-bold text-[1.32rem]">
            software development focus<br/> 
            <span className="bg-gradient-to-l from-4 to-6 bg-clip-text text-transparent font-bold">Backend</span>
          </div>
          <div className="flex mt-1 text-2 font-medium">
            <div className="cursor-pointer hover:text-5" onClick={() => setIsAboutOpen(true)}>About</div>
            <div className="mx-2 cursor-pointer hover:text-5" onClick={() => setIsContactOpen(true)}>Contact</div>
            <div className="">Inquire</div>
            <div className="mx-2">LinkedIn</div>
          </div>
        </div>

        <div className="mb-[3vh] mx-[6vw] mt-[18vh] h-sm:mt-[14vh] h-md:mt-[20vh] h-lg:mt-[17vh] h-xl:mt-[21vh] h-2xl:mt-[20vh] h-3xl:mt-[23vh]">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="flex justify-between mt-[5vh]"
            >
              <div className="font-semibold tracking-tight transition-all duration-300 group-hover:translate-x-1">
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
