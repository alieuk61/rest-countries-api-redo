import {SearchIcon} from '../../images/search-outline';

export default function SearchBar (){
    
    return(
        <div className='searchbar'>
            <SearchIcon />
            <input type="text" placeholder="Search for a country..." />
        </div>
    )
}