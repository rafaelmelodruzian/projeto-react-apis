// 


import React, { useContext } from "react";
import logo from "../../Assets/logopokemon.svg";
import menor from "../../Assets/menoricon.svg";
import {
  HeaderStyle,
  BtnPokedex,
  BtnMaisPokemons,
  BtnAdd,
  BtnRemove,
  ImagemLogo,
} from "./headerStyle";
import { useNavigate, useLocation } from "react-router-dom";
import { goToList, goToPokedex } from "../../routes/coordinator";
import { DataContext } from "../../Constants/DataContext";

export default function Header({ pokemon }) {
  const navigator = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [favorites, setFavorites] = useContext(DataContext);

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

  const renderBtnMaisPokemons =
    pathname.includes("/detail") || pathname === "/pokedex";
  const renderBtnPokedex = pathname === "/list";
  const renderBtnAdd = pathname.includes("/detail") &&  !favorites.includes(pokemon);

  const renderBtnRemove = pathname.includes("/detail") && favorites.includes(pokemon);

  return (
    <>
      <HeaderStyle>
        <div className="center__header">
          <div className="header__1">
            {renderBtnMaisPokemons && (
              <BtnMaisPokemons onClick={() => goToList(navigator)}>
                <img className="menor" src={menor} alt="menor" />
                Todos os Pokemons
              </BtnMaisPokemons>
            )}
          </div>
          <div className="header__2">
            <ImagemLogo src={logo} alt="Imagem do Logo Pokemon" />
          </div>
          <div className="header__3">
            {renderBtnPokedex && (
              <BtnPokedex onClick={() => goToPokedex(navigator)}>
                Pokedéx
              </BtnPokedex>
            )}

            {renderBtnAdd && (
              <BtnAdd onClick={() => addToPokedex(pokemon)}>
                Capturar Pokemon
              </BtnAdd>
            )}

            {renderBtnRemove && (
              <BtnRemove onClick={() => removeToPokedex(pokemon)}>
                Excluir da Pokedex
              </BtnRemove>
            )}
          </div>
        </div>
      </HeaderStyle>
    </>
  );
}
