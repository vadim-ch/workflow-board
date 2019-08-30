import { CREATE_TASK, CreateTaskAction } from '../../actions/create-task';
import { generateId } from '../../../utils';

export const tasksMiddleware = (store: any) => (next: any) => (action: CreateTaskAction) => {
  switch (action.type) {
    case CREATE_TASK: {
      action.payload['id'] = generateId();
      return next(action);
    }
    default:
      return next(action);
  }
};
