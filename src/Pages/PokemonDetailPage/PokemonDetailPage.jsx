import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TituloPagina, DivMae, All } from "./pokemonDetailPageStyle";
import { sendColor, sendType } from "../../Constants/constants";
import Header from "../../Components/Header/Header";
import { ProgressBar, Stats } from "./pokemonDetailPageStyle";
import BASE_URL from "../../Constants/constants";

function PokemonDetailPage() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}${id}`);
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
    return <p> Carregando... </p>;
  }

  let soma = 0;
  for (const stats of pokemonData.stats) {
    soma += stats.base_stat;
  }

  const types = pokemonData.types.map((typeObj) => typeObj.type.name);
  const type = types.length === 1 ? [types[0]] : types;
  const sendTypeDetail = type.map((e, id) => {
    return (
      <span key={id} className="typeTag">
        {sendType(e, id)}
      </span>
    );
  });

  return (
    <>
      <Header pokemon={pokemonData} />
      <All>
        <TituloPagina>
          <p className="ajuste">.</p>
          <b className="Title"> Meus Pokémons</b>
        </TituloPagina>
        <DivMae variant={sendColor(type[0])}>
          <div className="div-1">
            <div className="img1">
              <img
                src={
                  pokemonData.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
                alt={`Gif do pokemon: ${pokemonData.name} de frente.`}
              />
            </div>
            <div className="img2">
              <img
                src={
                  pokemonData.sprites.versions["generation-v"]["black-white"]
                    .animated.back_default
                }
                alt={`Gif do pokemon: ${pokemonData.name} de costas.`}
              />
            </div>
          </div>
          <div className="div-2">
            <div className="power1">
              <p className="status_base">Base Status:</p>
              {pokemonData.stats.map((stat) => (
                <Stats key={stat.stat.name}>
                  <span>{stat.stat.name}</span>
                  <span>{stat.base_stat}</span>
                  <ProgressBar stat={stat.base_stat}> </ProgressBar>
                </Stats>
              ))}
              <Stats>
                <p className="status_soma">
                  Total: <b>{soma}</b>
                </p>
              </Stats>
            </div>
          </div>
          <div className="div-3">
            <div className="card">
              <div className="headerWrapper">
                <p className="id">#{id}</p>
              </div>
              <h1>{pokemonData.name}</h1>

              {sendTypeDetail}
            </div>
            <div className="tex">
              <h2 className="moov">Moves:</h2>
              <div className="mooves_rend">
                {pokemonData.moves.slice(0, 5).map((move, index) => (
                  <span className="mooves_tex" key={index}>
                    <b>{move.move.name}</b>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="div-4">
            <img
              className="img1"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
              alt="Imagem do Pokemon"
            />
            <img
              className="img2"
              src="https://imgur.com/WwJ5Tse.png"
              alt="Pokebola"
            />
          </div>
        </DivMae>
      </All>
    </>
  );
}
export default PokemonDetailPage;
