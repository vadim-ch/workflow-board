import { combineReducers } from 'redux';
import { DomainState, domainState } from './domain';
// import { ApplicationState, applicationState } from './application';

export interface State {
  domainState: DomainState;
}

export const reducers = combineReducers<State>({
  domainState
});

