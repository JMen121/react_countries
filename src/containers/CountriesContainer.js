import CountriesComponent from "../components/CountriesComponent";
import CountriesButton from "../components/CountriesButton";
import { useEffect, useState } from "react";


const CountriesContainers = () => {
const[countriesVisited, setCountriesVisited] = useState([])
const [countriesNotVisited, setCountriesNotVisited]= useState ([])
    
    const loadCountriesData = async () =>{
    const response = await fetch ("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountriesNotVisited(data); 
    
    //the reason setCountriesnotVisted has been used is because in order to find countries that have been visited we find all
    }

    useEffect (() =>{
    loadCountriesData ();
    }, [])


    const handleCountryMarked=(newCountryNotVisited) => {
    const updateCountriesNotVisited = [...countriesNotVisited]
    updateCountriesNotVisited.push(newCountryNotVisited)
    setCountriesNotVisited(updateCountriesNotVisited)
    }
   
  };



    return (
        <>
        <section>

            <h4>The Ultimate To-Do List</h4>
             </section>

        <section>
            <h3>Countries that I have visited</h3>
            <CountriesComponent countriesNotVisited={countriesNotVisited} />
             </section>

        <section>
           <h3>Countries that I have  not visited</h3>
            </section> 
            </>
    
    );

    
 
export default CountriesContainers ;


