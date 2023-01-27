import { DELETE_FAVORITE , ADD_FAVORITE } from "../actions/types";

const initialState = {
    myFavorites: [],
};




export default function rootReducer(state = initialState, {type,payload}){
    switch(type){
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites:[...state.myFavorites, payload]
            };
        case DELETE_FAVORITE:
            const filtered = state.myFavorites.filter(
                fav => fav.id !== payload
            )
            return {
                ...state,
                myFavorites:filtered,
            };
        default:
            return state;
    }
};