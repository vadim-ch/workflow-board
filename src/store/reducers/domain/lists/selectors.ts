import { createSelector } from 'reselect';
import { State } from '../../index';
import { ListsState, ListType } from './index';

export const getLists = (state: State): ListsState => state.domainState.lists;

export const getAvailableLists = createSelector(
    [getLists],
    (lists: ListsState): Array<ListType> => {
      return lists.allIds.map(id => lists.byId[id]);
    }
);
