# Portfolio
A minimal, high-performance personal portfolio built with React and Tailwind CSS. This site focuses on smooth user interactions, responsive design, and an organized project showcase.

🛠️ Tech Stack
Framework: React.js (Vite)

Styling: Tailwind CSS

Icons: Custom SVG Library (Lucide-based)

Animations: CSS Transitions & Hover Groups

✨ Key Features
Staggered Tech Reveal: A custom-coded hover interaction that fades in project technology icons one-by-one using dynamic transition-delay.

Fully Responsive: Optimized for all screen sizes with specialized vertical height (h-sm, h-md) breakpoints for mobile devices.

Data-Driven: Projects and tech stacks are mapped from a central configuration file for easy updates.

Performance First: Zero heavy animation libraries; used native CSS transitions for a lightweight footprint.

📂 Project Structure
src/components/ — Reusable UI elements (Project cards, Navigation).

src/data/ — JSON/JS files containing project metadata and the SVG icon library.

🚀 Setup
Install dependencies:

Bash
npm install
Run development server:

Bash
npm run dev
Build for production:

Bash
npm run build

-- One inefficeny that could be improved upon is code modularity
when using the json file for icons the current implementation uses
array index rather than the name of the technology. Since it is a 
quick portfolio it is ok, but it would be more optimal to instead
have the implementation use technologies names to more easily add
new projects into the site in the future