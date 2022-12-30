import { getPokemonInfo,getPokemon} from "../../services/api";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext} from "../../contexts/theme-context";
import { ThemeTogglerButton } from "../theme-toggler-button/theme-toggler-button";
import { RxDoubleArrowLeft } from 'react-icons/rx'


function Pokemon() {

    const [pokemon, setPokemon] = useState ({});
    const [abilities, setAbilities] = useState ([])
    const [type, setType] = useState([])
    const { name } = useParams ()
    const { theme } = useContext(ThemeContext)
    

    useEffect (() =>{
        const fetchData = async () =>{
           const data = await getPokemonInfo(name);
           
           const pokeAbilities = data.abilities.map((element)=> getPokemon(element.ability.url))
           const pokePromises = await Promise.all (pokeAbilities)
           const pokeType = await data.types.map(pokemon => pokemon.type)

          setType(pokeType)
          setAbilities(pokePromises)
          setPokemon(data)
          }
        fetchData()
    }, [])
    
    return (
      <Section style={{backgroundColor:theme.background}}>

        <Header>
         <Link to="/"><RxDoubleArrowLeft/></Link>
         <ThemeTogglerButton/>
        </Header>

        <DivInfoPoke>
          <DivPoke>
            <H3>{pokemon.name}</H3>
            <img alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />
          </DivPoke>
          
          <DivData>
           <H3>Abilities</H3>
           <DivAbilities style={{color:theme.color, backgroundColor:theme.background}}>
            {abilities.map((ability) =>{
             const abilitiesFilter = ability.flavor_text_entries.filter((description)=>{
                return description.language.name === "en"
              })
                return (
                  <ul>
                  <li key={ability.name}>{ability.name} - {abilitiesFilter[0].flavor_text}</li>
                  </ul>
                )
            })}
           </DivAbilities>

           <H4>Type</H4>
           <DivType style={{color:theme.color}}>
           {type.map((type,index) =>{
             return (
              <ul key={index}>
                <li>{type.name}</li>
              </ul>
             )

           })}
           </DivType>

           <H3>Moves</H3>
           <DivMoves style={{color:theme.color, backgroundColor:theme.background}}>
           {pokemon.moves?.map((poke,index) =>{
              return(
                <ul key={index}>
                  <li>{poke.move.name}</li>
                </ul>)
             })}
            </DivMoves>
            
           </DivData>

          </DivInfoPoke>
                
        
      </Section>
         
    )
}

const Section = styled.section `
display: flex;
align-items:center;
flex-direction:column;
min-width: 100%;
gap:40px;

`
const Header =styled.header`
display:flex;
justify-content:space-between;
align-items:center;
min-width:100%;
padding:30px;

a{
text-align:center;
color:#fff;
font-size:30px;
background-color:red;
font-family: -apple-system- ;
width:100px;
height:30px;
text-decoration:none;
border-radius: 20px;
transition:0.75s
}
a:hover{
 color:black;
}
`
const DivInfoPoke =styled.div `
display:flex;
align-items:center;
justify-content: center;
min-height: 450px;
min-width: 550px;
padding:30px;
gap:20px;
border:1.75px solid #ffffff;

@media(max-width:985px){
  flex-direction:column;
  border:none;
}
`

const DivPoke = styled.div`
display:flex;
align-items:center;
justify-content: center;
flex-direction:column;
min-height:90%;
min-width:350px;
gap:30px;
border-right: 1.75px solid #ffffff;

@media(max-width:985px){
  border:none;
  min-height:250px;
 img{
  width:150px;
 }
}
`
const H3 =styled.h3`
text-transform: uppercase;
font-size:20px;
text-align:center;
background-color:#fff;
min-width:150px;
padding:10px;
border-radius: 15px;

@media(max-width:985px){
  font-size:25px;
}
`
const DivData = styled.div`
display:flex;
text-align:center;
padding:10px;
flex-direction:column;
gap:20px;
font-family: -apple-system- ;
font-size: 20px;


@media(max-width:985px){
  width:300px;
}
`
const DivAbilities = styled.div`
ul{
  list-style-type: none;

}
`
const H4 = styled.h4`
text-transform: uppercase;
background-color:#fff;
min-width:100px;
text-align:center;
border-radius: 15px;
`
const DivType = styled.div`
text-transform: uppercase;
ul{
  list-style-type: none;

}


`
const DivMoves = styled.div `
height:150px;
overflow-y:auto;
text-align:center;

`



export { Pokemon }