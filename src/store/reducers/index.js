import {combineReducers} from 'redux';
import {CharacterReducer} from './charactersReducer';
import {EpisodesReducer} from './EpisodesReducer';

const rootReducer = combineReducers({
  characters: CharacterReducer,
  episodes: EpisodesReducer,
});

export default rootReducer;
