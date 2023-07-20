//Importações necessarias para a aplicação
import React from "react";
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
import { POKE_IMAGES, sendColor, POKE_BOLA1 } from "../../Constants/constants";
import { goToDetail } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({
  id,
  tipo,
  type,
  pokemon,
  addToPokedex,
  removeToPokedex,
  isFavorite,
}) {
  //Navigator
  const navigator = useNavigate();

  //Return - O que sera rendenizado
  return (
    <PokemonCardStyle>
      <PokeImage
        key={id}
        src={`${POKE_IMAGES}${id}.png`}
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
        <img className="pokebola" src={POKE_BOLA1} alt="Pokebola" key={id} />
      </CardBox>
      {isFavorite ? (
        <ButtonRemovee onClick={() => removeToPokedex(pokemon)}>
          Remover
        </ButtonRemovee>
      ) : (
        <ButtonCatch onClick={() => addToPokedex(pokemon)}>
          Capturar
        </ButtonCatch>
      )}
    </PokemonCardStyle>
  );
}
