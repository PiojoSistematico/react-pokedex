import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
  const {
    state: { listPokemon, searchPokemon },
    dispatch,
  } = useContext(PokemonContext);

  return (
    <section>
      <input
        type="text"
        value={searchPokemon}
        onChange={(e) =>
          dispatch({ type: "SET_POKEMON_SEARCH", payload: e.target.value })
        }
      />
      <button>Search</button>
      <table>
        <tbody>
          {listPokemon
            .filter(
              (pokemon) =>
                pokemon.name
                  .toLowerCase()
                  .includes(searchPokemon.toLowerCase()) &&
                pokemon.name.toLowerCase() !== searchPokemon.toLowerCase() &&
                searchPokemon
            )
            .slice(0, 5)
            .map((pokemon, index) => (
              <tr key={index + 1}>
                <td
                  onClick={() =>
                    dispatch({
                      type: "SET_POKEMON_SEARCH",
                      payload: pokemon.name,
                    })
                  }
                >
                  {pokemon.name}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default PokemonTable;
