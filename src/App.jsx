import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-primary overflow-hidden w-full ">
      <div className="sm:px-16 px-6 flex justify-center items-center ">
        <div className="xl:max-w-[1280px] w-full text-white">
          <Navbar />
        </div>
      </div>
      <div className="bg-primary flex justify-center items-start md:mb-20 md:h-[47rem]  ">
        <div className="xl:max-w-[1280px] w-full md:h-[47rem] ">
          <Home />
        </div>
      </div>
      <div className="bg-primary flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <About />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
