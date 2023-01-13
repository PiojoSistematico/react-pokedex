import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonStats = () => {
  const {
    state: { selectedPokemon },
  } = useContext(PokemonContext);

  console.log(selectedPokemon);

  return selectedPokemon.hasOwnProperty("sprites") ? (
    <section className="statsWindow">
      <p>
        <span className="boldSpan">ID:</span>
        <span> {selectedPokemon.id}</span>
      </p>
      <p>
        <span className="boldSpan">Height:</span>
        <span> {selectedPokemon.height * 10} cm</span>
      </p>
      <p>
        <span className="boldSpan">Weight:</span>
        <span> {selectedPokemon.weight * 0.1} Kg</span>
      </p>
      <p>
        <span className="boldSpan">HP:</span>
        <span> {selectedPokemon.stats[0].base_stat}</span>
      </p>
      <p>
        <span className="boldSpan">Attack:</span>
        <span> {selectedPokemon.stats[1].base_stat}</span>
      </p>
      <p>
        <span className="boldSpan">Defense:</span>
        <span> {selectedPokemon.stats[2].base_stat}</span>
      </p>
      <p>
        <span className="boldSpan">Speed:</span>
        <span> {selectedPokemon.stats[5].base_stat}</span>
      </p>
      <ul>
        <p className="boldSpan">Types:</p>
        {selectedPokemon.types.map((elem, index) => (
          <li key={index}>{elem.type.name}</li>
        ))}
      </ul>
    </section>
  ) : null;
};

export default PokemonStats;
