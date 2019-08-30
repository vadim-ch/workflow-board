import { CREATE_TASK, CreateTaskAction } from '../../../actions/create-task';
import { generateId, normalizeById } from '../../../../utils';
import { MOVE_TASK, MoveTaskAction } from '../../../actions/move-task';


const initialState = {
  byId: {
    '1': {
      id: '1',
      title: 'Приготовить суп',
      listId: '1'
    },
    '2': {
      id: '2',
      title: 'Пожарить картошку',
      listId: '1'
    },
    '3': {
      id: '3',
      title: 'Выбросить мусор',
      listId: '3'
    }
  },
  allIds: [
      '1', '2', '3'
  ]
};

export type TaskType = {
  id: string;
  title: string;
  listId: string;
}

export interface TasksState {
  byId: {[id: string]: TaskType},
  allIds: Array<string>;
}

const normalizeTasks = (tasks: Array<TaskType>, state: TasksState): TasksState => {
  const byId = {
    ...state.byId,
    ...normalizeById(tasks)
  };
  return {
    byId,
    allIds: Object.keys(byId)
  }
};

export function tasks(
    state: TasksState = initialState,
    action: CreateTaskAction | MoveTaskAction
): TasksState {
  switch (action.type) {
    case CREATE_TASK: {
      const task = {
        id: generateId(),
        ...action.payload
      };
      return normalizeTasks([task], state);
    }
    case MOVE_TASK: {
      const task = {
        ...state.byId[action.payload.id],
        listId: action.payload.listId
      };
      return normalizeTasks([task], state);
    }
    default:
      return state;
  }
}
