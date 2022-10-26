import Layout from "./Layout";
import Characters from "./Characters";
import CharacterContext from "../context/CharacterContext";
import {BrowserRouter, Route, Switch} from 'react-dom/client'
import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      
      <CharacterContext.Provider value={{name: 'Prueba'}}>
        <Layout>
          <Characters />
        </Layout>
      </CharacterContext.Provider>
    </div>
  );
}

export default App;
