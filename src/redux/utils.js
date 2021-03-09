export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const removePropertyFromObject = (object, propertyName) => {
  const copyOfObject = { ...object };
  delete copyOfObject[propertyName];
  return copyOfObject;
};
