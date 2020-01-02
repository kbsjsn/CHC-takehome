import { GamesState, LOAD_GAMES, UNABLE_LOAD_GAMES, FILTER_BY_QUERY, GamesActionTypes } from './types';

const initialState: GamesState = {
  data: null,
  filteredGames: null
};

export const gamesReducer = (state = initialState, action: GamesActionTypes): GamesState => {
  switch (action.type) {
    case LOAD_GAMES:
      return {
        ...state,
        data: action.payload,
      };
    case UNABLE_LOAD_GAMES:
      return {
        ...state,
        data: action.payload,
      };
    case FILTER_BY_QUERY: 
      return {
        ...state,
        filteredGames: action.payload
      };
    default: 
      return state;
  }
}