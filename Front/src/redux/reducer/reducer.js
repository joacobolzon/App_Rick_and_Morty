import { DELETE_FAVORITE, ADD_FAVORITE, ORDER, FILTER, GET_ALL_CHARACTERS } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCharacters: [],
    characters:[],
};




function rootReducer(state = initialState, { type, payload }) {
    switch (type) {

        case ADD_FAVORITE:
            return {
                ...state,
                allCharacters: [...state.allCharacters, payload],
                myFavorites: [...state.myFavorites, payload],
            }

        case DELETE_FAVORITE:
            const filtered = state.myFavorites.filter(fav => fav.id !== payload)
            return {
                ...state,
                myFavorites: filtered,
            }

        case FILTER:
            const filterCopy = [...state.allCharacters]
            const genderFilter = filterCopy.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: genderFilter,
            }

        case ORDER:
            const orderCopy = [...state.allCharacters];
            const orderedGender = orderCopy.sort((a, b) => {
                if (a.id > b.id) { return payload === 'Ascendente' ? 1 : -1 }
                if (a.id < b.id) { return payload === 'Descendente' ? -1 : 1 }
                else return 0;
            })
            return {
                ...state,
                myFavorites: orderedGender,
            }
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters:payload
            }

        default:
            return state
    }
};

export default rootReducer;