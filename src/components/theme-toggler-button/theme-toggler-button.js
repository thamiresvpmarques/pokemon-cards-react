import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"


export const ThemeTogglerButton = () =>{
     
    const { theme, setThemes } = useContext (ThemeContext)
   
    return(
        <div>
         <Button onClick ={()=> setThemes(theme === themes.light ? themes.dark : themes.light)}>Theme</Button>
        </div>
    )
}

