import React, { useContext } from "react";
import { TituloPagina, Container } from "./pokedexPageStyle";
import Header from "../../Components/Header/Header";
import { DataContext } from "../../Constants/DataContext";
import PokemonCard2 from "../../Components/PokemonCard/pokemonCard2";
import sendType from "../../Assets/a/b";

function PokedexPage() {
  const [favorites, setFavorites] = useContext(DataContext);
  const addToPokedex = (pokemon) => {
    const isAlreadyFavorite = favorites.some((p) => p.id === pokemon.id);

    if (!isAlreadyFavorite) {
      setFavorites([...favorites, pokemon]);
      localStorage.setItem(
        `pokemon${pokemon.id}`,
        JSON.stringify(pokemon)
      );
      alert(`Capturou ${pokemon.name}!`);
    }
  };

  const removeToPokedex = (pokemon) => {
    const updatedFavorites = favorites.filter((p) => p.id !== pokemon.id);
    setFavorites(updatedFavorites);
    localStorage.removeItem(`pokemon${pokemon.id}`);
    alert(`Removeu ${pokemon.name} dos favoritos.`);
  };

  return (
    <>
      <Container>
        <Header />
        <TituloPagina>Meus Pokémons</TituloPagina>
        {favorites.map((pokemon) => {
  const types = pokemon.types.map((typeObj) => typeObj.type.name);
  const type = types.length === 1 ? [types[0]] : types;

  return (
    <PokemonCard2
      key={pokemon.id}
      pokemon={pokemon}
      id={pokemon.id}
      type={type}
      tipo={type.map((e, id) => {
        return sendType(e, id);
      })}
      addToPokedex={addToPokedex}
      removeToPokedex={removeToPokedex}
      isFavorite={favorites.some((p) => p.id === pokemon.id)}
    />
  );
})}
      </Container>
    </>
  );
}

export default PokedexPage;



