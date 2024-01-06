import React, { useState } from "react";
import { HandleTheme } from "../../ToggleTheme";

const NavigationBar = () => {
  return (
    <div className="w-full h-[80px] bg-element px-[80px] flex items-center text-text justify-between shadow">
      <p>Where in the world?</p>
      <button className="p-4" onClick={HandleTheme}>
        Dark Mode
      </button>
    </div>
  );
};

export default NavigationBar;
