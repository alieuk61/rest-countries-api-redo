import { useContext } from "react";
import { MyContext } from "../../context/context";

const DropDown = () => {
    const {continentSelected, setContinent} = useContext(MyContext);
    const continentsList = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    return(
        <div className="dropdown">
            <div>{continentSelected}</div>

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