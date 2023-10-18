import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Hero } from "../assets";
import HeroTypeWritter from "../components/HeroTypeWritter";
import { Socials } from "../utils/helper";
import HomeSocialLinks from "../components/HomeSocialLinks";

const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center flex-col gap-12 relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* contect section */}
        <div className=" w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-3xl lg:text-4xl text-texlight">
            Hello, It's me
            <span className="block tracking-wider text-4xl lg:text-6xl mt-4 text-white">
              {" "}
              Ankit Kamal
            </span>
          </h2>

          {/* typewritter */}
          <h2 className="text-2xl lg:text-4xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              words={["a React Developer..", "a Full Stack Developer.."]}
              speed={100}
            />
          </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            I'm a tech enthusiast with a strong grasp of{" "}
            <span className="font-bold">full stack development.</span>{" "}
            <span>I enjoy </span>
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
          </p>

          {/* socials link */}
          <div className="flex items-center justify-center gap-16 mt-16">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>

          {/* hire me */}
          <a
            href="DownloadCV"
            className="mt-12 border border-[rgba(255,255,255,0.3)]  rounded-xl px-8 py-3 active:95 
            group hover:border-primary"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
          >
            <p className="text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
              Download CV{" "}
            </p>
          </a>
        </div>

        {/* hero image */}
        <div className="h-80 w-80 rounded-full object-cover flex items-start justify-center lg:items-center m-4">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            src={Hero}
            className="h-auto w-auto object-contain"
          ></motion.img>
        </div>
      </div>
    </section>
  );
};

export default Home;
