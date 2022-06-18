/** Use Axios to get data from restcountries api */
import axios from 'axios';

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

//https://restcountries.com/v3.1/name/{name}
/** Create getCountry Function here */
const getCountry = async (countryName: string)=>{
    const getApi = await axios(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
    const data = getApi.data[0];


    return {
        capital: data.capital[0],
        region: data.region,
        population: data.population,
    }
};
getCountry("canada");
/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
const getRegionCapitals = async (regionalbloc: string)=>{
    const countries = await getRegionCountries(regionalbloc);
    const promises = countries.map((endpoint: any) => 
       axios(`https://restcountries.com/v2/regionalbloc/${regionalbloc}`
    ));
    const arr = await Promise.all(promises);
    const capitals = [];
    for (let i=0; i < arr.length; i++) {
        capitals.push(arr[i].data[0].capital);
    }
    return capitals;
};

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};
