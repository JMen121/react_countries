import CountriesComponent from "../components/CountriesComponent";
import { useEffect, useState } from "react";


const CountriesContainers = () => {
const[countriesVisted, setCountriesVisted] = useState([])
const [countriesNotVisted, setCountriesNotVisted]= useState ([])
    
    const loadCountriesData = async () =>{
    const response = await fetch ("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountriesNotVisted(data); 
    setCountriesVisted(data)
    //the reason setCountriesnotVisted has been used is because in order to find countries that have been visited we find all
    }

    useEffect (() =>{
    loadCountriesData ();
    }, [])


    const displayCountryAsMarked=((countriesVisted) => {
    const updateCountriesVisited = [...countriesVisted]
    updateCountriesVisited.push(countriesVisted)
    setCountriesVisted(updateCountriesVisited)
    console.log ({displayCountryAsMarked})
    })

    const onButtonClick = () =>{
    displayCountryAsMarked(country)
   }
   
    return (
        <>
        <h4>The Ultimate To-Do List</h4>
      <CountriesComponent countriesNotVisited={countriesNotVisted}/>

     
        </>
      );

}
 
export default CountriesContainers ;