export const CREATE_LIST = 'create-list';

export type CreateListAction = {
  type: typeof CREATE_LIST;
  payload: {

  }
};

export const createList = (): CreateListAction => {
  return {
    type: CREATE_LIST,
    payload: {}
  };
};
