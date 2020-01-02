import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import * as types from './types';
import { AppState } from '../index';

export const loadGames = (): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  try {
    const response = await fetch('/games');
    const { data } = await response.json();
    // sort games by 'order'
    interface gameObj {
      Order: number;
    }
    data.sort((a: gameObj, b: gameObj) => a.Order - b.Order);
    return dispatch({
      type: types.LOAD_GAMES,
      payload: data
    });
  }
  catch (error) {
    console.error('unable to fetch games');
    return dispatch({
      type: types.UNABLE_LOAD_GAMES,
      payload: undefined
    })
  }
};

export const filterByQuery = (event: React.SyntheticEvent<{value: string}>): ThunkAction<void, AppState, null, Action<string>> => (dispatch, getState) => {
  const query = event.currentTarget.value;
  const lowerCaseQuery = query.toLowerCase();
  const { data } = getState().games;
  if(data) {  // check if data is an array of GameData
    // filteredGames is array of games obj whose name prop contains lowerCaseQuery
    const filteredGames = data.filter(({ Name }) => Name.toLowerCase().includes(lowerCaseQuery));

    return dispatch({
      type: types.FILTER_BY_QUERY,
      payload: filteredGames
    })
  }
};
