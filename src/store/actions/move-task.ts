export const MOVE_TASK = 'move-task';

export type MoveTaskAction = {
  type: typeof MOVE_TASK;
  payload: {
    id: string;
    listId: string;
  }
};

export const moveTask = (id: string, listId: string): MoveTaskAction => {
  return {
    type: MOVE_TASK,
    payload: {
      id,
      listId
    }
  };
};
