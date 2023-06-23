import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { goToList } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import sendType from "../../Assets/a/b";
import { TituloPagina, DivMae } from "./pokemonDetailPageStyle";
import buba from "../../Assets/buba.svg";
import pokebola from "../../Assets/bola2.svg";
import sendColor from "../../Assets/a/a";
import ret0 from "../../Assets/img7.svg";
import ret1 from "../../Assets/ret1.svg";
import ret2 from "../../Assets/ret2.svg";
import ret3 from "../../Assets/ret3.svg";
import tipo1 from "../../Assets/tipo1.svg";
import tipo2 from "../../Assets/tipo2.svg";
import tipo3 from "../../Assets/tipo3.svg";
import movees from "../../Assets/movees.svg";
import tipo4 from "../../Assets/tipo4.svg";
import tipo5 from "../../Assets/tipo5.svg";
import Header from "../../Components/Header/Header";
import { DataContext } from "../../Constants/DataContext";

function PokemonDetailPage() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigator = useNavigate();
  const [favorites, setFavorites] = useContext(DataContext);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemonData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Erro:", error);
        setIsLoading(false);
      }
    };

    fetchPokemonData();
  }, [id]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }
  let soma =
    pokemonData.stats[0].base_stat +
    pokemonData.stats[1].base_stat +
    pokemonData.stats[2].base_stat +
    pokemonData.stats[3].base_stat +
    pokemonData.stats[4].base_stat +
    pokemonData.stats[5].base_stat;

    console.log(pokemonData)

  const types = pokemonData.types.map((typeObj) => typeObj.type.name);
  const type = types.length === 1 ? [types[0]] : types;
  const sendTypeDetail = type.map((e, id) => {
    return sendType(e, id);
  });

  return (<>
  <Header
   pokemon={pokemonData} />
    <TituloPagina>
      Detalhes </TituloPagina>
      <DivMae variant={sendColor(type[0])}>
      
        <div className="div-1">
        <div className="img1"> <img src={pokemonData.sprites.front_default} /> </div>
          <div className="img2"> <img src={pokemonData.sprites.back_default} /> </div>
                  </div>
        <div className="div-2">
           <div className="power1">
            <span>{pokemonData.stats[0].stat.name}: </span>
            <span>
              {pokemonData.stats[0].base_stat}
              <br />
            </span>
            <span>{pokemonData.stats[1].stat.name}: </span>
            <span>
              {pokemonData.stats[1].base_stat}
              <br />
            </span>
            <span>{pokemonData.stats[2].stat.name}: </span>
            <span>
              {pokemonData.stats[2].base_stat}
              <br />
            </span>
            <span>{pokemonData.stats[3].stat.name}: </span>
            <span>
              {pokemonData.stats[3].base_stat}
              <br />
            </span>
            <span>{pokemonData.stats[4].stat.name}: </span>
            <span>
              {pokemonData.stats[4].base_stat}
              <br />
            </span>
            <span>{pokemonData.stats[5].stat.name}: </span>
            <span>
              {pokemonData.stats[5].base_stat}
              <br />
            </span>
            <p>SOMA: {soma}</p>
          </div>
        </div>
        <div className="div-3">
          <div className="card">
            <p>#0{id}</p>
            <h1>{pokemonData.name}</h1>
            {sendTypeDetail}
          </div>
          <div className="tex">
            <p>Moves:</p>
            <span>{pokemonData.moves[0].move.name}</span>
            <span>{pokemonData.moves[1].move.name}</span>
            <span>{pokemonData.moves[2].move.name}</span>
            <span>{pokemonData.moves[3].move.name}</span>
            <span>{pokemonData.moves[4].move.name}</span>
          </div>
        </div>
        <div className="div-4">
          <img
            className="img1"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt="Imagem do Pokemon"
          />
          <img className="img2" src={pokebola} alt="Pokebola" />
        </div>
      </DivMae>
   
      </> );
}
export default PokemonDetailPage;
