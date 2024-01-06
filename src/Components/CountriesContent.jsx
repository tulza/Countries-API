import React, { useEffect, useState } from "react";
import ContriesSearchBar from "./ContriesSearchBar";
import { fetchCountiesData } from "../Processes/fetchCountries";
import { CountryCard, PlaceholderCard } from "./CountryCard";
import { v4 as uuidv4 } from "uuid";

const CountriesContent = () => {
  const [data, setData] = useState("waiting");
  const [region, setRegion] = useState(null);
  const [name, setSearch] = useState(null);
  const [isLoading, setLoad] = useState(true);

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

  useEffect(() => {
    console.log(data[0].flags);
  }, [data]);
  return (
    <div className="px-[80px] h-full flex flex-col bg-background">
      <ContriesSearchBar name={name} region={region} handleSet={handleSet} />
      <div className="flex flex-wrap justify-between flex-row gap-12">
        {!isLoading &&
          [...data].map((elem) => {
            console.log(elem);
            return (
              <CountryCard
                flag={elem.flags.svg}
                country={elem.name.common}
                population={elem.population}
                region={elem.region}
                capital={elem.capital[0]}
                key={uuidv4()}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CountriesContent;
