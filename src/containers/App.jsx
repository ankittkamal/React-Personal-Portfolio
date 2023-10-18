import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

import Footer from "./Footer";
import ContactMeSocials from "./ContactMeSocials";
import ParticlesContainer from "./ParticlesContainer";

const App = () => {
  return (
    <div className="w-full xl:w-[1500px] py-32 px-4 lg:px-12 pr-4 lg:pr-32 flex flex-col h-screen justify-between items-center ">
      {/* particle container */}
      <ParticlesContainer />

      {/* header */}
      <Header />

      {/* home  */}
      <Home />

      {/* project */}
      <Projects />

      {/* skills */}
      <Skills />

      {/* about */}
      <About />

      {/* contact */}
      <Contact />

      <ContactMeSocials />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
