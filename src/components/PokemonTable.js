import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";
import { useQuery } from "react-query";
import { FcSearch } from "react-icons/fc";

const PokemonTable = () => {
  const {
    state: { listPokemon, searchPokemon },
    dispatch,
  } = useContext(PokemonContext);

  const { isLoading, isError, isFetching, refetch } = useQuery(
    "pokemonData",
    () =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
        .then((res) => res.json())
        .then((info) =>
          dispatch({ type: "SET_SELECTED_POKEMON", payload: info })
        ),
    {
      enabled: false,
    }
  );

  if (isLoading || isFetching) return <h2>"Searching..."</h2>;

  if (isError) return <h2>{isError.message}</h2>;

  return (
    <section>
      <input
        type="text"
        value={searchPokemon}
        onChange={(e) =>
          dispatch({ type: "SET_POKEMON_SEARCH", payload: e.target.value })
        }
      />
      <FcSearch onClick={refetch}></FcSearch>
      {/* <button onClick={refetch}>Search</button> */}
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
