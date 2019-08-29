import { createStore, applyMiddleware, Store, compose } from 'redux';
import { reducers, State } from './reducers';
import { createLogger } from 'redux-logger';

let middlewares = [
  createLogger()
];

export const configureStore = (initialState?: object): Store<State> => {
  return createStore(
      reducers,
      initialState,
      compose(
          applyMiddleware(...middlewares)
      )
  );
};
