import { CREATE_LIST, CreateListAction } from "../../../actions/create-list";

const initialState = {
  byId: {
    '1': {
      id: '1',
      title: 'toDo'
    },
    '2': {
      id: '2',
      title: 'WiP'
    },
    '3': {
      id: '3',
      title: 'Done'
    }
  },
  allIds: ['1', '2', '3']
};

export type ListType = {
  id: string;
  title: string;
}

export interface ListsState {
  byId: {[id: string]: ListType},
  allIds: Array<string>;
}

const normalizeList = () => {

};

export function lists(
    state: ListsState = initialState,
    action: CreateListAction
): ListsState {
  switch (action.type) {
    case CREATE_LIST: {
      return state;
    }
    default:
      return state;
  }
}
