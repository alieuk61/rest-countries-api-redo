// styles and hooks
import { useContext } from "react"
import { MyContext } from "../../context/context";
// other
import { LightMoon } from '../../images/light-moon.jsx';
import { DarkMoon } from '../../images/dark-moon.jsx';

export default function ThemeButton() {
    const {theme, setTheme} = useContext(MyContext)
    
    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return(
        <div className="theme-button" onClick={handleTheme}>
            {theme === 'light' ? <LightMoon/> : <DarkMoon />}
            <h3>{theme}</h3>
        </div>
    )
}