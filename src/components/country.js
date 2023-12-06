
const Country = ({country, handleCountryMarked}) => {

        const handleCountryClicked = () => {
            handleCountryMarked(country);
        }

    return (  
        <>
        <h5> Name : {country.name.common}</h5>
        <button onClick = {handleCountryClicked}>Mark as Completed</button>
        </>
    );
}


 
export default Country;