import React from "react";
import AppRouter from "./routes/router";
import { DataProvider } from "./Constants/DataContext";

function App() {
  return (

    <DataProvider>
    
        <AppRouter />
      
    </DataProvider>

  );
}

export default App;
