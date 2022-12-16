import { getPokemonInfo} from "../../services/api";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function Pokemon() {

    const [pokemon, setPokemon] = useState ({});
    const { name } = useParams ()
   
    useEffect (() =>{
        const fetchData = async () =>{
           const data = await getPokemonInfo(name);
          
           setPokemon(data)
          console.log(pokemon)
        }
        fetchData()
        
    }, [])
    return (
        
      <div className="poke-card">

       <div className ='poke-list'>
         
         <div className="poke-data">
            <h3 className="poke-name">{pokemon.name}</h3>
            <span className="poke-id"> #{pokemon.id}</span>
         </div>
         <img alt={pokemon.name} src={pokemon.sprites.front_default} />
        </div>
                
      </div>
            
      
         
    )
}

export { Pokemon }