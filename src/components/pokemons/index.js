import { useEffect, useState } from "react";
import { getListPoke, getPokemon } from "../../services/api";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext} from "../../contexts/theme-context";
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button";
import styled from 'styled-components'

function ListPokemon() {

    const [pokemons, setPokemons] = useState ([]);
    const [offSet,setOffset] = useState (10) 
    const { theme } = useContext(ThemeContext)

    useEffect (() =>{
        const fetchData = async () =>{
           const data = await getListPoke(offSet);
           const pokePromises = data.results.map(async (pokemon)=>{
            return await getPokemon(pokemon.url)
           });
           const results = await Promise.all(pokePromises);
           setPokemons(results)
           
        }
        fetchData()
        
    }, [offSet])
    return (
       
     <Section style={{backgroundColor:theme.background}}>

         <DivHeader>
           <ImgLog alt="Pokémon" src="https://crisgon.github.io/pokedex/src/images/logo.png" className="poke-log-img"/>
           <ThemeTogglerButton/>
         </DivHeader>
         
         <DivContainer>
             {pokemons.map((pokemon) => {
               return (
                     <Link to={`/pokemon/${pokemon.name}`}> 
                         <DivData>
                            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
                            <h3 className="poke-name">{pokemon.name}</h3>
                         </DivData>
                     </Link>
                     )
               })
            }
         </DivContainer>

        <DivBtn>
            <Btn onClick={()=>setOffset(offSet +10)} className='poke-btn'>Carregue Mais</Btn>
        </DivBtn>

     </Section>
         )
}
const Section = styled.section `
display: flex;
flex-direction:column;
align-items: center;
justify-content: space-between;
min-width: 100%;
`
const DivHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 90%;

`
const ImgLog = styled.img`
width: 150px;
height: 80px;
cursor: pointer;

`
const DivContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
overflow-y:auto;
height: 450px;
width: 1400px;
padding: 10px;
border-top:1.75px solid #ffffff;

a:-webkit-any-link {
    text-decoration:none;
}
@media(max-width:985px){
width:350px;
border:none;
}
`
const DivData = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-width: 250px;
min-height: 150px;
padding: 10px;
transition: 0.75s;

@media(max-width:985px){
min-width:120px;
}

h3{
background-color: #fff;
min-width: 150px;
height: 100%;
text-align: center;
text-transform: capitalize;
color: black;
border-radius: 20px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
}
:hover{
    transform: scale(1.1);
}
img{
    width: 100px;
}
`
const DivBtn = styled.div`
display: flex;
justify-content: flex-end;
width: 85%;
margin-bottom: 30px;
`
const Btn = styled.button`
padding: 15px;
cursor: pointer;
background-color: red;
border: none;
color: #fff;
border-radius: 50px;
font-size: 20px;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
font-family: -apple-system- ;
transition: 0.75s;

:hover{
    color: black;
    transform: scale(1.1);
`

export { ListPokemon }