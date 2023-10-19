import { motion } from "framer-motion";
import React from "react";
import { Leaf1, Leaf2 } from "../assets";
import { skillsData } from "../utils/helper";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="flex items-center justify-center text-center flex-col gap-12 mt-24 max-w-[53rem]"
      >
        {/* title */}
        <div className="w-full flex items-center justify-center  py-8">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center  justify-around w-52"
          >
            <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
            <p className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
              My Skills
            </p>
            <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
          </motion.div>
        </div>

        {/* skills  */}

        <ul className="flex flex-wrap flex-row-4 justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-gray-400 hover:bg-gray-800 borderBlack rounded-xl lg:px-5 px-3 lg:py-4  
              py-3 text-slate-50"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Skills;
