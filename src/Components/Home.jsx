import React from "react";
import NavigationBar from "./navigationBar";
import CountriesContent from "./CountriesContent";

const Home = () => {
  return (
    <div className="h-full bg-background">
      <NavigationBar />
      <CountriesContent />
    </div>
  );
};

export default Home;
