import { getPokemonInfo,getPokemon} from "../../services/api";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext} from "../../contexts/theme-context";
import { ThemeTogglerButton } from "../theme-toggler-button";
import { RxDoubleArrowLeft } from 'react-icons/rx'
import * as Styled from './style'


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
      <Styled.Section style={{backgroundColor:theme.background}}>

        <Styled.Header>
         <Link to="/"><RxDoubleArrowLeft/></Link>
         <ThemeTogglerButton/>
        </Styled.Header>

        <Styled.InfoPoke>
          <Styled.Poke>
            <Styled.H3>{pokemon.name}</Styled.H3>
            <img alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />
          </Styled.Poke>
          
          <Styled.Data>
           <Styled.H3>Abilities</Styled.H3>
           <Styled.Abilities style={{color:theme.color, backgroundColor:theme.background}}>
            {abilities.map((ability) =>{
             const abilitiesFilter = ability.flavor_text_entries.filter((description)=>{
                return description.language.name === "en"
              })
                return (
                  <ul key={ability.name}>
                   <li>{ability.name} - {abilitiesFilter[0].flavor_text}</li>
                  </ul>
                )
            })}
           </Styled.Abilities>

           <Styled.H4>Type</Styled.H4>
           <Styled.Type style={{color:theme.color}}>
           {type.map((type,index) =>{
             return (
              <ul key={index}>
                <li>{type.name}</li>
              </ul>
             )

           })}
           </Styled.Type>

           <Styled.H3>Moves</Styled.H3>
           <Styled.Moves style={{color:theme.color, backgroundColor:theme.background}}>
           {pokemon.moves?.map((poke,index) =>{
              return(
                <ul key={index}>
                  <li>{poke.move.name}</li>
                </ul>)
             })}
            </Styled.Moves>
            
           </Styled.Data>

          </Styled.InfoPoke>
                
        
      </Styled.Section>
         
    )
}


export { Pokemon }