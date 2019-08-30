import { combineReducers } from 'redux';
import { TasksState, tasks } from './tasks';
import { ColumnState, column } from './column';

export interface DomainState {
  tasks: TasksState;
  column: ColumnState;
}

export const domainState = combineReducers<DomainState>({
  tasks,
  column,
});
