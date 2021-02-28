export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const copyObject = (object) => JSON.parse(JSON.stringify(object));
