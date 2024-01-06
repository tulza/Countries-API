/**
 * @param {*} set takes in set function of a usestate
 * return JSON
 */
export const fetchCountiesData = async (set, name, region) => {
  let link = "https://restcountries.com/v3.1";
  if (name == null && region == null) {
    link += "/all";
  } else if (name) {
    link += `/name/${name}`;
  } else if (region) {
    link += `/region/${region}`;
  }
  try {
    const response = await fetch(link);
    const json = await response.json();
    set(await json);
  } catch (error) {
    console.error("failed to fetch data");
    throw error;
  }
};
