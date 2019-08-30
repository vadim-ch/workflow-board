import { CREATE_TASK, CreateTaskAction } from '../../../actions/create-task';
import { normalizeById } from '../../../../utils';
import { MOVE_TASK, MoveTaskAction } from '../../../actions/move-task';


const initialState = {
  byId: {},
  allIds: []
};

export type TaskType = {
  id: string;
  title: string;
  columnId: string;
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
      return normalizeTasks([action.payload as TaskType], state);
    }
    case MOVE_TASK: {
      const task = {
        ...state.byId[action.payload.id],
        columnId: action.payload.columnToId
      };
      return normalizeTasks([task], state);
    }
    default:
      return state;
  }
}
