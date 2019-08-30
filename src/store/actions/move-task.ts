export const MOVE_TASK = 'move-task';

export type MoveTaskAction = {
  type: typeof MOVE_TASK;
  payload: {
    id: string;
    columnFromId: string,
    columnToId: string,
    indexFrom: number,
    indexTo: number
  }
};

export const moveTask = (
    id: string,
    columnFromId: string,
    columnToId: string,
    indexFrom: number,
    indexTo: number
): MoveTaskAction => {
  return {
    type: MOVE_TASK,
    payload: {
      id,
      columnFromId,
      columnToId,
      indexFrom,
      indexTo
    }
  };
};
