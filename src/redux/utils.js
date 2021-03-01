export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({ ...acc, [item.id]: item }), {});

export const emptyObject = (obj) =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object

export const checkAllPropertiesExist = (propsArr, obj) => {
  let result = false
  if (propsArr.length === 0) return result
  for (let i = 0; i < propsArr.length; i++) {
    if (!obj[propsArr[i]]) {
      break
    } else {
      result = true
    }
  }
  return result
}
