import React from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { TituloPagina, Container } from "./pokemonListPageStyle";

function PokemonListPage() {
  return (
    <>
      <TituloPagina>Todos Pokémons</TituloPagina>
      <Container>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </Container>
    </>
  );
}

export default PokemonListPage;
