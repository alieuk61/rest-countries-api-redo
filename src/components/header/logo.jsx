
import { Link } from "react-router-dom";
import Homepage from "../../pages/homepage/homepage";

export default function Logo(){

    return(
        <Link to='/' element={<Homepage/>}>
        <div >
            <h1 className="logo">Where in the world?</h1>
        </div>
        </Link>
    )
}