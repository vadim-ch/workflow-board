import { createStore, applyMiddleware, Store, compose } from 'redux';
import { reducers, State } from './reducers';
import { createLogger } from 'redux-logger';
import { tasksMiddleware } from './middlewares/tasks-middleware';

let middlewares = [
  tasksMiddleware,
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
