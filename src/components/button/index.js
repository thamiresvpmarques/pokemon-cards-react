import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import * as Style from './style'

const Button =(propos) =>{

    const { theme } =useContext (ThemeContext)
    return(
        <Style.BtnPoke {...propos}
        style= {{color:theme.color,backgroundColor:theme.background}}
        />
    )
}

export { Button }