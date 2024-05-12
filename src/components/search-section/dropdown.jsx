import { useContext, useState } from "react";
import { MyContext } from "../../context/context";

// components
import UpArrowImage from "../../images/up-arrow";
import DownArrowImage from "../../images/down-arrow";

const DropDown = () => {
    const [isDown, setDown] = useState(false);
    const {continentSelected, setContinent} = useContext(MyContext);
    const continentsList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    return(
        <div className="dropdown">
            <div className="dropdown__current">
                <section>
                    <p>{continentSelected}</p>
                    <img src={isDown ? <DownArrowImage /> : <UpArrowImage />} alt="arrow-img" />
                </section>
            </div>

            <ul className="dropdown__list">
                {continentsList.map((cont, index) => {
                    return(
                        <li key={index}>{cont}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DropDown