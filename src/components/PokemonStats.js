import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonStats = () => {
  const {
    state: { selectedPokemon },
  } = useContext(PokemonContext);

  console.log(selectedPokemon);

  return selectedPokemon.hasOwnProperty("sprites") ? (
    <div>
      <p>
        <span>ID:</span>
        <span>{selectedPokemon.id}</span>
      </p>
      <p>
        <span>Height:</span>
        <span>{selectedPokemon.height * 10} cm</span>
      </p>
      <p>
        <span>Weight:</span>
        <span>{selectedPokemon.weight * 0.1} Kg</span>
      </p>
      <p>
        <span>HP:</span>
        <span>{selectedPokemon.stats[0].base_stat}</span>
      </p>
      <p>
        <span>Attack:</span>
        <span>{selectedPokemon.stats[1].base_stat}</span>
      </p>
      <p>
        <span>Defense:</span>
        <span>{selectedPokemon.stats[2].base_stat}</span>
      </p>
      <p>
        <span>Speed:</span>
        <span>{selectedPokemon.stats[5].base_stat}</span>
      </p>
      <ul>
        <p>Types:</p>
        {selectedPokemon.types.map((elem, index) => (
          <li key={index}>{elem.type.name}</li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default PokemonStats;
