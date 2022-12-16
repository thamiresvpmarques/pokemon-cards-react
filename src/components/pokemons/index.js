import { useEffect, useState } from "react";
import { getListPoke, getPokemon } from "../../services/api";
import { Link } from "react-router-dom";

function ListPokemon() {

    const [pokemons, setPokemons] = useState ([]);
    const [offSet,setOffset] = useState (10) 

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
        
     <section className="poke-section">

         <img alt="Pokémon" src="https://crisgon.github.io/pokedex/src/images/logo.png" className="poke-log-img"/>

           <div className="btn">
            <button onClick={()=>setOffset(offSet +10)} className='poke-btn'>Carregue Mais</button>
           </div>
            <div className="poke-container">
             {pokemons.map((pokemon, index) => {
               return (
                     <div key={index} className ='poke-list'>
                      <Link to={`/pokemon/${pokemon.name}`}> 
                         <div className="poke-data">
                            <h3 className="poke-name">{pokemon.name}</h3>
                            <span className="poke-id"> #{pokemon.id}</span>
                         </div>

                         <div className="poke-img">
                           <img alt={pokemon.name} src={pokemon.sprites.front_default} />
                         </div>
                         </Link>
                     </div>
                )
               
            })
            }
                 
            </div>
            
        </section>
         
    )

    
}

export { ListPokemon }
