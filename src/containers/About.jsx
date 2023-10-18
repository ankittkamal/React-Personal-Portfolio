import { motion } from "framer-motion";
import React from "react";
import { Leaf1, Leaf2, about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-12 mt-36"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-10">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About me
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        {/* image */}
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-96 p-[-2px] rounded-md bg-gradient-to-br from bg-primary to-secondary relative">
            <img
              src={about}
              className="w-full rounded-md h-auto object-contain "
              alt=""
            />
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from bg-primary to-secondary rounded-md blur-[5px] -z-10"></div>
          </div>
        </div>

        {/* content */}
        <section className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base tracking-wide text-justify">
            After graduating with a degree in{" "}
            <span className="font-medium">
              Bachelor of Technology in Computer Science Engineering
            </span>
            , I learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{" "}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            My core stack is{" "}
            <span className="font-medium">
              React, Node.js, Express.js and MongoDB
            </span>
            . I am also familiar with TypeScript and Prisma. I am always looking
            to learn new technologies. I am currently looking for a{" "}
            <span className="font-medium ">full-time position</span> as a
            software developer.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            <span className="italic">When I'm not coding</span>, I enjoy playing
            sports, watching movies, and spending time with my family. I also
            enjoy <span className="font-medium">learning new things</span>. I am
            currently learning about{" "}
            <span className="font-medium">business and philosophy</span>. I'm
            also learning how to play the guitar.
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;
