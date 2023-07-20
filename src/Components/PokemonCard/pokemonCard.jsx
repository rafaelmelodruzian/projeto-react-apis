import React from "react";
// import React, { useContext, useEffect } from "react";
import {
  PokemonCardStyle,
  CardBox,
  InfoBox,
  BoxInfoType,
  PokeImage,
  ButtonCatch,
  ButtonDetail,
  ButtonRemovee,
} from "./pokemonCardStyle";
import { sendColor} from "../../Constants/constants";
import { goToDetail } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
// import { DataContext } from "../../Constants/DataContext";

function PokemonCard({ id, tipo, type, pokemon, addToPokedex, removeToPokedex, isFavorite }) {
  const navigator = useNavigate();
  // const [favorites, setFavorites] = useContext(DataContext);

  // useEffect(() => {
  //   setIsFavorite(favorites.some((p) => p.id === pokemon.id));
  // }, [favorites, pokemon]);

  // const setIsFavorite = (isFav) => {
  //     };

  return (
    <PokemonCardStyle>
      <PokeImage
        key={id}
        height="165px"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt="Imagem do Pokemon"
      />
      <CardBox variant={sendColor(type[0])}>
        <InfoBox>
          <BoxInfoType>
            <span className="idPok">#{pokemon.id}</span>
            <span className="nomePok">{pokemon.name}</span>
            <div className="img-types">{tipo}</div>
          </BoxInfoType>

          <ButtonDetail onClick={() => goToDetail(navigator, id, pokemon)}>
            Detalhes
          </ButtonDetail>
        </InfoBox>
        <img className="pokebola" src="https://imgur.com/eXtDn9x.png" alt="Pokebola" key={id} />
      </CardBox>
      {isFavorite ? (
        <ButtonRemovee onClick={()=>removeToPokedex(pokemon)}>
          Remover
        </ButtonRemovee>
      ) : (
        <ButtonCatch onClick={()=> addToPokedex(pokemon)}>
          Capturar
        </ButtonCatch>
      )}
    </PokemonCardStyle>
  );
}

export default PokemonCard;
