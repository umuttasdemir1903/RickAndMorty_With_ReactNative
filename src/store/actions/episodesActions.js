import {EPISODES_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {
  EPISODES_REJECT,
  FETCH_EPISODES,
  PENDING_EPISODES,
} from '../types/EpisodesTypes';

export const getEpisodes = () => {
  return async function (dispatch) {
    dispatch({type: PENDING_EPISODES});
    try {
      const response = await getRequest(EPISODES_URL);
      dispatch({type: FETCH_EPISODES, payload: response.data.results});
    } catch (error) {
      dispatch({type: EPISODES_REJECT, error: error});
    }
  };
};
