// styles, context and hooks
import { useParams, Link } from "react-router-dom"
import './_countryPage.scss'
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/context";

// components and pages
import BackButton from "../../components/country-page-components/back-button"
import Homepage from "../homepage/homepage";

export default function CountryPage(){

    const [country, selectedCountry] = useState();
    const {specificCountry} = useContext(MyContext);
    const { id } = useParams()
    console.log(id, typeof id)

    useEffect(() => {
        const fetch = async () => {
           let countryData = await specificCountry(id);
           selectedCountry(countryData);
        };

        fetch()

    }, [])

    console.log(country)

    return(
        <div className="country-page__main">

            {country && 
            <div className="country-page__wrapper">
                    <Link to='/' element={<Homepage />} className="link">
                        <BackButton />
                    </Link>

            <div className="country__img">
                <img src={country.flags.png} alt={country?.flags?.alt} />
            </div>
            <div className="country__information-div">
                <h4>{country?.name?.common}</h4>

                <div className="country__info">
                    <section>
                        <p><strong>Native Name: </strong>{country?.name?.nativeName?.ara?.common}</p>
                        <p><strong>Population: </strong>{country?.population}</p>
                        <p><strong>Region: </strong>{country?.region}</p>
                        <p><strong>Sub Region: </strong>{country?.subregion}</p>
                        <p><strong>Capital: </strong>{country?.capital}</p>
                    </section>
                    <section>
                        <p><strong>Top Level Domain: </strong>{country?.tld[0]}</p>
                        <p><strong>Currencies: </strong>{}</p>
                        <p><strong>Languages: </strong>{country ? Object.values(country.languages).join(', ') : null}</p>
                    </section>
                </div>
                <div className="border__div">
                    <h6>Border Countries:</h6>
                        {country?.borders?.map((borderCountry, index) => {
                            return(
                                <div className='border-country__div'>
                                    {borderCountry}
                                </div>
                            )
                        })}
                </div>
            </div>
                </div>
            }
            

        </div>
        
    )
}