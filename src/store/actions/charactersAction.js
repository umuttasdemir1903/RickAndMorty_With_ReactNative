import axios from 'axios';
import {
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_CHARACTERS,
  PENDING_SINGLECHARACTER,
  SINGLECHARACTER_REJECT,
} from '../types/charactersTypes';
import {getRequest} from '../../service/verbs';
import {CHARACTERS_URL} from '../../service/urls';

export const getCharacters = () => {
  return async function (dispatch) {
    dispatch({type: PENDING_CHARACTERS});
    try {
      const response = await getRequest(CHARACTERS_URL);
      dispatch({
        type: FETCH_CHARACTERS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: CHARACTERS_REJECT, error: error});
    }
  };
};

export const getsingleCharacter = id => {
  const url = `${CHARACTERS_URL}/${id}`;
  return async function (dispatch) {
    dispatch({type: PENDING_SINGLECHARACTER});
    try {
      const response = await getRequest(url);
      dispatch({
        type: FETCH_SINGLECHARACTER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: SINGLECHARACTER_REJECT, errorSingleCharacter: error});
    }
  };
};
