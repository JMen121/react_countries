import Country from "./country"

const CountriesComponent = ({countriesNotVisited, handleCountryMarked}) => {
  const countriesMapped = countriesNotVisited.map((country, handleCountryMarked)=>
  <Country 
  country={country} 
  key={country.cca3} 
  handleCountryMarked={handleCountryMarked}/>
);  
//the props in this map is country and key
console.log({countriesMapped})

return <div>{countriesMapped}</div>


};
 
export default CountriesComponent;