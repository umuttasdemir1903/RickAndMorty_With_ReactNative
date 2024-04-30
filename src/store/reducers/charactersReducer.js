import {
  CHARACTERS_REJECT,
  FETCH_CHARACTERS,
  FETCH_SINGLECHARACTER,
  PENDING_CHARACTERS,
  PENDING_SINGLECHARACTER,
  SINGLECHARACTER_REJECT,
} from '../types/charactersTypes';

const initialState = {
  charactersList: [],
  singleCharacter: {},
  pendingSingleCharacter: false,
  errorSingleCharacter: null,
  pending: false,
  error: null,
};

const CharacterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        charactersList: action.payload,
        pending: false,
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

    default:
      return state;
  }
};

export {CharacterReducer};
