export const CREATE_COLUMN = 'create-column';

export type CreateColumnAction = {
  type: typeof CREATE_COLUMN;
  payload: {

  }
};

export const createList = (): CreateColumnAction => {
  return {
    type: CREATE_COLUMN,
    payload: {}
  };
};
