import { useEffect, useReducer } from "react";
import "./App.css";
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";
import PokemonTable from "./components/PokemonTable";

function App() {
  const [state, dispatch] = useReducer(PokemonReducer, {
    searchPokemon: "",
    selectedPokemon: "",
    listPokemon: [],
  });

  useEffect(() => {
    fetch("./pokemonList.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_POKEMON_LIST", payload: data }));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <main className="App">
        <section>
          <h1>Search</h1>
          <PokemonTable></PokemonTable>
        </section>

        <section>
          <h1>Pokemon</h1>
          <h1>Stats</h1>
        </section>
      </main>
    </PokemonContext.Provider>
  );
}

export default App;
