// styles, context and hooks
import { useParams } from "react-router-dom"
import './_countryPage.scss'

// components and pages
import BackButton from "../../components/country-page-components/back-button"

export default function CountryPage(){

    const { id } = useParams()
    console.log(id)

    return(
        <div className="country-page__main">

            <BackButton />

            <div className="country__img">

            </div>
            <div className="country__information">

            </div>
        </div>
    )
}