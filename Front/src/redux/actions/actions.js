import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  FILTER,
  ORDER,
  GET_ALL_CHARACTERS,
} from "./types.js";
import axios from "axios";
const URL = "http://localhost:3001";

export const addFavorite = (fav) => {
  return async function (dispatch) {
    try {
      let request = await axios.post(`${URL}/rickandmorty/fav`, fav);
      dispatch({
        type: ADD_FAVORITE,
        payload: request.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const delFavorite = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`${URL}/rickandmorty/fav/${id}`);
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
    payload: status,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}

export const getAllCharacters = async () => {
  return async function (dispatch) {
    const charactersData = (await axios.get(`${URL}/allCharacters`)).data;
    dispatch({
        type: GET_ALL_CHARACTERS,
        payload: charactersData,
    });
}
};
