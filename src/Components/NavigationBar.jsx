import React, { useState } from "react";
import { HandleTheme } from "../theme/ToggleTheme";
import { motion } from "framer-motion";
import { navHoverBar } from "../theme/variants";

const NavigationBar = () => {
  return (
    <div className="w-full h-[80px] min-h-[80px] bg-element px-[80px] flex items-center text-text justify-between shadow">
      <p className="font-bold">Where in the world?</p>
      <motion.div whileHover="hover">
        <button className="p-2 rounded-full" onClick={HandleTheme}>
          Dark Mode
        </button>
        <motion.div
          className="h-0.5 bg-text"
          initial={{ width: 0 }}
          variants={navHoverBar}
        />
      </motion.div>
    </div>
  );
};

export default NavigationBar;
