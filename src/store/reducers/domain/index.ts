import {combineReducers} from 'redux';
import { TasksState, tasks } from './tasks/';

export interface DomainState {
  tasks: TasksState;
}

export const domainState = combineReducers<DomainState>({
  tasks
});
