import React from "react";
import NavigationBar from "./navigationBar";
import CountriesContent from "./CountriesContent";

const Home = () => {
  return (
    <div className="bg-background flex flex-col overflow-hidden">
      <NavigationBar />
      <CountriesContent />
    </div>
  );
};

export default Home;
