export const CREATE_TASK = 'start-app';

export type CreateTaskAction = {
  type: typeof CREATE_TASK;
  payload: {

  }
};

export const createTask = (): CreateTaskAction => {
  return {
    type: CREATE_TASK,
    payload: {}
  };
};
