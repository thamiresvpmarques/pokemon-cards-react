import { useEffect, useState } from "react";
import { getListPoke,getPokemon } from "../services/api";


function ListPokemon() {

    const [pokemons, setPokemons] = useState ([]);

    useEffect (() =>{
        const fetchData = async () =>{
           const data = await getListPoke();
           const pokePromises = data.results.map(async (pokemon)=>{
            return await getPokemon(pokemon.url)
           });

           const results = await Promise.all(pokePromises);
           

           setPokemons(results)
        }  
         fetchData()
    }, [])
    
    return (
        <section>
            <h1>Pokemon</h1>
             <ul>
                {pokemons.map((pokemon, index) => {
                   <li key={index}>
                     <p> Nome {pokemon.name}</p>
                   </li>
                   console.log(pokemons)
        
                })
                }
             </ul>
           
        </section>
    )

    
}

export { ListPokemon }