import { createSelector } from 'reselect';
import { State } from '../../index';
import { TasksState, TaskType } from './index';

export type TaskByListType = {[id: string]: Array<TaskType>};

export const getTasks = (state: State): TasksState => state.domainState.tasks;

export const getTasksByListId = createSelector(
    [getTasks],
    (tasks: TasksState): TaskByListType => {
      return tasks.allIds.reduce((acc: any, taskId: string) => {
        const task = tasks.byId[taskId];
        acc[task.listId] = Array.isArray(acc[task.listId]) ? [...acc[task.listId], task] : [task];
        return acc;
      }, {});
    }
);
