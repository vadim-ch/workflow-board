import { CREATE_TASK, CreateTaskAction } from '../../../actions/create-task';


const initialState = {
  byId: {},
  allIds: []
};

export interface WorkflowState {

}

export function workflow(
    state: WorkflowState = initialState,
    action:
        CreateTaskAction
): WorkflowState {
  switch (action.type) {
    case CREATE_WORKFLOW: {
      return state;
    }
    default:
      return state;
  }
}
