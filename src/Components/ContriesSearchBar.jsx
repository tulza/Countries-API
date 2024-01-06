import { motion } from "framer-motion";
import React, { useState } from "react";
import { regionBox, regionFilterFade } from "../theme/variants";

const ContriesSearchBar = () => {
  return (
    <div className="w-full flex justify-between h-[60px]">
      <SearchBar />
      <FilterBox />
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="relative grid items-center">
      <input
        className="w-[480px] h-[60px] bg-element rounded-md pl-16"
        placeholder="Search for a country... "
      />
      <img src="$" className="absolute left-[30px]"></img>
    </div>
  );
};

const FilterBox = () => {
  const [toggle, setShowBox] = useState(false);
  return (
    <motion.div
      className="grid gap-2 text-textHome"
      animate={toggle ? "visible" : "hidden"}
    >
      <div
        className="relative w-[200px] h-[60px] bg-element rounded-md grid items-center pl-[25px] cursor-pointer"
        onClick={() => {
          setShowBox(() => {
            console.log(!toggle);
            return !toggle;
          });
        }}
      >
        <p className="pointer-events-none text-textHome">filter by Region</p>
        <img src="$" className="absolute right-[16px]"></img>
      </div>
      <motion.div
        className="rounded-md overflow-hidden h-max w-full"
        variants={regionBox}
      >
        <motion.div className="w-full bg-element  p-[10px] grid">
          {["Africa", "America", "Asia", "Europe", "Oceania"].map((country) => {
            return (
              <motion.div
                key={country}
                variants={regionFilterFade}
                className="pl-[25px] py-1 rounded-md"
              >
                <p>{country}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContriesSearchBar;
