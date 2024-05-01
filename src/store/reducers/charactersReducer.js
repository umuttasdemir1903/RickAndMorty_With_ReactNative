import {act} from 'react';
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

const initialState = {
  charactersList: [],
  singleCharacter: {},
  pendingSingleCharacter: false,
  errorSingleCharacter: null,
  pending: false,
  error: null,
  params: {
    page: 1,
  },
};

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload,
        pending: false,
      };
    case LOAD_MORE_DATA:
      return {
        ...state,
        charactersList: [...state.charactersList, ...action.payload],
      };
    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case CHARACTERS_REJECT:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case FETCH_SINGLECHARACTER:
      return {
        ...state,
        singleCharacter: action.payload,
        pending: false,
      };
    case PENDING_SINGLECHARACTER:
      return {
        ...state,
        pending: true,
      };
    case SINGLECHARACTER_REJECT:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: action.error,
      };

    case RESET_DATA:
      return {
        ...state,
        singleCharacter: {},
        pendingSingleCharacter: false,
        errorSingleCharacter: null,
        error: null,
      };

    case CHANGE_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params,
        },
      };

    default:
      return state;
  }
};

export {CharacterReducer};
