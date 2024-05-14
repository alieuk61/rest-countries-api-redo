import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import { MyContext } from '../../context/context';
import {SearchIcon} from '../../images/search-outline';

export default function SearchBar (){

    const { countries, countryInfo, setCountryInfo, filteredcountries, inputValue, setInputValue } = useContext(MyContext);
    
    return(
        <div className='searchbar'>
            <SearchIcon />
            <input type="text" placeholder="Search for a country..." 
            value={inputValue}
            onChange={(e) => {
               setInputValue(e.target.value)
            }} />
        </div>
    )
}