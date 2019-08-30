export const CREATE_TASK = 'create-task';

export type CreateTaskAction = {
  type: typeof CREATE_TASK;
  payload: {
    title: string;
    listId: string;
  }
};

export const createTask = (title: string, listId: string): CreateTaskAction => {
  return {
    type: CREATE_TASK,
    payload: {
      title,
      listId
    }
  };
};
