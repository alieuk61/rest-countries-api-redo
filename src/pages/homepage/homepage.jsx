// styles, context and hooks
import { useState, useEffect, useContext } from 'react'
import './_homepageStyle.scss'
import { MyContext } from '../../context/context';

// components and pages
import Card from '../../components/card/card';
import SearchBar from '../../components/search-section/searchbar';
import DropDown from '../../components/search-section/dropdown';

function Homepage() {
  const [count, setCount] = useState(0);
  const { countries, countryInfo, setCountryInfo, inputValue, filteredcountries } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await countries();
      setCountryInfo(data);
      console.log(data)
    }

    const fetchFilteredData = async () => {
      try {
        const response = await filteredcountries(inputValue);
        const result = await response.data;
        setCountryInfo(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (inputValue) {
      fetchFilteredData();
    } else {
      fetchData();
    }

  }, [inputValue]);

  return (
    <>
      <div className='main'>
        <div className='search__section'>
          <SearchBar />
          <DropDown />
        </div>
        <div className='card__section'>
        {countryInfo ? countryInfo.map((country, index) => {
            return(
                <Card cardKey={index} country={country} />
            )
        }) : null}
        </div>
      </div>
    </>
  )
}

export default Homepage
