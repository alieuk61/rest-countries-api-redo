// styles and hooks
import './_card.scss'
import { Link } from 'react-router-dom'

export default function Card(props){

    // const [capital] = props.country.capital
    // console.log(capital)

    return(
    <Link to={`/country/${props.country.name.common}`}>
        <div className="card" key={props.cardKey}>
            <section className="country__image">
                <img src={props.country.flags.png} alt="country-flag" />
            </section>
            <section className="country__description">
                <h5 className='country__name'>
                  {props.country.name.common}
                </h5>

                <p><strong>Population: </strong>{props.country.population}</p>
                <p><strong>Region: </strong>{props.country.region}</p>
                {/* <p>{props.country.capital[0]}</p> */}
            </section>
        </div>
    </Link>
    )
} 