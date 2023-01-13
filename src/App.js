import { useEffect, useReducer } from "react";
import "./App.css";
import PokemonContext from "./PokemonContext";
import PokemonReducer from "./PokemonReducer";
import PokemonTable from "./components/PokemonTable";
import PokemonStats from "./components/PokemonStats";
import PokemonView from "./components/PokemonView";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [state, dispatch] = useReducer(PokemonReducer, {
    searchPokemon: "",
    selectedPokemon: {},
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
          <QueryClientProvider client={queryClient}>
            <PokemonTable></PokemonTable>
          </QueryClientProvider>
          <PokemonView></PokemonView>
        </section>

        <section>
          <PokemonStats></PokemonStats>
        </section>
      </main>
    </PokemonContext.Provider>
  );
}

export default App;
