import { createSelector } from 'reselect';
import { State } from '../../index';
import { TasksState, tasks } from './index';

export const getTasks = (state: State): TasksState => state.domainState.tasks;

// export const isAuthenticated = createSelector(
//     [getAccount],
//     (account: AccountState): boolean => {
//       return Boolean(account.userId);
//     }
// );
