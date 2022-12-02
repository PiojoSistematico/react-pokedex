const PokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_POKEMON_SEARCH":
      return {
        ...state,
        searchPokemon: action.payload,
      };
    case "SET_SELECTED_POKEMON":
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    case "SET_POKEMON_LIST":
      return {
        ...state,
        listPokemon: action.payload,
      };
    default:
      throw new Error("Undefined Case");
  }
};

export default PokemonReducer;
