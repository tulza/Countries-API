import React, { useEffect, useState } from "react";
import ContriesSearchBar from "./ContriesSearchBar";
import { fetchCountiesData } from "../Processes/fetchCountries";

const CountriesContent = () => {
  const [data, setData] = useState("waiting");
  const [region, setRegion] = useState(null);
  const [name, setSearch] = useState(null);

  const handleSet = (name, region) => {
    setRegion(region);
    setSearch(name);
  };

  const fetchData = () => {
    setData("loading");
    fetchCountiesData(setData, name, region);
  };

  useEffect(() => {
    fetchData();
  }, [name, region]);

  return (
    <div className="px-[80px] h-full bg-background">
      <ContriesSearchBar name={name} region={region} handleSet={handleSet} />
      {JSON.stringify(data)}
    </div>
  );
};

export default CountriesContent;
