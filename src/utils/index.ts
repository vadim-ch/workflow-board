const uuidv4 = require('uuid/v4');

export const generateId = () => {
  return uuidv4();
};

export type NormalizedType<T> = {
  [id: string]: T;
}

export const normalizeById = <T>(arr: Array<T>): NormalizedType<T> => {
  return arr.reduce((acc: any, item: any) => {
    acc[item.id] = item;
    return acc;
  }, {});
};
