import React, { useContext, useState } from "react";
import { TituloPagina, Container } from "./pokedexPageStyle";
import Header from "../../Components/Header/Header";
import { DataContext } from "../../Constants/DataContext";
import PokemonCard from "../../Components/PokemonCard/pokemonCard";
import { sendType } from "../../Constants/constants";
import CustomAlert from "../../Components/Alert/CustomAlert";

function PokedexPage() {
  const [favorites, setFavorites] = useContext(DataContext);
  const [alertMessage, setAlertMessage] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

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
      <TituloPagina><p className="ajuste">.</p><b className="Title"> Meus Pokémons</b></TituloPagina>
      <Container>
        {favorites.map((pokemon) => {
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
              removeToPokedex={removeToPokedex}
              isFavorite={favorites.some((p) => p.id === pokemon.id)}
            />
          );
        })}
      </Container>
      <CustomAlert
        message={alertMessage}
        onClose={() => setShowAlert(false)}
        show={showAlert}
      />
    </>
  );
}

export default PokedexPage;
