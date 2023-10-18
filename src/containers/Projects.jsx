import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";
import { ProjectsData } from "../utils/helper";
import { FaGithub } from "react-icons/fa6";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex items-center justify-center flex-col gap-12 mt-36"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projects
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {ProjectsData &&
            ProjectsData.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <ProjectCard key={project.id} project={project} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isHoverred, setIsHoverred] = useState(false);

  const handleGitHubLinkClick = () => {
    window.open(project.gitURL, "_blank"); // This opens the link in a new tab.
  };

  return (
    <motion.div
      key={project.id}
      className="overflow-hidden cursor-pointer relative rounded-md"
      onMouseEnter={() => setIsHoverred(true)}
      onMouseLeave={() => setIsHoverred(false)}
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={project.imgSrc}
        className="w-full h-full object-contain rounded-lg"
      />
      {isHoverred && (
        <motion.div className="absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex flex-col items-center justify-center gap-2">
          <p className="text-xl text-primary">{project?.name}</p>
          <div onClick={handleGitHubLinkClick}>
            <FaGithub className="text-white text-3xl hover:text-primary" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;
