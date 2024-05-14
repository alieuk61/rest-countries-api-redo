import { useContext, useState, useEffect } from "react";
import { MyContext } from "../../context/context";

// components
import {UpArrowImage} from "src/images/up-arrow";
import {DownArrowImage} from "src/images/down-arrow";

const DropDown = () => {
    const [isDown, setDown] = useState(false);
    const {continentSelected, setContinent, continents, setCountryInfo} = useContext(MyContext);
    const continentsList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    useEffect(() => {
        const fetchData = async () => {
          const result = await continents(continentSelected);
          setCountryInfo(result)
        }

        if (continentsList.includes(continentSelected)){
            fetchData()
        }
    }, [continentSelected])

    return(
        <div className="dropdown">
            <div className="dropdown__current" onClick={() => { setDown(prev => !prev) }}>
                <section>
                    <p>{continentSelected}</p>
                    {isDown ? <DownArrowImage /> : <UpArrowImage />}
                </section>
            </div>

            <ul className={`dropdown__list ${isDown ? 'dropdown__down' : null} `}>
                {continentsList.map((cont, index) => {
                    return(
                        <li key={index} onClick={() => {
                            setContinent(cont)
                        }}>{cont}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DropDown