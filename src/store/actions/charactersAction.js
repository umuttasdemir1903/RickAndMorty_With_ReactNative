import axios from 'axios';
import {
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
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
