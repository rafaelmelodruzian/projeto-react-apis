import React, { useContext, useState } from "react";
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
import CustomAlert from "../Alert/CustomAlert";

export default function Header({ pokemon }) {
  const navigator = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [favorites, setFavorites] = useContext(DataContext);
  const [alertMessage, setAlertMessage] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

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

  const renderBtnMaisPokemons =
    pathname.includes("/detail") || pathname === "/pokedex";
  const renderBtnPokedex = pathname === "/list";

  const renderBtnAdd =
    pathname.includes("/detail") &&
    !favorites.find((poke) => poke.id === pokemon.id);

  const renderBtnRemove =
    pathname.includes("/detail") &&
    favorites.find((poke) => poke.id === pokemon.id);
  return (
    <>
      <HeaderStyle>
        <div className="center__header">
          <div className="header__1">
            {renderBtnMaisPokemons && (
              <BtnMaisPokemons onClick={() => goToList(navigator)}>
                <img
                  className="menor"
                  src="https://img2.gratispng.com/20180717/y/kisspng-less-than-sign-greater-than-sign-equals-sign-at-si-less-than-sign-5b4e28e01ec516.021790021531848928126.jpg"
                  alt="menor"
                />
                Todos os Pokemons
              </BtnMaisPokemons>
            )}
          </div>
          <div className="header__2">
            {/* Renderiza o LOGO com borda se estiver na página da Pokédex */}
            <ImagemLogo
              src="https://imgur.com/5kW7J9D.jpg"
              alt="Imagem do Logo Pokemon"
                         />
          </div>
          <div className="header__3">
            {renderBtnPokedex && (
              <BtnPokedex onClick={() => goToPokedex(navigator)}>
                Pokedéx
              </BtnPokedex>
            )}
            {renderBtnAdd && (
              <BtnAdd onClick={() => addToPokedex(pokemon)}>Capturar!</BtnAdd>
            )}
            {renderBtnRemove && (
              <BtnRemove onClick={() => removeToPokedex(pokemon)}>
                Remover
              </BtnRemove>
            )}
          </div>
        </div>
      </HeaderStyle>
      <CustomAlert
        message={alertMessage}
        onClose={() => setShowAlert(false)}
        show={showAlert}
      />
    </>
  );
}
