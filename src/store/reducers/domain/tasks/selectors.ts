import { createSelector } from 'reselect';
import { State } from '../../index';
import { TasksState, TaskType } from './index';
import { getColumnState } from '../column/selectors';
import { ColumnState } from '../column';

export type TaskByListType = {[id: string]: Array<TaskType>};

export const getTasks = (state: State): TasksState => state.domainState.tasks;

export const getTasksByListId = createSelector(
    [getTasks, getColumnState],
    (tasks: TasksState, columnState: ColumnState): TaskByListType => {
      return columnState.allIds.reduce((acc: any, columnId) => {
        acc[columnId] = columnState.byId[columnId].taskIdsOrder.map(taskId => tasks.byId[taskId]);
        return acc;
      }, {})
    }
);
