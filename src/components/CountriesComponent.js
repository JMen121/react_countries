import Country from "./country"

const CountriesComponent = ({countriesNotVisited}) => {
  const countriesMapped = countriesNotVisited.map((country, cca)=><Country country={country} key={cca}/>
)     
//the props in this map is country and key
console.log({countriesMapped})

return <div>{countriesMapped}</div>

}
 
export default CountriesComponent;