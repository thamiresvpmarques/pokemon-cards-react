import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList } from "./pokemons";
import { PokemonCard } from "./pokemon"

const AppRoutes = () =>{
    return(
    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<PokemonList/>}/>
         <Route exact path="/pokemon/:name" element={<PokemonCard/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export { AppRoutes }