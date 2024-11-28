import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import Technologies from "./components/Technoloies"
import Experience from "./components/Experience"
import Project from "./components/Project"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="relative h-full w-full bg-slate-950 overflow-x-hidden text-neutral-300 selection:text-cyan-500">
      {/* Background Gradient Circles */}
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      {/* Main Content */}
      <div className="container mx-auto px-8 min-h-screen">
        <Navbar />
        <Home />
        <About />
        <Technologies/>
        <Experience/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
};

export default App;

