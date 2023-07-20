import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../Pages/PokemonListPage/PokemonListPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/list" />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/list" element={<PokemonListPage />} />
        <Route path="/detail/:id" element={<PokemonDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
