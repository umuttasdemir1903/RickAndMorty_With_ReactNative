import {FETCH_EPISODES} from '../types/EpisodesTypes';

const initialState = {
  episodesList: [],
  pending: false,
  error: null,
};

export const EpisodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return state;

    default:
      return state;
  }
};
