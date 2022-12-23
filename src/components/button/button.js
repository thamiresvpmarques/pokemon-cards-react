import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"

export const Button =(propos) =>{

    const { theme } =useContext (ThemeContext)
    return(
        <BtnPoke {...propos}
        style= {{color:theme.color ,background:theme.background}}
        />
    )
}


const BtnPoke = styled.button `
    padding: 10px;
    border-radius: 20px;
    margin-top:10px;
    border:none;
    width: 90px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 15px;
    color: grey;
    cursor:pointer;
    color: gray;
    transition: 1s;

    :hover{
        transform: scale(1.1);
    }
    
`