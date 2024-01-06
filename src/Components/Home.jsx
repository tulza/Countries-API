import React from "react";
import NavigationBar from "./navigationBar";
import CountriesContent from "./CountriesContent";

const Home = () => {
  return (
    <div className="bg-background flex flex-col h-full">
      <NavigationBar />
      <CountriesContent />
    </div>
  );
};

export default Home;
