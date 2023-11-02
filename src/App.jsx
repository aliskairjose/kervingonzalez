import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience/";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { createContext } from "react";
import data from "./data/data.json";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
// import Education from './components/Education';

export const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={data}>
      <div className="flex">
        <div className="flex lg:w-[5rem] md:w-[4rem] w-[3rem] bg-sky-600">
          <Menu />
        </div>
        <div className="flex-1 overflow-auto h-screen">
          <section id="home" className=""> 
            <Home />
          </section>
          {/* <section>
            <Education />
          </section> */}
          <section id="bio" className="lg:py-[80px] py-[40px]">
            <About />
          </section>
          <section id="skills" className="lg:py-[80px] py-[40px] bg-sky-100">
            <Skills />
          </section>
          <section id="experience" className="lg:py-[80px] py-[40px]">
            <Experience />
          </section>
          <section id="portfolio" className="lg:py-[80px] py-[40px] bg-sky-100">
            <Portfolio />
          </section>
          
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
