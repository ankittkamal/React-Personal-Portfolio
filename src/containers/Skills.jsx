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
        className="flex items-center justify-center flex-col gap-12 mt-24"
      >
        {/* title */}
        <div className="w-full flex items-center justify-center  py-16">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 200 }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-around w-52"
          >
            <img src={Leaf1} className="w-6 h-6 object-contain" alt="" />
            <p className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
              My Skills
            </p>
            <img src={Leaf2} className="w-6 h-6 object-contain" alt="" />
          </motion.div>
        </div>
      </section>
      {/* skills  */}
      <section className="w-full px-8 flex flex-col gap-4 items-start justify-start">
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-gray-400 hover:bg-gray-800 borderBlack rounded-xl px-5 py-4 text-slate-50"
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
