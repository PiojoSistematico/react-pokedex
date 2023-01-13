import React, { useContext } from "react";
import PokemonContext from "../PokemonContext";

const PokemonView = () => {
  const {
    state: { selectedPokemon },
  } = useContext(PokemonContext);

  return selectedPokemon.hasOwnProperty("sprites") ? (
    <section>
      <div className="pokemonWindow">
        <img src={selectedPokemon.sprites.other.home.front_default} alt="" />
      </div>
    </section>
  ) : null;
};

export default PokemonView;
