import {ADD_FAVORITE, DELETE_FAVORITE} from './types.js';

export function addFavorite(fav){
    return{
        type: ADD_FAVORITE,
        payload: fav,
    }
}

export function delFavorite(id){
    return{
        type: DELETE_FAVORITE,
        payload: id,
    }
}