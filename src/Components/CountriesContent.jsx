import React, { useEffect, useState } from "react";
import ContriesSearchBar from "./ContriesSearchBar";
import { fetchCountiesData } from "../Processes/fetchCountries";

const CountriesContent = () => {
  const [data, setData] = useState("waiting");
  const [region, setRegion] = useState(null);
  const [name, setSearch] = useState(null);
  const [isLoading, setLoad] = useState(false);

  const handleSet = (name, region) => {
    setRegion(region);
    setSearch(name);
  };

  const fetchData = () => {
    setData("loading");
    fetchCountiesData(setData, name, region, setLoad);
  };

  useEffect(() => {
    fetchData();
  }, [name, region]);

  return (
    <div className="px-[80px] h-full min-h- grid bg-background">
      <ContriesSearchBar name={name} region={region} handleSet={handleSet} />
      <div className="h-full w-full">asd</div>
    </div>
  );
};

export default CountriesContent;
