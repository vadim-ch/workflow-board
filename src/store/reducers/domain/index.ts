import { combineReducers } from 'redux';
import { TasksState, tasks } from './tasks';
import { ListsState, lists } from './lists';

export interface DomainState {
  tasks: TasksState;
  lists: ListsState;
}

export const domainState = combineReducers<DomainState>({
  tasks,
  lists
});
