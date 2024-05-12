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
  const {countries} = useContext(MyContext)
  const [countryInfo, setCountryInfo] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      const data = await countries();
      setCountryInfo(data);
      console.log(data)
    }

    fetchData();
  }, []);

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
