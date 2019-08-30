import { CREATE_COLUMN, CreateColumnAction } from "../../../actions/create-list";
import { CREATE_TASK, CreateTaskAction } from '../../../actions/create-task';
import { normalizeById } from '../../../../utils';
import { MOVE_TASK, MoveTaskAction } from '../../../actions/move-task';

const initialState = {
  byId: {
    '0': {
      id: '0',
      title: 'To Do',
      taskIdsOrder: []
    },
    '1': {
      id: '1',
      title: 'In Progres',
      taskIdsOrder: []
    },
    '2': {
      id: '2',
      title: 'Done',
      taskIdsOrder: []
    }
  },
  allIds: ['0', '1', '2']
};

export type ColumnType = {
  id: string;
  title: string;
  taskIdsOrder: Array<string>;
}

export interface ColumnState {
  byId: {[id: string]: ColumnType},
  allIds: Array<string>;
}

const normalizeColumns = (columns: Array<ColumnType>, state: ColumnState): ColumnState => {
  const byId = {
    ...state.byId,
    ...normalizeById(columns)
  };
  return {
    byId,
    allIds: Object.keys(byId)
  }
};

export function column(
    state: ColumnState = initialState,
    action: CreateColumnAction | CreateTaskAction | MoveTaskAction
): ColumnState {
  switch (action.type) {
    case CREATE_COLUMN: {
      return state;
    }
    case CREATE_TASK: {
      const column = state.byId[action.payload.columnId];
      return normalizeColumns([{
        ...column,
        taskIdsOrder: [...column.taskIdsOrder, action.payload.id as string]
      }], state);
    }
    case MOVE_TASK: {
      const { id, columnFromId, columnToId, indexFrom, indexTo } = action.payload;
      const columnFrom = {...state.byId[columnFromId]};
      const columnTo = {...state.byId[columnToId]};
      columnFrom.taskIdsOrder.splice(indexFrom, 1);
      columnTo.taskIdsOrder.splice(indexTo, 0, id);

      return normalizeColumns([
        columnFrom,
        columnTo
      ], state);
    }
    default:
      return state;
  }
}
