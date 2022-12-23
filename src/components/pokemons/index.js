import { useEffect, useState } from "react";
import { getListPoke, getPokemon } from "../../services/api";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
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

         <div className="img-div">
           <img alt="Pokémon" src="https://crisgon.github.io/pokedex/src/images/logo.png" className="poke-log-img"/>
           <ThemeTogglerButton/>
         </div>
         
         <div className="poke-container">
             {pokemons.map((pokemon, index) => {
               return (
                     
                     <div key={index} className ='poke-list'>
                      <Link to={`/pokemon/${pokemon.name}`}> 
                         <div className="poke-data">
                            <h3 className="poke-name">{pokemon.name}</h3>
                            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
                         </div>
                         </Link>
                     </div>
                )
               })
            }
         </div>

         <div className="btn">
            <button onClick={()=>setOffset(offSet +10)} className='poke-btn'>Carregue Mais</button>
           </div>

     </Section>
         )
}
const Section = styled.section `
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    `


export { ListPokemon }
