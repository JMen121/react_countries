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

    //function that takes in a country as a argument
    //this is making a copy of each array- we create new arrays instead of copying existing because its good practice
    const markCountryAsVisited = (country) => {
        const updatedCountriesNotVisited = [...countriesNotVisited];
        const updatedCountriesVisited = [...countriesVisited];
        //The splice() method is then used to remove the country from the updatedCountriesNotVisited array. 
        const countryLocation = updatedCountriesNotVisited.indexOf(country)
        updatedCountriesNotVisited.splice(countryLocation, 1);
        updatedCountriesVisited.push(country);
        
        setCountriesNotVisited (updatedCountriesNotVisited);
        setCountriesVisited (updatedCountriesVisited);
    }



    return (
        <>
        <section>

            <h1>The Ultimate To-Do List</h1>
             </section>

        <section>
            <h4>Countries that I have visited</h4>
            <CountriesComponent 
            countriesNotVisited={countriesNotVisited} />
             handleCountryMarked={markCountryAsVisited}
             
           
            
             </section> 
       

        <section>
           <h3>Countries that I have  not visited</h3>
            </section> 
            </>
    
    );
}
    
 
export default CountriesContainers ;


