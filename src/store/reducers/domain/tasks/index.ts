import { CREATE_TASK, CreateTaskAction } from '../../../actions/create-task';


const initialState = {
  byId: {},
  allIds: []
};

export interface TasksState {

}

export function tasks(
    state: TasksState = initialState,
    action:
        CreateTaskAction
): TasksState {
  switch (action.type) {
    case CREATE_TASK: {
      return state;
    }
    default:
      return state;
  }
}
