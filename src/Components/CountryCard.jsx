import React from "react";

export const CountryCard = ({ flag, country, population, region, capital }) => {
  return (
    <div className="h-[350px] w-[275px] bg-element rounded-lg flex flex-col overflow-hidden">
      <img src={flag}></img>
      <div className="px-4">
        <p className="font-bold my-4 text-xl">{country}</p>
        <p>
          <span className="font-bold">Population:</span>&nbsp;
          {population}
        </p>
        <p>
          <span className="font-bold">Region:</span>&nbsp;
          {region}
        </p>
        <p>
          <span className="font-bold">Capital:</span>&nbsp;
          {capital}
        </p>
      </div>
    </div>
  );
};

export const PlaceholderCard = () => {
  return <div className="h-[350px] w-[250px] ">placeholder</div>;
};
