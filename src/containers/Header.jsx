import React from "react";
import { Menus } from "../utils/helper";
import MenuItem from "../components/MenuItem";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="fixed bottom-0 right-0 lg:top-0 w-full h-auto lg:h-screen lg:w-32 flex justify-center items-end lg:items-center pb-8 lg:pb-0 z-50"
      initial={{ y: -500, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="px-4 py-3 lg:py-12 rounded-full border border-[rgba(255,255,255,0.3)] flex flex-row lg:flex-col items-center justify-center gap-12 duration-200 backdrop-blur-md ">
        {Menus &&
          Menus.map((item, index) => (
            <MenuItem key={index} menu={item} index={index} />
          ))}
      </div>
    </motion.div>
  );
};

export default Header;
