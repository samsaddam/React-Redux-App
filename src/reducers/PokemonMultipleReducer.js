import PokemonListReducer from "./PokemonListReducer";

const DefaultState = {
    loading: false,
    data: {},
    errorMSg: ""
};


const PokemonMultipleReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "POKEMON_MULTIPLE_LOADING":
            return {
                ...state,
                loading: true,
                errorMSg: ""
            };

        case "POKEMON_MULTIPLE_FAIL":
            return {
                ...state,
                loading: false,
                errorMSg: "unable to find pokemon"
            };

        case "POKEMON_MULTIPLE_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMSg: "",
                data: {
                    ...state.data,
                    [action.pokemonName]: action.payload

                }
            };

        default:
            return state
    }

};

export default PokemonMultipleReducer