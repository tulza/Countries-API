import React, { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [width, SetWidth] = useState(window.innerWidth);
  const [height, SetHeight] = useState(window.innerHeight);

  const handleResize = () => {
    SetWidth(window.innerWidth);
    SetHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("event", handleResize);
  });
  return { width, height };
};
