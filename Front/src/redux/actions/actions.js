import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from './types.js';
import axios from 'axios'

export const addFavorite = (fav) => {
  return async function (dispatch) {
    try {
      let request = await axios.post(
        'http://localhost:3001/rickandmorty/fav',
        fav
      );
      dispatch({
        type: ADD_FAVORITE,
        payload: request.data
      });
    } catch (error) {
      console.log(error)
    }
  }
}

export const delFavorite = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch({
        type: DELETE_FAVORITE,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function filterCards(status) {
  return {
    type: FILTER,
    payload: status
  }
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id
  }
}