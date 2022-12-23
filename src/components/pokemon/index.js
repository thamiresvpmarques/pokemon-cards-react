import { getPokemonInfo,getPokemon} from "../../services/api";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Pokemon() {

    const [pokemon, setPokemon] = useState ({});
    const [abilities, setAbilities] = useState ([])
    const { name } = useParams ()
    

    useEffect (() =>{
        const fetchData = async () =>{
           const data = await getPokemonInfo(name);
           
           const pokeAbilities = data.abilities.map((element)=> getPokemon(element.ability.url))
           const pokePromises = await Promise.all (pokeAbilities)
           
          setAbilities(pokePromises)
          setPokemon(data)
          }
        fetchData()
    }, [])
    
    return (
      <section >
        <Link to="/">Home</Link>
        <div className="poke-card">

          <div className ='poke'>
         
           <div className="poke-data">
            <h3 className="poke-name">{pokemon.name}</h3>
            
           </div>

           <img alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />

           {pokemon.moves?.map((poke,index) =>{
                return(
                   <ul key={index}>
                    <li>{poke.move.name}</li>
                   </ul>)
             })}
            
            {abilities.map((ability) =>{
             const abilitiesFilter = ability.flavor_text_entries.filter((description)=>{
                return description.language.name === "en"
              })
                return (
                  <li key={ability.name}>{ability.name} + {abilitiesFilter[0].flavor_text}</li>
                )
            })}

          </div>
                
        </div>
      </section>
         
    )
}

export { Pokemon }