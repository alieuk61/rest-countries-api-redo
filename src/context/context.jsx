import {useState, createContext } from "react";
import axios from "axios";

const MyContext = createContext();

// Context provider component 
export const MyContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [continentSelected, setContinent] = useState('Filter by region');

    // api calls

    async function countries () {
        try {
            let countryCode = await axios.get(`https://restcountries.com/v3.1/all`);
            let data = countryCode.data.sort((a, b) => a.ccn3 - b.ccn3)
            return data
        } catch (error) {
            console.error(`Error: ${error}`)
        }
    }

    async function continents () {
        try {
            let continent = await axios.get('https://restcountries.com/v3.1/region/')
        } catch (error) {
            console.error(error)
        }
    }

    async function specificCountry(country) {
        try {
            let specificcountry = await axios.get(`https://restcountries.com/v3.1/name/${country.toLowerCase()}`)
            let data = specificcountry.data[0]
            console.log(data)
            return data
        } catch (error) {
            console.error(error)
        }
    }

    const value = {
     theme,
     setTheme,
     countries,
     continentSelected,
     setContinent,
     specificCountry
    };

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export {MyContext}