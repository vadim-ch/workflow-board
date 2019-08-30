import { createSelector } from 'reselect';
import { State } from '../../index';
import { ColumnState, ColumnType } from './index';

export const getColumnState = (state: State): ColumnState => state.domainState.column;

export const getColumnList = createSelector(
    [getColumnState],
    (columnState: ColumnState): Array<ColumnType> => {
      return columnState.allIds.map(id => columnState.byId[id]);
    }
);
