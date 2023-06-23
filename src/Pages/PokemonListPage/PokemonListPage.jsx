import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../Constants/DataContext";
import axios from "axios";
import sendType from "../../Assets/a/b";
import style from "./style.css";
import { TituloPagina, Container } from "./pokemonListPageStyle";
import Header from "../../Components/Header/Header";
import PokemonCard2 from "../../Components/PokemonCard/pokemonCard2";

function PokemonListPage({ pokemon }) {
  const [favorites, setFavorites] = useContext(DataContext);
  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    getPokes();
  }, []);

  const getPokes = async () => {
    var endpointsList = [];
    for (var i = 1; i < 50; i++) {
      endpointsList.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    await axios
      .all(endpointsList.map((endpoint) => axios.get(endpoint)))
      .then((pokeInfos) => setPokemonsList(pokeInfos.map((info) => info.data)))
      .catch((error) => alert("erro catch", error));
  };

  const addToPokedex = (pokemon) => {
    const isAlreadyFavorite = favorites.some((p) => p.id === pokemon.id);

    if (!isAlreadyFavorite) {
      setFavorites([...favorites, pokemon]);
      localStorage.setItem(`pokemon${pokemon.id}`, JSON.stringify(pokemon));
      alert(`Capturou ${pokemon.name}!`);
    }
  };

  const removeToPokedex = (pokemon) => {
    const updatedFavorites = favorites.filter((p) => p.id !== pokemon.id);
    setFavorites(updatedFavorites);
    localStorage.removeItem(`pokemon${pokemon.id}`);
    alert(`Removeu ${pokemon.name} dos favoritos.`);
  };
  console.log(favorites);
  console.log(pokemonsList);
  return (
    <>
      <Header />
      <TituloPagina> Todos os Pokémons</TituloPagina>
      <Container>
        {pokemonsList.map((pokemon) => {
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

export default PokemonListPage;
