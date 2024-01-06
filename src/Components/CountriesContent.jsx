import React, { useEffect, useState } from "react";
import ContriesSearchBar from "./ContriesSearchBar";
import { fetchCountiesData } from "../Processes/fetchCountries";

const CountriesContent = () => {
  const [data, setData] = useState("waiting");
  const [region, setRegion] = useState(null);
  const [name, setSearch] = useState(null);

  useEffect(() => {
    fetchCountiesData(setData);
  }, []);
  console.log(data);
  return (
    <div className="px-[80px] h-full bg-background">
      <ContriesSearchBar />
      {/* {JSON.stringify(data)} */}
      {JSON.stringify(data)}
    </div>
  );
};

export default CountriesContent;
