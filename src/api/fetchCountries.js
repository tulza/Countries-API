/**
 * @param {*} set takes in set function of a usestate
 * return Counties with filter needed for front page only
 */

export const fetchCountiesData = async (set, name, region, setLoad) => {
  let link = "https://restcountries.com/v3.1";
  if (!!name == false && !!region == false) {
    link += "/all";
  } else if (name) {
    link += `/name/${name}`;
  } else if (region) {
    link += `/region/${region}`;
  }
  link += "?fields=flags,name,region,population,capital";

  const DoFetch = window.setTimeout(async () => {
    try {
      setLoad(true);
      const response = await fetch(link);
      const json = await response.json();
      setLoad(false);
      if (json.status == 404) {
        throw json.error;
      }
      console.log("returned", json.length, "countries");
      set(await json);
    } catch (error) {
      console.error("failed to fetch data");
      throw error;
    }
  }, 1000);

  DoFetch;
};
