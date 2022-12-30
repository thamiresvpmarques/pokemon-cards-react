import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"

export const Button =(propos) =>{

    const { theme } =useContext (ThemeContext)
    return(
        <BtnPoke {...propos}
        style= {{color:theme.color,backgroundColor:theme.background}}
        />
    )
}


const BtnPoke = styled.button`
min-width:100%;
min-height:100%;
cursor:pointer;
padding:10px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
border:none;
`