import { getPokemonInfo} from "../../services/api";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Pokemon() {

    const [pokemon, setPokemon] = useState ({});
    const { name } = useParams ()
   
    useEffect (() =>{
        const fetchData = async () =>{
           const data = await getPokemonInfo(name);
           
           setPokemon(data)
          console.log(data)
        }
        fetchData()
    }, [])
    console.log(pokemon)
    return (
      <section>
        <Link to="/">Home</Link>
        <div className="poke-card">

          <div className ='poke'>
         
           <div className="poke-data">
            <h3 className="poke-name">{pokemon.name}</h3>
            <span className="poke-id"> #{pokemon.id}</span>
           </div>

           <img alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />

           {pokemon.moves.map((pokemon,index) =>{
                         return(
                                  <ul key={index}>
                                    <li>{pokemon?.moves}</li>
                                  </ul>
                                  )
                                  })}
           
          </div>
                
        </div>
      </section>
         
    )
}

export { Pokemon }