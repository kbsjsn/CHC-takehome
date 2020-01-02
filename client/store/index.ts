import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { gamesReducer } from './games/reducer';
import { modalReducer } from './modal/reducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  modal: modalReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewareEnhancer = applyMiddleware(thunk);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer),
  );

  return store;
}
