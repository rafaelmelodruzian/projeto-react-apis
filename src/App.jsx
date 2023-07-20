import React from "react";
import AppRouter from "./routes/router";
import { DataProvider } from "./Constants/DataContext";

export default function App() {
  return (
    <DataProvider>
      <AppRouter />
    </DataProvider>
  );
}
