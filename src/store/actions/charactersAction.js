import {
  CHANGE_PARAMS,
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  FETCH_SINGLECHARACTER,
  LOAD_MORE_DATA,
  PENDING_CHARACTERS,
  PENDING_SINGLECHARACTER,
  RESET_DATA,
  SINGLECHARACTER_REJECT,
} from '../types/charactersTypes';
import {getRequest} from '../../service/verbs';
import {CHARACTERS_URL} from '../../service/urls';

export const getCharacters = params => {
  return async function (dispatch) {
    dispatch({type: PENDING_CHARACTERS});
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      dispatch({
        type: FETCH_CHARACTERS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: CHARACTERS_REJECT, error: error});
    }
  };
};

export const loadMoreCharacters = params => {
  return async function (dispatch) {
    try {
      const response = await getRequest(CHARACTERS_URL, params);

      dispatch({
        type: LOAD_MORE_DATA,
        params: response.data.results,
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

export const resetData = () => {
  return async function (dispatch) {
    dispatch({type: RESET_DATA});
  };
};

export const changeParams = params => {
  return async function (dispatch) {
    dispatch({type: CHANGE_PARAMS, params: params});
  };
};
