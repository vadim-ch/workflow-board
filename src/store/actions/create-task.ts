export const CREATE_TASK = 'create-task';

export type CreateTaskAction = {
  type: typeof CREATE_TASK;
  payload: {
    id?: string;
    title: string;
    columnId: string;
  }
};

export const createTask = (title: string, columnId: string): CreateTaskAction => {
  return {
    type: CREATE_TASK,
    payload: {
      title,
      columnId
    }
  };
};
