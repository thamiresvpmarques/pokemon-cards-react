import { useEffect, useState } from "react";
import { getListPoke, getPokemon } from "../../services/api";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";
import { ThemeTogglerButton } from "../theme-toggler-button";
import * as Styled from "./style";

function ListPokemon() {
  const [pokemons, setPokemons] = useState([]);
  const [offSet, setOffset] = useState(0);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListPoke(offSet);
      const pokePromises = data.results.map(async (pokemon) => {
        return await getPokemon(pokemon.url);
      });
      const results = await Promise.all(pokePromises);
      setPokemons([...pokemons, ...results]);
    };
    fetchData();
  }, [offSet]);
  return (
    <Styled.Section style={{ backgroundColor: theme.background }}>
      <Styled.Header>
        <Styled.ImgLog
          alt="Pokémon"
          src="https://crisgon.github.io/pokedex/src/images/logo.png"
        />
        <ThemeTogglerButton />
      </Styled.Header>

      <Styled.Container>
        {pokemons.map((pokemon) => {
          return (
            <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
              <Styled.Data>
                <img alt={pokemon.name} src={pokemon.sprites.front_default} />
                <h3 className="poke-name">{pokemon.name}</h3>
              </Styled.Data>
            </Link>
          );
        })}
      </Styled.Container>

      <Styled.BtnContainer>
        <Styled.Btn onClick={() => setOffset(offSet + 10)} className="poke-btn">
          Carregue Mais
        </Styled.Btn>
      </Styled.BtnContainer>
    </Styled.Section>
  );
}

export { ListPokemon };
