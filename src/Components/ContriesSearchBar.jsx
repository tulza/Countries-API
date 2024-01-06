import { motion } from "framer-motion";
import React, { useState } from "react";
import { regionBox, regionFilterFade } from "../theme/variants";

const ContriesSearchBar = ({ name, region, handleSet }) => {
  return (
    <div className="w-full flex justify-between h-[60px] my-[45px]">
      <SearchBar name={name} handleSet={handleSet} />
      <RegionBox region={region} handleSet={handleSet} />
    </div>
  );
};

const SearchBar = ({ name, handleSet }) => {
  name = name ? name : "";
  return (
    <div className="relative grid items-center">
      <input
        className="w-[480px] h-[60px] bg-element rounded-md pl-16"
        placeholder="Search for a country... "
        value={name}
        onChange={(e) => {
          handleSet(e.target.value, null);
        }}
      />
      <img src="$" className="absolute left-[30px]"></img>
    </div>
  );
};

const RegionBox = ({ region, handleSet }) => {
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
            return !toggle;
          });
        }}
      >
        <p className="pointer-events-none text-textHome">filter by Region</p>
        <img src="$" className="absolute right-[16px]"></img>
      </div>
      <motion.div
        className="rounded-md overflow-hidden h-0 w-full z-10"
        variants={regionBox}
      >
        <motion.div className="w-full bg-element  p-[10px] grid ">
          {["Africa", "America", "Asia", "Europe", "Oceania"].map((Region) => {
            return (
              <motion.div
                key={Region}
                variants={regionFilterFade}
                onClick={(e) => {
                  setShowBox(false);
                  handleSet(null, Region);
                }}
                className="pl-[25px] py-1 rounded-md hover:outline cursor-pointer"
              >
                <p>{Region}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContriesSearchBar;
