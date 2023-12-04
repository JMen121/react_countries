import Country from "./country"

const CountriesComponent = ({countriesNotVisited}) => {
  const countriesMapped = countriesNotVisited.map((country, id)=><Country country={country} key={id}/>
)     
//the props in this map is country and key
console.log({countriesMapped})

return <div>{countriesMapped}</div>

}
 
export default CountriesComponent;