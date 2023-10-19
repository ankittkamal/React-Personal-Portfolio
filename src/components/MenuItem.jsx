import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const MenuItem = ({ menu, index }) => {
  const [isHoverred, setIsHoverred] = useState(false);

  return (
    <a
      className="w-12 h-12 rounded-full flex items-center justify-center
    group cursor-pointer hover:bg-gradient-to-br hover:from-primary
    hover:to-secondary relative"
      href={menu.uri}
      onMouseEnter={() => setIsHoverred(true)}
      onMouseLeave={() => setIsHoverred(false)}
    >
      <menu.Icon
        className={`text-xl text-texlight group-hover:text-bgPrimary`}
      />
      {/* tool tip */}
      <AnimatePresence>
        {isHoverred && (
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            className="hidden lg:block absolute bg-gray-800 rounded-md opacity-70 px-6 py-2 -left-[140px] after:absolute after:-right-1 after:top-3 after:w-3 after:h-3 after:bg-gray-800 after:rotate-45  "
            style={{ boxShadow: "inset 0px 0px 10px rgba(0,0,0,0.4)" }}
          >
            <p className="text-primary font-medium">{menu?.name} </p>
          </motion.div>
        )}
      </AnimatePresence>
    </a>
  );
};

export default MenuItem;
