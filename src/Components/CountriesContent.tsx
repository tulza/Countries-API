import React, { useEffect, useState } from "react";
import ContriesSearchBar from "./ContriesSearchBar";
import { fetchCountiesData } from "../api/fetchCountries";
import { CountryCard, PlaceholderCard } from "./CountryCard";
import { v4 as uuidv4 } from "uuid";
import { useWindowSize } from "../hook/useWindowSize";

type CountriesData = {
  flags: any;
  name: any;
  population: number;
  region: string;
  capital: string[];
};

const CountriesContent = () => {
  const [data, setData] = useState<CountriesData[] | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [name, setSearch] = useState<string | null>(null);
  const [isLoading, setLoad] = useState(true);
  const { width } = useWindowSize();

  const handleSet = ({
    name,
    region,
  }: {
    name: string | null;
    region: string | null;
  }) => {
    setRegion(region);
    setSearch(name);
  };

  useEffect(() => {
    fetchCountiesData(setData, name, region, setLoad);
  }, [name, region]);

  return (
    <div className="px-[80px] h-full flex flex-col bg-background">
      <ContriesSearchBar name={name} region={region} handleSet={handleSet} />
      <div
        className="grid border-[#0000ff] gap-[25px]"
        style={{
          gridTemplateColumns: `repeat(${Math.floor(
            width / 300
          )}, minmax(0, 1fr))`,
        }}
      >
        {/* <div className="grid grid-cols-[repeat(4,minmax(0,280px))] border border-[#0000ff] "> */}
        {/* {[...Array(10).keys()].map(({ key }) => (
          <PlaceholderCard />
        ))} */}
        {!isLoading &&
          data &&
          [...data].map((elem) => {
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
