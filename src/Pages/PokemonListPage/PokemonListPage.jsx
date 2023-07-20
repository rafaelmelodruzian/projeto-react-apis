import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../../Constants/DataContext";
import axios from "axios";
import { sendType } from "../../Constants/constants";
import { TituloPagina, Container, All } from "./pokemonListPageStyle";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/pokemonCard";
import CustomAlert from "../../Components/Alert/CustomAlert";
import BASE_URL from "../../Constants/constants";

function PokemonListPage({ pokemon }) {
  const [favorites, setFavorites] = useContext(DataContext);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [alertMessage, setAlertMessage] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    getPokes();
  }, []);

  const getPokes = async () => {
    setIsLoading(true);
    var endpointsList = [];
    for (var i = 1; i < 15; i++) {
      endpointsList.push(`${BASE_URL}${i}`);
    }
    await axios
      .all(endpointsList.map((endpoint) => axios.get(endpoint)))
      .then((pokeInfos) => setPokemonsList(pokeInfos.map((info) => info.data)))
      .catch((error) => alert("erro ao receber dados da API", error))
      .finally(() => setIsLoading(false));
  };

  const addToPokedex = (pokemon) => {
    const isAlreadyFavorite = favorites.some((p) => p.id === pokemon.id);
    if (!isAlreadyFavorite) {
      setFavorites([...favorites, pokemon]);
      localStorage.setItem(`pokemon${pokemon.id}`, JSON.stringify(pokemon));
      setAlertMessage(["Gotcha!", "O Pokémon foi adicionado a sua Pokédex"]);
      setShowAlert(true);
    }
  };

  const removeToPokedex = (pokemon) => {
    const updatedFavorites = favorites.filter((p) => p.id !== pokemon.id);
    setFavorites(updatedFavorites);
    localStorage.removeItem(`pokemon${pokemon.id}`);
    setAlertMessage(["Oh, no!", "O Pokémon foi removido da sua Pokedéx"]);
    setShowAlert(true);
  };

  return (
    <>
      <Header />
      <All>
      <TituloPagina><p className="ajuste">.</p><b className="Title"> Todos os Pokémons</b></TituloPagina>
      <Container>
        {isLoading ? (        
          <img className="loading" src={"https://cdn.dribbble.com/users/722246/screenshots/2845858/pokemon_menu.gif"} alt="Loading..." />
        ) : (
          pokemonsList.map((pokemon) => {
            const types = pokemon.types.map((typeObj) => typeObj.type.name);
            const type = types.length === 1 ? [types[0]] : types;
            return (
              <PokemonCard
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
          })
        )}
      </Container>
      <CustomAlert
        message={alertMessage}
        onClose={() => setShowAlert(false)}
        show={showAlert}
      />
      </All>
    </>
  );
}
export default PokemonListPage;