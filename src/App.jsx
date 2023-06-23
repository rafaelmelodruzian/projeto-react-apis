import React from "react";
import Router from "./routes/router";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import { DataProvider } from "./Constants/DataContext";

function App() {
  return (
    <DataProvider>
      <Router />
    </DataProvider>
  );
}
export default App;
